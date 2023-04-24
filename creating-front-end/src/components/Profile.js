import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image, Form, InputGroup, Tabs, Tab } from "react-bootstrap";
import Navbar from "./Navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onValue } from 'firebase/database';
import { db } from "../firebase/Firebase";
import { ref, get, set, push, remove, } from 'firebase/database';
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const Profile = () => {
  const [userEmail, setUserEmail] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [requestMessage, setRequestMessage] = useState("");


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail("Not Logged In");
      }
    });
  
    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [auth]);

  useEffect(() => {
    const fetchData = async () => {
      if (!userEmail) return; // Do not run the effect if userEmail is not available

      const userId = await findUserIdByEmail(userEmail);

      const friendRequestsRef = ref(db, `users/${userId}/FriendRequests`);
      const friendRequestsListener = onValue(
        friendRequestsRef,
        (snapshot) => {
          const data = snapshot.val();
          const friendRequestsArray = [];
          for (const key in data) {
            friendRequestsArray.push({
              id: key,
              ...data[key],
            });
          }
          setFriendRequests(friendRequestsArray);
        }
      );

      const friendsRef = ref(db, `users/${userId}/Friends`);
      const friendsListener = onValue(friendsRef, (snapshot) => {
        const data = snapshot.val();
        const friendsArray = [];
        for (const key in data) {
          friendsArray.push({
            id: key,
            email: data[key],
          });
        }
        setFriends(friendsArray);
      });

      return () => {
        friendRequestsRef.off("value", friendRequestsListener);
        friendsRef.off("value", friendsListener);
      };
    };

    fetchData();
  }, [userEmail]);

  const handleFriendEmailChange = (event) => {
    setFriendEmail(event.target.value);
  };

  const sendFriendRequest = async (requesterEmail, responderEmail) => {
    const responderId = await findUserIdByEmail(responderEmail);

    const newRequestRef = push(ref(db, `users/${responderId}/FriendRequests`));
    await set(newRequestRef, {
      Requester: requesterEmail,
      Responder: responderEmail,
      Status: "pending",
    });
  };

  const handleAddFriend = async (event) => {
    event.preventDefault();
    console.log(friendEmail);
  
    if (friendEmail.toLowerCase() === userEmail.toLowerCase()) {
      setErrorMessage("You can't add yourself as a friend.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    } else {
      setErrorMessage("");
    }
  
    const alreadyRequested = await pendingFriendRequestExists(userEmail, friendEmail);
    if (alreadyRequested) {
      setErrorMessage("You have already sent a friend request to this person.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }
  
    const responderId = await findUserIdByEmail(friendEmail);
    if (responderId) {
      await sendFriendRequest(userEmail, friendEmail, responderId);
      setFriendEmail(""); // clears email input after submit
      console.log("Friend request sent");
      setRequestMessage("Friend Request Sent"); // set the request message
      setTimeout(() => {
        setRequestMessage("");
      }, 3000);
    } else {
      setErrorMessage("Account not found. Please enter a valid email.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      console.error("Responder not found");
    }
  };

  // Approve friend request and remove the request
  const approveFriendRequest = async (requesterId, requesterEmail, responderEmail) => {
    const friendRequestRef = ref(db, `users/${userId}/FriendRequests/${requesterId}`);
    await remove(friendRequestRef);

    // Remove friend request from the requester's friend requests list
    const requesterFriendRequestRef = ref(db, `users/${requesterId}/FriendRequests/${userId}`);
    await remove(requesterFriendRequestRef);

    // Add friend to the current user's Friends list
    const userFriendsRef = ref(db, `users/${userId}/Friends`);
    const newFriendRef = push(userFriendsRef);
    await set(newFriendRef, requesterEmail);

    // Add current user to the friend's Friends list
    const friendId = await findUserIdByEmail(requesterEmail);
    if (friendId) {
      const friendFriendsRef = ref(db, `users/${friendId}/Friends`);
      const newFriendOfFriendRef = push(friendFriendsRef);
      await set(newFriendOfFriendRef, responderEmail);
      console.log("Friend request approved");
    } else {
      console.error("Friend ID not found");
    }
  };

  // Reject friend request and remove the request
  const rejectFriendRequest = async (requesterId) => {
    const friendRequestRef = ref(db, `users/${userId}/FriendRequests/${requesterId}`);
    await remove(friendRequestRef);

    // Remove friend request from the requester's friend requests list
    const requesterFriendRequestRef = ref(db, `users/${requesterId}/FriendRequests/${userId}`);
    await remove(requesterFriendRequestRef);
  };

  const deleteFriend = async (userEmail, friendEmail) => {
    // Remove friend from the current user's Friends list
    const userFriendsRef = ref(db, `users/${userId}/Friends`);
    const userFriendsSnapshot = await get(userFriendsRef);
    const userFriendsData = userFriendsSnapshot.val();

    for (const friendKey in userFriendsData) {
      if (userFriendsData[friendKey] === friendEmail) {
        await remove(ref(db, `users/${userId}/Friends/${friendKey}`));
        console.log("Friend deleted");
        break;
      }
    }

    // Remove current user from the friend's Friends list
    const friendId = await findUserIdByEmail(friendEmail);
    if (friendId) {
      const friendFriendsRef = ref(db, `users/${friendId}/Friends`);
      const friendFriendsSnapshot = await get(friendFriendsRef);
      const friendFriendsData = friendFriendsSnapshot.val();

      for (const friendKey in friendFriendsData) {
        if (friendFriendsData[friendKey] === userEmail) {
          await remove(ref(db, `users/${friendId}/Friends/${friendKey}`));
          break;
        }
      }
    }
  };

  const pendingFriendRequestExists = async (requesterEmail, responderEmail) => {
    const responderId = await findUserIdByEmail(responderEmail);
    if (!responderId) return false;
  
    const friendRequestsRef = ref(db, `users/${responderId}/FriendRequests`);
    const friendRequestsSnapshot = await get(friendRequestsRef);
    const friendRequestsData = friendRequestsSnapshot.val();
  
    for (const requestId in friendRequestsData) {
      if (
        friendRequestsData[requestId].Requester === requesterEmail &&
        friendRequestsData[requestId].Status === "pending"
      ) {
        return true;
      }
    }
    return false;
  };

  const handleApproveRequest = (requesterId, requesterEmail, responderEmail) => {
    approveFriendRequest(requesterId, requesterEmail, responderEmail);
  };

  const handleRejectRequest = (requesterId) => {
    rejectFriendRequest(requesterId);
  };

  const handleDeleteFriend = (userEmail, friendEmail) => {
    deleteFriend(userEmail, friendEmail);
  };

  // Helper function to find a user's ID by their email
  const findUserIdByEmail = async (email) => {
    if (!email) return null;
    const usersRef = ref(db, "users");
    const usersSnapshot = await get(usersRef);
    const usersData = usersSnapshot.val();

    console.log("usersData:", usersData);
    console.log("searching for email:", email);

    for (const userId in usersData) {
      if (usersData[userId].email && usersData[userId].email.toLowerCase() === email.toLowerCase()) {
        return userId;
      }
    }

    return null;
  };

  const navigate = useNavigate();

  const navigateToSavedRoute = () => {
    let path = `/savedRoute`;
    navigate(path);
  };

  const navigateToSettings = () => {
    let path = `/settings`;
    navigate(path);
  };

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row
          className="justify-content-center align-items-center"
          style={{ height: "calc(100vh - 56px)" }}
        >
          <Col md={7} className="text-center">
            <div
              className="border p-2 rounded-lg shadow-sm text-center"
              style={{ backgroundColor: "#dbd3d3", position: "relative" }}
            >
              <h1 data-testid="profile" className="mb-3">Profile</h1>
              <Image
                src="https://via.placeholder.com/150"
                roundedCircle
                className="mb-3"
              />
              <h3 data-testid="displayName" className="mb-3">{userEmail}</h3>
              <h6>Click below to check Saved Routes</h6>

              <Button
                data-testid="saved-routes-button"
                onClick={navigateToSavedRoute}
                className="mt-3"
                variant="primary"
                type="submit"
                block
              >
                Saved Routes ➜
              </Button>

              <Form onSubmit={handleAddFriend}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mt-3">
                    Send a Friend Request
                  </Form.Label>
                  <InputGroup className="mx-auto">
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      name="friendEmail"
                      onChange={handleFriendEmailChange}
                      onBlur={handleFriendEmailChange}
                      value={friendEmail}
                    />
                    <Button block="true" variant="primary" type="submit">
                      Add Friend
                    </Button>
                  </InputGroup>
                  {errorMessage && <div className="mt-2 text-danger">{errorMessage}</div>}
                  {requestMessage && <div className="mt-2 text-success">{requestMessage}</div>}
                </Form.Group>
              </Form>

              <Tabs defaultActiveKey="friendRequests" className="mb-3">
                <Tab eventKey="friendRequests" title="Friend Requests">
                  {friendRequests.map((request) => (
                    <div key={request.id}>
                      <span>{request.Requester}</span>
                      <Button onClick={() => handleApproveRequest(request.id, request.Requester, request.Responder)}>
                        Approve Request
                      </Button>
                      <Button onClick={() => handleRejectRequest(request.id)}>Reject Request</Button>
                    </div>
                  ))}
                </Tab>
                <Tab eventKey="friends" title="Friends">
                  {friends.map((friend) => (
                    <div key={friend.id}>
                      <span>{friend.email}</span>
                      <Button onClick={() => handleDeleteFriend(userEmail, friend.email)}>
                        Delete Friend
                      </Button>
                    </div>
                  ))}
                </Tab>
              </Tabs>

              <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
                <IconButton
                  data-testid="settings"
                  onClick={navigateToSettings}
                  color="gray"
                  size="large"
                  aria-label="settings"
                  style={{ fontSize: "10rem" }}
                >
                  <SettingsIcon />
                </IconButton>
              </div>

              <p className="text-muted">
                Contact Us:{" "}
                <span className="badge bg-secondary">test@test.com</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
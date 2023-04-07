import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image, Form, InputGroup} from "react-bootstrap";
import Navbar from "./Navbar";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const Profile = () => {
  const [userEmail, setUserEmail] = useState("");
  const [friendEmail, setFriendEmail] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleFriendEmailChange = (event) => {
    setFriendEmail(event.target.value);
  };

  const handleAddFriend = (event) => {
	event.preventDefault();
	console.log(friendEmail);
   //  TODO: Firebase adding a friend logic

	setFriendEmail(''); // clears email input after submit
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
              <h1 className="mb-3">Profile</h1>
              <Image
                src="https://via.placeholder.com/150"
                roundedCircle
                className="mb-3"
              />
              <h3 className="mb-3">{userEmail}</h3>
              <h6>Click below to check Saved Routes</h6>

              <Button
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
                  <InputGroup className="mx-auto" style={{ width: "425px" }}>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      onChange={handleFriendEmailChange}
							 value={friendEmail} // clears email input after submit
                    />
                    <Button variant="primary" id="button-addon2" type="submit">
                      Add Friend
                    </Button>
						  <Button onClick={navigateToSavedRoute} variant="primary" id="button-addon2" type="submit">
                      My Friends ➜
                    </Button>
                  </InputGroup>
                </Form.Group>
              </Form>

              <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
                <IconButton
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

import { Card, Button, ListGroup } from 'react-bootstrap';
import { db } from "../firebase/Firebase";
import {ref, get} from 'firebase/database';

function FriendList({ friendList, onClose, handleShareRoute, routeId}) {
  async function handleFriendClick(friendEmail) {
    console.log("Friend was clicked: " + friendEmail);
    console.log("routeid being shared is: " + routeId);
    const friendId = await findUserIdByEmail(friendEmail);
    console.log("Friend's id: " + friendId);
    handleShareRoute(friendId, routeId);
  }

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

  return (
    <Card style={{ position: 'fixed', bottom: 20, right: 20, width: '300px', zIndex: 9999 }}>
      <Card.Header className="d-flex justify-content-between align-items-center">
        Friends List
        <Button variant="danger" size="sm" onClick={onClose} className="ml-auto">
          Close
        </Button>
      </Card.Header>
      <Card.Body>
        <ListGroup>
          {friendList.map((friend) => (
            <ListGroup.Item 
              style={{ display: 'flex', justifyContent: 'space-between'}}
              key={friend.id}
              onClick = {() => handleFriendClick(friend.email)}  
            >
              <div className="fw-bold">
                {friend.email}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default FriendList;
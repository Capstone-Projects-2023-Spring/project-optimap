import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { getAuth } from "firebase/auth";
import { ref, set, push, onValue, remove, getDatabase} from "firebase/database"
import { db } from "../../firebase/Firebase"

const ReadWrite = () => {

  const [location, setLocation] = useState('');
  const [routes, setRoutes] = useState([]);
  const [uid, setUid] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  async function fetchData(uid) {
    const messagesRef = ref(db, `users/${uid}/favoriteRoutes`);
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      console.log("data: ");
      console.dir(data);
      if (data) {
        const routesArray = Object.values(data).map((route) => ({
          ...route,
          route_id: route.route_id || snapshot.key,
        }));
        setRoutes(routesArray);
      }
    });
  }

  useEffect(() => {
    if (user) {
      console.log(`user ${user.uid} found`)
      setUid(user.uid)
      fetchData(user.uid)
    } else {
      console.log("user not logged in")
    }
  }, [user]);

  function handleSubmit() {
    const messagesRef = ref(db, `users/${uid}/favoriteRoutes`)
    const newMsgRef = push(messagesRef);
    const newId = newMsgRef.key;
    set(newMsgRef, {
      route: location,
      timestamp: Date.now(),
      route_id: newId
    });
    console.log("record submitted")
  };

  function handleDelete(delId) {
    const routesRef = ref(db, `users/${uid}/favoriteRoutes/${delId}`);
    remove(routesRef).then(() => {
      console.log("location removed");
    });
  }

  return (
    <Container fluid>
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Row>
          <Col>
            <div className="border p-5 rounded-lg shadow-sm " style={{ marginTop: '20vh', backgroundColor: '#dbd3d3' }}>
              <h2 className="text-center mb-4">Add to Database</h2>
              <input
                onChange={(e) => setLocation(e.target.value)}
              />
              <Button onClick={handleSubmit} className="mt-3" variant="primary" block>
                Add
              </Button>
            </div>
          </Col>
          <Col>
            <div className="border p-5 rounded-lg shadow-sm " style={{ marginTop: '20vh', backgroundColor: '#dbd3d3' }}>
              <h2 className="text-center mb-4">Values from DB:</h2>
              {routes.map((val) => (
                <div className="routes">
                  <h2 className="route" onClick={() => handleDelete(val.route_id)}>{val.route}</h2>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ReadWrite;

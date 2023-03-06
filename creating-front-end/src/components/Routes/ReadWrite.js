import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { getAuth } from "firebase/auth";
import { ref, set, push, onValue, remove } from "firebase/database"
import { db } from "../../firebase/Firebase"

const ReadWrite = () => {

  const [location, setLocation] = useState('');
  const [routes, setRoutes] = useState([]);
  const [userId, setUserId] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    setRoutes([]);

    if (user !== null) {
      setUserId(user.uid)
      // console.log("user set")
    } else {
      // console.log("user not set")
    }


    // read records
    onValue(ref(db), snapshot => {
      const data = snapshot.val().users.favoriteRoutes
        Object.values(data).map(route => {
            setRoutes(oldArray => [...oldArray, route])
        })
    })
  }, []);


  function handleSubmit() {
    const messagesRef = ref(db, `users/${userId}/favoriteRoutes`)
    const newMsgRef = push(messagesRef);
    const newId = newMsgRef.key;
    setRoutes([])
    set(newMsgRef, {
      route: location,
      timestamp: Date.now(),
      route_id: newId
    });
    console.log("record submitted")
  };

/* handle remove from firebase (NOT WORKING)
function handleDelete(id) {
  const routesRef = ref(db, `users/${userId}/favoriteRoutes`);

  setRoutes([])
  remove(routesRef).then(() => {
    console.log("location removed");
  });
} */

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
                  {/*onClick={() => handleDelete(val.route_id)} for the below H2 tag*/}
                  <h2 className="route" >{val.route}</h2>
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
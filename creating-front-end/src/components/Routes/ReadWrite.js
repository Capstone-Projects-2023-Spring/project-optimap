import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { Container, Form, Button } from 'react-bootstrap';
import { getAuth } from "firebase/auth";
import { ref, set, push} from "firebase/database"
import { db } from "../../firebase/Firebase"


const ReadWrite = () => {

  const [location, setLocation] = useState('');
  const [routes, setRoutes] = useState([]);
  const [userId, setUserId] = useState("");


  const auth = getAuth();
  const user = auth.currentUser;
  
 

  useEffect(() => {
      console.log("user ")
      console.dir(user)
      if(user !== null){
          setUserId(user.uid)
          console.log("user set")
      } else {
          console.log("user not set")
      }
  }, []);

  
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  
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

return (
    <Container fluid>
    <Navbar/>
    <Container className="d-flex justify-content-center align-items-center h-100">
    <div className="border p-5 rounded-lg shadow-sm " style={{ marginTop: '20vh',backgroundColor: '#dbd3d3'}}>
        <h2 className="text-center mb-4">Add to Database</h2>
        
        <input
        onChange={(e) => setLocation(e.target.value)}
        />

          <Button onClick={handleSubmit} className = "mt-3"variant="primary" block>
            Add
          </Button>
      </div>
    </Container>
    </Container>
  );
};

export default ReadWrite;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Navbar from './Navbar';
import { getAuth } from "firebase/auth";

const Profile = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserEmail(user.email);
      } else {
        // User is not authenticated, do something here
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row className="justify-content-center align-items-center" style={{ height: 'calc(100vh - 56px)' }}>
          <Col md={6} className="text-center">
            <div className="border p-2 rounded-lg shadow-sm text-center" style={{ backgroundColor: '#dbd3d3' }}>
              <h1 className="mb-4">Profile</h1>
              <Image src="https://via.placeholder.com/150" roundedCircle className="mb-3" />
              <h3 className="mb-4">{userEmail}</h3>
              <h6>Click below to check Saved Routes</h6>
              <Button className="mt-3" variant="primary" type="submit" block>
                Saved Routes ➜
              </Button>
              <p className="text-muted">Contact Us: <span className="badge bg-secondary">test@test.com</span></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;

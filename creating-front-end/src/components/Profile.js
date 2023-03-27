import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Navbar from './Navbar';
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';


const Profile = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null)
      }
    });

    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/savedRoute`;
    navigate(path);
  }

  const settings = () => {
    let path = `/settings`;
    navigate(path);
  }

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row className="justify-content-center align-items-center" style={{ height: 'calc(100vh - 56px)' }}>
          <Col md={6} className="text-center">
            <div className="border p-2 rounded-lg shadow-sm text-center" style={{ backgroundColor: '#dbd3d3', position: 'relative' }}>
              <h1 className="mb-4">Profile</h1>
              <Image src="https://via.placeholder.com/150" roundedCircle className="mb-3" />
              <h3 className="mb-4">{userEmail}</h3>
              <h6>Click below to check Saved Routes</h6>
              <Button onClick={routeChange} className="mt-3" variant="primary" type="submit" block>
                Saved Routes ➜
              </Button>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <IconButton onClick={settings} color="gray" size="large" aria-label="settings" style={{ fontSize: '10rem' }}>
                  <SettingsIcon />
                </IconButton>
              </div>
              <p className="text-muted">Contact Us: <span className="badge bg-secondary">test@test.com</span></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;

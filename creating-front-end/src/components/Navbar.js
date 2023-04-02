import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/OptiMapLogo.png';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // get the current user & check if they are logged in
  const auth = getAuth();

  const navigate = useNavigate();

  const [loggedIn, setLogedIn] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogedIn(true)
      } else {
        setLogedIn(false)
      }
    });
  });

  return (
    <Navbar bg="secondary" variant="dark" expand="lg" className="px-5">
      <Navbar.Brand style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top img-fluid"
          alt="My logo"
        />
        OptiMap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="ms-auto">

          {loggedIn ?
            (<Nav>
              <Nav.Link onClick={() => navigate('/logout')}>Logout</Nav.Link>
              <Nav.Link onClick={() => navigate('/profile')}>Profile</Nav.Link>
              <Nav.Link onClick={() => navigate('/map')}>Map</Nav.Link>
              <Nav.Link onClick={() => navigate('/directions')}>Directions</Nav.Link>
              <Nav.Link onClick={() => navigate('/createRoutePage')}>Create Route</Nav.Link>
              <Nav.Link onClick={() => navigate('/savedRoute')}>Saved Routes</Nav.Link> 
            </Nav>)
            :
            (
              <Nav>
                <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
              </Nav>
            )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
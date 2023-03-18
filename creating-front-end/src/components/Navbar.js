import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/OptiMapLogo.png';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const NavBar = () => {
  // get the current user & check if they are logged in
  const auth = getAuth();

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
              <Nav.Link href="/logout">Logout</Nav.Link>
              <Nav.Link href="/readWrite">ReadWrite</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>)
            :
            (
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </Nav>
            )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
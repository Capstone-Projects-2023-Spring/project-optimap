import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav,Button} from 'react-bootstrap';
import logo from '../assets/OptiMapLogo.png';

const NavBar = () => {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg" className = "px-5">
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
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
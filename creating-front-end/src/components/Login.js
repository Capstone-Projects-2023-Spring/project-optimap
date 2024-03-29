import React, { useState } from 'react';
import Navbar from './Navbar';
import { Container, Form, Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { auth, signInWithEmailAndPassword, update } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { ref, } from 'firebase/database';
import { db } from "../firebase/Firebase";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add login logic here
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      console.log("user has logged in");
      setIsLoggedIn(true);
  
      // Update the user's email address in the database without overwriting other fields
      const userRef = ref(db, `users/${user.uid}`);
      await update(userRef, {
        email: user.email
      });
  
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      if (errorCode === 'auth/wrong-password') {
        setLoginError('Incorrect password. Please try again.'); // set password error message
      }
      else if (errorCode === 'auth/user-not-found') {
        setLoginError('Email does not exist. Please try again'); // set email error message
      }
      else {
        setLoginError(errorMessage); // set (other) error message
      }
    }
  };

  return (
    <Container fluid>
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center h-100">
        <div className="border p-5 rounded-lg shadow-sm " style={{ marginTop: '20vh', backgroundColor: '#dbd3d3' }}>
          <h2 className="text-center mb-4">Login</h2>
          {loginError && ( // conditionally render error message
            <p style={{ color: 'red' }}>{loginError}</p>
          )}
          {isLoggedIn ? ( // conditionally render success message
            <p>You are logged in!</p>) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>

              <ButtonGroup className="me-2" aria-label="First group">
                <Button className="mt-3" variant="primary" type="submit" block data-testid="login button">
                  Login
              </Button>
              </ButtonGroup>

              <ButtonGroup className="me-2" aria-label="Second group">
                <Button onClick={() => navigate('/signup')} className="mt-3" variant="primary" type="submit" block>
                  Create Account
              </Button>
              </ButtonGroup>

            </Form>
          )}
        </div>
      </Container>
    </Container>
  );
};

export default Login;
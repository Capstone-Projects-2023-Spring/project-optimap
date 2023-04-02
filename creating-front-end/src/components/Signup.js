import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Navbar from './Navbar';
import { auth, createUserWithEmailAndPassword } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [signedUpEmail, setSignedUpEmail] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log(user);
        setIsSignedUp(true);
        setSignedUpEmail(email); // set state variable to the entered email
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Container fluid>
    <Navbar/>
    <Container className="d-flex justify-content-center align-items-center h-100">
      <div className="border p-5 rounded-lg shadow-sm" style={{ marginTop: '20vh', backgroundColor: '#dbd3d3' }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        {isSignedUp ? (
        <p>You have successfully signed up with email: {signedUpEmail}!</p> // display entered email
        ) : (

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </Form.Group>

          <ButtonGroup className="me-2" aria-label="First group">
            <Button className="mt-3" variant="primary" type="submit" block>
              Sign Up
            </Button>
          </ButtonGroup>

          <ButtonGroup className="me-2" aria-label="First group">
            <Button onClick={() => navigate('/login')} className="mt-3" variant="primary" type="submit" block>
                Login
            </Button>
          </ButtonGroup>
        </Form>
      )}
      </div>
    </Container>
    </Container>
  );
};

export default Signup;
import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Navbar from './Navbar';
import { auth, createUserWithEmailAndPassword } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { ref, set } from 'firebase/database';
import { db } from "../firebase/Firebase";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [signedUpEmail, setSignedUpEmail] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (!passwordsMatch) {
      return;
    }
    // Handle sign-up logic here

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      setIsSignedUp(true);
      setSignedUpEmail(email); // set state variable to the entered email

      // Save the user's email address in the database
      const userRef = ref(db, `users/${user.uid}`);
      await set(userRef, {
        email: user.email
      });

    } catch (error) {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  // Actively check if passwords are matching. If not, set passwordsMatch to false
  useEffect(() => {
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

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
        {confirmPassword && !passwordsMatch && <div className="text-danger">Passwords do not match</div>}
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
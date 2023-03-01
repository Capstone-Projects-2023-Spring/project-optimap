import React, { useState } from 'react';
import Navbar from './Navbar';
import { Container, Form, Button } from 'react-bootstrap';

    const Login = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
      
        const handleEmailChange = (event) => {
          setEmail(event.target.value);
        };
      
        const handlePasswordChange = (event) => {
          setPassword(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Add login logic here
        };

        return (
            <Container fluid>
            <Navbar/>
            <Container className="d-flex justify-content-center align-items-center h-100">
              <div className="border p-5 rounded-lg shadow-sm " style={{ marginTop: '20vh',backgroundColor: '#dbd3d3'}}>
                <h2 className="text-center mb-4">Login</h2>
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
        
                  <Button className = "mt-3"variant="primary" type="submit" block>
                    Login
                  </Button>
                </Form>
              </div>
            </Container>
            </Container>
          );
        };

export default Login;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Navbar from './Navbar';


const Settings = () => {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row className="justify-content-center align-items-center" style={{ height: 'calc(100vh - 56px)' }}>
                    <Col md={6} className="text-center">
                        <div className="border p-2 rounded-lg shadow-sm text-center" style={{ backgroundColor: '#dbd3d3', position: 'relative' }}>
                            <h1 className="mb-4">Route Settings</h1>
                            <h6>Click below to check Saved Routes</h6>
                            <p className="text-muted">Contact Us: <span className="badge bg-secondary">test@test.com</span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Settings;

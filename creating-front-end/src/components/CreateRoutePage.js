import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, FormControl, InputGroup, ListGroup } from 'react-bootstrap';
import Navbar from './Navbar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, auth } from '../firebase/Firebase';
import { ref, onValue, onChildChanged, set, push, remove, child } from "firebase/database";




const CreateRoutePage = () => {
    const [inputValue, setInputValue] = useState('');
    const [locationList, setLocationList] = useState([]);
    const [uid, setUid] = useState(0);
    const [message, setMessage] = useState("");

    const [dateNow, setDateNow] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setLocationList([...locationList, inputValue]);
        setInputValue('');
    };

    function handleSubmit() {
       
    try {
        const messagesRef = ref(db, `users/${uid}/savedRoutes`);

        // mmDdYyyy();
       //  console.log("setting datenow to " + dateNow);
        const childRef = child(messagesRef, Date.now().toString());
        // const childRef = push(child(messagesRef, 'posts'));


        set(childRef, {
            route: locationList,
            timestamp: Date.now(),
            route_id: uid
        });

        console.log(`record submitted for UID ${uid}, list: ` + locationList);
        setMessage("Route saved!")
    } catch (err){
        setMessage("Error: " + err);
    }
    
        
    }

    // to be implemented next sprint (5)
    function mmDdYyyy() {
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);


        setDateNow(month + day + year); 
    }


    // observes auth to udpate uid when initialized
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
                console.log("user id set");
            }
        });
    }, [uid])

    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row className="justify-content-center align-items-center" style={{ height: 'calc(100vh - 56px)', display: 'flex', flexDirection: 'column' }}>
                    <Col md={6} className="text-center">
                        <div className="border p-2 rounded-lg shadow-sm text-center" style={{ backgroundColor: '#dbd3d3' }}>
                            <Form onSubmit={handleFormSubmit}>
                                <InputGroup className='mb-3'>
                                    <FormControl type="text" placeholder="Input Location" value={inputValue} onChange={handleInputChange} />
                                    <Button type="submit">Search</Button>
                                </InputGroup>
                            </Form>
                            <ListGroup className='mt-3'>
                                {locationList.map((item, index) => (
                                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </Col>

                    <Button onClick={handleSubmit} style={{ width: '10%', marginTop: '1rem' }}>Save</Button>
                    <div style={{ width: '100%', alignContent: 'center', textAlign: 'center', marginTop: '1rem'}}>{message}</div>
                </Row>
            </Container>
        </div>
    );
};



export default CreateRoutePage;
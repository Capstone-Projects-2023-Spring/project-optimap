import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormControl, InputGroup, ListGroup, Modal } from 'react-bootstrap';
import Navbar from './Navbar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, auth } from '../firebase/Firebase';
import { ref, onValue, onChildChanged, set, push, remove, child } from "firebase/database";
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';



const CreateRoutePage = () => {
    const navigate = useNavigate()
    const [googleInput, setGoogleInput] = useState({});

    const [inputValue, setInputValue] = useState('');
    const [locationList, setLocationList] = useState([]);
    const [uid, setUid] = useState(0);
    const [message, setMessage] = useState("");

    const [dateNow, setDateNow] = useState("");

    const [routeName, setRouteName] = useState("")

    const [showModal, setShowModal] = useState(false);

    const [arrival, setArrival] = useState(null)

    function handleArrivalChange(val) {
        setArrival(val)
    }

    const [duration, setDuration] = useState(null)


    function handleDurationChange(val) {
        setDuration(val)
    }



    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const [userId, setUserId] = useState("");

    // ensure mmddyyy is populated before user tries to save
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
                console.log("user id is in crui: " + user.uid);
                mmDdYyyy()
            } else {
                console.log("user not set");
            };
        });
    }, [userId]); // userId dependency will not cause a loop since onAuthStateChanged() will only be called upon login/logout


    // to be implemented next sprint (5)
    function mmDdYyyy() {
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);

        var ts = month + "-" + day + "-" + year

        setDateNow(ts)
        console.log("mmddyyy:  " + ts)
        return ts;
    }

    // function that fires when someone runs. saves route to "recent routes" 
    function handleRun() {

        try {
            const messagesRef = ref(db, `users/${uid}/recentRoutes`);

            setDateNow(mmDdYyyy())
            console.log("setting datenow to " + dateNow);
            const dateMs = Date.now().toString()
            const childRef = child(messagesRef, dateMs);
            // const childRef = push(child(messagesRef, 'posts'));

            set(childRef, {
                route: locationList,
                timestamp: dateNow,
                route_id: dateMs
            });

            console.log(`record submitted for UID ${uid}, list: ` + locationList);
            setMessage("Route saved!")
        } catch (err) {
            setMessage("Error: " + err);
        }

        navigate("/map", {state:{locations: locationList}})

    }

    function handleSave() {
        console.log("handling save...")

        setShowModal(false);

        try {
            const messagesRef = ref(db, `users/${uid}/savedRoutes`);

            const childRef = child(messagesRef, routeName);
            console.log("setting route name: " + childRef)
            // const childRef = push(child(messagesRef, 'posts'));


            set(childRef, {
                route: locationList,
                timestamp: Date.now(),
                route_id: uid,
                name: routeName,
            });

            console.log(`record submitted for UID ${uid}, list: ` + locationList);
            setMessage("Route saved!")
        } catch (err) {
            setMessage("Error: " + err);
        }


    }

    function clickSave() {
        setShowModal(true);
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


    // Create autocomplete instance for location input field
    const locationInput = document.getElementById('location-input');
    const startAutocomplete = new window.google.maps.places.Autocomplete(locationInput);
    startAutocomplete.addListener('place_changed', () => {
        const place = startAutocomplete.getPlace();
        setGoogleInput({
            location: place.formatted_address,
            coords: {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            },
        });

        setInputValue(googleInput.location);
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Google input:")
        console.dir(googleInput)
        setLocationList([...locationList, {
            street_address: googleInput.location,
            coordinates: {
                lat: googleInput.coords.lat,
                lng: googleInput.coords.lng
            }
        }]);

        setInputValue("");
        console.log("after")
        console.dir(googleInput);
    };

    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row className="justify-content-center align-items-center" style={{ height: '100%', marginTop: '1rem' }}>
                    <Col md={4}>
                    </Col>

                    <Col md={4} style={{ height: '100vh', maxHeight: '50vh', overflowY: 'auto' }}>
                        <div className="border p-10 rounded-lg shadow-sm text-center" style={{ backgroundColor: '#dbd3d3', minHeight: '100%' }}>
                            <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 2 }}>
                                List of Locations
                            </h1>
                            <ListGroup className='mt-3'>
                                {locationList.map((item, index) => (
                                    <ListGroup.Item key={index}>{item.street_address}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </Col>

                    <Col md={4}>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center" style={{ height: '25vh' }}>
                    <Col md={6} className="text-center">
                        <div className="border p-2 rounded-lg shadow-sm text-center" style={{ backgroundColor: '#dbd3d3' }}>
                            <Form onSubmit={handleFormSubmit}>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="3" className="d-flex align-items-center">Location</Form.Label>
                                    <Col>
                                        <FormControl id="location-input" type="text" placeholder="123 Broad St" value={inputValue} onChange={handleInputChange} />
                                    </Col>
                                </Form.Group>

                                {/*         <Form.Group  as={Row}>
                                        <Form.Label  column sm="3" className="d-flex align-items-center">Arrival Time</Form.Label>
                                        <Col>
                                            <FormControl type="text" placeholder="4:00pm (optional)" value={arrival} onChange={handleArrivalChange} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group  as={Row}>
                                        <Form.Label  column sm="3" className="d-flex align-items-center">Duration Time</Form.Label>
                                        <Col>
                                            <FormControl type="text" placeholder="1hr (optional)" value={duration} onChange={handleDurationChange} />
                                        </Col>
                                    </Form.Group>

                                */}

                                <Button type="submit">+</Button>
                            </Form>
                        </div>
                    </Col>

                </Row>

                <Row >
                    <Col md={4}>
                    </Col>
                    <Col md={2} className="text-center">
                        <Button onClick={clickSave} style={{ marginTop: '1rem' }}>Save</Button>
                    </Col>
                    <Col md={2} className="text-center">
                        <Button onClick={handleRun} style={{ marginTop: '1rem' }}>Run</Button>
                        <div style={{ width: '100vw', alignContent: 'center', textAlign: 'center', marginTop: '1rem' }}>{message}</div>
                    </Col>
                    <Col md={4}>
                    </Col>
                </Row>

            </Container>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Name your Route</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="routeName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(event) => setRouteName(event.target.value)} type="text" placeholder="My fav route!" value={routeName} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

};



export default CreateRoutePage;
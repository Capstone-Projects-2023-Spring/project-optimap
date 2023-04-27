import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormControl, InputGroup, ListGroup, Modal } from 'react-bootstrap';
import Navbar from './Navbar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, auth } from '../firebase/Firebase';
import { ref, onValue, onChildChanged, set, push, remove, child } from "firebase/database";
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';

import './createRoutePage.css';


const CreateRoutePage = () => {
    const navigate = useNavigate()
    const [googleInput, setGoogleInput] = useState({});

    const [inputValue, setInputValue] = useState("");
    const [locationList, setLocationList] = useState([]);

    const [uid, setUid] = useState(0);
    const [message, setMessage] = useState("");

    const [dateNow, setDateNow] = useState("");

    const [routeName, setRouteName] = useState("")

    const [showModal, setShowModal] = useState(false);

    const [arrivalTime, setArrivalTime] = useState("")


    const [duration, setDuration] = useState(null)


    function handleDurationChange(val) {
        setDuration(val)
    }



    const [arrivalIsChecked, setArrivalIsChecked] = useState(false);

    function handleArrivalBoxChange() {
        setArrivalIsChecked(!arrivalIsChecked);
    }

    const [spentIsChecked, setSpentIsChecked] = useState(false);

    function handleSpentBoxChange() {
        setSpentIsChecked(!spentIsChecked);
    }

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const handleHourChange = (e) => {
        setHours(e.target.value);
    };

    const handleMinuteChange = (e) => {
        setMinutes(e.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleTimeChange = (event) => {
        console.log("EVENT:")
        console.dir(event.target.value)
        setArrivalTime(event.target.value);
    };

    const [userId, setUserId] = useState("");

    const [times, setTimes] = useState([])

    const handleDelete = (index) => {
        const newLocationList = [...locationList];
        newLocationList.splice(index, 1);
        setLocationList(newLocationList);
    };

    function TimeOptions() {
        const timeOptions = [];
        for (let i = 0; i < 24; i++) {
            let hour = i % 12 || 12;
            let ampm = i < 12 ? "AM" : "PM";
            let timeValue = ("0" + i).slice(-2) + ":00 " + ampm;
            let timeLabel = hour + ":00 " + ampm;
            timeOptions.push({ value: timeValue, label: timeLabel });
            timeValue = ("0" + i).slice(-2) + ":30";
            timeLabel = hour + ":30 " + ampm;
            timeOptions.push({ value: timeValue, label: timeLabel });

            setTimes(timeOptions)
        }
    }

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

        navigate("/map", { state: { locations: locationList } })

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

    function clearRoutes() {
        setLocationList([]);
    }


    // observes auth to udpate uid when initialized
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
                console.log("user id set");
            }
        });

        TimeOptions();
    }, [uid])


    // Create autocomplete instance for location input field
    const locationInput = document.getElementById('location-input');
    var startAutocomplete = "";
    if(window.google){
        startAutocomplete = new window.google.maps.places.Autocomplete(locationInput);
        startAutocomplete.addListener('place_changed', () => {
            const place = startAutocomplete.getPlace();
            setGoogleInput({
                location: place.formatted_address,
                coords: {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                },
            });
    
            setInputValue(place.formatted_address);
        });
    }
    

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Google input:")
        console.dir(googleInput)

        // location object to be added to firebase
        var locationObj = {
            street_address: googleInput.location,
            coordinates: {
                lat: googleInput.coords.lat,
                lng: googleInput.coords.lng
            }
        }

        // only if user is setting arrival time
        if (arrivalIsChecked) {
            locationObj.arrival_time = arrivalTime;
        }

        // only if user is setting time spent
        if (spentIsChecked) {
            locationObj.hours_spent = ((Number(hours)));
            locationObj.minutes_spent = (Number(minutes));
        }

        setLocationList([...locationList, locationObj]);

        // setLocationListMapped(locationList); BROKEN - Ben

        // reset input value
        setInputValue("");
        // reset google input (object)
        setGoogleInput({});
        console.log("after")
        console.dir(googleInput);
    };

    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row className="justify-content-center align-items-center locationList">
                    <Col md={4}>
                    </Col>

                    <Col md={4} className="locationCol">
                        <div className="border p-10 rounded-lg shadow-sm text-center" style={{ backgroundColor: '#dbd3d3', minHeight: '100%' }}>
                            <h1 data-testid="listoflocations"style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 2 }}>
                                List of Locations
                            </h1>
                            <ListGroup data-testid="listgroup" className='mt-3'>
                                {locationList.map((item, index) => {
                                    /* conditional rendering with commas and stuff depending on if arrival time and/or time spent is set */
                                    if (item.arrival_time && item.hours_spent) {
                                        return (
                                            <ListGroup.Item data-testid="listgroupitem" key={index}>{item.street_address} {"("}{item.hours_spent}hr {item.minutes_spent}m, {item.arrival_time}{")"}
                                            <Button variant="danger" style={{float: "right"}} onClick={() => handleDelete(index)}>Delete</Button>
                                            </ListGroup.Item>
                                            
                                        );
                                    } else if (item.arrival_time) {
                                        return (
                                            <ListGroup.Item data-testid="listgroupitem" key={index}>{item.street_address} {"("}{item.arrival_time}{")"}
                                            <Button variant="danger" style={{float: "right"}} onClick={() => handleDelete(index)}>Delete</Button>
                                            </ListGroup.Item>
                                        );
                                    } else if (item.hours_spent) {
                                        return (
                                            <ListGroup.Item data-testid="listgroupitem" key={index}>{item.street_address} {"("}{item.hours_spent}hr {item.minutes_spent}m{")"}
                                            <Button variant="danger" style={{float: "right"}} onClick={() => handleDelete(index)}>Delete</Button>
                                            </ListGroup.Item>
                                        );
                                    } else {
                                        return (
                                            <ListGroup.Item data-testid="listgroupitem" key={index}>{item.street_address}
                                            <Button variant="danger" style={{float: "right"}} onClick={() => handleDelete(index)}>Delete</Button>
                                            </ListGroup.Item>
                                        );
                                    }
                                })}
                            </ListGroup>
                        </div>
                    </Col>

                    <Col md={4}>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center" style={{ marginTop: '1rem' }}>
                    <Col md={6} className="text-center">
                        <div className="border p-2 rounded-lg shadow-sm text-center" style={{ backgroundColor: '#dbd3d3' }}>
                            <Form onSubmit={handleFormSubmit}>
                                <Form.Group as={Row} style={{ marginBottom: '2rem' }}>
                                    <Form.Label column sm="3" className="d-flex align-items-center">Location</Form.Label>
                                    <Col>
                                        <FormControl data-testid="locationinput" id="location-input" type="text" placeholder="123 Broad St" value={inputValue} onChange={handleInputChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} style={{ marginBottom: '2rem' }}>
                                    <Form.Label column sm="3" className="d-flex align-items-center">Arrival Time</Form.Label>

                                    <Col md={2} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Form.Check
                                            type="checkbox"
                                            id="exampleCheckbox"
                                            style={{ flex: 1 }}
                                            onChange={handleArrivalBoxChange}
                                        />
                                    </Col>

                                    <Col md={3}>
                                        <FormControl
                                            as="select"
                                            onChange={handleTimeChange}
                                            disabled={!arrivalIsChecked}
                                            data-testid="arrivaltimeinput"
                                        >
                                            {times.map(option => (
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                            ))}
                                            
                                        </FormControl>
                                    </Col>

                                </Form.Group>


                                <Form.Group as={Row} style={{ marginBottom: '2rem' }}>
                                    <Form.Label column sm="3" className="d-flex align-items-center">Time Spent</Form.Label>

                                    <Col md={2} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Form.Check
                                            type="checkbox"
                                            id="exampleCheckbox"
                                            style={{ flex: 1 }}
                                            onChange={handleSpentBoxChange}
                                        />
                                    </Col>

                                    <Col md={3}>
                                        <Form.Label>HR</Form.Label>
                                        <FormControl
                                            as="select"
                                            value={hours}
                                            onChange={handleHourChange}
                                            disabled={!spentIsChecked}
                                            data-testid="timespentinput"
                                        >
                                            {[...Array(13).keys()].map((hour) => (
                                                <option key={hour} value={hour}>
                                                    {hour}
                                                </option>
                                            ))}
                                        </FormControl>
                                    </Col>

                                    <Col md={3}>
                                        <Form.Label>MIN</Form.Label>
                                        <FormControl
                                            as="select"
                                            value={minutes}
                                            onChange={handleMinuteChange}
                                            disabled={!spentIsChecked}
                                        >
                                            {[...Array(60).keys()].map((minute) => (
                                                <option key={minute} value={minute}>
                                                    {minute < 10 ? `0${minute}` : minute}
                                                </option>
                                            ))}
                                        </FormControl>
                                    </Col>

                                </Form.Group>
                                <Button data-testid="addbutton" type="submit">+</Button>

                                <div style={{ marginTop: '1rem' }}>{message}</div>
                            </Form>
                        </div>
                    </Col>

                </Row>

                <Row className="justify-content-center align-items-center buttons" >
                    <Col md={4}>
                    </Col>
                    <Col md={0} className="text-center">
                        <Button onClick={clickSave} style={{ marginTop: '1rem' }}>Save</Button>
                    </Col>
                    <Col md={0} className="text-center">
                        <Button onClick={clearRoutes} style={{ marginTop: '1rem' }}>Clear</Button>
                    </Col>
                    <Col md={0} className="text-center">
                        <Button onClick={handleRun} style={{ marginTop: '1rem' }}>Run</Button>
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
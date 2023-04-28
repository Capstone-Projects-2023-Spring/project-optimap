import { useState } from 'react';
import { Button, Modal, ListGroup, Card } from 'react-bootstrap';
import { useEffect } from 'react';
import './MapView.js'

function LocationBox({ handleRemoveDestination, locations, avoidTolls, avoidHighways, avoidFerries, transitType }) {
    const [showModal, setShowModal] = useState(false);
    const [showModalSecond, setShowModalSecond] = useState(false);
    const [endLocation, setEndLocation] = useState(null);
    const transitTypes = transitType.toString().toUpperCase();

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModalSecond = () => setShowModalSecond(true);
    const handleCloseModalSecond = () => setShowModalSecond(false);
    const styles = {
        width: '28vw',
        position: 'absolute',
        zIndex: '10',
        right: '5vw',
        top: '28vh',
        border: '3px solid grey',
        maxHeight: '50vh',
        overflowY: 'scroll'
    }

    useEffect(() => {
        if (locations.length > 0) {
          setEndLocation(locations[0]);
        }
    }, [locations]);

    const calculateDistance = (origin, destination) => {
        const service = new window.google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [origin],
                destinations: [destination],
                travelMode: transitTypes,
                avoidTolls: avoidTolls,
                avoidHighways: avoidHighways,
                avoidFerries: avoidFerries,
            },
            (response, status) => {
                if (status === 'OK') {
                    const distance = response.rows[0].elements[0].distance.value;
                    const duration = response.rows[0].elements[0].duration.value;
                    console.log("distance: ", distance, "duration: ", duration);
                    handleSendRoute(origin, destination, transitTypes, avoidTolls, avoidHighways, avoidFerries, duration, distance);
                } else {
                    console.log('Error:', status);
                }
            }
        );
      };
      

    const handleSendRoute = (origin, destination, transitTypes, avoidTolls, avoidHighways, avoidFerries, duration, distance) => {
        transitTypes = transitType.toString().toLowerCase();
        let url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=${transitTypes}`;
        if (avoidTolls) {
            url += '&avoid=tolls';
        }
        if (avoidHighways) {
            url += '&avoid=highways';
        }
        if (avoidFerries) {
            url += '&avoid=ferries';
        }
        url += `&duration=${duration}&distance=${distance}`;
        window.open(url, '_blank');
        console.log(url);
      };
      
    

    const handleStart = () => {
        if (endLocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const origin = `${position.coords.latitude},${position.coords.longitude}`;
                const destination = endLocation.street_address;
                calculateDistance(origin, destination);
            });
        }
    };
      

    return (
        <>
            <Card className="d-none d-md-block" style={styles}>
                <div style={{ position: "sticky", zIndex: 1000 }}>
                    <Card.Header>Locations</Card.Header>
                </div>
                <Card.Body >
                    <ListGroup>
                        {locations.map((location, index) => {
                            return (
                                <ListGroup.Item style={{ fontSize: '2vh', display: 'flex', justifyContent: 'space-between' }} key={index}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{location.street_address}</div>
                                        {location.formatted_time}
                                    </div>
                                    <Button variant="danger" onClick={() => handleRemoveDestination(index)} size="sm">X</Button>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success" onClick={handleStart}>Start</Button>
                </Card.Footer>
            </Card>


            <button variant="primary" className="d-md-none" style={{ width:"30%", backgroundColor:"green"}} onClick={handleShowModal}>
                Locations
            </button>
            <Modal show={showModal} onHide={handleCloseModal} className="d-md-none" style={{maxWidth: '100%'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Locations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {locations.map((location, index) => {
                            return (
                                <ListGroup.Item style={{ fontSize: '2vh', display: 'flex', justifyContent: 'space-between' }} key={index}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{location.street_address}</div>
                                        {location.formatted_time}
                                    </div>
                                    <Button variant="danger" onClick={() => handleRemoveDestination(index)} size="sm">X</Button>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <button variant="secondary" className="d-md-three" style={{ width:"35%",backgroundColor:"red"}} onClick={handleShowModalSecond} >
                Next Stop
            </button>
            <Modal show={showModalSecond} onHide={handleCloseModalSecond} className="d-md-three" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, maxWidth: '100%' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Next Stop</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {locations.slice(0, 1).map((location, index) => {
                            return (
                            <ListGroup.Item style={{ fontSize: '2vh', display: 'flex', justifyContent: 'space-between' }} key={index}>
                                <div>
                                <div>{location.street_address}</div>
                                {location.formatted_time}
                                </div>
                            </ListGroup.Item>
                            )
                        })}
                    </ListGroup>

                </Modal.Body>
                <Modal.Footer>
                        <Button variant="danger" onClick={() => handleRemoveDestination(0)} size="sm">Confirm Finish</Button>
                </Modal.Footer>
            </Modal>

            <button variant="secondary" className="d-md-three" style={{ width:"35%", backgroundColor:"yellow"}}  onClick={handleStart}>Start</button>

        </>
        
    );
}

export default LocationBox
// Path: src\components\MapView.js
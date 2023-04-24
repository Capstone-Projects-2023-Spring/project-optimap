import { useState } from 'react';
import { Button, Modal, ListGroup, Card } from 'react-bootstrap';
import { useEffect } from 'react';
import './MapView.js'

function LocationBox({ handleRemoveDestination, locations, avoidTolls, avoidHighways, avoidFerries, transitType }) {
    const [showModal, setShowModal] = useState(false);
    const [endLocation, setEndLocation] = useState(null);
    const transitTypes = transitType.toString().toUpperCase();

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
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
                    handleSendRoute(origin, destination);
                } else {
                    console.log('Error:', status);
                }
            }
        );
    };

    const handleSendRoute = (origin, destination, transitTypes, avoidTolls, avoidHighways, avoidFerries )=> {
        transitTypes = transitType.toString().toLowerCase();
        const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=${transitTypes}`;
        if (avoidTolls) {
            url += '&avoid=tolls';
        }
        if (avoidHighways) {
            url += '&avoid=highways';
        }
        if (avoidFerries) {
            url += '&avoid=ferries';
        }
        window.open(url, '_blank');
        console.log(url);
    };
    

    const handleStart = () => {
        if (endLocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const origin = `${position.coords.latitude},${position.coords.longitude}`;
                const destination = endLocation.street_address;
                calculateDistance(origin, destination);
                handleRemoveDestination(0);
            });
        }
    };
      

    return (
        <>
            <Card className="d-none d-md-block" style={styles}>
                <div style={{ position: "sticky", zIndex: 1000 }}>
                    <Card.Header>Locations</Card.Header>
                    <Button variant="success" className="mt-3" onClick={handleStart}>Start</Button>
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
            </Card>
            <Button variant="primary" className="d-md-none" onClick={handleShowModal}>
                Locations
            </Button>
            <Modal show={showModal} onHide={handleCloseModal} className="d-md-none" style={{maxWidth: '65%'}}>
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
        </>
        
    );
}

export default LocationBox

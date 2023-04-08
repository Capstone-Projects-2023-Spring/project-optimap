import { useState } from 'react';
import { Button, Modal, ListGroup, Card } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

function LocationBox({handleRemoveDestination, locations, routeDirections }) {
    const [showModal, setShowModal] = useState(false);

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

    return (
        <>
            <Card className="d-none d-md-block" style={styles}>
                <div style={{ position: "sticky", zIndex: 1000 }}>
                    <Card.Header>Locations</Card.Header>
                </div>
                <Card.Body >
                    <ListGroup>
                        {locations.map((location, index) => (
                            <ListGroup.Item key={index}>
                            {location.street_address}
                            <FaTimes onClick={() => handleRemoveDestination(index)} style={{ float: "right", color: "red", cursor: "pointer" }} />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
            <Button variant="primary" className="d-md-none" onClick={handleShowModal}>
                Locations
            </Button>
            <Modal show={showModal} onHide={handleCloseModal} className="d-md-none">
                <Modal.Header closeButton>
                    <Modal.Title>Locations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {locations.map((location, index) => (
                            <ListGroup.Item key={index}>{location.position.lat}, {location.position.lng}</ListGroup.Item>
                        ))}
                    </ListGroup>
                    <ListGroup className="mt-3">
                        {routeDirections.map((direction, index) => (
                            <ListGroup.Item key={index}>{direction}</ListGroup.Item>
                        ))}
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

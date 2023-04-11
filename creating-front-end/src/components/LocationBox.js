import { useState } from 'react';
import { Button, Modal, ListGroup, Card } from 'react-bootstrap';

function LocationBox({ handleRemoveDestination, locations }) {
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

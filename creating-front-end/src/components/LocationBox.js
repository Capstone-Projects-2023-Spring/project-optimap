import { useState } from 'react';
import { Button, Modal, ListGroup, Card } from 'react-bootstrap';

function LocationBox({ locations }) {
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
        maxHeight: '35vh',
        overflowY: 'scroll'
  }

  return (
    <>
      <Card className="d-none d-md-block" style={styles}>
        <Card.Header>Locations</Card.Header>
        <Card.Body>
          <ListGroup>
            {locations.map((location, index) => (
              <ListGroup.Item style={{fontSize: '2vh'}}key={index}>{location.street_address}</ListGroup.Item>
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

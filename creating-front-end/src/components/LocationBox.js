import { useState } from 'react';
import { Button, Modal, ListGroup, Card } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function LocationBox({ handleRemoveDestination, locations }) {
    const [showModal, setShowModal] = useState(false);

    const [stateLocations, setLocations] = useState(locations);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(stateLocations);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        // Update the state with the new order of locations
        setLocations(items);
    };


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
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Card className="d-none d-md-block" style={styles}>
                <div style={{ position: "sticky", zIndex: 1000 }}>
                    <Card.Header>Locations</Card.Header>
                </div>
                <Card.Body>
                    
                <Droppable droppableId="list">
                    {(provided) => (
                        <ListGroup {...provided.droppableProps} ref={provided.innerRef}>
                            {locations.map((location, index) => (
                                <Draggable key={index} draggableId={index.toString()} index={index}>
                                    {(provided) => (
                                        <ListGroup.Item
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{ fontSize: '2vh', display: 'flex', justifyContent: 'space-between', userSelect: "none" }}
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">{location.street_address}</div>
                                                {location.formatted_time}
                                            </div>
                                                <Button variant="danger" onClick={() => handleRemoveDestination(index)} size="sm">
                                                    X
                                                </Button>
                                        </ListGroup.Item>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ListGroup>
                    )}
                </Droppable>
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
        </DragDropContext>  
    );
}

export default LocationBox

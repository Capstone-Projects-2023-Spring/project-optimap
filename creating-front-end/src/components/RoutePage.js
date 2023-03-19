import React, { useState} from 'react';
import { Container, Row, Col, Button, Form, FormControl, InputGroup, ListGroup} from 'react-bootstrap';
import Navbar from './Navbar';
import { getAuth } from "firebase/auth";


const RoutePage = () => {
    const [inputValue, setInputValue] = useState('');
    const [listItems, setListItems] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setListItems([...listItems, inputValue]);
        setInputValue('');
    };

    return (
        <div>
        <Navbar/>
            <Container fluid>
                <Row className="justify-content-center align-items-center" style={{ height: 'calc(100vh - 56px)' }}>
                <Col md={6} className="text-center">
                <div className="border p-2 rounded-lg shadow-sm text-center" style={{ backgroundColor: '#dbd3d3' }}>
                    <Form onSubmit={handleFormSubmit}>
                        <InputGroup className='mb-3'>
                            <FormControl type="text" placeholder="Input Location" value={inputValue} onChange={handleInputChange}/>
                            <Button type="submit">Search</Button>
                        </InputGroup>
                    </Form>
                    <ListGroup className='mt-3'>
                        {listItems.map((item, index) => (
                            <ListGroup.Item key={index}>{item}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
                </Col>
                </Row>
            </Container>
        </div>
  );
};


  
export default RoutePage;
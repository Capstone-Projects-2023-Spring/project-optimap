import React, { useState, useRef, useEffect } from "react";
import Navbar from './Navbar';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Directions() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [directions, setDirections] = useState("");
  const startInputRef = useRef(null);
  const endInputRef = useRef(null);
  const [startAutocomplete, setStartAutocomplete] = useState(null);
  const [endAutocomplete, setEndAutocomplete] = useState(null);

  useEffect(() => {
    if (window.google) {
      const startAutocompleteObj = new window.google.maps.places.Autocomplete(startInputRef.current);
      const endAutocompleteObj = new window.google.maps.places.Autocomplete(endInputRef.current);
      setStartAutocomplete(startAutocompleteObj);
      setEndAutocomplete(endAutocompleteObj);
    }
  }, []);

  useEffect(() => {
    if (startAutocomplete) {
      startAutocomplete.addListener("place_changed", () => {
        const place = startAutocomplete.getPlace();
        setStart(place.formatted_address);
      });
    }
    if (endAutocomplete) {
      endAutocomplete.addListener("place_changed", () => {
        const place = endAutocomplete.getPlace();
        setEnd(place.formatted_address);
      });
    }
  }, [startAutocomplete, endAutocomplete]);

  function handleStartChange(event) {
    setStart(event.target.value);
  }

  function handleEndChange(event) {
    setEnd(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    
    const directionsService = new window.google.maps.DirectionsService();
    
    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          const steps = result.routes[0].legs[0].steps.map((step) => {
            const distance = step.distance.text;
            const direction = step.maneuver;
            const instruction = step.instructions ? step.instructions.replace(/(<([^>]+)>)/gi, "") : "";
            const name = step.name ? step.name : "";
            const streetName = step.intersections && step.intersections[0].streetName ? step.intersections[0].streetName : "";
            return { instruction, distance, direction, name, streetName };
          });
          setDirections(steps);
        }
      }
    );
  }
  
  return (
    <div>
    <Navbar />
    <Container fluid>
    <Row className="justify-content-center align-items-center" style={{ height: 'calc(100vh - 56px)' }}>
    <Col md={6} className="text-center">
    <div className="border p-2 rounded-lg shadow-sm text-center" style={{ backgroundColor: '#dbd3d3' }}>  
      <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <label>
          Start:
          <input ref={startInputRef} style={{display: 'inline-block', width: '200px', marginRight: '10px'}} type="text" value={start} onChange={handleStartChange} />
        </label>
        <br />
        <label>
          End:
          <input ref={endInputRef} style={{display: 'inline-block', width: '200px', marginRight: '10px'}} type="text" value={end} onChange={handleEndChange}  />
        </label>
        <br />
        </div>
        <Button type="submit" variant="primary" className="mt-3" block>Get Directions</Button>
      </form>
      <br />
      {directions && (
      <ol style={{ textAlign: 'left' }}>
        {directions.map((step, index) => (
          <li key={index}>
            {step.instruction} ({step.distance}, {step.direction}){step.name && ` on ${step.name}`}{step.streetName && ` on ${step.streetName}`}
          </li>
        ))}
      </ol>
      )}
      </div>
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Directions;
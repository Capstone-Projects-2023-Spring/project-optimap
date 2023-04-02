import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Navbar from './Navbar';
import { db } from '../firebase/Firebase';
import { ref, onValue, off, set } from 'firebase/database';

const Settings = () => {
  const [avoidHighways, setAvoidHighways] = useState(false);
  const [avoidTolls, setAvoidTolls] = useState(false);
  const [avoidFerries, setAvoidFerries] = useState(false);
  const [settingsSaved, setSettingsSaved] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const settingsRef = ref(db, 'settings/routeOptions');
      onValue(settingsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setAvoidHighways(data.avoidHighways);
          setAvoidTolls(data.avoidTolls);
          setAvoidFerries(data.avoidFerries);
        }
      });
    };

    fetchData();
    return () => {
      const settingsRef = ref(db, 'settings/routeOptions');
      off(settingsRef);
    };
  }, []);

  useEffect(() => {
    if (settingsSaved) {
      const timer = setTimeout(() => {
        setSettingsSaved(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [settingsSaved]);

  const handleToggleChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'avoidHighways') {
      setAvoidHighways(checked);
    } else if (name === 'avoidTolls') {
      setAvoidTolls(checked);
    } else if (name === 'avoidFerries') {
      setAvoidFerries(checked);
    }
  };

  const handleSettingsSubmit = async (event) => {
    event.preventDefault();

    const settingsRef = ref(db, 'settings/routeOptions');
    await set(settingsRef, {
      avoidHighways: avoidHighways,
      avoidTolls: avoidTolls,
      avoidFerries: avoidFerries,
    });
    setSettingsSaved(true);
  };

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row className="justify-content-center align-items-center" style={{ height: 'calc(100vh - 56px)' }}>
          <Col md={6} className="text-center">
            <div className="border p-2 rounded-lg shadow-sm text-center" style={{ backgroundColor: '#dbd3d3', position: 'relative' }}>
              <h1 className="mb-4">Route Options</h1>
              <Form>
                <Form.Check
                  type="checkbox"
                  label="Avoid Highways"
                  name="avoidHighways"
                  checked={avoidHighways}
                  onChange={handleToggleChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Avoid Tolls"
                  name="avoidTolls"
                  checked={avoidTolls}
                  onChange={handleToggleChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Avoid Ferries"
                  name="avoidFerries"
                  checked={avoidFerries}
                  onChange={handleToggleChange}
                />
              </Form>
              {settingsSaved && <p className="text-success">Settings saved!</p>}
              <button onClick={handleSettingsSubmit} className="mt-4">Submit Settings</button>
              <p className="text-muted mt-4">Contact Us: <span className="badge bg-secondary">test@test.com</span></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Settings;
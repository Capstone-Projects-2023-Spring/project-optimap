import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from './Navbar';

const MapView = (props) => {
  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  return (
    <div>
    <Navbar/>
      <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{ lat: 37.7749, lng: -122.4194 }}
    />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapView);
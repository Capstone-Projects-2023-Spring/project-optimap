import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Navbar from './Navbar';

const mapStyles = {////
  width: '100%',
  height: '100%',
  margin: 'auto',
};

class MapView extends Component {
  state = {
    currentLocation: {
      lat: 0,
      lng: 0,
    },
    searchedLocation: '',
    searchedLocationCoords: {
      lat: 0,
      lng: 0,
    },
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          this.setState({
            currentLocation: {
              lat: latitude,
              lng: longitude,
            },
          });
        },
        (error) => console.log(error)
      );
    } else {
      console.log('Geolocation not supported');
    }
  }

  handleSearch = () => {
    const { searchedLocation } = this.state;
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: searchedLocation }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;

        this.setState({
          searchedLocationCoords: {
            lat: location.lat(),
            lng: location.lng(),
          },
        });
      } else {
        console.log(status);
      }
    });
  };

  handleChange = (event) => {
    this.setState({ searchedLocation: event.target.value });
  };

  render() {
    const { currentLocation, searchedLocationCoords } = this.state;

    return (
      <div>
        <Navbar />
        <div>
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={currentLocation}
          center={searchedLocationCoords}
        >
          <Marker position={currentLocation} />
          <Marker position={searchedLocationCoords} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapView);

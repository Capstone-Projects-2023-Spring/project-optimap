import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Navbar from './Navbar';

const mapStyles = {
  width: '100%',
  height: '100%',
  margin: 'auto',
};

class MapView extends Component {
  state = {
    searchedLocation: '',
    searchedLocationCoords: {
      lat: 0,
      lng: 0,
    },
    activeMarker: {},
    showingInfoWindow: false,
    locationInfo: {},
  };

  componentDidMount() {
    this.getCurrentLocation();
  }

  getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          this.setState({
            searchedLocationCoords: {
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
  };

  handleSearch = () => {
    const { searchedLocation } = this.state;
    const geocoder = new window.google.maps.Geocoder();
  
    geocoder.geocode({ address: searchedLocation }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        const name = results[0].address_components[0].long_name;
        const address = results[0].formatted_address;
  
        this.setState({
          searchedLocationCoords: {
            lat: location.lat(),
            lng: location.lng(),
          },
          showingInfoWindow: false,
          locationInfo: {
            name: name,
            address: address,
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

  handleMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
      locationInfo: props.locationInfo,
    });
  };

  render() {
    const {
      currentLocation,
      searchedLocationCoords,
      activeMarker,
      showingInfoWindow,
      locationInfo,
    } = this.state;
  
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
          {searchedLocationCoords.lat !== 0 && (
            <Marker
              position={searchedLocationCoords}
              locationInfo={locationInfo}
              onClick={this.handleMarkerClick}
            />
          )}
          <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
            <div>
              <h2>{locationInfo.name}</h2>
              <p>{locationInfo.address}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
} 

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapView);


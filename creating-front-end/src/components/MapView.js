import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Navbar from './Navbar';


<style>
  
</style>
const mapStyles = {
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
    activeMarker: {},
    showingInfoWindow: false,
    locationInfo: {},
    photos: [],
    places: [],
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
    const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));

    geocoder.geocode({ address: searchedLocation }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;

        placesService.textSearch(
          {
            query: searchedLocation,
            location,
            radius: '500',
          },
          (places, status) => {
            if (status === 'OK') {
              this.setState({
                searchedLocationCoords: {
                  lat: location.lat(),
                  lng: location.lng(),
                },
                showingInfoWindow: false,
                locationInfo: places[0],
                places,
              });

              if (places[0].photos) {
                places[0].photos.forEach((photo) => {
                  const url = photo.getUrl({ maxWidth: 500, maxHeight: 500 });
                  this.setState((prevState) => ({
                    photos: [...prevState.photos, url],
                  }));
                });
              }
            } else {
              console.log(status);
            }
          }
        );
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
      photos: [],
    });

    const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));

    placesService.getDetails(
      { placeId: props.locationInfo.place_id },
      (place, status) => {
        if (status === 'OK') {
          this.setState({
            locationInfo: place,
          });

          if (place.photos) {
            place.photos.forEach((photo) => {
              const url = photo.getUrl({ maxWidth: 500, maxHeight: 500 });
              this.setState((prevState) => ({
                photos: [...prevState.photos, url],
              }));
            });
          }
        } else {
          console.log(status);
        }
      }
    );
  };

  render() {
    const {
      currentLocation,
      searchedLocationCoords,
      activeMarker,
      showingInfoWindow,
      locationInfo,
      photos,
      places,
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
              onClick={this.handleMarkerClick}
              position={searchedLocationCoords}
              locationInfo={locationInfo}
            />
          )}

          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
          >
            <div>
              <div>
                <img src={photos[0]} alt="photo_0" />
              </div>
              <div>{locationInfo.formatted_phone_number}</div>
              <div>{locationInfo.rating} / 5.0</div>
              <div>
                {places.map((place, index) => (
                  <div key={index}>
                    {place.name} - {place.formatted_address}
                  </div>
                ))}
              </div>
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


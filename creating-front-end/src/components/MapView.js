import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
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
    startLocation: '',
    startLocationCoords: {
      lat: 0,
      lng: 0,
    },
    endLocation: '',
    endLocationCoords: {
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

    // Create autocomplete instance for start location input field
    const startInput = document.getElementById('start-input');
    const startAutocomplete = new window.google.maps.places.Autocomplete(startInput);
    startAutocomplete.addListener('place_changed', () => {
      const place = startAutocomplete.getPlace();
      this.setState({
        startLocation: place.formatted_address,
        startLocationCoords: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
      });
    });

    // Create autocomplete instance for end location input field
    const endInput = document.getElementById('end-input');
    const endAutocomplete = new window.google.maps.places.Autocomplete(endInput);
    endAutocomplete.addListener('place_changed', () => {
      const place = endAutocomplete.getPlace();
      this.setState({
        endLocation: place.formatted_address,
        endLocationCoords: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
      });
    });
  }

  handleStartChange = (event) => {
    this.setState({ startLocation: event.target.value });
  };

  handleEndChange = (event) => {
    this.setState({ endLocation: event.target.value });
  };

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

  handleDirections = () => {
    const { startLocation, endLocation } = this.state;
    const geocoder = new window.google.maps.Geocoder();
  
    // geocode the start location
    geocoder.geocode({ address: startLocation }, (startResults, startStatus) => {
      if (startStatus === "OK") {
        const startLocationCoords = startResults[0].geometry.location;
  
        // geocode the end location
        geocoder.geocode({ address: endLocation }, (endResults, endStatus) => {
          if (endStatus === "OK") {
            const endLocationCoords = endResults[0].geometry.location;
  
            // update the state with the start and end locations' coordinates
            this.setState({
              startLocationCoords: {
                lat: startLocationCoords.lat(),
                lng: startLocationCoords.lng(),
              },
              endLocationCoords: {
                lat: endLocationCoords.lat(),
                lng: endLocationCoords.lng(),
              },
            });
  
            // calculate the directions
            const directionsService = new window.google.maps.DirectionsService();
            directionsService.route(
              {
                origin: startLocationCoords,
                destination: endLocationCoords,
                travelMode: "DRIVING",
              },
              (result, status) => {
                if (status === "OK") {
                  this.setState({
                    directions: result,
                  });
                } else {
                  console.log(status);
                }
              }
            );
          } else {
            console.log(endStatus);
          }
        });
      } else {
        console.log(startStatus);
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
      startLocationCoords,
      endLocationCoords,
      activeMarker,
      showingInfoWindow,
      locationInfo,
      photos,
      places,
      directions
    } = this.state;

    return (
      <div>
        <Navbar />
        <div>
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <div>
          <input id="start-input" type="text" placeholder="Start location" onChange={this.handleStartChange} />
          <input id="end-input" type="text" placeholder="End location" onChange={this.handleEndChange} />
          <button onClick={this.handleDirections}>Show Route</button>
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
          {startLocationCoords.lat !== 0 && (
          <Marker
            position={startLocationCoords}
            name={locationInfo.name}
            icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            }}
          />
          )}
          {endLocationCoords.lat !== 0 && (
          <Marker
            position={endLocationCoords}
            name={locationInfo.name}
            icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
          />
          )}
          {directions && (
          <Polyline
            path={directions.routes[0].overview_path}
            strokeColor="#00d4ff"
            strokeOpacity={0.8}
            strokeWeight={4}
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


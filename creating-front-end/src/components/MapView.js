import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import Navbar from './Navbar';
import greenMarker from '../assets/green-dot.png';
import flag from '../assets/beachflag.png';

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
    markers: [],
    showRoute: false,
    directions: null,
    error: null,
    destinationInput: '',
    activeMarker: {},
    showingInfoWindow: false,
    locationInfo: {},
    photos: [],
    places: [],
    transitType: 'DRIVING',
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

    //Creates autocomplete suggestions for the destination input field
    const input = document.getElementById('destination-input');
    const autocomplete = new this.props.google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        const newMarkers = [...this.state.markers, { position: location }];
        this.setState({ markers: newMarkers, destinationInput: '' });
      } else {
        this.setState({ error: 'Failed to geocode destination.' });
      }
    });

    this.setState({ autocomplete });
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

  handleDestinationChange = (event) => {
    this.setState({ destinationInput: event.target.value });
  };

  // Add a new method to handle transit type changes
  handleTransitTypeChange = (event) => {
    this.setState({ transitType: event.target.value });
  };

  //Handles the adding of destinations and markers associated with them
  handleAddDestination = () => {
    const { destinationInput, markers } = this.state;
    const geocoder = new this.props.google.maps.Geocoder();
    geocoder.geocode({ address: destinationInput }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        const newMarkers = [...markers, { position: location }];
        this.setState({ markers: newMarkers, destinationInput: '' });
      } else {
        this.setState({ error: 'Failed to geocode destination.' });
      }
    });
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

    handleChange = (event) => {
      this.setState({ searchedLocation: event.target.value });
    };
  
    //Handles destination removal (now invoked when marker is clicked)
    handleRemoveDestination = (index) => {
      const { markers } = this.state;
      if (markers.length === 1) {
        this.setState({ markers: [], showRoute: false }); // set showRoute to false if last destination is removed
      } else {
        const newMarkers = [...markers.slice(0, index), ...markers.slice(index + 1)];
        this.setState({ markers: newMarkers }, () => {
          if (newMarkers.length > 0) {
            this.handleShowRoute();
          } else {
            this.setState({ showRoute: false }); // set showRoute to false if all destinations are removed
          }
        });
      }
    };

    //Handles the display of the route
    handleShowRoute = () => {
      const { markers, currentLocation } = this.state;
      const DirectionsService = new this.props.google.maps.DirectionsService();
      DirectionsService.route(
        {
          origin: currentLocation,
          destination: markers[markers.length - 1].position,
          waypoints: markers.slice(0, markers.length - 1).map((marker) => ({ location: marker.position })),
          optimizeWaypoints: true,
          travelMode: this.props.google.maps.TravelMode[this.state.transitType],
        },
        (result, status) => {
          if (status === this.props.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
              showRoute: true,
            });
          } else {
            this.setState({ error: 'Failed to fetch directions.' });
          }
        }
      );
    };
    
    render() {
    const {
    currentLocation,
    searchedLocationCoords,
    markers,
    showRoute,
    directions,
    destinationInput,
    activeMarker,
    showingInfoWindow,
    locationInfo,
    photos,
    places,
    } = this.state;

    return (

      <div>
        <Navbar />
        <div className="map-container">
          <div className="search-container">
            <input id="search" type="text" onChange={this.handleChange} />
            <button onClick={this.handleSearch}>Search</button>
            <div className="input-container">
              <input
                id="destination-input"
                type="text"
                placeholder="Enter a destination"
                value={destinationInput}
                onChange={this.handleDestinationChange}
              />
              <button onClick={this.handleAddDestination}>Add</button>
              <button onClick={this.handleShowRoute}>Show Route</button>
            </div>
          </div>
          <div className="transit-type-container">
            <label htmlFor="transit-type">Transit Type: </label>
            <select
              id="transit-type"
              value={this.state.transitType}
              onChange={this.handleTransitTypeChange}
            >
              <option value="DRIVING">Driving</option>
              <option value="WALKING">Walking</option>
              <option value="BICYCLING">Bicycling</option>
            </select>
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
          {currentLocation.lat && currentLocation.lng && (
            <Marker
              position={{ lat: currentLocation.lat, lng: currentLocation.lng }}
              icon={flag}/>
          )}
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position} onClick={() => this.handleRemoveDestination(index)} icon={greenMarker} />
          ))}
          
          {showRoute && directions && (
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
      </div>
    );
    }
    }
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapView);
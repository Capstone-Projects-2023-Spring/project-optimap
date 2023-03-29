import React, { useState, useEffect, useRef } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import Navbar from './Navbar';
import greenMarker from '../assets/green-dot.png';
import flag from '../assets/beachflag.png';
import { useLocation } from "react-router-dom";


const mapStyles = {
  width: '100%',
  height: '100%',
  margin: 'auto',
};

const MapView = () => {

  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState('');
  const [searchedLocationCoords, setSearchedLocationCoords] = useState({
    lat: 0,
    lng: 0,
  });
  const [markers, setMarkers] = useState([]);
  const [showRoute, setShowRoute] = useState(false);
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);
  const [destinationInput, setDestinationInput] = useState('');
  const [activeMarker, setActiveMarker] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [locationInfo, setLocationInfo] = useState({});
  const [photos, setPhotos] = useState([]);
  const [places, setPlaces] = useState([]);



  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({
            lat: latitude,
            lng: longitude
          });

        },
        (error) => console.log(error)
      );



    } else {
      console.log('Geolocation not supported');
      setCurrentLocation({
        lat: 0,
        lng: 0
      })
    }
  }, []);

  useEffect(() => {
    const input = document.getElementById('destination-input');
    const autocomplete = new window.google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        const newMarkers = [...markers, { position: location }];
        setMarkers(newMarkers);
        setDestinationInput('');
      } else {
        setError('Failed to geocode destination.');
      }
    });

    // autocompleteRef.current = autocomplete; ?
  }, [markers, window.google.maps.places.Autocomplete]);


  const handleSearch = () => {
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
              setSearchedLocationCoords({
                lat: location.lat(),
                lng: location.lng(),
              });
              setShowingInfoWindow(false);
              setLocationInfo(places[0]);
              setPlaces(places);

              if (places[0].photos) {
                places[0].photos.forEach((photo) => {
                  const url = photo.getUrl({ maxWidth: 500, maxHeight: 500 });
                  setPhotos((prevState) => [...prevState, url]);
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

  const handleDestinationChange = (event) => {
    setDestinationInput(event.target.value);
  };

  const handleAddDestination = () => {
    const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: destinationInput }, (results, status) => {
        if (status === 'OK') {
          const location = results[0].geometry.location;
          const newMarkers = [...markers, { position: location }];
          setMarkers(newMarkers);
          setMarkers(newMarkers)
          console.log("markers")
          console.dir(newMarkers)
          setDestinationInput('');
        } else {
          setError('Failed to geocode destination.');
        }
      });
  };

  const handleMarkerClick = (props, marker, e) => {

    setActiveMarker(marker)
    setShowingInfoWindow(true)
    setLocationInfo(props.locationInfo)
    setPhotos([]);

    const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));

    placesService.getDetails(
      { placeId: props.locationInfo.place_id },
      (place, status) => {
        if (status === 'OK') {
          setLocationInfo(place)

          if (place.photos) {
            place.photos.forEach((photo) => {
              const url = photo.getUrl({ maxWidth: 500, maxHeight: 500 });
                setPhotos([...photos, url])
            });
          }
        } else {
          console.log(status);
        }
      }
    );
  };



  const handleChange = (event) => {
    setSearchedLocation(event.target.value);
  };

  const handleRemoveDestination = (index) => {
    if (markers.length === 1) {
      // setMarkers([]);
      setShowRoute(false); // set showRoute to false if last destination is removed
    } else {
      const newMarkers = [...markers.slice(0, index), ...markers.slice(index + 1)];
      setMarkers(newMarkers);
      if (newMarkers.length > 0) {
        handleShowRoute();
      } else {
        setShowRoute(false); // set showRoute to false if all destinations are removed
      }
    }
  };


  const handleShowRoute = (markers, currentLocation, google) => {

    const DirectionsService = new window.google.maps.DirectionsService();
    DirectionsService.route(
      {
        origin: currentLocation,
        destination: markers[markers.length - 1].position,
        waypoints: markers.slice(0, markers.length - 1).map((marker) => ({ location: marker.position })),
        optimizeWaypoints: true,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result)
          setShowRoute(true);
        } else {
          setError('Failed to fetch directions.');
          console.log("no directions")
        }
      }
    );
  };


  return (
    <div>
    <Navbar />
    {currentLocation ? (
      <div className="map-container">
        <div className="search-container">
          <input id="search" type="text" onChange={handleChange} />
          <button onClick={handleSearch}>Search</button>
          <div className="input-container">
            <input
              id="destination-input"
              type="text"
              placeholder="Enter a destination"
              value={destinationInput}
              onChange={handleDestinationChange}
            />
            <button onClick={handleAddDestination}>Add</button>
            <button onClick={handleShowRoute}>Show Route</button>
          </div>
        </div>
        <Map
          google={window.google}
          zoom={14}
          style={mapStyles}
          initialCenter={currentLocation}
          // center={searchedLocationCoords}
        >
          {searchedLocationCoords.lat !== 0 && (
            <Marker
              onClick={handleMarkerClick}
              position={searchedLocationCoords}
              locationInfo={locationInfo}
            />
          )}
          {currentLocation.lat && currentLocation.lng && (
            <Marker
              position={{ lat: currentLocation.lat, lng: currentLocation.lng }}
              icon={flag} />
          )}
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position} onClick={() => handleRemoveDestination(index)} icon={greenMarker} />
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
    ) : (

      <div>Loading...</div>
    )}
        </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapView);
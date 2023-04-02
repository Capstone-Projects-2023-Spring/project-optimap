import React, { useState, useEffect, useRef } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import Navbar from './Navbar';
import greenMarker from '../assets/green-dot.png';
import flag from '../assets/beachflag.png';
import { useLocation } from "react-router-dom";
import LocationBox from './LocationBox';
import { db } from '../firebase/Firebase';
import { ref, onValue, off } from 'firebase/database';

const mapStyles = {
  width: '100%',
  height: '100%',
  margin: 'auto',
};

const locationStyles = {
  width: '50%',
}

const MapView = () => {

  // accept state variables from CreateRoutePage.js
  const pageLocation = useLocation();

  const [passedLocations, setPassedLocations] = useState([])
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState('');
  const [searchedLocationCoords, setSearchedLocationCoords] = useState({
    lat: 0,
    lng: 0,
  });

  const [idx, setIdx] = useState(0);

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
  const [transitType, setTransitType] = useState('DRIVING');
  // Fetch settings from local storage and set the corresponding state
  const [avoidHighways, setAvoidHighways] = useState(false);
  const [avoidTolls, setAvoidTolls] = useState(false);
  const [avoidFerries, setAvoidFerries] = useState(false);

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

    //Handles the display of the route
    function handleShowRoute() {
      console.log('show Route called')
    
      const DirectionsService = new window.google.maps.DirectionsService();
      DirectionsService.route(
        {
          origin: currentLocation,
          destination: markers[markers.length - 1].position,
          waypoints: markers.slice(0, markers.length - 1).map((marker) => ({ location: marker.position})),
          optimizeWaypoints: true,
          travelMode: window.google.maps.TravelMode[transitType],
          avoidTolls: avoidTolls,
          avoidHighways: avoidHighways,
          avoidFerries: avoidFerries,
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

        const passedLocsTemp = [];
        const passedAddrTemp = [];
        if(pageLocation.state){
          for(var i = 0; i < pageLocation.state.locations.length; i++){
            /*console.log("passed: ");
            console.dir(pageLocation.state.locations[i].coordinates);*/
            passedLocsTemp[i] = {position: pageLocation.state.locations[i].coordinates, street_address: pageLocation.state.locations[i].street_address};
          }
  
          // setPassedLocations(passedLocsTemp)
  
          console.log("setting markers to ")
          console.dir(passedLocsTemp)
          setMarkers(passedLocsTemp)
        }


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

        const street_address = place.formatted_address;

        const newMarkers = [...markers, { position: location, street_address: street_address }];
        setMarkers(newMarkers);
        console.log(newMarkers);
        setDestinationInput('');
      } else {
        setError('Failed to geocode destination.');
      }
    });

    // autocompleteRef.current = autocomplete; ?

    console.log("len " + markers.length)
    if(markers.length > 1 && currentLocation){
      handleShowRoute();
    }
  }, [currentLocation, markers, window.google.maps.places.Autocomplete]);


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
    setPhotos([]);
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

  function handleRemoveDestination(index) {
    const newMarkers = [...markers];
    newMarkers.splice(index, 1);
    setMarkers(newMarkers);
  
    if (newMarkers.length === 0) {
      setShowRoute(false);
    } else {
      const waypoints = newMarkers.map((marker) => ({
        location: marker.position,
        stopover: true,
      }));
  
      const directionsService = new window.google.maps.DirectionsService();
  
      directionsService.route(
        {
          origin: currentLocation,
          destination: newMarkers[newMarkers.length - 1].position,
          waypoints,
          optimizeWaypoints: true,
          travelMode: transitType,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
            setShowRoute(true);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  };


  const handleTransitTypeChange = e => {
    setTransitType(e.target.value );
  };


  return (
    <div>
    <Navbar />
    {currentLocation ? (
    <LocationBox setIdx={setIdx} handleRemoveDestination={handleRemoveDestination} locations={markers}/>
    ):(<></>)}
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
            {/*<button onClick={handleAddDestination}>Add</button>*/}
            <button onClick={handleShowRoute}>Show Route</button>
          </div>
        </div>

        <div className="transit-type-container">
            <label htmlFor="transit-type">Transit Type: </label>
            <select
              id="transit-type"
              value={transitType}
              onChange={handleTransitTypeChange}
            >
              <option value="DRIVING">Driving</option>
              <option value="WALKING">Walking</option>
              <option value="BICYCLING">Bicycling</option>
            </select>
          </div>
        {currentLocation ? (
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
        </Map> ) : (

      <div>Loading...</div>
    )}
      </div>
   
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapView);
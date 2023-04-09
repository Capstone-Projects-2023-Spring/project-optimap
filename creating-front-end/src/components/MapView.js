import React, { useState, useEffect, useRef } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import Navbar from './Navbar';
import { useLocation } from "react-router-dom";
import LocationBox from './LocationBox';
import { db } from '../firebase/Firebase';
import { ref, onValue, off } from 'firebase/database';
import car from '../assets/car.png';
import bike from '../assets/bike.png';
import person from '../assets/walking.png';
import greenMarker from '../assets/green-marker.png';
import finishFlag from '../assets/finishFlag.png';
import './styles/marker.css';

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


  const [routes, getDirections] = useState("");

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

  function calculateDistance(coord1, coord2) {
    const R = 6371; // Earth's radius in km
    const dLat = toRadians(coord2.lat - coord1.lat);
    const dLon = toRadians(coord2.lng - coord1.lng);
    const lat1 = toRadians(coord1.lat);
    const lat2 = toRadians(coord2.lat);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  }
  
  function toRadians(deg) {
    return deg * Math.PI / 180;
  }
  
  //Handles the display of the route
  function handleShowRoute() {
    const DirectionsService = new window.google.maps.DirectionsService();
  
    // Sort the markers array based on their distance from the current location
    const sortedMarkers = markers.sort((a, b) => {
      const distA = calculateDistance(currentLocation, a.position);
      const distB = calculateDistance(currentLocation, b.position);
      return distA - distB;
    });
  
    DirectionsService.route(
      {
        origin: currentLocation,
        destination: sortedMarkers[sortedMarkers.length - 1].position,
        waypoints: sortedMarkers.slice(0, sortedMarkers.length - 1).map((marker) => ({ location: marker.position })),
        optimizeWaypoints: false,
        travelMode: window.google.maps.TravelMode[transitType],
        avoidTolls: avoidTolls,
        avoidHighways: avoidHighways,
        avoidFerries: avoidFerries,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
          setShowRoute(true);
          const steps = [];
          for (let i = 0; i < result.routes[0].legs.length; i++) {
            const leg = result.routes[0].legs[i];
            steps.push(...leg.steps.map((step) => {
              const distance = step.distance.text;
              const direction = step.maneuver;
              const instruction = step.instructions ? step.instructions.replace(/(<([^>]+)>)/gi, "") : "";
              const name = step.name ? step.name : "";
              const streetName = step.intersections && step.intersections[0].streetName ? step.intersections[0].streetName : "";
              return { instruction, distance, direction, name, streetName };
            }));
          }
          getDirections(steps);
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
          optimizeWaypoints: false,
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

  //Changes marker icon for current location based on transit type
  const getMarkerIcon = () => {
    switch (transitType) {
      case 'DRIVING':
        return car;
      case 'WALKING':
        return person;
      case 'BICYCLING':
        return bike;
      default:
        return greenMarker;
    }
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
            <button onClick={handleShowRoute}>Update Route</button>
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

          <div className="routes-panel">
            <label htmlFor="routes-dropdown">Route Directions:</label>
            {routes ? (
              <select id="routes-dropdown">
                {routes.map((route, idy) => (
                  <option key={idy}>{route.instruction}</option>
                ))}
              </select>
            ) : (
              <p>No directions to display.</p>
            )}
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
            icon={{
              url: getMarkerIcon()}} />
          )}
          {markers.map((marker, index) => (
            <Marker 
            key={index} 
            position={marker.position} 
            onClick={() => handleRemoveDestination(index)} 
            icon={index === markers.length - 1
                  ? { url: finishFlag}
                  : { url: greenMarker }}
            label={{
              text: (index === markers.length - 1) ? " " : (index + 1).toString(),
              className: "marker-label"
            }}
            />
          ))}

          {showRoute && directions && (
            <Polyline
              path={directions.routes[0].overview_path}
              strokeColor="#006eff"
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
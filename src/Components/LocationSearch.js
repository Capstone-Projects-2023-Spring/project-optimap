import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const LocationSearch = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);

  const handleSearch = () => {
    props.google.maps.Geocoder().geocode(
      { address: searchInput },
      (results, status) => {
        if (status === 'OK') {
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          setCoordinates({ lat, lng });

          props.google.maps.Geocoder().geocode(
            { location: { lat, lng } },
            (results, status) => {
              if (status === 'OK') {
                setLocationInfo(results[0]);
              }
            }
          );
        }
      }
    );
  };

  const onSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div style={{ display: 'flex', marginBottom: 16 }}>
        <Input
          placeholder="Enter location"
          value={searchInput}
          onChange={onSearchInputChange}
          style={{ marginRight: 16 }}
        />
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      {coordinates && (
        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={coordinates}
        >
          <Marker position={coordinates} />
        </Map>
      )}
      {locationInfo && (
        <div style={{ marginTop: 16 }}>
          <h2>{locationInfo.formatted_address}</h2>
          <p>{`Latitude: ${locationInfo.geometry.location.lat()}`}</p>
          <p>{`Longitude: ${locationInfo.geometry.location.lng()}`}</p>
        </div>
      )}
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDHXOPXb76XMmNNXbXt27WfCCQHRbf8uIs',
})(LocationSearch);

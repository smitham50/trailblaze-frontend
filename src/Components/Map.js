import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getTrailShowData } from '../Selectors/selectors';

const Map = () => {
  const { trail } = useSelector(getTrailShowData);
  const center = {
    lat: parseFloat(trail.latitude),
    lng: parseFloat(trail.longitude)
  };
  const zoom = 11;
  const [key, setKey] = useState('');

  const authenticateMap = async () => {
    const resp = await axios('https://nameless-wave-57808.herokuapp.com/api/v1/map_auth');
    const key = resp.data;
    setKey(key.replace(/\s/g, ""));
  }

  useEffect(() => {
    authenticateMap();
  }, []);

  const handleDirections = (google) => {
    const { latitude, longitude } = localStorage;
    const origin = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
    const destination = { lat: center.lat, lng: center.lng };
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    
    directionsDisplay.setMap(google.map);
    directionsService.route(
      {
        travelMode: 'DRIVING',
        origin: origin,
        destination: destination
      },
      (DirectionsResult, DirectionsStatus) => {
        if (DirectionsStatus === 'OK') {
          directionsDisplay.setDirections(DirectionsResult);
        }
      }
    )
  };

  return (
    <div className="map" >
      {
        key
        &&  <GoogleMapReact
            bootstrapURLKeys={{ key: key }}
            center={ center }
            defaultZoom={ zoom }
            onGoogleApiLoaded={handleDirections}
            yesIWantToUseGoogleMapApiInternals
          />
      }
    </div>
  );
};

export default Map;
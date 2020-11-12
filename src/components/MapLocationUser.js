import { Map, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';

const mapStyle = {
  width: 'calc(100% - 77px)',
  height: '200px',
  opacity: '1'
};

export function MapLocationUser({ geolocation, google }) {
  let coords;
  geolocation
    ? coords = { lat: parseFloat(geolocation.latitude), lng: parseFloat(geolocation.longitude) }
    : coords = { lat: 0, lng: 0 }

  if(!apiKeyMaps){
    return(
      <div></div>
    )
  }
  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyle}
      initialCenter={coords}
    >
      <Circle
        radius={300}
        center={coords}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#AC0000'
        fillOpacity={0.2}
      />
      <Marker 
        id={1} 
        position={coords} 
      />
    </Map>
  );
} 

export default GoogleApiWrapper({
  apiKey: "apiKeyMaps"
})(MapLocationUser);
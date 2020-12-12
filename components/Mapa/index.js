import GoogleMapReact from 'google-map-react';

export default function Map({ w, h }) {
  return (
    <div style={{ height: `${h}`, width: `${w}` }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik' }}
        defaultZoom={15}
        defaultCenter={{ lat: 19.499500675736567, lng: -99.12393689195976 }}
      />
    </div>
  );
}

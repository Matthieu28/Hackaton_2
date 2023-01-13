import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

// const { isLoaded } = useJsApiLoader({
//   id: "google-map-script",
//   googleMapsApiKey: `${import.meta.env.VITE_API_KEY_MAP}`,
// });
const containerStyle = {
  width: "auto",
  height: "400px",
};

const center = {
  lat: 48.4736866720519,
  lng: 1.011705973118764,
};

function MyMap() {
  return (
    <LoadScript googleMapsApiKey={`${import.meta.env.VITE_API_KEY_MAP}`}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18} />
    </LoadScript>
  );
}

export default React.memo(MyMap);

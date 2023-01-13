import React from "react";
import "./MyMap.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

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
      <div className="gMap">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
          <p>Hello</p>
        </GoogleMap>
      </div>
    </LoadScript>
  );
}

export default React.memo(MyMap);

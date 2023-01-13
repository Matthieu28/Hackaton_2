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
  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(gMap) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   gMap.fitBounds(bounds);
  //   // gMap.zoom = 10;
  //   console.warn(gMap.controls);

  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  // return  (
  //   <GoogleMap
  //     mapContainerStyle={containerStyle}
  //     center={center}
  //     zoom={10}
  //     onLoad={onLoad}
  //     onUnmount={onUnmount}
  //   >
  //     {/* Child components, such as markers, info windows, etc. */}
  //   </GoogleMap>
  // ) : (
  //   <h1>Loadeur</h1>
  // );

  return (
    <LoadScript googleMapsApiKey={`${import.meta.env.VITE_API_KEY_MAP}`}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18} />
    </LoadScript>
  );
}

export default React.memo(MyMap);

import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoBoxF,
} from "@react-google-maps/api";
import "./Mapa.css";

//npm i --save @react-google-maps/api

const containerStyle = {
  width: "500px",
  height: "500px",
};

const center = {
  lat: -34.7278,
  lng: -56.21571,
};

const position = {
  lat: -34.7278,
  lng: -56.21571,
};

const onLoad = (MarkerF) => {
  console.log("marker: ", MarkerF);
};

function Mapa() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCMsQfrMcCx-mt4o28KjpMoWOSesF34zvQ",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      defaultoptions={{
        streetViewControl: true,
        draggable: true, // make map draggable
        zoomControlOptions: { position: 9 },
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
        zoomControl: true,
        panControl: true,
        mapTypeControl: true,
        disableDefaultUI: false,
        gestureHandling: true,
        overviewMapControl: true,
        rotateControl: true,
      }}
    >
      <MarkerF onLoad={onLoad} position={position} />

      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Mapa);

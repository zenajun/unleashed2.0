import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import DogMarker from "./DogMarker";
import HumanMarker from "./HumanMarker";


const DogMap = withScriptjs(withGoogleMap((props) => {  
  const dogMarkers = props.user.map((park, i) => <DogMarker
    key={i}
    park={park}
    location={{ lat: park.lat, lng: park.lng }}
  />);


  return (
    <GoogleMap
      defaultZoom={11}
      center={{ lat: 43.7110342, lng: -79.373333 }}
    >
    {dogMarkers}
    <HumanMarker />
    </GoogleMap>
  );
}
))

export default DogMap;
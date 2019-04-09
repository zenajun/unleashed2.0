import React from "react";
import DogMap from "./DogMap";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;



class DogMapContainer extends React.Component {

  render() {
    return (
      <DogMap
        user={this.props.user}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: `600px`, margin: `0 auto`, border: `3px solid black` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
export default DogMapContainer;
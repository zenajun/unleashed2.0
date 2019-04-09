import React from "react";
import { Marker } from "react-google-maps";
import Paw from './pawprint.png';

class DogMarker extends React.Component {

  render() {
    return (
      <Marker
        position={this.props.location}
        icon={Paw}
      >
      </Marker>
    );
  }
}
export default DogMarker;
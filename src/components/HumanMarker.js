import React from "react";
import { Marker } from "react-google-maps";
import Human from './location.png';

class HumanMarker extends React.Component {
  state = {
    geolocation: {}
  }

  getCurrentPosition = () => (navigator.geolocation) ? navigator.geolocation.getCurrentPosition(this.getCoordinates) : console.log('Geolocation is not supported by this browser');

  getCoordinates = (pos) => {
    const geolocation = {};

    geolocation.lat = parseFloat(pos.coords.latitude);
    geolocation.lng = parseFloat(pos.coords.longitude);

    this.setState({ geolocation })
  }

  componentDidMount() {
    this.getCurrentPosition();
  }

  render() {
    return (
      <Marker
        position={this.state.geolocation}
        icon={Human}
      >
      </Marker>
    );
  }
}

export default HumanMarker;

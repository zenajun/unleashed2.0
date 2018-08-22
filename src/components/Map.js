import React from 'react';
import { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat:43.6707,
      lng: -79.4141
    },
    zoom: 12  
  };

  render() {    
    return (
      <div className="map-container" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCDY4rM7wJyPImzmpVBD2mrtH5tnolGEBo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}         
        >  

        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
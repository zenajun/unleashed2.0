import React from 'react';
import { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="">{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 40.73,
      lng: -73.93
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
          center={this.props.center}
        >  
        <AnyReactComponent
            lat={43.662066}
            lng={-79.375749}
            text={'test'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
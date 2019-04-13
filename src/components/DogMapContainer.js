import React from "react";
import DogMap from "./DogMap";
import styled from 'styled-components';

const api_key = process.env.REACT_APP_GOOLE_MAP_API_KEY;

class DogMapContainer extends React.Component {
  
  render() {
    console.log(this.api_key);
    return (
      <Map>
        <DogMap
          user={this.props.user}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${api_key}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%`, width: `100%`, margin: `0 auto`, border: `3px solid black` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Map>
    );
  }
}
const Map = styled.div`
padding-top: 25px;
width: 300px;
height: 275px;
margin: 0 auto;
/* height: 400px; */
`;

export default DogMapContainer;
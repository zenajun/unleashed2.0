import React, { Component } from 'react';
import styled from 'styled-components';
import DogMapContainer from "./DogMapContainer";

const MapContainer = styled.div`  
  ${'' /* border: 4px solid black; */}
  /* margin: 15px auto;   */

  & ul {
    list-style: none;
    display: flex;
    ${'' /* flex-direction: column; */}
    flex-wrap: wrap;
    
    & li {
      font-size: 1.6rem;
      /* border: 1px solid grey; */
    }
  }

`;

class Map extends Component {
  render() {
    return (
      <MapContainer>
        <DogMapContainer
          user={this.props.user}
        />
      </MapContainer>
    )
  }
}

export default Map;
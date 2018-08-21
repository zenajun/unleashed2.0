import React from 'react';
import { Component } from 'react';


class CurrentLocation extends Component {
 
  getCurrentPosition = () => {    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      console.log('Geolocation is not supported by this browser');   
    }
  }

  getCoordinates = (pos) => {
    const crd = pos.coords;
    const lat = crd.latitude;
    const lng = crd.longitude;  
    console.log(lat, lng);
      
  }

  
  render() {
    return (
      <div>
        <p>Current Location{this.getCurrentPosition}</p>
      </div>
    )
  }
}

export default CurrentLocation;
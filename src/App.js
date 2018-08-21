import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import Map from './components/Map';

// Initialize Firebase

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

const config = {
  apiKey: `${apiKey}`,
  authDomain: "react-dog-parks.firebaseapp.com",
  databaseURL: "https://react-dog-parks.firebaseio.com",
  projectId: "react-dog-parks",
  storageBucket: "react-dog-parks.appspot.com",
  messagingSenderId: "582459261551"
};
firebase.initializeApp(config);

class App extends Component {
  state = {
    parkType: "viewAll",
    customFilter: {
      allFen: false,
      allCdw: false,
      allSda: false
    },
    usersLocation: {}
  };

  getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      console.log('Geolocation is not supported by this browser');
    }
  }

  getCoordinates = (pos) => {
    const crd = pos.coords;

    const geolocation = {
      lat: crd.latitude,
      lng: crd.longitude
    };
    // console.log(geolocation);
    
    // 1. Take a copy of the existing state
    const usersLocation = { ...this.state.usersLocation };
    
    // 2. Add coordinates to usersLocation
    usersLocation.lat = geolocation.lat;
    usersLocation.lng = geolocation.lng;
    
    // 3. Set new object to state
    this.setState({ usersLocation });
  }

  // GRABBING DATA FROM FIREBASE DATABASE.  THE FUNCTION CALL IS COMMENTED OUT IN COMPONENT DID MOUNT.
  handleChange = (e) => {
    const dbRef = firebase.database().ref();
    
    dbRef.on('value', (snapshot) => {
      const dogParks = snapshot.val();
      // console.log(dogParks);      
    });
  }

  componentWillReceiveProps() {
    this.updateForm();
  }
  
  updateForm = (parkOption) => {
    // 1. Take a copy of the existing state
    let parkType = this.state.parkType;   

    // 2. Add coordinates to usersLocation
    parkType = parkOption;
    
    // 3. Set new object to state
    this.setState({ parkType });
  }   
    
  componentDidMount() {
    this.getCurrentPosition();  
    this.handleChange();  
  }

  render() {
    return (
      <div className="App">
        <Header tagline="Find the off-leash dog parks of Toronto today!"/>
        <Form updateForm={this.updateForm} />        
        <Map center={this.state.usersLocation} />
        <Footer />        
      </div>
    );
  }
}

export default App;

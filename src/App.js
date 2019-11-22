import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>     
        <Header 
          h1={'Toronto Unleashed'} tagline={'🐕 Welcome to the park 🐕'}/>
       <Main />
       <Footer />
      </React.Fragment>
   
    );
  }
}

export default App;

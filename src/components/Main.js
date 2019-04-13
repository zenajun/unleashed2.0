import React from 'react';
import Form from './Form';
import Map from './Map';
import dogParks from './dogParks';
import styled from 'styled-components';

class Main extends React.Component {

  state = {
    parkTypes: {
      fen: null,
      sda: null,
      cdw: null
    },
    dogParks: [],
    user: []
  }

  componentDidMount() {
    // Load all the dog park data:
    this.setState({ dogParks, user: dogParks });
  }

  handleRadio = (e) => {

    const parkTypes = { ...this.state.parkTypes };

    parkTypes[e.target.name] = e.target.value === 'undefined' ? null : e.target.value === 'true' ? true : false;

    this.setState({ parkTypes }, () => this.filterSelection());

  }

  filterSelection = () => {
    const parkTypes = { ...this.state.parkTypes };
    const dogParks = [...this.state.dogParks];

    const user = dogParks
      .filter(dogPark => {
        if (parkTypes.fen === true) {
          return dogPark.fen === true;
        } else if (parkTypes.fen === false) {
          return dogPark.fen === false;
        } else {
          return dogPark;
        }
      })
      .filter(dogPark => {
        if (parkTypes.sda === true) {
          return dogPark.sda === true;
        } else if (parkTypes.sda === false) {
          return dogPark.sda === false;
        } else {
          return dogPark;
        }
      })
      .filter(dogPark => {
        if (parkTypes.cdw === true) {
          return dogPark.cdw === true;
        } else if (parkTypes.cdw === false) {
          return dogPark.cdw === false;
        } else {
          return dogPark;
        }
      });
    console.table(user);
    this.setState({ user });

  }

  render() {
    return (
      <Body>
        <div className='wrapper'>
          <Form
            handleRadio={this.handleRadio}
          />
          <Map
            user={this.state.user}
          />
        </div>
      </Body>
    )
  }
}

const Body = styled.main`
  background: #f1f1f1;  
  padding: 15px 0;
`;

export default Main;
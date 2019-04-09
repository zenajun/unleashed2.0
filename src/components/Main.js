import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import Map from './Map';
import dogParks from './dogParks';


const Body = styled.main`
  min-height: 65vh;
  background: #f1f1f1;
  padding-top: 25px;
  & .wrapper {
    padding: 25px 0;  
  }
`;

class Main extends React.Component {

  state = {
    parkType: {
      allParks: false,
      allSda: false,
      allFen: false,
      allCdw: false,
      custom: false
    },
    custom: {
      fen: false,
      sda: false,
      cdw: false,
    },
    dogParks: [],
    user: []
  }

  componentDidMount() {
    // Load all the dog park data
    this.setState({ dogParks });
  }

  handleRadio = (e) => {
    const parkType = { ...this.state.parkType };

    for (let prop in parkType) {
      parkType[prop] = false;
      parkType[e.target.id] = true;
    }

    this.setState({ parkType }, () => this.filterRadioSelection());
  }

  filterRadioSelection = () => {
    let user;

    if (this.state.parkType.allParks === true) {
      user = dogParks;
      this.setState({ user });
    } else if (this.state.parkType.allFen === true) {
      user = dogParks.filter(park => park.fen === true);
      this.setState({ user });

    } else if (this.state.parkType.allSda === true) {
      user = dogParks.filter(park => park.sda === true);
      this.setState({ user });

    } else if (this.state.parkType.allCdw) {
      user = dogParks.filter(park => park.cdw === true);
      this.setState({ user });

    } else {
      this.handleFilter();
    }
  }

  handleCheckbox = (e) => {
    const custom = { ...this.state.custom };
    custom[e.target.id] = !custom[e.target.id];
    this.setState({ custom }, () => this.handleFilter());
  }

  handleFilter = () => {
    const custom = { ...this.state.custom };

    if (this.state.custom.sda === false && this.state.custom.fen === false && this.state.custom.cdw === false) {
      const user = dogParks.filter(park => {
        return park.sda === false && park.fen === false && park.cdw === false;
      });

      this.setState({ user });

    } else {

      const user = this.state.dogParks
        .filter(park => {
          if (custom.fen === true) {
            return park.fen === true;
          } else {
            return park.fen === false;
          }
        })
        .filter(park => {
          if (custom.sda === true) {
            return park.sda === true;
          } else {
            return park.sda === false;
          }
        })
        .filter(park => {
          if (custom.cdw === true) {
            return park.cdw === true;
          } else {
            return park.cdw === false;
          }
        });

      this.setState({ user });
    }
  }

  render() {
    return (
      <Body>
        <div className='wrapper'>
          <Form
            handleRadio={this.handleRadio}
            handleCheckbox={this.handleCheckbox}
            fen={this.state.custom.fen}
            sda={this.state.custom.sda}
            cdw={this.state.custom.cdw}
          />
          <Map
            user={this.state.user}
          />
        </div>
      </Body>
    )
  }
}

export default Main;

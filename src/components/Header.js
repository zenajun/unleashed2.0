import React from 'react';
import styled from 'styled-components';

const Head = styled.header` 
    height: 25vh;
    background: #222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h1 {
      color: #fff;
      font-size: 4.5rem;   
      text-transform: uppercase;
      text-shadow: pink 1px 0 5px;   
      font-family: 'Permanent Marker', cursive;
      letter-spacing: 1px;
    }
    & span {
      display: block;
      color: white;
      font-size: 2.6rem;
    }
`;

class Header extends React.Component {
  render() {
    return (
      <Head>
          <h1>{this.props.h1 || 'Catch Title!'}</h1>   
          <span>{this.props.tagline}</span>    
      </Head>
  
    )
  }
}





export default Header;
import React from 'react';
import styled from 'styled-components';

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

const Head = styled.header` 
  padding: 20px 0;
  background: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    color: #fff;
    font-size: 2.5rem;   
    text-transform: uppercase;
    text-shadow: #a9cbb7 1px 0 5px;   
    font-family: 'Permanent Marker', cursive;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 0;
  }
  & span {
    display: block;
    color: white;
    font-size: 1.8rem;
    position: relative;
    padding: 0 25px;
  }
  & span::before, 
  span::after {
    content: '';
    width: 15px;
    height: 3px;
    background: #a9cbb7;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  & span::before {
    left: 0;
  }
  & span::after {
    right: 0;
  }
`;

export default Header;
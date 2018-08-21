import React from 'react';

const Header = props => 
  (
    <header>
      <h1>Toronto - Unleashed</h1>
      <p>{props.tagline}</p>
    </header>
  )

export default Header;
import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
background: #222;
font-size: 1.4rem;
padding: 15px 0;
  & a, p {
    color: #fff;
    text-decoration: none;
  } 
  & div.attribution {
    color: #fff;
    & a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

class Footer extends React.Component {

  year = () => new Date().getFullYear();

  render() {
    return (
      <Foot>
        <div className="wrapper">
          <p>Made by <a href="http://www.zenajun.com" target="_blank" rel="noopener noreferrer">Zena Jun</a> &copy; {this.year()}</p>
          <p><a href="https://www.toronto.ca/community-people/animals-pets/pets-in-the-city/dogs-in-the-city/" target="_blank" rel="noopener noreferrer">For more information please visit www.toronto.ca</a></p>
          <div className="attribution">
            <div>Icons made by <a href="https://www.freepik.com/" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy" target="_blank" rel="noopener noreferrer">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
          </div>
        </div>
      </Foot>
    )
  }
}

export default Footer;
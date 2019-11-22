import React from 'react';
import styled from 'styled-components';
import heartPaw from './heart_paw.png';

const year = () => new Date().getFullYear();

class Footer extends React.Component {

  render() {
    return (
      <Foot>
        <div className="wrapper">
          <div className="attribution">
            <p>Icons made by <a href="https://www.freepik.com/" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>. Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy" target="_blank" rel="noopener noreferrer">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>. Heart Paw by Peter Hacke from the Noun Project</p>
            <ul>
              <li></li>
            </ul>
          </div>
          <p><a href="https://www.toronto.ca/community-people/animals-pets/pets-in-the-city/dogs-in-the-city/" target="_blank" rel="noopener noreferrer">For more information please visit www.toronto.ca</a></p>
          <p>Made with <img src={heartPaw} alt="love" /> <a href="http://www.zenajun.com" target="_blank" rel="noopener noreferrer">by Zena Jun</a> &copy; {year()}</p>
        </div>
      </Foot>
    )
  }
}

const Foot = styled.footer`
background: #222;
font-size: 1.6rem;
padding: 15px;
  & img {
    width: 20px;
    position: relative;
    top: 4px;
  }
  & p, a {
    color: #fff;
    text-decoration: none;
    text-align: justify;
  }
  & a {
    text-decoration: none;
  }   
  & div.attribution {
    & p, a, span {

    color: #aaa;
    font-size: 0.8rem;
    }
    & ul {
      margin: 0;
      padding: 0;
      list-style: none;
      & li {
        margin-bottom: 5px;
        text-align: justify;
      }
    }
  }
`;
export default Footer;
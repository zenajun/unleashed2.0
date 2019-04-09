import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
background: #222;
height: 10vh;
${'' /* padding: 15px; */}
  & .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & p,
    a, 
    div.attribution {
      color: #fff;
      font-size: 1rem;
      & a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;


class Footer extends React.Component {
  
  year = () => new Date().getFullYear();

  render() {
    return (
      <Foot>
       <div className="wrapper">
        <p>Made by <a href="www.zenajun.com">Zena Jun</a> &copy; {this.year()}</p>        
        <p><a href="https://www.toronto.ca/community-people/animals-pets/pets-in-the-city/dogs-in-the-city/">For more information please visit www.toronto.ca</a></p>
        <div className="attribution">
          <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>
          <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>        
          <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>
        </div>
       </div>
      </Foot>
      
    )
  }
}





export default Footer;
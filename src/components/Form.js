import React from 'react';
import styled from 'styled-components';

class Form extends React.Component {

  render() {
    return (
      <Container>
        <div className='category'>
          <h3>Fence</h3>
          <input type='radio' id='fenNull' name='fen' value='undefined' onChange={this.props.handleRadio} defaultChecked />
          <label htmlFor='fenNull'>Doesn't Matter</label>

          <input type='radio' id='fenTrue' name='fen' value='true' onChange={this.props.handleRadio} />
          <label htmlFor='fenTrue'>Fenced</label>

          <input type='radio' id='fenFalse' name='fen' value='false' onChange={this.props.handleRadio} />
          <label htmlFor='fenFalse'>Not Fenced</label>

        </div>
        <div className='category'>
          <h3 title="For dogs weighing a maximum 20 lbs, with a maximum height of 12 inches at the shoulders">Small Dog Area</h3>
          <input type='radio' id='sdaNull' name='sda' value='undefined' onChange={this.props.handleRadio} defaultChecked />
          <label htmlFor='sdaNull'>Doesn't Matter</label>

          <input type='radio' id='sdaTrue' name='sda' value='true' onChange={this.props.handleRadio} />
          <label htmlFor='sdaTrue'>Small Dog Area</label>

          <input type='radio' id='sdaFalse' name='sda' value='false' onChange={this.props.handleRadio} />
          <label htmlFor='sdaFalse'>No Small Dog Area</label>

        </div>
        <div className='category'>
          <h3>Commercial Dog Walkers</h3>
          <input type='radio' id='cdwNull' name='cdw' value='undefined' onChange={this.props.handleRadio} defaultChecked />
          <label htmlFor='cdwNull'>Doesn't Matter</label>

          <input type='radio' id='cdwTrue' name='cdw' value='true' onChange={this.props.handleRadio} />
          <label htmlFor='cdwTrue'>Allowed</label>

          <input type='radio' id='cdwFalse' name='cdw' value='false' onChange={this.props.handleRadio} />
          <label htmlFor='cdwFalse'>Not Allowed</label>
        </div>
      </Container>
    )
  }
}

const Container = styled.form`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
    & .category {        
      display: flex;
      flex-direction: column;
      align-items: center;
      width: calc(100% / 3);
    }
  }
  & h3 {
    text-transform: uppercase;
    font-size: 1.2rem;
    margin: 0;
    min-height: 30px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-shadow: 1px 1px 1px white;
  }
    & label {
      height: 35px;
      width: 80%;
      border: 3px solid transparent;         
      display: flex;
      justify-content: center;
      align-items: center;      
      padding: 20px 0;
      background: #a9cbb7;
      box-shadow: 0 4px rgba(0, 0, 0, 0.2);
      position: relative;      
      text-align: center;
      transition: 0.5s;
      margin-bottom: 10px;
      border-radius: 5px;
    }
    & input {
      margin-right: 15px;
      margin-left: 5px;
      display: none;
      
    }
    & label:hover {  
      cursor: pointer;   
      /* border-color: black; */
    }

    & input:checked + label {
      background: #91ad9c;
      box-shadow: 0px 0px rgba(0, 0, 0, 0.2);
      top: 4px;
      /* left: 4px; */
      border-color: black;
    }
  }`;

export default Form;
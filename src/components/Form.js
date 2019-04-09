import React from 'react';
import styled from 'styled-components';

class Form extends React.Component {
  customRadio = React.createRef();
  subForm = React.createRef();


  handleSubForm = (e) => {


    const customRadio = this.customRadio.current.checked;
    const checkboxes = [...this.subForm.current.children].filter(checkbox => {
      return checkbox.type === 'checkbox';
    });
    if (customRadio === true) {
      checkboxes.map(checkbox => {
        return checkbox.disabled = false;
      })
    } else {
      checkboxes.map(checkbox => {
        return checkbox.disabled = true;
      })
    }

    console.dir(checkboxes)
  }

  render() {


    return (
      <Container>
        <input type='radio' id='allParks' name='parkType' onChange={this.props.handleRadio} value={false} />
        <label htmlFor='allParks'>All Parks</label>

        <input type='radio' id='allFen' name="parkType" onChange={this.props.handleRadio} value={false} />
        <label htmlFor='allFen'>All Fenced</label>

        <input type='radio' id='allSda' name="parkType" onChange={this.props.handleRadio} value={false} />
        <label htmlFor='allSda'>All Small dog parks</label>

        <input type='radio' id='allCdw' name="parkType" onChange={this.props.handleRadio} value={false} />
        <label htmlFor='allCdw'>All Commercial Dog Walkers</label><br />

        <input
          type='radio'
          id='custom'
          name='parkType'
          value={false}
          ref={this.customRadio}
          onChange={this.props.handleRadio}
          onClick={this.handleSubForm} />
        <label htmlFor='custom'>Custom Selection</label>

        <div
          className="subForm"
          ref={this.subForm}
        >
          <input type="checkbox" id="fen" onChange={this.props.handleCheckbox} value={this.props.fen} />
          <label htmlFor="fen">Fenced</label>

          <input type="checkbox" id="sda" onChange={this.props.handleCheckbox} value={this.props.sda} />
          <label htmlFor="sda">Small Dog Area</label>

          <input type="checkbox" id="cdw" onChange={this.props.handleCheckbox} value={this.props.cdw} />
          <label htmlFor="cdw">Commercial Dog Walkers</label>
        </div>
      </Container>

    )
  }
}

const Container = styled.form`
  font-size: 2rem;
  padding: 25px;
    & label {
      border: 3px solid transparent;   
      border-radius: 33px;   
      display: inline-block;
      padding: 5px 10px;
      background: #a9cbb7;
      box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      margin-right: 10px;
      position: relative;
      transition: 0.5s;
    }
    & input {
      margin-right: 15px;
      margin-left: 5px;
      display: none;
      
    }
    & label:hover {     
      /* border-color: black; */
    }

    & input:checked + label {
      box-shadow: 0px 0px rgba(0, 0, 0, 0.2);
      top: 4px;
      border-color: black;
    }
    
    & #custom:not(:checked) ~ .subForm {
      opacity: 0.5;
      cursor: not-allowed;
    }

    & #custom:checked ~ .subForm {
      opacity: 1;   
    }
    & .subForm {
      margin-top: 15px;
    }
  }`;

export default Form;

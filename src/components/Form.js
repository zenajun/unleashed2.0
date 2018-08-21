import React from 'react';
import { Component } from 'react';


class Form extends Component { 
    
  handleOptionChange = (e) => { 
    this.props.updateForm(e.target.value);    
  }

  render() {
    return ( 
      <form>
        <label htmlFor="viewAll">All parks!</label>
        <input 
          type="radio"
          name="parkType" 
          id="viewAll"
          value="viewAll"
          onChange={this.handleOptionChange}          
        />

        <label htmlFor="allFen">All Fenced</label>
        <input 
          type="radio" 
          name="parkType" 
          id="allFen"
          value="allFen"
          onChange={this.handleOptionChange}   
        />
        
        <label htmlFor="allCdw"  title="Commercial Dog Walkers allowed">All Commercial dog walkers</label>
        <input 
          type="radio" 
          name="parkType" 
          id="allCdw"
          value="allCdw"
          onChange={this.handleOptionChange}
        />
        
        <label htmlFor="allSma">All Small Dog Areas</label>
        <input 
          type="radio" 
          name="parkType" 
          id="allSma"
          value="allSma"
          onChange={this.handleOptionChange}
        />

        <label htmlFor="customFilter">Custom Filter</label>
        <input 
          type="radio" 
          name="parkType" 
          id="customFilter"
          value="customFilter"
          onChange={this.handleOptionChange}
        />

        <div className="customFilter">
          <label htmlFor="filterFen">Fenced</label>
          <input type="checkbox" name="filterFen" id="filterFen"/>

          <label htmlFor="filterSda">Small Dog Area</label>
          <input type="checkbox" name="filterSda" id="filterSda"/>

          <label htmlFor="filterCdw">Commercial Dog Walkers</label>
          <input type="checkbox" name="filterCdw" id="filterCdw"/>
        </div>
      </form>
    )
  }
}

export default Form;

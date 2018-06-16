import React, { Component } from 'react';
import './GalaxyCard.css';
import galaxies from '../../galaxies.json';


export default class GalaxyCard extends Component {
  
  state = {
    value: this.props.clicked,
    
  }
  
  handleImageValueChange = event => {
    const value = this.state.value
    
    if (value) {
      console.log(`This is: ${value}`);
      galaxies.sort(function(a, b){return 0.5 - Math.random()});
      galaxies.map( galaxy =>  (galaxies))
      // This sorts the images, but their values are reset back to false.
      console.log(galaxies);
  
      // correctAlert();
      this.setState ({
        value: true
      });
      console.log(`New state: ${value}`);
      
    } else {
      // topScoreKeeper();
      // incorrectAlert();
      galaxies.sort(function(a,b){return 0.5 - Math.random()});
      galaxies.map( galaxy =>  (galaxies))
    }
  }
  
  render() {
    
    return (
      <div className="card"
        value={this.state.clicked}
        onClick={this.handleImageValueChange}>
        <div className="img-container">
          <img 
          alt={this.props.name} 
          src={this.props.image}
          />
          { this.props.children }
        </div>
      </div>
    )
  }
}


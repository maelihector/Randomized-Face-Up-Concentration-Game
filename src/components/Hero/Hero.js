import React, { Component } from 'react';
import './Hero.css';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero text-center" style={{ backgroundImage: `url(${this.props.backgroundImage})` }}>
        <h1>Memory Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        {this.props.children}
      </div>
    )
  }
}


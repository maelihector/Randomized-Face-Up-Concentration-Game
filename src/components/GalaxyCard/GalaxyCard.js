import React, { Component } from 'react';
import './GalaxyCard.css';

export default class GalaxyCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
      </div>
    )
  }
}


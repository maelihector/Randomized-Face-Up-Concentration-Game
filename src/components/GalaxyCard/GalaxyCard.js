import React, { Component } from 'react';

export default class GalaxyCard extends Component {
  render() {
    return (
      <div className="card">
        { this.props.children }
      </div>
    )
  }
}


import React, { Component } from 'react';
import './Wrapper.css'

export default class Wrapper extends Component {
  render() {
    return (
      <div className="background">
        <div className="container">
          { this.props.children }
        </div>
      </div>
    )
  }
}


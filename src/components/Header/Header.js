import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark">
        <div className="container justify-content-center">
          <div className="row align-items-center">

            <div className="col">
              Memory Game 
            </div>
            <div className="col">
              Alert
            </div>
            <div className="col">
              Score
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

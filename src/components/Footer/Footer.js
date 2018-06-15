import React, { Component } from 'react';
import "./Footer.css";
import logo from "./../../logo.svg"; 

export default class Footer extends Component {
  render() {
    return (
  <footer className="footer">
    <span>Concentration Game 2018<img src={logo} className="React-logo" alt="logo" /></span>
  </footer>
    )
  }
}


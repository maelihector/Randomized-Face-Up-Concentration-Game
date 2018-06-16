import React, { Component } from 'react';
import './Header.css';


export default class Header extends Component {
  state = {
    score: 0,
    numtries: 0,
    greeting: "Click an image to begin. Good Luck!",
    correct: "",
    incorrect: ""
  }
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark">
        <div className="container justify-content-center">
          <div className="row align-items-center">

            <div className="col">
              Memory Game 
            </div>
            <div className="col">

              {this.state.greeting}
              {this.state.correct}
              {this.state.incorrect}

            </div>

            <div className="col">

              <p>Number of tries: {this.state.numtries}</p>
              <p> Score: {this.state.score} </p>

            </div>

          </div>
        </div>
      </nav>
    )
  }
}

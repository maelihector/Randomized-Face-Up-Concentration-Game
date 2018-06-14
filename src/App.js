import React, { Component }from 'react';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Wrapper from "./components/Wrapper/Wrapper";
import GalaxyCard from "./components/GalaxyCard/GalaxyCard";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  render() {
    return (

    <div className="app">
      <Header />
      <Hero />
      <Wrapper>
        <GalaxyCard />
      </Wrapper>
      <Footer />
    </div>

    )
  }
}

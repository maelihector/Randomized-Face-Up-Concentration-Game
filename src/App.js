import React, { Component }from 'react';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Wrapper from "./components/Wrapper/Wrapper";
import GalaxyCard from "./components/GalaxyCard/GalaxyCard";
import galaxies from "./galaxies.json";
import Footer from "./components/Footer/Footer";


export default class App extends Component {
  
  render() {
    // randomize galaxy images at the refreshing of the page.
    galaxies.sort(function(a, b){return 0.5 - Math.random()})
    return (
      <div className="app">
        <Header />
        <Hero backgroundImage="https://www.nasa.gov/sites/default/files/images/613778main_hs-2011-18-a-xlarge_web_full.jpg">
        </Hero>      
        <Wrapper>
          {galaxies.map( galaxy =>  (<GalaxyCard
            key={galaxy.id}
            name={galaxy.name}
            image={galaxy.image}
            clicked={galaxy.clicked}
          /> ))}
        </Wrapper>
        <Footer />
    </div>

    );
  }
}

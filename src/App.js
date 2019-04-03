import React, { Component } from 'react';
import SimpleSlider from './components/carousel';
import info from './popular-movies.json';
import Example from './components/carousel';
import Trends from './components/portfolio';
import CardCarousel from './components/cardforcarousel';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <SimpleSlider /> 
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;

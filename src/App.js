import React, { Component } from 'react';
import SimpleSlider from './components/carousel';
import info from './popular-movies.json';
import Trends from './components/portfolio';
import CardCarousel from './components/cardforcarousel';
import TheaterSlider from './components/TheaterSlider';
import UpcomingSlider from './components/UpcomingSlider';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <TheaterSlider />
        </div>
        <div>
          <UpcomingSlider />
        </div>
        <div>
          <Trends />
        </div>

      </div>
    );
  }
}

export default App;

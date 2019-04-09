import React, { Component } from 'react';
import info from './popular-movies.json';
import Trends from './components/Portfolio';
import TheaterSlider from './components/TheaterSlider';
import UpcomingSlider from './components/UpcomingSlider';
import ActorCards from './components/ActorCards';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TheaterSlider />
        <Trends />
        <UpcomingSlider />
        <ActorCards />
      </div>
    );
  }
}

export default App;

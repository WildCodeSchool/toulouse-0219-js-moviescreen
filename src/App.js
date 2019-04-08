import React, { Component } from 'react';
import Trends from './components/portfolio';
import TheaterSlider from './components/TheaterSlider';
import UpcomingSlider from './components/UpcomingSlider';
import ActorCards from './components/ActorCards';

import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <TheaterSlider />
        <Trends />
        <UpcomingSlider />
        <h2>Popular Actors</h2>
        <ActorCards />
        <h2>Coming Soon</h2>
        <iframe title="trailer" width="560" height="315" src="https://www.youtube.com/embed/xRc3WviXk2M" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    );
  }
}

export default App;

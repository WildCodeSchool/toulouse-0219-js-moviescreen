/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Trends from './Portfolio';
import TheaterSlider from './TheaterSlider';
import UpcomingSlider from './UpcomingSlider';
import ActorCards from './ActorCards';

class Homepage extends Component {

  render() {   
    return (
      <div className="Homepage">
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

export default Homepage;

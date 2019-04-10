/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Trends from './Portfolio';
import TheaterSlider from './TheaterSlider';
import UpcomingSlider from './UpcomingSlider';
import ActorDeck from './ActorDeck';
import './details/DetailsMovieCard.css';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <h2>In Theaters</h2>
        <TheaterSlider />
        <h2>Trends</h2>
        <Trends />
        <h2>Upcoming Movies</h2>
        <UpcomingSlider />
        <h2>Popular Actors</h2>
        <ActorDeck />
        <iframe title="trailer" width="560" height="315" src="https://www.youtube.com/embed/xRc3WviXk2M" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    );
  }
}

export default Homepage;

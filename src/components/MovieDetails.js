/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import popular from '../popular-movies.json';
import genres from '../genres.json';
import reviews from './details/reviews.json';
import casting from './details/casting.json';
import DetailsMovieCard from './details/DetailsMovieCard';
import Reviews from './details/Reviews';
import Casting from './details/Casting';
import './details/DetailsMovieCard.css';

const moviesTemp = [
  {
    director: 'Dean DeBlois',
    button1: 'http://www.google.com',
    button2: 'http://www.google.com',
    date: 'February 22, 2019',
    status: 'Released',
    trailer: 'http://www.google.com',
    avatar: 'https://www.themoviedb.org/u/cherry19',
  },
];


class MovieDetails extends Component {  
  render() {
    const movieGenres = genres.genres.filter(
      genre => popular.results[0].genre_ids.includes(genre.id)
    );
    return (     
        <div className="row">
          <div className="container">
            <DetailsMovieCard {...popular.results[4]} {...moviesTemp[0]} {...movieGenres[0]} />
            <Reviews {...reviews.results[0]} />
            <Casting {...casting.cast[0]} />
          </div>
        </div>
    );
  }
}


export default MovieDetails;
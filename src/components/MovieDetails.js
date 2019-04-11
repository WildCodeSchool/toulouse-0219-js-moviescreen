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
import axios from 'axios';

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

function partage() {
  const myArr = [];
  for (let i = 0; i < 3; i += 1) {
    myArr.push(reviews[i]);
  }
  return myArr;
}

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      reviews: [],
      casting: []
    };
    this.getMovieDetail = this.getMovieDetail.bind(this);
    this.getMovieReview = this.getMovieReview.bind(this);
    this.getMovieCast = this.getMovieCast.bind(this);
  }

  componentDidMount() {
    this.getMovieCast();
    this.getMovieDetail();
    this.getMovieReview();
  }

  getMovieDetail() {
    const movieid = this.props.match.params.id;
    const movieurl = `https://api.themoviedb.org/3/movie/${movieid}?api_key=6839ebece0568da454bfdb445830df32&language=en-US`;
    axios.get(movieurl)
      .then(response => response.data)
      .then(data => this.setState({
        movie: data
      }));
  }

  getMovieReview() {
    const movieid = this.props.match.params.id;
    const reviewurl = `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=6839ebece0568da454bfdb445830df32`;
    axios.get(reviewurl)
      .then(response => response.data)
      .then(data => this.setState({
        reviews: data.results
      }));
  }

  getMovieCast() {
    const movieid = this.props.match.params.id;
    const casturl = `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=6839ebece0568da454bfdb445830df32`;
    axios.get(casturl)
      .then(response => response.data)
      .then(data => this.setState({
        cast: data
      }));
  }

  render() {
    const movieGenres = genres.genres.filter(
      genre => popular.results[0].genre_ids.includes(genre.id)
    );
    const review = partage(reviews);
    return (
      <div className="row">
        <div className="container">

          <DetailsMovieCard {...this.state.movie} />
          <Reviews {...this.state.reviews} />
          <Casting {...casting.cast[0]} />
        </div>
      </div>
    );
  }
}

export default MovieDetails;

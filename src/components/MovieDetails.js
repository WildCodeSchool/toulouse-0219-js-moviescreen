/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';
import popular from '../popular-movies.json';
import genres from '../genres.json';
import DetailsMovieCard from './details/DetailsMovieCard';
import Reviews from './details/Reviews';
import CastingCard from './details/Casting';
import CommentForm from './details/CommentForm';
import './details/DetailsMovieCard.css';

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
        reviews: data.results.slice(0, 4)
      }));
  }

  getMovieCast() {
    const movieid = this.props.match.params.id;
    const casturl = `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=6839ebece0568da454bfdb445830df32`;
    axios.get(casturl)
      .then(response => response.data)
      .then(data => this.setState({
        casting: data.cast.slice(0, 5)
      }));
  }

  render() {
    const movieGenres = genres.genres.filter(
      genre => popular.results[0].genre_ids.includes(genre.id)
    );
    return (
      <div className="row">
        <div className="container">
          <DetailsMovieCard {...this.state.movie} />
          <Reviews reviews={this.state.reviews} />
          <CastingCard casting={this.state.casting}/>
          <CommentForm />
        </div>
      </div>
    );
  }
}

export default MovieDetails;

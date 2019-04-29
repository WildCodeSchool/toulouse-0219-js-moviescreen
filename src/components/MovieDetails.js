/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';
import popular from '../popular-movies.json';
import genres from '../genres.json';
import DetailsMovieCard from './details/DetailsMovieCard';
import Reviews from './details/Reviews';
import CastingCard from './details/Casting';
import AddComment from './details/AddComment';
import './details/DetailsMovieCard.css';
import Player from './details/Youtubeplayer';


function empty() {
  if (this.state.review) {
    return ('Sorry, No Reviews Yet');
  }
  return <Reviews reviews={this.state.reviews} />;
}

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      reviews: [],
      casting: [],
      genres: [],
      directing: [],
      trailer: [],

    };
    this.getMovieDetail = this.getMovieDetail.bind(this);
    this.getMovieReview = this.getMovieReview.bind(this);
    this.getMovieCast = this.getMovieCast.bind(this);
    this.getTrailer = this.getTrailer.bind(this);
  }

  componentDidMount() {
    this.getMovieCast();
    this.getMovieDetail();
    this.getMovieReview();
    this.getTrailer();
  }

  getMovieDetail() {
    const movieid = this.props.match.params.id;
    const movieurl = `https://api.themoviedb.org/3/movie/${movieid}?api_key=6839ebece0568da454bfdb445830df32&language=en-US`;
    axios.get(movieurl)
      .then(response => response.data)
      .then(data => this.setState({
        movie: data, genres: data.genres
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
        casting: data.cast.slice(0, 5),
        directing: data.crew.find(person => person.job === 'Director') 
      }));
  }

  getTrailer() {
    const movieid = this.props.match.params.id;
    const trailerurl = `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=6839ebece0568da454bfdb445830df32&language=en-US`;
    axios.get(trailerurl)
      .then(response => response.data)
      .then(data => this.setState({
        trailer: data.results.find(video => video.type === 'Trailer' || 'Clip' || 'Teaser')
      }));
  }

  render() {
    const movieGenres = genres.genres.filter(
      genre => popular.results[0].genre_ids.includes(genre.id)
    );

    return (
      <div className="row">
        <div className="container">
          <DetailsMovieCard {...this.state.movie} ajoutFav={this.props.ajoutFav} ajoutWatchLater={this.props.ajoutWatchLater} genres={this.state.genres} directing={this.state.directing} />
          <h2>Reviews</h2>
          <Reviews reviews={this.state.reviews} />
          <h2>Cast</h2>
          <CastingCard casting={this.state.casting} />
          <h2>Trailer</h2>
          <Player trailer={this.state.trailer} />
          <AddComment movieId={this.state.movie.id}/>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

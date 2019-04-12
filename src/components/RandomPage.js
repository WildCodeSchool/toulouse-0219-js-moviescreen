import React, { Component } from 'react';
import Text from './RandomCard';
import Buttons from './RandomButton';
import info from './../popular-movies.json';
import Choose from './../choosemovie.jpg';
import axios from 'axios';
//  imageurl = https://i.imgflip.com/2xtu0o.jpg;

class MovieGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster_path: 'https://i.imgflip.com/2xtu0o.jpg',
      id: null
    }
    this.newMovie = this.newMovie.bind(this);
  }

  componentDidMount() {
    this.newMovie();
  }

  newMovie() {
    let size = info.results.length;
    let pageNumber = (Math.floor(Math.random() * size));
    let movieNumber = (Math.floor(Math.random() * size));
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=6839ebece0568da454bfdb445830df32&language=en-US&page=${pageNumber}`)
      .then(response => response.data)
      .then(data => this.setState({ title: data.results[movieNumber].title, poster_path: data.results[movieNumber].poster_path, id: data.results[movieNumber].id }));
  }

  // newMovie() {
  //   let size = info.results.length;
  //   let number = (Math.floor(Math.random() * size));
  //   let movieName = info.results[number].title;
  //   this.setState({ title: movieName })
  //   let moviePoster = info.results[number].poster_path;
  //   this.setState({ poster_path: moviePoster })
  // }

  render() {
    return (
      <div id="quote-box" className="">
        <Buttons handlenewMovie={this.newMovie} movieName={this.state.title} moviePoster={this.state.poster_path} movieId={this.state.id} />
        <h2>You must Watch: </h2>
        <Text movieName={this.state.title} moviePoster={this.state.poster_path} movieId={this.state.id}/>
      </div>
    )
  }
}

export default MovieGenerator;
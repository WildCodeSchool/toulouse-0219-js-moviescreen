import React, { Component } from 'react';
import Text from './Text';
import Buttons from './Button';
import info from './../popular-movies.json';
import Choose from './../choosemovie.jpg';

//  imageurl = https://i.imgflip.com/2xtu0o.jpg;

class MovieGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster_path: 'https://i.imgflip.com/2xtu0o.jpg'
      ,
    }
    this.newMovie = this.newMovie.bind(this);
  }


  newMovie() {
    let size = info.results.length;
    let number = (Math.floor(Math.random() * size));
    let movieName = info.results[number].title;
    this.setState({ title: movieName })
    let moviePoster = info.results[number].poster_path;
    this.setState({ poster_path: moviePoster })
  }

  // componentDidMount() {
  //   this.newMovie();
  // }

  render() {
    return (
      <div id="quote-box" className="">
        <Text movieName={this.state.title} moviePoster={this.state.poster_path} />
        <Buttons handlenewMovie={this.newMovie} movieName={this.state.title} moviePoster={this.state.poster_path} />
      </div>
    )
  }
}

export default MovieGenerator;
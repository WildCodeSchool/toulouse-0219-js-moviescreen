import React, { Component } from 'react';
import Slider from 'react-slick';
import TheaterCard from './TheaterCard';
import info from '../popular-movies.json';
import './components.css';
import axios from 'axios';


function slicing(arr) {
  const size = 1;
  const finalarr = [];
  for (let i = 0; i < arr.length; i += size) {
    finalarr.push(arr.slice(i, i + size));
  }
  return finalarr;
}

export default class TheaterSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6839ebece0568da454bfdb445830df32&language=en-US&page=1')
      .then(response => response.data)
      .then(data => this.setState({ movies: data.results }));
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      pauseOnHover: false,
      vertical: false,
      initialSlide: 0,
      row: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const slide = slicing(this.state.movies);
    return (
      <div className="container theaterslidercontainer">
        <h2>In Theaters</h2>
        <Slider {...settings}>
          {slide.map((movie, index) => (
              <TheaterCard key={index} movie={movie} />
          ))}
        </Slider>
      </div>
    );
  }
}

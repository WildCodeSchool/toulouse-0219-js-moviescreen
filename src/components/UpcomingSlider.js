import React, { Component } from "react";
import Slider from "react-slick";
import UpcomingCard from './UpcomingCard';
import info from './../upcoming-movies.json';
import './components.css';

function slicing(arr) {
  let size = 1;
  let finalarr = [];
  for (let i = 0; i < arr.results.length; i += size) {
    finalarr.push(arr.results.slice(i, i + size));
  }
  return finalarr;
}


export default class UpcomingSlider extends Component {
  render() {
    var settings = {
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
    const slide = slicing(info);
    return (
      <div className="container upcomingslidercontainer">
        <h2>Upcoming Movies</h2>
        <Slider {...settings}>
          {slide.map((movie) => (
            <div>
              <UpcomingCard movie={movie} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
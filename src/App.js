/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import info from './popular-movies.json';
import Trends from './components/Portfolio';
import popular from './popular-movies.json';
import genres from './genres.json';
import reviews from './components/details/reviews.json';
import casting from './components/details/casting.json';
import DetailsMovieCard from './components/details/DetailsMovieCard';
import Reviews from './components/details/Reviews';
import Casting from './components/details/Casting';
import Favorite from './components/Favorite';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import movies from './popular-movies';
import FavoriteButton from './FavoriteButton';
import TheaterSlider from './components/TheaterSlider';
import UpcomingSlider from './components/UpcomingSlider';
import ActorDeck from './components/ActorDeck';
import './components/details/DetailsMovieCard.css';


import './App.css';

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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [0]
    }
  }
  ajoutFav = (id) => {
    const newFavorites = [...this.state.favorites]
    if (this.state.favorites.indexOf(id) >= 0) {
      newFavorites.splice(this.state.favorites.indexOf(id), 1)
      this.setState({ favorites: newFavorites })
    } else {
      newFavorites.push(id)
      this.setState({ favorites: newFavorites })
    }
  }
  render() {
    const movieGenres = genres.genres.filter(
      genre => popular.results[0].genre_ids.includes(genre.id)
    );
    return (

      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <h2>In Theaters</h2>
        <TheaterSlider />
        <h2>Trends</h2>
        <Trends />
        <h2>Upcoming Movies</h2>
        <UpcomingSlider />
        <h2>Popular Actors</h2>
        <ActorDeck />
        <Favorite movies={movies.results} favorites={this.state.favorites} />
        <FavoriteButton ajoutFav={this.ajoutFav} />

        <div className="row">
          <div className="container">
            <DetailsMovieCard {...popular.results[4]} {...moviesTemp[0]} {...movieGenres[0]} />
            <Reviews {...reviews.results[0]} />
            <Casting {...casting.cast[0]} />
          </div>
        </div>
        <footer className="foot">
          <Footer />
        </footer>
      </div>

    );
  }
}


export default App;

// RESULTS MAPPED

// class App extends Component {
//   render() {
//     const movieGenres = genres.genres.filter(
//       genre => popular.results[0].genre_ids.includes(genre.id)
//     );
//     return (
//       <div>
//         <div className="row">
//           <div className="container">
//             {popular.results.map(singleResult => {
//               return (
//                 <DetailsMovieCard {...singleResult} {...movies[0]} {...movieGenres[0]} />
//               )
//             })
//             }
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
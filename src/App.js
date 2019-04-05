/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import popular from './popular-movies.json';
import genres from './genres.json';
import reviews from './components/details/reviews.json';
import casting from './components/details/casting.json';
import DetailsMovieCard from './components/details/DetailsMovieCard';
import Reviews from './components/details/Reviews';
import Casting from './components/details/Casting';
import './components/details/DetailsMovieCard.css';

import './App.css';

const movies = [
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
  render() {
    const movieGenres = genres.genres.filter(
      genre => popular.results[0].genre_ids.includes(genre.id)
    );
    return (
      <div>
        <div className="row">
          <div className="container">
            <DetailsMovieCard {...popular.results[0]} {...movies[0]} {...movieGenres[0]} />
            <Reviews {...reviews.results[0]} />
            <Casting {...casting.cast[0]} />
          </div>
        </div>
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
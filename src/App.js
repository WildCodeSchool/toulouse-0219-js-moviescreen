/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import DetailsMovieCard from './components/details/DetailsMovieCard';
import './App.css';
import './components/details/DetailsMovieCard.css';
import popular from './popular-movies.json';
import genres from './genres.json';


const movies = [
  {
    director: 'Dean DeBlois',
    button1: 'http://www.google.com',
    button2: 'http://www.google.com',
    date: 'February 22, 2019',
    status: 'Released',
    trailer: 'http://www.google.com',
  },
];

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div className="row">
//           <div className="container">
//             <DetailsMovieCard {...popular.results[0]} {...movies[0]} {...geners.genres.name} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

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
//                 <DetailsMovieCard {...singleResult} {...movies[0]} {...genres.genres[0]} />
//               )
//             })
//             }
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
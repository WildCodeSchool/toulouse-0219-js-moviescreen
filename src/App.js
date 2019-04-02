import React, { Component } from 'react';
import DetailsMovieCard from './components/details/DetailsMovieCard'
import './App.css';
import './components/details/DetailsMovieCard.css';
import popular from './popular-movies.json';


const movies = [
  { 
    picture : "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    director : "Dean DeBlois",
    title : "How to Train Your Dragon",
    genre01 : "Animation",
    genre02 : "Family",
    genre03 : "Adventure",
    synopsis : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat...",
    button1 : "http://www.google.com",
    button2 : "http://www.google.com",
    date : "February 22, 2019",
    status : "Released",
    trailer : "http://www.google.com",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="container">
            <DetailsMovieCard  {...popular.results[0]} {...movies[0]} />
          </div>          
        </div>
      </div>
    );
  }
}

export default App;

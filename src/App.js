import React, { Component } from 'react';
import DetailsMovieCard from './components/details/DetailsMovieCard'
import './App.css';
import './components/details/DetailsMovieCard.css';
import popular from './popular-movies.json';


const movies = [
  { 
    director : "Dean DeBlois",
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
            <DetailsMovieCard  {...popular.results[1]} {...movies[0]} />
          </div>          
        </div>
      </div>
    );
  }
}

export default App;

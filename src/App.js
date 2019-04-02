import React, { Component } from 'react';
import DetailsMovieCard from './components/details/DetailsMovieCard'
import './App.css';
import './components/details/DetailsMovieCard.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DetailsMovieCard />
        </header>
      </div>
    );
  }
}

export default App;

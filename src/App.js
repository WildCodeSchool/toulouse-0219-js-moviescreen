import React, { Component } from 'react';
import MovieGenerator from './components/MovieCard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>You must watch :</h1>
        <MovieGenerator/>
      </div>
    );
  }
}

export default App;

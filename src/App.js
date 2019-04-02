import React, { Component } from 'react';
import Carousel from './components/carousel';
import results from './popular-movies.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="carousel" >
        <Carousel {...results.index[0]} />
        </div>
        <div className="portfolio">
        
        </div>
      </div>
    );
  }
}

export default App;

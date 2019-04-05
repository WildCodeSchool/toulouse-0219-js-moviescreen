import React, { Component } from 'react';
import Favorite from './components/Favorite';
import './App.css';
import movies from './popular-movies';
import Bouton from './components/bouton';

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
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <Favorite movies={movies.results} favorites={this.state.favorites} />
        <Bouton ajoutFav={this.ajoutFav} />
        <footer className="foot">
         
        </footer>
      </div>
    );
  }
}

export default App;

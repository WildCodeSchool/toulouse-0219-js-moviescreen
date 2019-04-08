import React, { Component } from 'react';
import Favorite from './components/Favorite';
import Trends from './components/portfolio';
import TheaterSlider from './components/TheaterSlider';
import UpcomingSlider from './components/UpcomingSlider';
import ActorCards from './components/ActorCards';
import Example from './components/navbar';
import Footer from './components/footer';
import movies from './popular-movies';
import Bouton from './bouton';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
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
          <Example />
        </header>

        <TheaterSlider />
        <Trends />
        <UpcomingSlider />
        <h2>Popular Actors</h2>
        <ActorCards />
        <h2>Coming Soon</h2>
        <iframe title="trailer" width="560" height="315" src="https://www.youtube.com/embed/xRc3WviXk2M" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      
        <Favorite movies={movies.results} favorites={this.state.favorites} />
        <Bouton ajoutFav={this.ajoutFav} />
        <footer className="foot">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;

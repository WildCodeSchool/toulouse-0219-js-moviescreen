/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import MovieGenerator from './components/RandomPage'
import {Route} from 'react-router-dom';
import Favorite from './components/Favorite';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RandomPage from './components/RandomPage';
import MovieDetails from './components/MovieDetails';
import Homepage from './components/Homepage';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
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
          <Navbar />
        </header>

        <Route path="/" exact component={Homepage} />
        <Route path="/movie-details/:id" exact component={MovieDetails} />
        <Route path="/favorites" render={(props) => <Favorite {...props} favorites={this.state.favorites}/>} />
        <Route path="/i-feel-lucky" exact component={RandomPage}></Route>
    <footer className="foot">
          <Footer />
        </footer>
      </div>

    );
  }
}

export default App;
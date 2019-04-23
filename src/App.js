/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Favorite from './components/Favorite';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WatchLater from './components/WatchLater'
import MovieDetails from './components/MovieDetails';
import Homepage from './components/Homepage';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    const watchL = JSON.parse(localStorage.getItem('watchLater'))
    const favorites = JSON.parse(localStorage.getItem('favoris'))
    this.state = {
      watchL: watchL || [] ,
      favorites: favorites || []
    }
  }
  
  ajoutWatchLater = (id) => {
    const newWatchL = [...this.state.watchL]
    if (this.state.watchL.indexOf(id) >= 0) {
      newWatchL.splice(this.state.watchL.indexOf(id), 1)
      this.setState({ watchL: newWatchL }, () => localStorage.setItem('watchLater', JSON.stringify(this.state.watchL)) )
    } else {
      newWatchL.push(id)
      this.setState({ watchL: newWatchL }, () => localStorage.setItem('watchLater', JSON.stringify(this.state.watchL)) )
    }
  }

  ajoutFav = (id) => {
    const newFavorites = [...this.state.favorites]
    if (this.state.favorites.indexOf(id) >= 0) {
      newFavorites.splice(this.state.favorites.indexOf(id), 1)
      this.setState({ favorites: newFavorites }, () => localStorage.setItem('favoris', JSON.stringify(this.state.favorites)) )
    } else {
      newFavorites.push(id)
      this.setState({ favorites: newFavorites }, () => localStorage.setItem('favoris', JSON.stringify(this.state.favorites)))
    }
}
  
  render() {
    return (
 
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <Route path="/" exact component={Homepage} />
        <Route path="/movie-details/:id" exact render={(props) => <MovieDetails {...props} ajoutFav={this.ajoutFav} ajoutWatchLater={this.ajoutWatchLater}/>} />
        <Route path="/favorites" render={(props) => <Favorite {...props} favorites={this.state.favorites} ajoutFav={this.ajoutFav}/>} />
        <Route path="/watch-later" render={(props) => <WatchLater {...props} watchL={this.state.watchL} ajoutWatchLater={this.ajoutWatchLater}/>} /> 
        
        <footer className="foot">
          <Footer />
        </footer>
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
import React from 'react'; 
import Favorite from './Favorite';
import FavoriteButton from '../FavoriteButton';
import movies from './../popular-movies';

class FavoriteFinal extends React.Component {
  render() {
    return (
      <div>
        <h1>Mes favoris</h1>
        <Favorite movies={movies} favorites={this.state.favorites} />
        <FavoriteButton ajoutFav={this.ajoutFav} />
      </div>
    )
  }
}

export default FavoriteFinal
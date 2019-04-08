import React from 'react';
import movies from '../popular-movies.json';

class Bouton extends React.Component {
  render() {
    return (
      <div className="mb-4">
        <button onClick={() => this.props.ajoutFav(299537)}> Add to Favorite</button>
      </div>
    );
  }
}

// remplacer 166428 par movie.id 
export default Bouton  
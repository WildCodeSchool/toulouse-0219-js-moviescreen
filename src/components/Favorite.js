import React from 'react';
import movies from './../popular-movies';

const Favorite = (props) => (
  <ul>
    {
      props.movies.filter(movie => props.favorites.includes(movie.id))
        .map(movie => (<p>{movie.title}</p>))
    }
  </ul>
)

export default Favorite
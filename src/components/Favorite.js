import React from 'react';
import movies from './../popular-movies';

const Favorite = (props) => (
  <ul>
    {
      props.movies.filter(movie => props.favorites.includes(movie.id))
        .map(movie => (
          <li>
            {movie.title}
            {movie.overview}
          </li>
          /* la jajoute la page detail avec tout ce qui est movie.title movie.actor etc */
        ))
    }
  </ul>
);

export default Favorite;

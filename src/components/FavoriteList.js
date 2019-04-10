import React from 'react';
import movies from '../popular-movies';

const FavoriteList = props => (
  <div>
    {
      props.movies.map(
        movie => {
          return (<div key={movie.popularity}>
            {movie.popularity}
          </div>);
        }
      )
    }
  </div>
);

export default FavoriteList ;

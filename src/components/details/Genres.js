/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import genres from './genres.json';

class Genres extends Component {
  render() {
    function partage() {
      const myArr = [];
      for (let i = 0; i < genres.genres.lenght; i += 1) {
        myArr.push(genres.genres[i]);
      }
      return myArr;
    }
    
    const genre = partage(genres);

    return (
      <div>
        {genre.map(({ name }) => (
          <span className="my-genre">{name}</span>
        ))}
      </div>
    );
  }
}

export default Genres;

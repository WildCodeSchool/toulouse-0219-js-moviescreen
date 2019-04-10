import React from 'react';
import axios from 'axios';



class Favorite extends React.Component {
    
    getMovies(arr) {
    arr.map( (favorite) => {
    axios.get('https://api.themoviedb.org/3/movie/{favorite}?api_key=<<api_key>>&language=en-US')
      .then(response => response.data)
      .then(data => this.setState({ movies: data.results }))});
  }

  render() {
    return (
      <ul>
      {
        // this.state.movies.filter(movie =>  this.props.favorites.includes(movie.id))
        //   .map(movie => (
        //     <li>
        //       {movie.title}
        //       {movie.overview}
        //     </li>
        //     /* la jajoute la page detail avec tout ce qui est movie.title movie.actor etc et mettre une card a la place des li*/
        //   ))
        getMovies(this.props.favorites) 
      }
    </ul>
    )
  }
}

export default Favorite;

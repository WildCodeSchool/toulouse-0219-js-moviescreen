import React from 'react';
import axios from 'axios';
import movies from '../popular-movies';
import FavoriteList from './FavoriteList';



class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  

    
    getMovies() {
    const arr = [329996, 424783]
    const requests = arr.map(favorite => {
    return axios.get(`https://api.themoviedb.org/3/movie/${favorite}?api_key=6839ebece0568da454bfdb445830df32&language=en-US`)
      .then(response => response.data)
    })
    Promise.all(requests)
    .then((movies)=> this.setState({ movies: movies }) )
      // .then(data => this.setState({ movies: data.results }))});
    
  }

  render() {
    return (
      
        // this.state.movies.filter(movie =>  this.props.favorites.includes(movie.id))
        //   .map(movie => (
        //     <li>
            
        //       {movie.overview}
        //     </li>
        //     /* la jajoute la page detail avec tout ce qui est movie.title movie.actor etc et mettre une card a la place des li*/
        //   ))
        <div>

<FavoriteList movies={this.state.movies} />
        </div>
     
    )
  }
}

export default Favorite;

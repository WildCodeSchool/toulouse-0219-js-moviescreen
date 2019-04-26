import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

class ResultMovie extends React.Component {
  render() {
    return (
      <Link to={`/movie-details/${this.props.movie.id}`}>
        <Card key={this.props.movie.id} className="moviecard">
        {!this.props.movie.poster_path ? 
        <CardImg className="cardimage" top width="100%" src={`https://via.placeholder.com/249x373?text=${this.props.movie.title}`} alt={this.props.movie.title} />
     : <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.props.movie.poster_path}`} alt={this.props.movie.title} />
      }
        </Card>
      </Link>
    )
  }
}

export default ResultMovie;
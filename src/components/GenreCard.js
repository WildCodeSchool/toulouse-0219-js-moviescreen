import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

class GenreCard extends React.Component {
  render() {
    return (
      <Link to={`/movie-details/${this.props.id}`}>
        <Card key={this.props.id} className="moviecard">
          <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.props.poster_path}`} alt={this.props.title} />
        </Card>
      </Link>
    )
  }
}

export default GenreCard;
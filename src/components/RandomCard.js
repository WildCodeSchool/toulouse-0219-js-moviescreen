import React, { Component } from 'react';
import {
 Card, Button, CardImg, CardTitle, CardBody 
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container randomcardcontainer">
        <Card className="randommoviecard mx-auto">
          <Link to={`/movie-details/${this.props.movieId}`}>
            <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.props.moviePoster}`} alt="Card " />
          </Link>
          <CardBody>
            <CardTitle className="blush randommoviename">{this.props.movieName}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}


export default Text;

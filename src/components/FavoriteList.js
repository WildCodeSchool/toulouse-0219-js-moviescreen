import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import movies from '../popular-movies';

const FavoriteList = props => (
  <div>
    {
      props.movies.map(
        movie => {
          return (
<div className="container img-container" key={movie.popularity}>
            <Card>
              <CardImg width="150vh" height="15vh" top src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`} alt="Card image cap" />
        <CardBody>
          <CardTitle>{movie.original_title}</CardTitle>
          <CardSubtitle>{movie.tagline}</CardSubtitle>
          <CardText>{movie.overview}</CardText>
          
        </CardBody>
      </Card>
          </div>
          );
        }
      )
    }
  </div>
);

export default FavoriteList ;

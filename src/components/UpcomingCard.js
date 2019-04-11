import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardDeck, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const UpcomingCard = (props) => {
  return (
    <div className="container">
      {
        props.movie.map(({ title, poster_path, id }) => (
          <Link to={`/MovieDetails/${id}`}>
            <Card className="moviecard">
              <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt="Card " />
            </Card>
          </Link>
        ))
      }
    </div>

  );
};

export default UpcomingCard;

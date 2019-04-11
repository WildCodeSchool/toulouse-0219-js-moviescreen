import React, { Component } from 'react';
import { Card, Button, CardImg, CardBody } from 'reactstrap';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';

const TheaterCard = (props) => {

  return (
    <div className="container">
      {
        props.movie.map(({ title, poster_path, id }) => (
          <Link to={`/MovieDetails/${id}`}>
            <Card key={id} className="moviecard">
              <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt={title} />
            </Card>
          </Link>
        ))
      }
    </div>

  );
};

export default TheaterCard;

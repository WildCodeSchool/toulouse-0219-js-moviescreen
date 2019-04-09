import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardDeck, CardBody } from 'reactstrap';
import info from './../popular-movies.json';
import './components.css';

const TheaterCard = (props) => {

  return (
    <div className="container">
      {
        props.movie.map(({ title, poster_path, id }) => (
          <Card key={id} className="moviecard">
            <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt="Card " />
            <CardBody>
              <Button outline color="info" className="buttoncard">See More</Button>
            </CardBody>
          </Card>
        ))
      }
    </div>

  );
};

export default TheaterCard;


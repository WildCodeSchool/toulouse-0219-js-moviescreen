import React, { Component } from 'react';
import {
  Card, Button, CardImg, CardBody
} from 'reactstrap';

const TheaterCard = (props) => (
  <div className="container">
    {
        props.movie.map(({ title, poster_path, id }) => (
          <Card key={id} className="moviecard">
            <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt={title} />
            <CardBody>
              <Button outline color="info" className="buttoncard">See More</Button>
            </CardBody>
          </Card>
        ))
      }
  </div>

);

export default TheaterCard;

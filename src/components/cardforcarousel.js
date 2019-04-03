import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardDeck, CardBody } from 'reactstrap';
import info from './../popular-movies.json';

// const Travels = () => results.map(travel => (
//   <Travel title={travel.title} poster_path={travel.poster_path}  />  ));

// export default Travels;

const CardCarousel = (props) => {

  return (
    <div className="container">
      <CardDeck>
        {
          props.movies.map(({ title, poster_path }) => (
            <Card>
              <CardImg top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt="Card " />
              <CardBody>
                <CardTitle>{title}</CardTitle>
                <Button>Button</Button>
              </CardBody>
            </Card>))
        }
        </CardDeck>
    </div>
  );
};

export default CardCarousel;
import React, { Component } from 'react';



import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';

const CardCarousel = ({title, poster_path}) => {
  
  return (
    <div className="container">
    <CardGroup>
      <Card>
        <CardImg top width="100%" src={poster_path} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={poster_path} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={poster_path} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
         <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
  );
};

export default CardCarousel;
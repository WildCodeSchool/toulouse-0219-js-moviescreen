import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardBody } from 'reactstrap';

class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container randomcardcontainer">
        <Card className="randommoviecard mx-auto">
          <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.props.moviePoster}`} alt="Card " />
          <CardBody>
            <CardTitle className="blush">{this.props.movieName}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}


export default Text;

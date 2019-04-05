import React, { Component } from "react";
import { Card, Button, CardImg, CardTitle, CardBody } from 'reactstrap';
import './components.1.css';

// function getimageurl(str) {
//   if (str.startWith('https')) {
//     return ('https://i.imgflip.com/2xtu0o.jpg') }
//     else {
//       return (`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.props.moviePoster}`)
//     }
//   }


class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container randomcardcontainer">
        <Card className="moviecard mx-auto">
          <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.props.moviePoster}`} alt="Card " />
          <CardBody>
            <CardTitle>{this.props.movieName}</CardTitle>
            <Button outline color="info" className="buttoncard">See More</Button>
          </CardBody>
        </Card>
      </div>


    )
  }
}


export default Text;
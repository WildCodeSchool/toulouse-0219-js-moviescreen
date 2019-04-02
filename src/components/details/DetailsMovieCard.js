import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class DetailsMovieCard extends Component {
  render() {
    return (
      <div>
      <Card>
        <CardImg top src="http://lorempixel.com/output/nightlife-h-c-380-500-4.jpg" alt="Card image cap" className="fluid" style={{maxWidth : "540px",}}/>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <div className="card mb-3" style={{maxWidth : "540px",}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="http://lorempixel.com/output/nightlife-h-c-380-500-4.jpg" className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
}

export default DetailsMovieCard;

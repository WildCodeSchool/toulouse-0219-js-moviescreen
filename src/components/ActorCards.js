import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import info from './../popular-movies.json';
 import './components.css';

const ActorCards = (props) => {
  return (
    <div className="container actorcardscontainer">
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="http://s3.media.squarespace.com/production/920827/11462743/_wGr8njEWjtI/TMokV7iSzhI/AAAAAAAAN7c/W3-Wm2wPaPU/s1600/jerry-seinfeld-banana.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Movie</CardSubtitle>
          <Button>See More</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="http://s3.media.squarespace.com/production/920827/11462743/_wGr8njEWjtI/TMokV7iSzhI/AAAAAAAAN7c/W3-Wm2wPaPU/s1600/jerry-seinfeld-banana.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Movie</CardSubtitle>     
          <Button>See More</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="http://s3.media.squarespace.com/production/920827/11462743/_wGr8njEWjtI/TMokV7iSzhI/AAAAAAAAN7c/W3-Wm2wPaPU/s1600/jerry-seinfeld-banana.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Movie</CardSubtitle>
          <Button>See More</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="http://s3.media.squarespace.com/production/920827/11462743/_wGr8njEWjtI/TMokV7iSzhI/AAAAAAAAN7c/W3-Wm2wPaPU/s1600/jerry-seinfeld-banana.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Movie</CardSubtitle>
          <Button>See More</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
};

export default  ActorCards;
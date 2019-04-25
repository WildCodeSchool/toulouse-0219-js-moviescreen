import React, { Component } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardBody
} from 'reactstrap';
import './components.css';

const ActorCards = (props) => (
  <div>
    {props.actor.map(({ name, profile_path, id }) => (
      <Card key={id} className="actorcard">
        <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${profile_path}`} alt="Card " />
        <CardBody>
          <CardTitle className="actorname">{name}</CardTitle>
        </CardBody>
      </Card>
    ))}
  </div>
);
export default ActorCards;

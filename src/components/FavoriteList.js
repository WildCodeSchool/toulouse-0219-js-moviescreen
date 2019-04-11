import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardGroup } from 'reactstrap';
import movies from '../popular-movies';
import { Container, Row, Col } from 'reactstrap';

const FavoriteList = props => (
  <div className="container">
  <Row>
    <CardGroup className="color-cardd mt-4 mb-4">
    {
      props.movies.map(
        movie => (         
            <Col lg="3" md="4" sm="6" xs="6">

            <Card className="mb-3 mt-3" className="card-essai">
              <CardImg width="100px"top  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="Card image cap" />
        <CardBody>
          <CardTitle className="f-dis">{movie.original_title}</CardTitle>
          <CardSubtitle className="f-dis">{movie.tagline}</CardSubtitle>
          <CardText></CardText>
          
        </CardBody>
      </Card>
          
          </Col>
          ))}
    </CardGroup>
    </Row>
  </div>
);

export default FavoriteList ;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import info from './../popular-movies.json';
import './components.css';

export default class Trends extends React.Component {
  render() {
    return (
      <Container>

        <Row className="p-2">
          {info.results.map(({ title, poster_path }) => (
            <Col lg="3" md="6" sm="12" ><img className="img-fluid p-3 posterfolio" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt="pics" /></Col>
          ))}
        </Row>

      </Container>
    );
  }
}

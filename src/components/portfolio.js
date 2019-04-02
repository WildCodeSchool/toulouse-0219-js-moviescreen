import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="4" md="6" sm="12"><img src={this.poster_path.index[0]}/></Col>
          <Col lg="4" md="6" sm="12"><img src={this.poster_path.index[1]}/></Col>
          <Col lg="4" md="6" sm="12"><img src={this.poster_path.index[2]}/></Col>
          <Col lg="4" md="6" sm="12"><img src={this.poster_path.index[3]}/></Col>
          <Col lg="4" md="6" sm="12"><img src={this.poster_path.index[4]}/></Col>
          <Col lg="4" md="6" sm="12"><img src={this.poster_path.index[5]}/></Col>
          <Col lg="4" md="6" sm="12"><img src={this.poster_path.index[6]}/></Col>
          <Col lg="4" md="6" sm="12"><img src={this.poster_path.index[7]}/></Col>
          <Col lg="4" md="6" sm="12"><img src={this.poster_path.index[8]}/></Col>
          <Col lg="4" md="6" sm="12"><img src={this.poster_path.index[9]}/></Col>
        </Row>
    
      </Container>
    );
  }
}

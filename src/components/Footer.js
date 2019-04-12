import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <Container className="footercontainer">
        <Row>
          <Col>
            <i className="fab fa-facebook fa-2x blush mr-3" />
            <i className="fab fa-instagram fa-2x blush mr-3" />
            <i className="fab fa-twitter fa-2x blush mr-3" />
          </Col>
        </Row>
        <Row>
          <Col className="blush footerquote">"Mama always said life was like React. You never know what you're gonna get"</Col>
        </Row>
        <Row>
          <Col className="blush footercredit">From Toulouse With &#128156; </Col>
        </Row>
      </Container>
    );
  }
}

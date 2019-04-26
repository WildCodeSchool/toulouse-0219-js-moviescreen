import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardGroup
} from 'reactstrap';
import { Row, Col } from 'reactstrap';


const WatchLaterList = ({ movies , ajoutWatchLater }) => (
  <div className="container">
    <Row>
      <CardGroup className="color-cardd mt-4 mb-4">
        {
      movies.map(
        movie => (
          <Col lg="3" md="4" sm="6" xs="6">

            <Card className="mb-3 mt-3" className="card-essai">
              <CardImg width="100px" top src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="Card image cap" />
              <CardBody>
                <CardTitle className="f-dis">{movie.original_title}</CardTitle>
                <CardSubtitle className="f-diss">{movie.tagline}</CardSubtitle>
              </CardBody>
              <button onClick={()=>ajoutWatchLater(movie.id)} className="btn btn-dark my-btn btn-block">
                  Delete to watch later
                </button>
            </Card>
            
          </Col>
        )
      )}
      </CardGroup>
    </Row>
  </div>
);

export default WatchLaterList;
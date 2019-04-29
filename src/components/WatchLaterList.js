import React from 'react';
import {
 Card, CardImg, Row, Col 
} from 'reactstrap';
import { Link } from 'react-router-dom';

const WatchLaterList = ({ movies, ajoutWatchLater }) => (
  <div className="container">
  <h3>Your Movies to Watch Later</h3>
    <Row>
      {
        movies.map(
          movie => (
            <Col lg="3" md="4" sm="6" xs="6">
              <Card className="mb-3 mt-3" className="card-essai mb-5">
                <Link to={`/movie-details/${movie.id}`}>
                  <CardImg width="100px" top src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="Card image cap" />
                </Link>
                <a onClick={() => ajoutWatchLater(movie.id)} className="btn my-btn btn-block font">
                  Delete To Watch Later
                </a>
              </Card>
            </Col>
          )
        )
      }
    </Row>
  </div>
);

export default WatchLaterList;

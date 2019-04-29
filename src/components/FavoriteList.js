import React from 'react';
import { Card, CardImg, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const FavoriteList = ({ movies, ajoutFav }) => (
  <div className="container">
  <h3>Your Favorites Movies</h3>
    <Row>
      {
        movies.map(
          movie => (
            <Col lg="3" md="4" sm="6" xs="6" className="trendscol mb-5">
              <Card className="mb-5 mt-5" className="card-essai">
                <Link to={`/movie-details/${movie.id}`}>
                  <CardImg width="100px" top src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="Card image cap" />
                </Link>
                <a onClick={() => ajoutFav(movie.id)} className="btn my-btn btn-block font" >
                  Delete From My Favorites
                </a>
              </Card>
            </Col>
          )
        )
      }
    </Row>
  </div>
);

export default FavoriteList;

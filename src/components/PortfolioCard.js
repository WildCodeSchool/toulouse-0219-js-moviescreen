import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const PortfolioCard = (props) => (
  <div>
    {
        props.movie.map(({ title, poster_path, id }) => (
          <Link to={`/movie-details/${id}`}>
            <Card key={id} className="moviecard">
              <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt={title} />
            </Card>
          </Link>
        ))}
  </div>
);
export default PortfolioCard;

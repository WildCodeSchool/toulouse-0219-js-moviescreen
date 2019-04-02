import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class DetailsMovieCard extends Component {
  render() {
      
    const {picture, title, synopsis, button, director, genre01, genre02, genre03, date, status} = this.props;

    return (
    <div>
      <div className="card m-4">
        <div className="row no-gutters m-3">
          <div className="col-md-4 col-lg-6">
            <img src={picture} className="card-img my-card-img" alt="" />
          </div>
          <div className="col-md-8 col-lg-6 p-2">
            <div className="card-body my-card-body p-0 pl-3">
              <h2 className="card-title pb-4">{title}</h2>
              <h5 className="pb-4">
                Genre: <span className="my-genre">{genre01}</span><span className="my-genre">{genre02}</span><span className="my-genre">{genre03}</span></h5>
              <p>Directed by: <span className='font-weight-bold'>{director}</span></p>             
              <p>Status: <span className='font-weight-bold'>{status}</span></p>
              <p className="card-text"><small className="text-muted">Release date: {date}</small></p>
              <p className="card-text">{synopsis}</p>              
              <a href="http://www.google.com" className="btn btn-primary my-btn my-3">Add to my favorits</a>
              <a href="http://www.google.com" className="btn btn-primary my-btn mt-3">Add to watch later</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
}

export default DetailsMovieCard;

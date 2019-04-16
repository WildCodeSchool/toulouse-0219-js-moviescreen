/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

class DetailsMovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: '',
    };
  }


  render() {
    const {
      poster_path,
      original_title,
      overview,
      button1,
      button2,
      director,
      release_date,
      status,
      video,
      vote_average,
      name,
      id,
      key,
    } = this.props;

// let now = Number({vote_average} * 10);

    return (
      <div>
        <div className="container detailcontainer">
          <div className="row">
            <div className="col ml-4 mt-4">
              <h2>{original_title}</h2>
            </div>
          </div>
        </div>
        <div className="detailcard card m-4">
          <div className="row no-gutters m-3">
            <div className="col-md-4 col-lg-6">
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`
                }
                className="card-img my-card-img"
                alt=""
              />
  
            </div>
            <div className="col-md-8 col-lg-6 p-2">
              <div className="card-body my-card-body p-0 pl-lg-3 d-flex flex-column">
                <p className="pb-4 pt-4 blush">
                  Genres :
                  {' '}
                  {this.props.genres.map((genre) => (
                    <span className="my-genre p-2 white">{genre.name}</span>
                  ))}
                </p>
                <p className="blush">
                  Directed by :
                  {'  '}
                  <span className="font-weight-bold white">{director}</span>
                </p>
                <p className="blush">
                  Status :
                  {'  '}
                  <span className="font-weight-bold white">{status}</span>
                </p>
                <p className="card-text blush">

                  Release date :
                  {'  '}
                  <span className="font-weight-bold white">{release_date}</span>
                </p>
                <p className="card-text pt-5 pb-1 my-overview white">{overview}</p>
                <p className="my-3 mt-auto blush">
                  Vote:
                  {' '}
                  <span className="font-weight-bold white">{vote_average}</span>
                </p>
                 {/* <div className="text-center" />
                <Progress className="mt-3 mb-3" value="rate({vote_average})" /> 
                <ProgressBar className="mt-3 mb-3" variant="info" now={rate} label={`${rate}%`} srOnly/> */}
                <a href={button1} className="btn btn-primary my-btn btn-block">
                  Add to my favorits
                </a>
                <a href={button2} className="btn btn-primary my-btn btn-block">
                  Add to watch later
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsMovieCard;

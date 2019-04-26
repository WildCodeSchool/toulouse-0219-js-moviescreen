/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import StarRatingComponent from "react-star-rating-component";

class DetailsMovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: '',
      rating: 1
    };
  }


  render() {
    const {
      poster_path,
      original_title,
      overview,
      button1,
      button2,
      release_date,
      status,
      video,
      vote_average,
      name,
      id,
      key,
    } = this.props;
    const { rating } = this.state;
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
              {!poster_path ? (
                <img
                  src={`https://via.placeholder.com/514x771?text=${original_title}`}
                  className="card-img my-card-img"
                  alt="Poster"
                />
              )
                : (
                  <img
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
                    className="card-img my-card-img"
                    alt="Poster"
                  />
                )
              }
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
                  {' '}
                  {!this.props.directing ? <span className="font-weight-bold white">Unknown</span>
                    : <span className="font-weight-bold white">{this.props.directing.name}</span>}
                </p>
                <p className="blush">
                  Status :
                  {' '}
                  <span className="font-weight-bold white">{status}</span>
                </p>

                <p className="card-text blush">

                  Release date :
                  {' '}
                  <span className="font-weight-bold white">{release_date}</span>
                </p>
                <p className="card-text pt-5 pb-1 my-overview white">{overview}</p>
                <h4 className="my-3 mt-auto blush">
                Vote:
                  {vote_average}
                </h4>
                <p className="my-3 mt-auto blush">
                  Vote:
                  {' '}
                  <span className="font-weight-bold white">{vote_average}</span>
                  <div>
                    <StarRatingComponent
                      name="rate2"
                      editing={false}
                      renderStarIcon={() => <span>&#9733;</span>}
                      starCount={10}
                      value={vote_average}
                    />
                  </div>
                </p>
                <button onClick={()=>this.props.ajoutFav(id)} href={button1} className="btn btn-primary my-btn btn-block">
                  Add to my favorits
                </button>
                <button onClick={()=>this.props.ajoutWatchLater(id)} href={button2} className="btn btn-primary my-btn btn-block">
                  Add to watch later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsMovieCard;

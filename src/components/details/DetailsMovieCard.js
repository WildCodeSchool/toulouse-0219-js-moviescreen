/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import trailers from './trailers.json';

class DetailsMovieCard extends Component {
  render() {
    const {
      poster_path,
      original_title,
      overview,
      button1,
      button2,
      director,
      genre_ids,
      release_date,
      status,
      video,
      trailer,
      vote_average,
      name,
      id,
      key,
    } = this.props;


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
              <a href={`https://www.youtube.com/watch?v=${video}`} target="_blank">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/social-media-glossy/512/7-player_windows_media_player_video_social-512.png"
                  className="my-video-player"
                  alt="Click to view the trailer"
                  title="Click to view the trailer"
                />
              </a>
            </div>
            <div className="col-md-8 col-lg-6 p-2">
              <div className="card-body my-card-body p-0 pl-lg-3 d-flex flex-column">
                <h5 className="pb-4 blush">
                  Genre:
                  {' '}
                  <span className="my-genre">{name}</span>
                  <span className="my-genre">{name}</span>
                  <span className="my-genre">{name}</span>
                </h5>
                <p className="blush">
                  Directed by:
                  {' '}
                  <span className="font-weight-bold white">{director}</span>
                </p>
                <p className="blush">
                  Status:
                  {' '}
                  <span className="font-weight-bold white">{status}</span>
                </p>
                <p className="card-text">
                  <small className="blush">
                    Release date: 
                    {release_date}
                  </small>
                </p>
                <p className="card-text pb-2 my-overview white">{overview}</p>
                <h4 className="my-3 mt-auto blush">
                Vote:
                  {vote_average}
                </h4>
                <a href={button1} className="btn btn-info my-btn btn-block">
                  Add to my favorits
                </a>
                <a href={button2} className="btn btn-info my-btn btn-block">
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

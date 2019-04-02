import React, { Component } from 'react'

class DetailsMovieCard extends Component {
  render() {
      
    const {poster_path, original_title, overview, button1, button2, director, genre_ids, release_date, status, video} = this.props;

    return (
    <div>
      <div className="card m-4">
        <div className="row no-gutters m-3">
          <div className="col-md-4 col-lg-6">
            <img src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + poster_path} className="card-img my-card-img" alt="" /><a href={video} target="_blank"><img src="https://cdn1.iconfinder.com/data/icons/social-media-glossy/512/7-player_windows_media_player_video_social-512.png" className="my-video-player"/></a>
          </div>
          <div className="col-md-8 col-lg-6 p-2">
            <div className="card-body my-card-body p-0 pl-lg-3">
              <h2 className="card-title pb-4">{original_title}</h2>
              <h5 className="pb-4">
                Genre: <span className="my-genre">{genre_ids}</span><span className="my-genre">{genre_ids}</span><span className="my-genre">{genre_ids}</span></h5>
              <p>Directed by: <span className='font-weight-bold'>{director}</span></p>             
              <p>Status: <span className='font-weight-bold'>{status}</span></p>
              <p className="card-text"><small className="text-muted">Release date: {release_date}</small></p>
              <p className="card-text pb-2">{overview}</p>              
              <a href={button1} className="btn btn-primary my-btn my-3">Add to my favorits</a>
              <a href={button2} className="btn btn-primary my-btn mt-3">Add to watch later</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
}

export default DetailsMovieCard;

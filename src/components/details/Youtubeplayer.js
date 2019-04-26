import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Player extends React.Component {
  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      }
    };

    const trailer = this.props.trailer;
    if (!trailer) {
      return (<h4>Sorry, No Trailer Yet</h4>);
    }
    return (
      <YouTube
        className="videoplayer"
        videoId={trailer.key}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}

export default Player;

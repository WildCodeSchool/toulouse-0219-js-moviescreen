import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Player extends React.Component {
  // eslint-disable-next-line react/sort-comp
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
        videoId={this.props.trailer.key}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Player;

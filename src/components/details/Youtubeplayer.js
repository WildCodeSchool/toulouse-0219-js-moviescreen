import React, { Component } from 'react';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

class Player extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        
      }
    };
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


// class ResponsivePlayer extends Component {
//   render() {
//     return (
//       <div className='player-wrapper'>
//         <ReactPlayer
//           className='react-player'
//           url={`https://www.youtube.com/watch?v=${this.props.trailer.key}`}
//           width='100%'
//           height='100%'
//         />
//       </div>
//     )
//   }
// }
import React, { Component } from "react";
import './components.1.css';
class Buttons extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="buttons">
        <button type="button" id="new-movie" className="btn btn-danger" onClick={this.props.handlenewMovie}>I Feel Lucky</button> 
        
      </div>
    )
  }
}

export default Buttons;
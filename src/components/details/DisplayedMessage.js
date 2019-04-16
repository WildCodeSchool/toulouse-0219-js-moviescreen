import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class DisplayedMessage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      name,
      email,
      message,
      displayNone,
      title,
    } = this.props;

    let myClass = displayNone ? "d-none" : "d-block"

    return (
      <div className={myClass}>
        <div className="card mb-4">
          <div className="card-header">
          <h4>{title}</h4>
          </div>
          <div className="card-body">
            <blockquote className="mb-0">
              <p>{message}</p>
              <footer><div><span className="font-weight-bold">{name}</span> ({email})</div></footer>
            </blockquote>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayedMessage;

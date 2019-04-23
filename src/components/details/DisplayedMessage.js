import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class DisplayedMessage extends Component {
  render() {
    const {
      name,
      email,
      comment
    } = this.props;

    return (
      <div className="card my-4">
        <div className="card-header">
          <h4 className="mt-2">{name}</h4>
          <h6>{email}</h6>
        </div>
        <div>
          <div className="card-body">
            <div>{comment}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayedMessage;
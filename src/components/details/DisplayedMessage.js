import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class DisplayedMessage extends Component {
  render() {
    const {
      name,
      email,
      comment,
      id,
      isNew
    } = this.props;

    if (name) {
      return (
        <div className="card my-4">
          <div className="card-header">
            {isNew === true ? (
              <input
                style={{ float: 'right' }}
                type="button"
                value="X"
                onClick={this.props.delete}
                id={id}
              />
            ) : null}
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
    return (
      <div />
    );
  }
}

export default DisplayedMessage;

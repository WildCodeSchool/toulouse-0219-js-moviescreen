import React, { Component } from 'react';
import { ModalHeader, ModalBody } from 'reactstrap';
import './DetailsMovieCard.css';

class ActorDetails extends Component {
  render() {
    const {
      name,
      birthday,
      place_of_birth,
      biography,
      profile_path
    } = this.props;

    return (
      <div>
        <ModalHeader toggle={this.toggle}>{name}</ModalHeader>
        <ModalBody className="m-2">
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${profile_path}`}
            className="my-actor-profile-img mr-3"
            alt=""
          />
          <p>
            Birthday:
            {' '}
            <span className="font-weight-bold">{birthday}</span>
          </p>
          <p className="pb-2">
            Place of birth:
            {' '}
            <span className="font-weight-bold">{place_of_birth}</span>
          </p>
          <div>{biography}</div>
        </ModalBody>
      </div>
    );
  }
}

export default ActorDetails;

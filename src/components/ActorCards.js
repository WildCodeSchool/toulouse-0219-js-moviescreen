import React, { Component } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardBody, Modal
} from 'reactstrap';
import './components.css';
import axios from 'axios';
import ActorDetails from './details/ActorDetails';

class ActorCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  fetchData(id) {
    const actorUrl = `https://api.themoviedb.org/3/person/${id}?api_key=6839ebece0568da454bfdb445830df32&language=en-US`;
    axios
      .get(actorUrl)
      .then(response => response.data)
      .then(data => this.setState({
        actor: data
      }));
  }

  toggle(id) {
    this.fetchData(id);
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <div>
          {this.props.actor.map(({ name, profile_path, id }) => (
            <Card key={id} className="actorcard">
              <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${profile_path}`} alt="Card " onClick={() => this.toggle(id)} />
              <CardBody>
                <CardTitle className="actorname">{name}</CardTitle>
                <Button outline color="info" className="buttoncard">See More</Button>
              </CardBody>
            </Card>
          ))}
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ActorDetails {...this.state.actor} />
        </Modal>
      </div>
    );
  }
}

export default ActorCards;

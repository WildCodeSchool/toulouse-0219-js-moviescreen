import React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardBody,
  Modal
} from 'reactstrap';
import axios from 'axios';
import ActorDetails from './ActorDetails';

class Casting extends React.Component {
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
    const casting = this.props.casting;
    if (!casting[0]) {
      return (<h4>Sorry, No Cast Yet</h4>);
    }
    return (
      <div className="container castingcontainer">
        <div className="row">
          <div className="col ml-4" />
        </div>
        <div className="card m-4 castinggroup">
          <CardGroup className="mx-auto">
            {this.props.casting.map(({
              profile_path, name, character, id
            }) => (
              <Card className="castingcard">
                {this.props.buttonLabel}
                {!profile_path ? (
                  <CardImg
                    className="castingimage"
                    onClick={this.toggle}
                    top
                    width="100%"
                    src="https://via.placeholder.com/198x298?text=No+Picture"
                    alt="actor image"
                  />
                ) : (
                  <CardImg
                    className="castingimage"
                    onClick={this.toggle}
                    top
                    width="100%"
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path}`}
                    alt="actor image"
                  />
                )}
                <CardBody className="castingbody">
                  <CardTitle className="h5 font-weight-bold castingbody">
                    {name}
                  </CardTitle>
                  <CardSubtitle className="castingcharacter">
                    {character}
                  </CardSubtitle>
                </CardBody>
              </Card>
            ))}
          </CardGroup>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ActorDetails {...this.state.actor} />
          </Modal>
        </div>
      </div>
    );
  }
}

export default Casting;

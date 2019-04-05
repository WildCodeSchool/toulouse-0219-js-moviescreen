import React from "react";
import casting from "./casting.json";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import ActorDetails from "./ActorDetails";
import actors from "./actors.json";


class Casting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    function partage() {
      const myArr = [];
      for (let i = 0; i < 5; i += 1) {
        myArr.push(casting.cast[i]);
      }
      return myArr;
    }

    const actor = partage(casting);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col ml-4">
              <h2>Casting</h2>
            </div>
          </div>
        </div>
        <div className="card m-4">
          <CardGroup>
            {actor.map(({ profile_path, name, character }) => (
              <Card>
                {this.props.buttonLabel}
                <CardImg
                  onClick={this.toggle}
                  top
                  width="100%"
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path}`}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="h5 font-weight-bold">{name}</CardTitle>
                  <CardSubtitle>{character}</CardSubtitle>
                </CardBody>
              </Card>
            ))}
          </CardGroup>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ActorDetails {...actors} />
          </Modal>
        </div>
      </div>
    );
  }
}

export default Casting;
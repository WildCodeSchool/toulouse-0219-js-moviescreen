import React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardBody,
  Modal,
} from 'reactstrap';
import ActorDetails from './ActorDetails';

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
    return (
        <div className="container castingcontainer">
          <div className="row">
            <div className="col ml-4">
              <h2>Casting</h2>
            </div>
          </div>
        <div className="card m-4 castinggroup">
          <CardGroup>
            {this.props.casting.map(({ profile_path, name, character }) => (
              <Card className="castingcard">
                {this.props.buttonLabel}
                <CardImg
                  className="castingimage"
                  // DEVE ESSERE QUALCOSA COSI'
                  // onClick={() => this.toggle(actor.id)}
                  onClick={this.toggle}
                  top
                  width="100%"
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path}`}
                  alt="Card image cap"
                />
                <CardBody className="castingbody">
                  <CardTitle className="h5 font-weight-bold castingbody">{name}</CardTitle>
                  <CardSubtitle className="castingcharacter">{character}</CardSubtitle>
                </CardBody>
              </Card>
            ))}
          </CardGroup>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            {/* <ActorDetails {...actors} />  */}
          </Modal>
        </div>
        </div>
    );
  }
}

export default Casting;

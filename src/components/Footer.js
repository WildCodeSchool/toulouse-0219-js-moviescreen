import React from 'react';
import { Table } from 'reactstrap';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Input
} from 'reactstrap';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      unmountOnClose: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeUnmountOnClose(e) {
    const value = e.target.value;
    this.setState({ unmountOnClose: JSON.parse(value) });
  }

  render() {
    return (
      <Table dark>

        <tbody>


          <tr>
            <td>Catégories</td>
            <td>Jacob</td>

          </tr>
          <tr>
            <td>
              <Button color="muted" className="text-white" onClick={this.toggle}>Contact Us</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
                <ModalHeader toggle={this.toggle}>text title</ModalHeader>
                <ModalBody>
                <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
              </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>
                {' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
              </Modal>
            </td>
            <td> Crédits</td>

          </tr>
        </tbody>
      </Table>
    );
  }
}

  



import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="mb-5">Comments</h2>
            </div>
          </div>
        </div>
        <Form>
          <FormGroup>
            <Label for="examplePassword" className="castingcharacter">Your Name</Label>
            <Input
              type="input"
              name="input"
              id="exampleInput"
              placeholder="enter your name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" className="castingcharacter">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="enter your email address"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText" className="castingcharacter">Your Comment</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="write here your comment"
            />
          </FormGroup>
          <Button className="btn btn-info castingcharacter">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CommentForm;

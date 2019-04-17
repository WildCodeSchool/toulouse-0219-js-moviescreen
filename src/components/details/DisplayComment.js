import React, { Component } from 'react';
import DisplayedMessage from './DisplayedMessage';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';

class DisplayComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments:
    [
      {
        name: 'AAA',
        email: 'BBB@ee.com',
        title: 'CCC',
        message: 'DDD',
      },
      {
        name: 'aaa',
        email: 'bbb@ee.com',
        title: 'ccc',
        message: 'ddd',
      },
      {
        name: 'ZZZ',
        email: 'VVV@ee.com',
        title: 'YYY',
        message: 'XXX',
      },
    ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value });
  };

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value });
  };

  handleChangeTitle = (event) => {
    this.setState({title: event.target.value });
  };

  handleChangeMessage = (event) => {
    this.setState({message: event.target.value });
  };

  handleSubmit = (newV) => {
    const newComments = [...this.state.comments]
    newComments.push(newV)
    this.setState({ comments: newComments })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="mb-5">Comments</h2>
              <ul>
                {
                 this.state.comments.map((comment) => (<DisplayedMessage name={comment.name} email={comment.email} title={comment.title} message={comment.message} id={comment.id} />))
                  }
              </ul>
              <Form>
                  <FormGroup>
                    <Label for="examplePassword" className="castingcharacter">Your Name</Label>
                    <Input
                      type="input"
                      name="input"
                      id="exampleInput"
                      placeholder="enter your name"
                      onChange={this.handleChangeName}
                      value={this.state.name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail" className="castingcharacter">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="enter your email address"
                      onChange={this.handleChangeEmail}
                      value={this.state.email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleTitle" className="castingcharacter">Title</Label>
                    <Input
                      type="input"
                      name="input"
                      id="exampleInput"
                      placeholder="choose a title"
                      onChange={this.handleChangeTitle}
                      value={this.state.title}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText" className="castingcharacter">Your Comment</Label>
                    <Input
                      type="textarea"
                      name="text"
                      id="exampleText"
                      placeholder="write here your comment"
                      onChange={this.handleChangeMessage}
                      value={this.state.message}
                    />
                  </FormGroup>
                </Form>
              <Button onClick={this.handleSubmit} className="btn btn-info my-white-font">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayComment;

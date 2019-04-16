import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import DisplayedMessage from './DisplayedMessage';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      title: '',
      message: '',
      displayNone: true,
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

  handleSubmit = () => {
    if (this.state.name.length > 3 & this.state.email.includes("@") & this.state.message.length > 3 & this.state.title.length > 3) {
    this.setState({displayNone: false});
  } else (window.alert('All fields need to be filled. (At least 3 characters. Email must to include "@" ).')); 
} 

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="mb-5">Comments</h2>
              <DisplayedMessage {...this.state} />
              <h4 className="mb-5 my-white-font">Enter Your Message</h4>
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
              placeholder="chose a title"
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
          <Button onClick={this.handleSubmit} className="btn btn-info my-white-font">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CommentForm;

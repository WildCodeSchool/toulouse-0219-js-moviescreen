import React from 'react';
import uuid from 'uuid';
import DisplayedMessage from './DisplayedMessage';

class AddComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          name: '',
          email: '',
          comment: ''
        }
      ]
    };

    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const oldMessages = JSON.parse(localStorage.getItem('messages'));

    if (oldMessages !== null) {
      // eslint-disable-next-line no-return-assign
      oldMessages.map((item) => (
        item.isNew = false
      ));
    }

    if (localStorage.getItem('messages') !== null) {
      this.setState({
        messages: oldMessages,
      });
    }
  } 

  add(event) {
    event.preventDefault();

    const newName = this.refs.nameRef.value;
    const newEmail = this.refs.emailRef.value;
    const newComment = this.refs.commentRef.value;

    let messages

    if (localStorage.getItem('messages') === null) {
      messages = [];
    } else {
      // I used the [...this.state.messages] to create a copy of the messages array that I get from the state
      messages = [...this.state.messages];
    }

    messages.push({
      name: newName, email: newEmail, comment: newComment, id: uuid.v4(), isNew: true, movieId: this.props.movieId
    });
    localStorage.setItem('messages', JSON.stringify(messages));

    this.setState({
      messages: messages
    });

    this.refs.nameRef.value = '';
    this.refs.emailRef.value = '';
    this.refs.commentRef.value = '';
  }

  delete(event) {
    const id = event.target.getAttribute('id');
    const list = JSON.parse(localStorage.getItem('messages'));
    const newList = list.filter((item) => (
      item.id !== id
    ));
    this.setState({
      messages: newList
    });
    localStorage.setItem('messages', JSON.stringify(newList));
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="mb-5">Comments</h2>
              <ul>
                {this.state.messages.filter((item) => item.movieId === Number(this.props.movieId))
                .map(
                  (message) => (
                    <li>
                      <DisplayedMessage {...message} delete={this.delete}  />
                    </li>
                  )
                )}
              </ul>
              <h3 className="mb-4 mt-5">Add Your Comment</h3>
              <h5 className="my-white-font">Your name</h5>
              <form onSubmit={this.add} className="mb-5">
                <input
                  type="text"
                  placeholder="enter your name"
                  className="form-control my-3"
                  ref="nameRef"
                  required
                />
                <h5 className="my-white-font">Your email</h5>
                <input
                  type="email"
                  placeholder="enter your email"
                  className="form-control my-3"
                  ref="emailRef"
                  required
                />
                <h5 className="my-white-font">Your message</h5>
                <textarea
                  className="form-control my-3"
                  placeholder="enter your message"
                  ref="commentRef"
                  required
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info my-white-font my-3"
                />
              </form>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddComment;

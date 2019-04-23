import React from 'react';
import DisplayedMessage from './DisplayedMessage';

class AddComment extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [
        {
          name: '',
          email: '',
          comment: ''
        }
      ]
    };
  }

  componentDidMount() {
    if (localStorage.getItem('messages') !== null) {
      this.setState({
        messages: JSON.parse(localStorage.getItem('messages')),
      });
    }
  }

  add() {
    const newName = this.refs.nameRef.value;
    const newEmail = this.refs.emailRef.value;
    const newComment = this.refs.commentRef.value;

    if (localStorage.getItem('messages') == null) {
      const messages = [];
      messages.push({ name: newName, email: newEmail, comment: newComment });
      localStorage.setItem('messages', JSON.stringify(messages));
    } else {
      const messages = JSON.parse(localStorage.getItem('messages'));
      messages.push({ name: newName, email: newEmail, comment: newComment });
      localStorage.setItem('messages', JSON.stringify(messages));
    }
    this.setState({
      messages: JSON.parse(localStorage.getItem('messages'))
    });

    this.refs.nameRef.value = '';
    this.refs.emailRef.value = '';
    this.refs.commentRef.value = '';
  }

  delete(e) {
    const index = e.target.getAttribute('data-key');
    const list = JSON.parse(localStorage.getItem('messages'));
    list.splice(index, 1);
    this.setState({
      messages: list
    });
    localStorage.setItem('messages', JSON.stringify(list));
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="mb-5">Comments</h2>

              <h5 className="my-white-font">Your name</h5>
              <input
                type="text"
                placeholder="enter your name"
                className="form-control my-3"
                ref="nameRef"
              />
              <h5 className="my-white-font">Your email</h5>
              <input
                type="email"
                placeholder="enter your email"
                className="form-control my-3"
                ref="emailRef"
              />
              <h5 className="my-white-font">Your message</h5>
              <textarea
                className="form-control my-3"
                placeholder="enter your message"
                ref="commentRef"
              />
              <input
                type="button"
                value="Submit"
                onClick={this.add.bind(this)}
                className="btn btn-info my-white-font my-3"
              />
              <ul>
                {this.state.messages.map(
                  (message, index) => (
                    <li key={index}>
                      <DisplayedMessage {...message} />
                      <input
                        type="button"
                        value="X"
                        onClick={this.delete.bind(this)}
                        data-key={index}
                      />
                    </li>
                  ),
                  this
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddComment;

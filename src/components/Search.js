import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input, Container, Row, Col } from 'reactstrap';
import ResultMovie from './ResultMovie';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.getInfo = this.getInfo.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  getInfo(searchTerm) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6839ebece0568da454bfdb445830df32&language=en-US&query=${searchTerm}&page=1&include_adult=true`)
      .then(response => response.data)
      .then(data => this.setState({ results: data.results.slice(0, 30) }));
  }

  searchChangeHandler(event) {
    let searchTerm = event.target.value;
    this.getInfo(searchTerm);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="search"
            onChange={this.searchChangeHandler}
          />

        </form>
        <div className="container">
          <Row className="p-2">
            {this.state.results.map((movie, index) => (
              <Col lg="3" md="4" sm="6" xs="6" className="trendscol">
                <ResultMovie key={index} movie={movie} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Search;

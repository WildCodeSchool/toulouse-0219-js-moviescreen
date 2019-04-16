import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.getInfo = this.getInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    axios.get(`https://api.themoviedb.org/3/search/${this.state.query}?api_key=6839ebece0568da454bfdb445830df32&language=en-US&page=1`)
      .then(response => response.data)
      .then(data => this.setState({ movies: data.results }));
  }


  handleInputChange(event) {
    this.setState({
      query: this.search.value
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search for..."
          onChange={this.handleInputChange}
          value={this.state.query}
        />
        <button onClick={this.handleInputChange} type="submit" value="search" />
        <p>{this.state.results}</p>
      </form>
    );
  }
}

export default Search;

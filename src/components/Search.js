import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import axios from 'axios';

class Finder extends Component {
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
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=6839ebece0568da454bfdb445830df32&language=en-US&query=${this.state.query}&page=1&include_adult=true`)
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
      // <form>
      //   <InputGroup>
      //     <Input placeholder="Search for..."
      //       onChange={this.handleInputChange}
      //       value={this.state.query} />
      //     <InputGroupAddon addonType="append">
      //       <Button onClick={this.handleInputChange} type="submit" value="search" color="secondary">Search</Button>
      //     </InputGroupAddon>
      //   </InputGroup>
      //   <p>{this.state.results}</p>
      // </form>
      <form onSubmit={this.submitForm}>
        <fieldset>
          <div className="form-data">
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <InputGroupAddon addonType="append">
            <Button onClick={this.handleInputChange} type="submit" value="search" color="secondary">Search</Button>
          </InputGroupAddon>
          
            <input onClick={this.titleChange} type="submit" value="Envoyer" />
        
        </fieldset>
      </form>
    );
  }
}

export default Finder;

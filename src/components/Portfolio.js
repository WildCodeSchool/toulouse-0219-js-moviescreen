import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './components.css';

// function cutting(arr) {
//   let newarr = [];
//   for (let i = 0; i < 5; i++) {
//     newarr.push(arr[i]);
//   }
//   return newarr;
// }

export default class Trends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6839ebece0568da454bfdb445830df32&language=en-US&page=1')
      .then(response => response.data)
      .then(data => this.setState({ movies: data.results }));
  }

  render() {
    // let cut = cutting(this.state.movies);
    return (
      <Container>
        <Row className="p-2">
          {this.state.movies.map(({ poster_path, title }) => (
            <Col lg="3" md="6" sm="12"><img className="img-fluid p-3 posterfolio" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt="title" /></Col>
          ))}
        </Row>
      </Container>
    );
  }
}

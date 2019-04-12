import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './components.css';
import PortfolioCard from './PortfolioCard';

function cutting(arr) {
  const size = 1;
  const finalarr = [];
  for (let i = 0; i < 12; i += size) {
    finalarr.push(arr.slice(i, i + size));
  }
  return finalarr;
}

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
    const cut = cutting(this.state.movies);
    return (
      <Container className="trendsportfolio">
        <Row className="p-2">
          {cut.map((movie, index) => (
            <Col lg="3" md="4" sm="6" xs="6" className="trendscol">
              <PortfolioCard key={index} movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

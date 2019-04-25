import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GenreCard from './GenreCard';

class ResultGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    const genre = this.props.match.params.genre;
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6839ebece0568da454bfdb445830df32&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
      .then(response => response.data)
      .then(data => this.setState({ results: data.results }));
  }

  render() {
    return (
      <Container className="trendsportfolio">
        <Row className="p-2">
          {this.state.results.map((movie, index) => (
            <Col lg="3" md="4" sm="6" xs="6" className="trendscol">
              <GenreCard {...index} {...movie} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ResultGenre;

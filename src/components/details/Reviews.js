import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';


class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const reviews = this.props.reviews;
    if (!reviews[0]) {
      return (<h4>Sorry, No Reviews Yet</h4>);
    }
    return (
      <div className="card reviewcard m-4">
        <Nav className="reviewcard" tabs>
          {this.props.reviews.map(({ author }, index) => (
            <NavItem className="py-3 pl-3 font-weight-bold reviewcard">
              <NavLink
                className={classnames({ active: this.state.activeTab === index })}
                onClick={() => { this.toggle(index); }}
              >
                <span className="blush reviewname">{author}</span>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {this.props.reviews.map(({ content }, index) => (
            <TabPane tabId={index} className="p-4">
              <Row>
                <Col sm="12" className="">
                  <p className="white my-review">{content}</p>
                </Col>
              </Row>
            </TabPane>
          ))}
        </TabContent>
      </div>
    );
  }
}

export default Reviews;

import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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
    const {
      author,
      content,
    } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col ml-4">
              <h2>Reviews</h2>
            </div>
          </div>
        </div>
      <div className="card m-4">
        <Nav tabs>
          <NavItem className="py-3 pl-3">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              {author}
            </NavLink>
          </NavItem>
          <NavItem className="py-3">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              {author}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="p-4">
            <Row>
              <Col sm="12" className="">
                <p>{content}</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2" className="p-4">
            <Row>
              <Col sm="12">
                <p>{content}</p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
      </div>
    );
  }
}

export default Reviews;

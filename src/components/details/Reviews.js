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
            {reviews.map(({ author }, index) => (
              <NavItem className="py-3 pl-3 font-weight-bold">
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === index
                  })}
                  onClick={() => {
                    this.toggle(index);
                  }}
                >
                  {author}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            {reviews.map(({ content }, index) => (
              <TabPane tabId={index} className="p-4">
                <Row>
                  <Col sm="12" className="">
                    <p>{content}</p>
                  </Col>
                </Row>
              </TabPane>
            ))}
          </TabContent>
        </div>
      </div>
    );
  }
}

export default Reviews;

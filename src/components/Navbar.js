import React from 'react';
import {
  Collapse,
  Navbar as BootstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <BootstrapNavbar className="navbarbg" light expand="md">
        <NavbarBrand className="navbarbg nav-pills homebutton" href="/"><span className="blush">Home</span></NavbarBrand>
        <NavbarToggler className="navbarbg blush" onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar className=" navbarbg blush">
          <Nav className="navbar-expand-lg nav-pills blush" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="blush" nav caret>
                <span className="blush">Categories</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Action
                </DropdownItem>
                <DropdownItem>
                  Comedy
                </DropdownItem>
                <DropdownItem>
                  Sci-fi
                </DropdownItem>
                <DropdownItem />
                <DropdownItem>
                  Fantastique
                </DropdownItem>
                <DropdownItem>
                  Thriller
                </DropdownItem>
                <DropdownItem>
                  Horror
                </DropdownItem>
                <DropdownItem>
                  Animation
                </DropdownItem>
                <DropdownItem />
                <DropdownItem>
                  Documentary
                </DropdownItem>
                <DropdownItem>
                  Romantic
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink className="blush" href=""><span className="blush">Watch Later</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="blush" href=""><span className="blush">Favorites</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="blush" href=""><span className="blush">I feel lucky</span></NavLink>
            </NavItem>
            <NavItem className="medialogo d-flex justify-content-end">
              <NavLink className="blush" href="">
                {' '}
                <i className="fab fa-facebook fa-2x blush" />
                {' '}
                <i className="fab fa-instagram fa-2x blush" />
                {' '}
                <i className="fab fa-twitter fa-2x blush" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </BootstrapNavbar>

    );
  }
}

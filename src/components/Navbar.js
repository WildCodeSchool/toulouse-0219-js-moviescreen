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
import { Link } from 'react-router-dom';

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
        <NavbarBrand tag={Link} className=" nav-pills homebutton" to="/"><span className="white">MovieScreen</span></NavbarBrand>
        <NavbarToggler className=" white" onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar className="white">
          <Nav className="navbar-expand-lg nav-pills white" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="white" nav caret>
                <span className="white">Categories</span>
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
              <NavLink  href=""><span className="white">Watch Later</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link}  to="/favorites"><span className="white">Favorites</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href=""><span className="white">I feel lucky</span></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavItem className="medialogo nav-pills justify-content-end">
          <NavLink href="">

            <i className="fab fa-facebook fa-1x white mr-3" />

            <i className="fab fa-instagram fa-1x white mr-3" />

            <i className="fab fa-twitter fa-1x white mr-3" />
          </NavLink>
        </NavItem>
      </BootstrapNavbar>

    );
  }
}

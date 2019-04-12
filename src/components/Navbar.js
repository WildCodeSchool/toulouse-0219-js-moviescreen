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

      <BootstrapNavbar color="light" light expand="md">
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-center" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                  Catégories
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
              <NavLink href="">Watch Later</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Favorites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">I feel lucky</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                {' '}
                <i className="fab fa-facebook fa-2x" />
                {' '}
                <i className="fab fa-instagram fa-2x" />
                {' '}
                <i className="fab fa-twitter fa-2x" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </BootstrapNavbar>

    );
  }
}

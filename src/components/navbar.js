import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
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
      <div>
        <Navbar color="light" light expand="md">
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
                    Comédie
                  </DropdownItem>
                  <DropdownItem>
                    Science-fiction
                  </DropdownItem>
                  <DropdownItem>
                    
                  </DropdownItem>
                  <DropdownItem>
                    Action
                  </DropdownItem>
                  <DropdownItem>
                    Comédie
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="">Conseil de la semaine</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">A regarder</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Mes Favoris</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Je ne sais pas quoi regarder</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href=""> <i class="fab fa-facebook fa-2x"></i> <i class="fab fa-instagram fa-2x"></i> <i class="fab fa-twitter fa-2x"></i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

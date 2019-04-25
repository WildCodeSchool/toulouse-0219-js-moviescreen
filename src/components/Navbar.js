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
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <BootstrapNavbar className="navbarbg" expand="md">
        <NavbarBrand tag={Link} className=" nav-pills homebutton" to="/"><span className="white">MovieScreen</span></NavbarBrand>
        <NavbarToggler className=" white" onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar className="white">
          <Nav className="navbar-expand-lg nav-pills white categroriesbutton" navbar>
            <UncontrolledDropdown nav className="categoriesbutton" inNavbar>
              <DropdownToggle className="white categoriesbutton" nav caret>
                <span className="white">Categories</span>
              </DropdownToggle>
              <DropdownMenu right>
                <Link tag={Link} className="droplink" onClick={this.forceUpdate} to="/genre/28">
                  <DropdownItem>
                    Action
                  </DropdownItem>
                </Link>
                <Link tag={Link} className="droplink" onClick={this.forceUpdate} to="/genre/35">
                  <DropdownItem>
                    Comedy
                  </DropdownItem>
                </Link>
                <Link tag={Link} className="droplink" onClick={this.forceUpdate} to="/genre/878">
                  <DropdownItem>
                    Science fiction
                  </DropdownItem>
                </Link>
                <DropdownItem />
                <Link tag={Link} className="droplink" onClick={this.forceUpdate} to="/genre/14">
                  <DropdownItem>
                    Fantasy
                  </DropdownItem>
                </Link>
                <Link tag={Link} className="droplink" onClick={this.forceUpdate} to="/genre/53">
                  <DropdownItem>
                    Thriller
                  </DropdownItem>
                </Link>
                <Link tag={Link} className="droplink" onClick={this.forceUpdate} to="/genre/27">
                  <DropdownItem>
                    Horror
                  </DropdownItem>
                </Link>
                <Link tag={Link} className="droplink" onClick={this.forceUpdate} to="/genre/16">
                  <DropdownItem>
                    Animation
                  </DropdownItem>
                </Link>
                <Link tag={Link} className="droplink" onClick={this.forceUpdate} to="/genre/99">
                  <DropdownItem>
                    Documentary
                  </DropdownItem>
                </Link>
                <Link tag={Link} className="droplink" onClick={this.forceUpdate} to="/genre/10749">
                  <DropdownItem>
                    Romance
                  </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href=""><span className="white">Watch Later</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/favorites"><span className="white">Favorites</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/search"><span className="white">Finder</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/i-feel-lucky"><span className="white">I feel lucky</span></NavLink>
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

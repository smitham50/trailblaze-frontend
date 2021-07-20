import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getUserData } from '../Selectors/selectors';
import useClearUser from '../Utilities/useClearUser';
import { NavWrapper, NavbarBrand, BrandImage } from '../StyledComponents/StyledNavigation';

const Navigation = () => {
    const { currentUserData } = useSelector(getUserData);
    const clearUser = useClearUser();

    const handleLogout = async () => {
      localStorage.clear();
      const resp = await axios.post('https://nameless-wave-57808.herokuapp.com/api/v1/logout');

      if (resp.errors) {
        alert(resp.errors)
      } else {
        clearUser();
      }
    };

    return (
      <NavWrapper>
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          fixed="top"
          collapseOnSelect
        >
          <Nav.Link as={Link} eventKey="1" to="/">
            <NavbarBrand>
              <BrandImage
                src={process.env.PUBLIC_URL + "/noun_Trail_2056927.svg"}
                alt="brand"
                loading="lazy"
              />{" "}
              Trailblaze
            </NavbarBrand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto subtext">
              {currentUserData.logged_in ? (
                <>
                  <Nav.Link as={Link} eventKey="2" to="/trailsearch">
                    Find a Trail
                  </Nav.Link>
                  <Nav.Link as={Link} eventKey="3" to="/myhikes">
                    My Hikes
                  </Nav.Link>
                  <Nav.Link as={Link} eventKey="4" to="/account">
                    Account
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    eventKey="5"
                    to="/"
                    onClick={handleLogout}
                  >
                    Logout {currentUserData.user.username}
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} eventKey="6" to="/signup">
                    Signup
                  </Nav.Link>
                  <Nav.Link as={Link} eventKey="7" to="/login">
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>
    );
};

export default Navigation;
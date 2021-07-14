import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

const NavWrapper = styled.div`
    .navbar-link {
        text-decoration: none;
    }
    .navbar-dark .navbar-nav .nav-link {
        color: white;
        transition: .3s;
    }
    a {
        margin: 0 1em;
    }
`;

const NavbarBrand = styled(Navbar.Brand)`
    font-size: 1.7em;
    font-weight: 700;
    font-family: Balsamiq Sans, cursive;
`;

const BrandImage = styled.img`
    height: 50px;
    width: 50px;
`;


const Navigation = (props) => {
    const handleLogout = async () => {
        localStorage.clear();

        const resp = await axios.post('http://localhost:3000/api/v1/logout');

        if (resp.errors) {
            alert(resp.errors)
        } else {
            props.clearUser();
        }
    };

    return (
        <NavWrapper>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" collapseOnSelect>
                <Nav.Link as={Link} eventKey="1" to="/">
                    <NavbarBrand>
                        <BrandImage src={process.env.PUBLIC_URL + "/noun_Trail_2056927.svg"} alt="brand" loading="lazy" />   Trailblaze
                    </NavbarBrand>
                </Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {
                            props.currentUserData.logged_in
                                ?
                                <>
                                    <Nav.Link as={Link} eventKey="2" to="/trailsearch">Find a Trail</Nav.Link>
                                    <Nav.Link as={Link} eventKey="3" to="/myhikes">My Hikes</Nav.Link>
                                    <Nav.Link as={Link} eventKey="4" to="/account">Account</Nav.Link>
                                    <Nav.Link as={Link} eventKey="5" to="/" onClick={handleLogout}>Logout {props.currentUserData.user.username}</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as={Link} eventKey="6" to="/signup">Signup</Nav.Link>
                                    <Nav.Link as={Link} eventKey="7" to="/login">Login</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavWrapper>
        
    );
};

function msp(state) {
    const { 
        currentUserData,
        latitude,
        longitude
    } = state.user;

    return {
        currentUserData,
        latitude,
        longitude
    };
};

function mdp(dispatch) {
    return {
        clearUser: () => {
            dispatch({
                type: "CLEAR_USER"
            })
        }
    };
};

export default connect(msp, mdp)(Navigation);
import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const Navigation = (props) => {

    const handleLogout = async () => {
        localStorage.clear();

        const resp = await axios.post('https://nameless-wave-57808.herokuapp.com/api/v1/logout');

        if (resp.errors) {
            alert(resp.errors)
        } else {
            props.clearUser();
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar-mod" collapseOnSelect>
            <Nav.Link eventKey="1" className="nav-link navbar-link" to="/">
                <Navbar.Brand>
                        <img src={process.env.PUBLIC_URL + "/noun_Trail_2056927.svg"} alt="brand" width="30px" height="30px" loading="lazy" />   Trailblaze
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {
                        props.currentUserData.logged_in
                            ?
                                <Fragment>
                                    <Nav.Link eventKey="2" className="nav-link navbar-link" to="/trailsearch">Find a Trail</Nav.Link>
                                    <Nav.Link eventKey="3" className="nav-link navbar-link" to="/myhikes">My Favorite Hikes</Nav.Link>
                                    <Nav.Link eventKey="4" className="nav-link navbar-link" to="/account">Account</Nav.Link>
                                    <Nav.Link eventKey="5" className="nav-link navbar-link" to="/" onClick={handleLogout}>Logout {props.currentUserData.user.username}</Nav.Link>
                                </Fragment>
                            :
                                <Fragment>
                                    <Nav.Link eventKey="6" className="nav-link navbar-link" to="/signup">Signup</Nav.Link>
                                    <Nav.Link eventKey="7" className="nav-link navbar-link" to="/login">Login</Nav.Link>
                                </Fragment>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
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
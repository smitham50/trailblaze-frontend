import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import '../Stylesheets/Navbar.css';


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
            <Nav.Link as={Link} eventKey="1" to="/">
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
                                    <Nav.Link as={Link} eventKey="2" to="/trailsearch">Find a Trail</Nav.Link>
                                    <Nav.Link as={Link} eventKey="3" to="/myhikes">My Favorite Hikes</Nav.Link>
                                    <Nav.Link as={Link} eventKey="4" to="/account">Account</Nav.Link>
                                    <Nav.Link as={Link} eventKey="5" to="/" onClick={handleLogout}>Logout {props.currentUserData.user.username}</Nav.Link>
                                </Fragment>
                            :
                                <Fragment>
                                    <Nav.Link as={Link} eventKey="6" to="/signup">Signup</Nav.Link>
                                    <Nav.Link as={Link} eventKey="7" to="/login">Login</Nav.Link>
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
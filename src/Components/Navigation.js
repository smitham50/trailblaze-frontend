import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
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
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar-mod">
            <Navbar.Brand href="/">
                <img src="/Trail-blaze-intersection.jpg" alt="brand" width="30px" height="30px" loading="lazy" /> Trailblaze
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        props.currentUserData.logged_in
                            ?
                                <Fragment>
                                    <Nav.Link href="/trailsearch">Find a Trail</Nav.Link>
                                    <Nav.Link href="/myhikes">My Hiked Trails</Nav.Link>
                                    <Nav.Link href="/account">Account</Nav.Link>
                                    <Nav.Link href="/" onClick={handleLogout}>Logout {props.currentUserData.user.username}</Nav.Link>
                                </Fragment>
                            :
                                <Fragment>
                                    <Nav.Link href="/signup">Signup</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>
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
import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';

const Navigation = (props) => {

    const handleLogout = () => {
        axios.post('http://localhost:3000/api/v1/logout')
            .then(resp => {
                if (resp.errors) {
                    alert(resp.errors);
                } else {
                    props.clearUser();
                }
            });
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">Trailblaze</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        props.currentUserData.logged_in
                            ?
                                <Fragment>
                                    <Nav.Link href="/trailsearch">Find a trail</Nav.Link>
                                    <Nav.Link href="/home" onClick={ handleLogout }>Logout { props.currentUserData.user.username }</Nav.Link>
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
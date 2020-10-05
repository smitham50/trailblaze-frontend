import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Navigation extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.latitude !== prevProps.latitude) {
            this.forceUpdate();
        }
    } 

    handleLogout = () => {
        fetch('http://localhost:3000/api/v1/logout', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.errors) {
                    alert(response.errors)
                } else {
                    this.props.clearUser()
                }
            })
    };

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">Trailblaze</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        {
                            this.props.currentUserData.logged_in
                                ?
                                <Nav.Link href="/home" onClick={this.handleLogout}>Logout {this.props.currentUserData.user.username}</Nav.Link>
                                :
                                <Nav.Link href="/signup">Login/Signup</Nav.Link>
                        }
                        {
                            this.props.latitude
                                ?
                                <Nav.Link href="#">Your position: {this.props.latitude}, {this.props.longitude}</Nav.Link>
                                :
                                null
                        }
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Trails" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    };
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
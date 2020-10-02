import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const Navigation = (props) => {

    const handleLogout = () => {
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
                    props.clearUser()
                }
            })
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">Trailblaze</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    {
                        props.currentUserData.logged_in 
                        ?
                        <Nav.Link href="/home" onClick={handleLogout}>Logout {props.currentUserData.user.username}</Nav.Link>
                        :
                        <Nav.Link href="/signup">Login/Signup</Nav.Link>
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

function msp(state) {
    const { 
        currentUserData 
    } = state.user;

    return {
        currentUserData
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
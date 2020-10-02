import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

function Navigation(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">Trailblaze</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/signup">Login/Signup</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search Trails" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

function msp(state) {
    const { user } = state.user;

    return {
        user
    }
}

export default connect(msp, null)(Navigation)
import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

function Navigation(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">Trailblaze</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/login">Login/Signup</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search Trails" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
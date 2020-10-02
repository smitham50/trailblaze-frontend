import { connect } from 'react-redux';
import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = (props) => {
    return (
        <Form>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formGroupPasswordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password_confirmation" placeholder="Password Confirmation" />
            </Form.Group>
            <Form.Group controlId="formGroupSubmit"> 
                <Button>Submit</Button>
            </Form.Group>
            Already have an account?  <Link to="/login">Login</Link>
        </Form>
    );
};


function msp(state) {
    const {user} = state.user;

    return {
        user
    }
}

function mdp(dispatch) {
    return {
        userSignup: (user) => {
            dispatch({ type: "USER_SIGNUP", payload: user })
        }
    }
}

export default connect(msp, mdp)(Signup)
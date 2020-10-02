import { connect } from 'react-redux';
import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <Form>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formGroupSubmit">
                <Button>Submit</Button>
            </Form.Group>
            Don't have an account?  <Link to="/signup">Signup</Link>
        </Form>
    );
};


function msp(state) {
    const { user } = state.user;

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

export default connect(msp, mdp)(Login)
import { connect } from 'react-redux';
import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import getCoordinates from '../Scripts/getCoordinates'

const Login = (props) => {

    const handleLogin = (event) => {
        event.preventDefault();

        const userParams = {
            "user": {
                username: props.username,
                password: props.password
            }
        };

        const options = {
            method: 'post',
            url: 'http://localhost:3000/api/v1/signup',
            data: userParams
        };

        axios(options)
            .then(resp => {
                props.setUser(resp);
                getCoordinates(props.setLocation);
            });
    };

    return (
        <Form onSubmit={handleLogin}>
            <Form.Group controlId="username" >
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter username" 
                    onChange={props.handleChange}
                    name="username"
                    value={props.username}
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    onChange={props.handleChange}
                    name="password"
                    value={props.password}
                />
            </Form.Group>
            <Form.Group controlId="formGroupSubmit">
                <Button type="submit">Submit</Button>
            </Form.Group>
            Don't have an account?  <Link to="/signup">Signup</Link>
        </Form>
    );
};


function msp(state) {
    const { 
        username,
        password 
    } = state.user;

    return {
        username,
        password
    };
};

function mdp(dispatch) {
    return {
        handleChange: (e) => {
            dispatch({
                type: "HANDLE_CHANGE",
                payload: { [e.target.name]: e.target.value }
            })
        },
        setUser: (user) => {
            dispatch({ 
                type: "SET_USER", 
                payload: user 
            })
        },
        setLocation: (coords) => {
            dispatch({
                type: "SET_LOCATION",
                payload: coords
            })
        }
    };
};

export default connect(msp, mdp)(Login)
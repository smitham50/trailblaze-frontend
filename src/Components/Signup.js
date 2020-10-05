import { connect } from 'react-redux';
import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import getCoordinates from '../Scripts/getCoordinates';
import axios from 'axios';

const Signup = (props) => {

    const handleSignup = (event) => {
        event.preventDefault();

        const userParams = {
            "user": {
                username: props.username,
                password: props.password,
                password_confirmation: props.password_confirmation,
                email: props.email
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
        <Form onSubmit={handleSignup}>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter username"
                    onChange={props.handleChange}
                    name="username"
                />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter email" 
                    onChange={props.handleChange}
                    name="email"
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    onChange={props.handleChange}
                    name="password"
                />
            </Form.Group>
            <Form.Group controlId="formGroupPasswordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password Confirmation"
                    onChange={props.handleChange}
                    name="password_confirmation" 
                />
            </Form.Group>
            <Form.Group controlId="formGroupSubmit"> 
                <Button type="submit">Submit</Button>
            </Form.Group>
            Already have an account?  <Link to="/login">Login</Link>
        </Form>
    );
};


function msp(state) {
    const { 
        username,
        password,
        password_confirmation,
        email
    } = state.user;

    return {
        username,
        password,
        password_confirmation,
        email
    };
};

function mdp(dispatch) {
    return {
        handleChange: (e) => {
            dispatch({
                type: "HANDLE_CHANGE",
                payload: {[e.target.name]: e.target.value}
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

export default connect(msp, mdp)(Signup);
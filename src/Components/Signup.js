import { connect } from 'react-redux';
import React, { Fragment, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

import getCoordinates from '../Scripts/getCoordinates';
import axios from 'axios';

const Signup = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("");


    const handleSignup = (event) => {
        event.preventDefault();

        const userParams = {
            "user": {
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
                email: email
            }
        };

        const options = {
            method: 'post',
            url: 'http://localhost:3000/api/v1/signup',
            data: userParams
        };

        axios(options)
            .then(resp => {
                props.setUser( resp.data );
                getCoordinates( props.setLocation );
                localStorage.userId = resp.data.user.id;
            });
    };

    return (
        <Fragment>
            <Form onSubmit={ handleSignup }>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username"
                        onChange={ (e) => setUsername(e.target.value) }
                        name="username"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter email" 
                        onChange={ (e) => setEmail(e.target.value) }
                        name="email"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value) }
                        name="password"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPasswordConfirmation">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password Confirmation"
                        onChange={(e) => setPasswordConfirmation(e.target.value) }
                        name="password_confirmation" 
                    />
                </Form.Group>
                <Form.Group controlId="formGroupSubmit"> 
                    <Button type="submit">Submit</Button>
                </Form.Group>
                Already have an account?  <Link to="/login">Login</Link>
            </Form>
            {
                props.currentUserData && props.currentUserData.logged_in
                    ?
                    <Redirect to='/trailsearch' />
                    :
                    null
            }
        </Fragment>
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
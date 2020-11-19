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

    window.setUsername = setUsername;
    window.setPassword = setPassword;
    window.setPasswordConfirmation = setPasswordConfirmation;
    window.setEmail = setEmail;


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

    const handleOnChange = (e) => {
        const targetName = e.target.name;
        const setFormState = window[`set${targetName}`];

        setFormState(e.target.value);
    };

    return (
        <Fragment>
            <Form onSubmit={ handleSignup } >
                <Form.Group controlId="username">
                    <Form.Label className="headline">Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username"
                        onChange={ handleOnChange }
                        name="Username"
                        className="subtext"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label className="headline">Email address</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter email" 
                        onChange={ handleOnChange }
                        name="Email"
                        className="subtext"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label className="headline">Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={ handleOnChange }
                        name="Password"
                        className="subtext"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPasswordConfirmation">
                    <Form.Label className="headline">Password Confirmation</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password Confirmation"
                        onChange={ handleOnChange }
                        name="PasswordConfirmation" 
                        className="subtext"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupSubmit" className="small headline"> 
                    <Button type="submit">Submit</Button>
                </Form.Group>
                <Form.Group className="small subtext">
                    Already have an account?  <Link to="/login">Login</Link>
                </Form.Group>
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
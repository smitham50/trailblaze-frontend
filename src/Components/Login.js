import { connect } from 'react-redux';
import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import getCoordinates from '../Scripts/getCoordinates';

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        const userParams = {
            "user": {
                username: username,
                password: password
            }
        };

        const options = {
            method: 'post',
            url: 'http://localhost:3000/api/v1/login',
            data: userParams
        };

        axios(options)
            .then(resp => {
                props.setUser(resp.data);
                getCoordinates(props.setLocation);
                localStorage.userId = resp.data.user.id;
            });
    };

    return (
        <Fragment>
            <Form onSubmit={ handleLogin }>
                <Form.Group controlId="username" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username" 
                        onChange={ (e) => setUsername(e.target.value) }
                        name="username"
                        value={ username }
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        onChange={ (e) => setPassword(e.target.value) }
                        name="password"
                        value={ password }
                    />
                </Form.Group>
                <Form.Group controlId="formGroupSubmit">
                    <Button type="submit">Submit</Button>
                </Form.Group>
                Don't have an account?  <Link to="/signup">Signup</Link>
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

export default connect(msp, mdp)(Login)
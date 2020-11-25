import { connect } from 'react-redux';
import React, { Fragment, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { Link, Redirect } from 'react-router-dom';
import getCoordinates from '../Scripts/getCoordinates';
import axios from 'axios';

const Signup = (props) => {
    const { handleSubmit, register, errors } = useForm();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("");

    window.setUsername = setUsername;
    window.setPassword = setPassword;
    window.setPasswordConfirmation = setPasswordConfirmation;
    window.setEmail = setEmail;


    const handleSignup = async () => {
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

        const resp = await axios(options);

        const { error, data } = resp;

        if (!error) {
            props.setUser(data);
            getCoordinates(props.setLocation);
            localStorage.userId = data.user.id;
        } else {
            //handle error
        }
    };

    const handleOnChange = (e) => {
        const targetName = e.target.name;
        const setFormState = window[`set${targetName}`];

        setFormState(e.target.value);
    };

    return (
        <Fragment>
            <Form onSubmit={ handleSubmit(handleSignup) } >
                <Form.Group controlId="username">
                    <Form.Label className="headline">Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username"
                        onChange={ handleOnChange }
                        defaultValue={ username }
                        name="Username"
                        className="subtext"
                        ref={register({
                            required: "Username cannot be blank"
                        })}
                    />
                    <ErrorMessage
                        errors={ errors }
                        name="Username"
                        render={ ({ message }) => <p className="alert-danger flash-message subtext">{message}</p> }
                    /> 
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label className="headline">Email address</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter email" 
                        onChange={ handleOnChange }
                        defaultValue={ email }
                        name="Email"
                        className="subtext"
                        ref={register({
                            required: "Email cannot be blank",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    <ErrorMessage
                        errors={ errors }
                        name="Email"
                        render={ ({ message }) => <p className="alert-danger flash-message subtext">{message}</p> }
                    /> 
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label className="headline">Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={ handleOnChange }
                        defaultValue={ password }
                        name="Password"
                        className="subtext"
                        ref={register({
                            required: "Password cannot be blank",
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                                message: "Password must have at least 6 characters and contain at least one numeric digit, one uppercase and one lowercase letter"
                            }
                        })}
                    />
                    <ErrorMessage
                        errors={ errors }
                        name="Password"
                        render={ ({ message }) => <p className="alert-danger flash-message subtext">{message}</p> }
                    /> 
                </Form.Group>
                <Form.Group controlId="formGroupPasswordConfirmation">
                    <Form.Label className="headline">Password Confirmation</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password Confirmation"
                        onChange={ handleOnChange }
                        defaultValue={ passwordConfirmation }
                        name="PasswordConfirmation" 
                        className="subtext"
                        ref={register({
                            required: "Password confirmation cannot be blank",
                            validate: (value) => value === password || "Passwords must match"
                        })}
                    />
                    <ErrorMessage
                        errors={ errors }
                        name="PasswordConfirmation"
                        render={ ({ message }) => <p className="alert-danger flash-message subtext">{message}</p> }
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
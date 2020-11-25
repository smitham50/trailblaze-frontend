import { connect } from 'react-redux';
import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import getCoordinates from '../Scripts/getCoordinates';
import FlashMessage from '../Components/FlashMessage';

const Login = (props) => {
    const { handleSubmit, register, errors } = useForm();
    const [flashMessage, setFlashMessage] = useState(false);
    const [alert, setAlert] = useState("");
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    window.setUsername = setUsername;
    window.setPassword = setPassword;

    const handleLogin = async () => {
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

        const resp = await axios(options);

        const { error, user } = resp.data; 

        if (!error) {
            props.setUser(resp.data);
            getCoordinates(props.setLocation);
            localStorage.userId = user.id;
        } else {
            setFlashMessage(true);
            setAlert("alert-danger");
            setMessage(error);
        }
    };

    const handleOnChange = (e) => {
        const targetName = e.target.name;
        const setFormState = window[`set${targetName}`];

        setFormState(e.target.value);
    };

    const unmountFlashMessage = () => {
        setFlashMessage(false);
        setMessage("");
    };

    return (
        <Fragment>
            {
                flashMessage
                    ?
                        <FlashMessage
                            unmount={ unmountFlashMessage }
                            message={ message }
                            alert={ alert }
                            className="subtext"
                        />
                    :
                        <span />
            }
            <Form onSubmit={ handleSubmit(handleLogin) }>
                <Form.Group controlId="username">
                    <Form.Label className="headline">Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username" 
                        onChange={ handleOnChange }
                        name="Username"
                        defaultValue={ username }
                        className="subtext"
                        ref={register({
                            required: "Username cannot be blank"
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="Username"
                        render={({ message }) => <p className="alert-danger flash-message subtext">{message}</p>}
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label className="headline">Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        onChange={ handleOnChange }
                        name="Password"
                        defaultValue={ password }
                        className="subtext"
                        ref={register({
                            required: "Password cannot be blank"
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="Password"
                        render={({ message }) => <p className="alert-danger flash-message subtext">{message}</p>}
                    />
                </Form.Group>
                <Form.Group controlId="formGroupSubmit" className="small headline">
                    <Button type="submit">Submit</Button>
                </Form.Group>
                <Form.Group className="small subtext">
                    Don't have an account?  <Link to="/signup">Signup</Link>
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

export default connect(msp, mdp)(Login)
import { connect, useSelector } from 'react-redux';
import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import getCoordinates from '../Scripts/getCoordinates';
import FlashMessage from '../Components/FlashMessage';
import { FormWrapper } from '../StyledComponents/FormWrapper';
import { getFormData } from '../Selectors/selectors';

const Login = (props) => {
    const {
        username,
        password,
        messages,
        alert,
        flashMessage
    } = useSelector(getFormData);

    const {
        currentUserData,
        setUser,
        setLocation,
        setFlashMessage,
        unmountFlashMessage,
        handleChange
    } = props;

    const { handleSubmit, register, errors } = useForm();

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

        const { errors, user } = resp.data; 
        const { data } = resp;

        if (!errors) {
            setUser(data);
            getCoordinates(setLocation);
            localStorage.userId = user.id;
        } else {
            setFlashMessage(errors);
        }
    };

    const renderFlashMessages = () => {
        return messages.map((message) => {
            return <FlashMessage
                        key={message[0]}
                        unmount={unmountFlashMessage}
                        message={message}
                        alert={alert}
                        className="subtext form-flash"
                    />
        })
    }

    return (
        <FormWrapper>
            <div className="flash-container">
                {
                    flashMessage
                        ? renderFlashMessages()
                        : <div className="form-flash"></div>
                }
            </div>
            <Card className="form-card">
                <Form onSubmit={handleSubmit(handleLogin)}>
                    <Form.Group controlId="username">
                        <Form.Label className="headline">Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            onChange={handleChange}
                            name="username"
                            defaultValue={username}
                            className="subtext"
                            ref={register({
                                required: "Username cannot be blank"
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="username"
                            render={({ message }) => <p className="alert-danger flash-message subtext">{message}</p>}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label className="headline">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            name="password"
                            defaultValue={password}
                            className="subtext"
                            ref={register({
                                required: "Password cannot be blank"
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p className="alert-danger flash-message subtext">{message}</p>}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupSubmit" className="small headline">
                        <Button variant="success" type="submit" block>Submit</Button>
                    </Form.Group>
                    <Form.Group className="small subtext">
                        Don't have an account?  <Link to="/signup">Signup</Link>
                    </Form.Group>
                </Form>
            </Card>
            
            {
                currentUserData && currentUserData.logged_in
                    ? <Redirect to='/trailsearch' />
                    : null
            }
        </FormWrapper>
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
        },
        setFlashMessage: (messages) => {
            dispatch({
                type: "SET_FLASH_MESSAGE",
                payload: {
                    alert: "alert-danger",
                    messages: messages
                }
            })
        },
        unmountFlashMessage: () => {
            dispatch({
                type: "UNMOUNT_FLASH_MESSAGE"
            })
        },
        handleChange: (e) => {
            dispatch({
                type: "HANDLE_CHANGE",
                payload: { [e.target.name]: e.target.value }
            })
        }
    };
};

export default connect(msp, mdp)(Login);
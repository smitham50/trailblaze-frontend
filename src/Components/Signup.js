import { useSelector } from 'react-redux';
import React from "react";
import { Form, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Link, Redirect } from 'react-router-dom';
import getCoordinates from '../Scripts/getCoordinates';
import FlashMessage from '../Components/FlashMessage';
import axios from 'axios';
import { FormWrapper } from '../StyledComponents/FormWrapper';
import { getUserData, getFormData } from '../Selectors/selectors';
import useHandleChange from '../Utilities/useHandleChange';
import useSetUser from '../Utilities/useSetUser';
import useSetLocation from '../Utilities/useSetLocation';
import useSetFlashMessage from '../Utilities/useSetFlashMessage';
import useUnmountFlashMessage from '../Utilities/useUnmountFlashMessage';

const Signup = () => {
    const { currentUserData } = useSelector(getUserData);
    const handleChange = useHandleChange();
    const setUser = useSetUser();
    const setLocation = useSetLocation();
    const setFlashMessage = useSetFlashMessage();
    const unmountFlashMessage = useUnmountFlashMessage();
    const {
        username,
        password,
        passwordConfirmation,
        email,
        messages,
        alert,
        flashMessage
    } = useSelector(getFormData);

    const { 
        handleSubmit, 
        register, 
        errors 
    } = useForm();

    const handleSignup = async () => {
        const userParams = {
            'user': {
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
                email: email
            }
        };

        const options = {
            method: 'post',
            url: 'https://nameless-wave-57808.herokuapp.com/api/v1/signup',
            data: userParams
        };

        const resp = await axios(options);

        const { errors, user } = resp.data;
        const { data } = resp;

        if (!errors) {
            setUser(data);
            getCoordinates(setLocation);
            localStorage.setItem('userId', user.id);
        } else {
            setFlashMessage('alert-danger', errors);
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
                <Form onSubmit={handleSubmit(handleSignup)}>
                    <Form.Group controlId="username">
                        <Form.Label className="headline">Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            onChange={handleChange}
                            defaultValue={username}
                            name="username"
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
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label className="headline">Email address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter email"
                            onChange={handleChange}
                            defaultValue={email}
                            name="email"
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
                            errors={errors}
                            name="email"
                            render={({ message }) => <p className="alert-danger flash-message subtext">{message}</p>}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label className="headline">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            defaultValue={password}
                            name="password"
                            className="subtext"
                            ref={register({
                                required: "Password cannot be blank",
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                                    message: "Password must be between 6 and 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter"
                                }
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p className="alert-danger flash-message subtext">{message}</p>}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupPasswordConfirmation">
                        <Form.Label className="headline">Password Confirmation</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password Confirmation"
                            onChange={handleChange}
                            defaultValue={passwordConfirmation}
                            name="passwordConfirmation"
                            className="subtext"
                            ref={register({
                                required: "Password confirmation cannot be blank",
                                validate: (value) => value === password || "Passwords must match"
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="passwordConfirmation"
                            render={({ message }) => <p className="alert-danger flash-message subtext">{message}</p>}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupSubmit" className="small headline">
                        <Button variant="success" type="submit" block>Submit</Button>
                    </Form.Group>
                    <Form.Group className="small subtext">
                        Already have an account?  <Link to="/login">Login</Link>
                    </Form.Group>
                </Form>
            </Card>
            {
                currentUserData && currentUserData.logged_in
                    && <Redirect to='/trailsearch' />
            }
        </FormWrapper>
    );
};

export default Signup;
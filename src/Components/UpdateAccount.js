import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';

function UpdateAccount(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleUpdate = (event) => {
        event.preventDefault();

        const userParams = {
            "user": {
                username: username,
                password: password,
                email: email
            }
        };

        const options = {
            method: 'patch',
            url: 'http://localhost:3000/api/v1/update-account',
            data: userParams
        };

        axios(options)
            .then(resp => {
                console.log(resp);
            });
    };

    return (
        <Form onSubmit={handleUpdate} >
            <Form.Group controlId="username">
                <Form.Label className="headline">Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    onChange={ (e) => setUsername(e.target.value) }
                    name="username"
                    className="subtext"
                    value={username ? username : props.currentUserData?.name}
                />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label className="headline">Email address</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    onChange={ (e) => setEmail(e.target.value) }
                    name="email"
                    className="subtext"
                    value={ email ? email : props.currentUserData?.email }
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label className="headline">Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={ (e) => setPassword(e.target.value) }
                    name="password"
                    className="subtext"
                    value={ password ? password : props.currentUserData?.password }
                />
            </Form.Group>
            <Form.Group controlId="formGroupSubmit" className="small headline">
                <Button type="submit">Submit</Button>
            </Form.Group>
        </Form>
    )
};

function msp(state) {
    const {
        currentUserData
    } = state.user;

    return {
        currentUserData
    };
};

export default connect(msp, null)(UpdateAccount);
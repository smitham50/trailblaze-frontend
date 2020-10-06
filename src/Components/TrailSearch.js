import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
// import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const TrailSearch = (props) => {

    const handleSearch = (e) => {
        e.preventDefault();
        // Make proxy request to Hiking Project API through server to avoid CORS issue. 
        // Returns trails in specified distance from user's location.
        const queryURL = `https://www.hikingproject.com/data/get-trails?lat=${props.latitude}&lon=${props.longitude}&maxDistance=100&maxResults=500&key=200492212-d7400571b0620563169df18724f8dc46`;

        const options = {
            method: 'post',
            url: 'http://localhost:3000/api/v1/trails',
            data: {
                url: queryURL
            }
        };

        axios(options)
            .then(resp => {
                debugger
            });
    }

    return (
        <Fragment>
            <Form onSubmit={handleSearch} onChange={props.handleChange}>
                <Form.Label>How far are you willing to travel from your current location?</Form.Label>
                <Form.Group controlId="distance">
                    <Form.Control as="select" name="distance">
                        <option>50 miles</option>
                        <option>100 miles</option>
                        <option>200 miles</option>
                    </Form.Control>
                </Form.Group>
                <Form.Label>How many miles do you want to hike?</Form.Label>
                <Form.Group controlId="mileage">
                    <Form.Control as="select" name="mileage">
                        <option>Less than 3</option>
                        <option>3 to 5</option>
                        <option>6 to 9</option>
                    </Form.Control>
                </Form.Group>
                <Form.Label>What difficulty are you looking for?</Form.Label>
                <Form.Group controlId="difficulty">
                    <Form.Control as="select" name="difficulty">
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Challenging</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupSubmit">
                    <Button type="submit">Find Trails</Button>
                </Form.Group>
            </Form>
        </Fragment>
    );
};

function msp(state) {
    const {
        currentUserData,
        latitude,
        longitude
    } = state.user;

    const {
        distance,
        mileage,
        difficulty
    } = state.trailSearch;

    return {
        currentUserData,
        latitude,
        longitude,
        distance,
        mileage,
        difficulty
    };
};

function mdp(dispatch) {
    return {
        handleChange: (e) => {
            dispatch({
                type: "HANDLE_CHANGE",
                payload: {[e.target.name]: e.target.value}
            })
        }
    };
};

export default connect(msp, mdp)(TrailSearch);


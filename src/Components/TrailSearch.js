import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const TrailSearch = (props) => {

    const handleSearch = (e) => {
        e.preventDefault();
        // Make proxy request to Hiking Project API through server to avoid CORS issue. 
        // Returns trails in specified distance from user's location.
        const queryURL = `https://www.hikingproject.com/data/get-trails?lat=${props.latitude}&lon=${props.longitude}&maxDistance=${props.distance}&maxResults=200&key=200492212-d7400571b0620563169df18724f8dc46`;

        const options = {
            method: 'post',
            url: 'http://localhost:3000/api/v1/trails',
            data: {
                url: queryURL,
                distance: props.distance,
                mileage: props.mileage,
                latitude: props.latitude,
                longitude: props.longitude
            }
        };

        axios(options)
            .then(resp => {
                props.setTrails(resp.data.trails);
            });
    }

    return (
        <Fragment>
            <Form onSubmit={handleSearch} onChange={props.handleChange}>
                <Form.Label>How many miles are you willing to travel from your current location?</Form.Label>
                <Form.Group controlId="distance">
                    <Form.Control as="select" name="distance" value={ props.distance }>
                        <option>60</option>
                        <option>100</option>
                        <option>150</option>
                    </Form.Control>
                </Form.Group>
                <Form.Label>How many miles do you want to hike?</Form.Label>
                <Form.Group controlId="mileage">
                    <Form.Control as="select" name="mileage" value={ props.mileage }>
                        <option>Less than 3</option>
                        <option>3 to 5</option>
                        <option>6 to 9</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupSubmit">
                    <Button type="submit">Find Trails</Button>
                </Form.Group>
                {
                    props.trails.length > 0
                        ?
                            <Redirect to='/trails' />
                        :
                            null
                }
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
        trails
    } = state.trailSearch;

    return {
        currentUserData,
        latitude,
        longitude,
        distance,
        mileage,
        trails
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
        setTrails: (trails) => {
            dispatch({
                type: "SET_TRAILS",
                payload: trails
            })
        }
    };
};

export default connect(msp, mdp)(TrailSearch);


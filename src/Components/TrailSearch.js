import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class TrailSearch extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.latitude !== prevProps.latitude) {
            this.forceUpdate();
        }
    };

    handleSearch = (e) => {
        e.preventDefault();
        // Make proxy request to Hiking Project API through server to avoid CORS issue. 
        // Returns trails in specified distance from user's location.
        const queryURL = `https://www.hikingproject.com/data/get-trails?lat=${this.props.latitude}&lon=${this.props.longitude}&maxDistance=${this.props.distance}&maxResults=200&key=200492212-d7400571b0620563169df18724f8dc46`;

        const options = {
            method: 'post',
            url: 'http://localhost:3000/api/v1/trails',
            data: {
                url: queryURL,
                distance: this.props.distance,
                mileage: this.props.mileage,
                latitude: this.props.latitude,
                longitude: this.props.longitude
            }
        };

        axios(options)
            .then(resp => {
                console.log("search results", resp.data.trails)
                this.props.setTrails(resp.data.trails);
            });
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.latitude && this.props.longitude
                        ?
                        <Form onSubmit={ this.handleSearch }>
                            <Form.Label className="headline">How many miles are you willing to travel from your current location?</Form.Label>
                            <Form.Group controlId="distance">
                                <Form.Control
                                    as="select"
                                    name="distance"
                                    value={ this.props.distance }
                                    onChange={ this.props.handleChange }
                                    className="subtext"
                                >
                                    <option>60</option>
                                    <option>100</option>
                                    <option>150</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Label className="headline">How many miles do you want to hike?</Form.Label>
                            <Form.Group controlId="mileage">
                                <Form.Control
                                    as="select"
                                    name="mileage"
                                    value={ this.props.mileage }
                                    onChange={ this.props.handleChange }
                                    className="subtext"
                                >
                                    <option>Less than 3</option>
                                    <option>3 to 5</option>
                                    <option>6 to 9</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formGroupSubmit" className="headline">
                                <Button type="submit">Find Trails</Button>
                            </Form.Group>
                            {
                                this.props.trails.length > 0
                                    ?
                                    <Redirect to='/trails' />
                                    :
                                    null
                            }
                        </Form>
                        :
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Getting location...</span>
                        </Spinner>
                }
            </Fragment>
        );
    }
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


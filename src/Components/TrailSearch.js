import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class TrailSearch extends PureComponent {

    componentDidUpdate(prevProps) {
        const { latitude } = this.props;

        if (latitude !== prevProps.latitude) {
            this.forceUpdate();
        }
    };

    handleSearch = async (e) => {
        e.preventDefault();

        const {
            distance,
            mileage,
            latitude,
            longitude,
            setTrails
        } = this.props;

        // Make proxy request to Hiking Project API through server to avoid CORS issue. 
        // Returns trails in specified distance from user's location.
        const queryURL = `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${distance}&maxResults=200&key=200492212-d7400571b0620563169df18724f8dc46`;

        const options = {
            method: 'post',
            url: 'http://localhost:3000/api/v1/trails',
            data: {
                url: queryURL,
                distance: distance,
                mileage: mileage,
                latitude: latitude,
                longitude: longitude
            }
        };

        const resp = await axios(options);
        
        setTrails(resp.data.trails);
    };

    render() {

        const {
            latitude,
            longitude,
            distance,
            handleChange,
            mileage,
            trails
        } = this.props;

        return (
            <Fragment>
                {
                    latitude && longitude
                        ?
                        <Form onSubmit={ this.handleSearch }>
                            <Form.Label className="headline">How many miles are you willing to travel from your current location?</Form.Label>
                            <Form.Group controlId="distance">
                                <Form.Control
                                    as="select"
                                    name="distance"
                                    value={ distance }
                                    onChange={ handleChange }
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
                                    value={ mileage }
                                    onChange={ handleChange }
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
                                trails.length > 0
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


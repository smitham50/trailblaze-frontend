import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class TrailSearch extends PureComponent {

    state = {
        loaded: false,
        loading: false
    };

    componentDidUpdate(prevProps) {
        const { latitude } = this.props;

        if (latitude !== prevProps.latitude) {
            this.associateUserTrails();
        }
    };

    associateUserTrails = async () => {
        const {
            distance,
            latitude,
            longitude,
        } = this.props;

        // Make proxy request to Hiking Project API through server to avoid CORS issue. 
        const queryURL = `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${distance}&maxResults=200&key=200492212-d7400571b0620563169df18724f8dc46`;

        const options = {
            method: 'post',
            url: 'http://localhost:3000/api/v1/trails/associate_trails',
            data: { url: queryURL }
        };

        this.setState({ loading: true })

        const resp = await axios(options);

        if (resp.data.status === "Success") {
            this.setState({ loading: false })
        } else {
            //handle error
        }
    };

    handleSearch = async (e) => {
        e.preventDefault();

        const {
            distance,
            latitude,
            longitude,
            mileage,
            setTrails
        } = this.props;

        const options = {
            method: 'post',
            url: 'http://localhost:3000/api/v1/trails/search',
            data: {
                distance: distance,
                mileage: mileage,
                latitude: latitude,
                longitude: longitude
            }
        };

        const resp = await axios(options);

        setTrails(resp.data.trails);

        this.setState({ loaded: true });
    };

    render() {

        const {
            latitude,
            longitude,
            distance,
            handleChange,
            mileage
        } = this.props;

        return (
            <Fragment>
                {
                    latitude && longitude && !this.state.loading
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
                                    this.state.loaded
                                        ?
                                            <Redirect to='/trails' />
                                        :
                                            null
                                }
                            </Form>
                        :
                            <Fragment>
                                <Spinner animation="border" role="status"></Spinner>
                                <p className="headline">Processing location. If this is your first login it may take a minute...</p>
                            </Fragment>
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


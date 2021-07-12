import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Spinner, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { FormWrapper } from '../StyledComponents/FormWrapper';

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

        try {
            // Make proxy request to Hiking Project API through server to avoid CORS issue. 
            const queryURL = `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${distance}&maxResults=300&key=${process.env.HIKING_PROJECT_KEY}`;

            const options = {
                method: 'post',
                url: 'https://nameless-wave-57808.herokuapp.com/api/v1/trails/associate_trails',
                data: { url: queryURL }
            };

            this.setState({ loading: true })

            const resp = await axios(options);

            if (resp.data.status === "Success") {
                this.setState({ loading: false })
            }
        } catch (e) {
            console.log(e);
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
            url: 'https://nameless-wave-57808.herokuapp.com/api/v1/trails/search',
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
            <FormWrapper>
                {
                    latitude && longitude && !this.state.loading
                        ?
                        <Card className="form-card">
                            <Form onSubmit={this.handleSearch}>
                                <Form.Label className="headline">How many miles are you willing to travel from your current location?</Form.Label>
                                <Form.Group controlId="distance">
                                    <Form.Control
                                        as="select"
                                        name="distance"
                                        value={distance}
                                        onChange={handleChange}
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
                                        value={mileage}
                                        onChange={handleChange}
                                        className="subtext"
                                    >
                                        <option>Less than 3</option>
                                        <option>3 to 5</option>
                                        <option>6 to 9</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formGroupSubmit" className="headline">
                                    <Button variant="success" type="submit" block>Find Trails</Button>
                                </Form.Group>
                                {
                                    this.state.loaded
                                        ?
                                        <Redirect to='/trails' />
                                        :
                                        null
                                }
                            </Form>
                        </Card>
                        :
                        <>
                            <Spinner animation="border" role="status"></Spinner>
                            <p className="headline">Processing location. If this is your first login it may take a minute...</p>
                        </>
                }
            </FormWrapper>
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


import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Spinner, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { FormWrapper } from '../StyledComponents/FormWrapper';
import { getUserData, getTrailSearchData } from '../Selectors/selectors';

const TrailSearch = () => {
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const {latitude, longitude} = useSelector(getUserData);
    const {distance, mileage} = useSelector(getTrailSearchData);

    useEffect(() => {
        associateUserTrails();
    }, [latitude]);

    const associateUserTrails = async () => {
        try {
            // Make proxy request to Hiking Project API through server to avoid CORS issue. 
            const queryURL = `http://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${distance}&maxResults=300&key=200492212-d7400571b0620563169df18724f8dc46`;

            const options = {
                method: 'post',
                url: 'http://localhost:3000/api/v1/trails/associate_trails',
                data: { url: queryURL }
            };

            setLoading(true);

            const resp = await axios(options);
            const { status } = resp.data;

            if (status === "Success") {
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();

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

        console.log('options', options);

        const resp = await axios(options);
        const { trails } = resp.data;

        console.log(trails);

        dispatch({type: "SET_TRAILS", payload: trails});

        setLoaded(true);
    };

    const handleChange = (e) => {
        dispatch({
            type: "HANDLE_CHANGE",
            payload: { [e.target.name]: e.target.value },
        });
    }

    return (
        <FormWrapper>
            {
                latitude && longitude && !loading
                    ?   <Card className="form-card">
                            <Form onSubmit={handleSearch}>
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
                                { loaded && <Redirect to='/trails' /> }
                            </Form>
                        </Card>
                    :   <>
                            <Spinner animation="border" role="status"></Spinner>
                            <p className="headline">Processing location. If this is your first login it may take a minute...</p>
                        </>
            }
        </FormWrapper>
    );
};

export default TrailSearch;


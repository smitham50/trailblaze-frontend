import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//  Components
import FlashMessage from '../Components/FlashMessage';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Map from '../Components/Map';

class TrailShow extends Component {
    state = {
        flashMessage: false,
        message: ""
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`http://localhost:3000/api/v1/trails/${params.slug}`)
            .then(resp => {
                this.props.setTrail(resp.data.trail);
            });
    }

    addTrailToHikes = () => {
        const { match: { params } } = this.props;
        axios.post('http://localhost:3000/api/v1/my_hikes/add_hike', {
            user_id: this.props.currentUserData.user.id,
            trail_name: params.slug
        })
            .then(resp => {
                if (resp.data.status === 'success') {
                    this.setState({
                        flashMessage: true,
                        message: `${resp.data.trail} added to hikes`
                    });
                } else {
                    this.setState({
                        flashMessage: true,
                        message: `${resp.data.error}`
                    })
                }
                    
            });
    };

    unmountFlashMessage = () => {
        this.setState({
            flashMessage: false,
            message: ""
        });
    };

    render() {
        const { trail } = this.props;
        return (
            trail ?
                <div className="d-flex container-fluid">
                    <div className="container-fluid button-container">
                        <Button variant="link" href="/trails">Back to search</Button>
                        <Button onClick={ this.addTrailToHikes }>Add to my hikes</Button>
                        {
                            this.state.flashMessage
                                ?
                                    <FlashMessage 
                                        unmount = { this.unmountFlashMessage }
                                        message  = { this.state.message }
                                    />
                                :
                                    <span/>
                        }
                        <FlashMessage delay={ 5000 } unmount={ this.unmountFlashMessage }>This is an alert</FlashMessage>
                    </div>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={ trail.imgMedium } />
                        <Card.Body>
                            <Card.Title>{ trail.name }</Card.Title>
                            <Card.Text>
                                { trail.description }
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Location: { trail.location }</ListGroupItem>
                            <ListGroupItem>Length: { trail.length } miles</ListGroupItem>
                            <ListGroupItem>Difficulty: { trail.difficulty }</ListGroupItem>
                        </ListGroup>
                    </Card>
                    <Map></Map>
                </div>
            :
                null
        );
    };
};

function msp(state) {
    const {
        currentUserData
    } = state.user

    const {
        trail
    } = state.trailShow;

    return {
        currentUserData,
        trail
    };
};

function mdp(dispatch) {
    return {
        setTrail: (trail) => {
            dispatch({
                type: "SET_TRAIL",
                payload: trail
            })
        }
    };
};

export default connect(msp, mdp)(TrailShow); 
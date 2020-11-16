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
        message: "",
        alert: ""
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
                        message: `${resp.data.trail} added to hikes`,
                        alert: "alert-success"
                    });
                } else {
                    this.setState({
                        flashMessage: true,
                        message: `${resp.data.error}`,
                        alert: "alert-danger"
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
                <div className="d-flex container-fluid show-container">
                    <div className="container-fluid button-container">
                        <Button variant="link" href="/trails">Back to search</Button>
                        <Button onClick={ this.addTrailToHikes }>Add to my hikes</Button>
                        {
                            this.state.flashMessage
                                ?
                                    <FlashMessage 
                                        unmount = { this.unmountFlashMessage }
                                        message  = { this.state.message }
                                        alert = { this.state.alert }
                                    />
                                :
                                    <span/>
                        }
                    </div>
                    <Card style={{ width: '25%' }}>
                        <Card.Img variant="top" src={ trail.imgMedium } />
                        <Card.Body>
                            <Card.Title className="small">{ trail.name }</Card.Title>
                            <Card.Text className="text-muted small">
                                { trail.description }
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush small">
                            <ListGroupItem className="text-muted small">Location: { trail.location }</ListGroupItem>
                            <ListGroupItem className="text-muted small">Length: { trail.length } miles</ListGroupItem>
                            <ListGroupItem className="text-muted small">Difficulty: { trail.difficulty }</ListGroupItem>
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
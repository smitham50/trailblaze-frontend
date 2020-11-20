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
        alert: "",
        inHikes: false
    }

    async componentDidMount() {
        await axios.get('http://localhost:3000/api/v1/my_hikes')
            .then(resp => {
                this.props.setHikes(resp.data.hikes);
            });

        const { match: { params } } = this.props;

        axios.get(`http://localhost:3000/api/v1/trails/${params.slug}`)
            .then(resp => {
                const trail = resp.data.trail;
                this.props.setTrail(trail);

                if (!!this.props.hikes.find(hike => hike.id === trail.id)) {
                    this.setState({
                        inHikes: true
                    });
                }
            });
    };

    addTrailToHikes = async () => {
        const { match: { params } } = this.props;
        
        const resp = await axios.post('http://localhost:3000/api/v1/my_hikes/add_hike', {
            user_id: this.props.currentUserData.user.id,
            trail_name: params.slug
        });
        
        if (resp.data.status === 'success') {
            this.setState({
                flashMessage: true,
                message: `${resp.data.trail} added to hikes`,
                alert: "alert-success",
                inHikes: true
            });
        } else {
            this.setState({
                flashMessage: true,
                message: `${resp.data.error}`,
                alert: "alert-danger"
            })
        }
            
    };

    removeTrailFromHikes = async () => {
        const resp = await axios.delete(`http://localhost:3000/api/v1/my_hikes/delete_hike/${this.props.trail.id}`);
        
        if (!resp.data.error) {
            this.setState({
                inHikes: false,
                flashMessage: true,
                message: `${this.props.trail.name} removed from your hikes`,
                alert: "alert-success"
            })
        } else {
            this.setState({
                flashMessage: true,
                message: `${resp.data.error}`,
                alert: "alert-danger"
            })
        }
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
                        <Button variant="link" href="/trails" className="headline">Back to search</Button>
                        <Button onClick={ this.addTrailToHikes } className="headline">Add to my hikes</Button>
                        {
                            this.state.inHikes
                                ?
                                    <Button onClick={ this.removeTrailFromHikes } className="headline">Remove from hikes</Button>
                                :
                                    <span/>
                        }
                        {
                            this.state.flashMessage
                                ?
                                    <FlashMessage 
                                        unmount = { this.unmountFlashMessage }
                                        message  = { this.state.message }
                                        alert = { this.state.alert }
                                        className="subtext"
                                    />
                                :
                                    <span/>
                        }
                    </div>
                    <Card style={{ width: '25%' }}>
                        <Card.Img variant="top" src={ trail.imgMedium } />
                        <Card.Body>
                            <Card.Title className="headline">{ trail.name }</Card.Title>
                            <Card.Text className="text-muted subtext">
                                { trail.description }
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="text-muted subtext small">Location: { trail.location }</ListGroupItem>
                            <ListGroupItem className="text-muted subtext small">Length: { trail.length } miles</ListGroupItem>
                            <ListGroupItem className="text-muted subtext small">Difficulty: { trail.difficulty }</ListGroupItem>
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
    } = state.user;

    const {
        trail
    } = state.trailShow;

    const {
        hikes
    } = state.myHikes;

    return {
        currentUserData,
        trail,
        hikes
    };
};

function mdp(dispatch) {
    return {
        setTrail: (trail) => {
            dispatch({
                type: "SET_TRAIL",
                payload: trail
            })
        },
        setHikes: (hikes) => {
            dispatch({
                type: "SET_HIKES",
                payload: hikes
            })
        }
    };
};

export default connect(msp, mdp)(TrailShow); 
import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Map from '../Components/Map';
import { connect } from 'react-redux';
import axios from 'axios';

class TrailShow extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`http://localhost:3000/api/v1/trails/${params.slug}`)
            .then(resp => {
                this.props.setTrail(resp.data.trail);
            });
    }

    render() {
        const { trail } = this.props;
        return (
            trail ?
                <div className="d-flex container-fluid">
                    <br></br>
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
        trail
    } = state.trailShow;

    return {
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
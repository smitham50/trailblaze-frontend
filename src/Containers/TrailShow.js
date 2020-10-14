import React, { Component, Fragment } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
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
            <Fragment>
                <br></br>
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={trail.imgMedium} />
                    <Card.Body>
                        <Card.Title>{trail.name}</Card.Title>
                        <Card.Text>
                            {trail.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Location: {trail.location}</ListGroupItem>
                        <ListGroupItem>Length: {trail.length} miles</ListGroupItem>
                        <ListGroupItem>Difficulty: {trail.difficulty}</ListGroupItem>
                    </ListGroup>
                </Card>
            </Fragment>
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
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//  Components
import FlashMessage from '../Components/FlashMessage';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Map from '../Components/Map';

class TrailShow extends PureComponent {
    state = {
        inHikes: false
    }

    async componentDidMount() {
        await axios.get('http://localhost:3000/api/v1/my_hikes')
            .then(resp => {
                this.props.setHikes(resp.data.hikes);
            });

        const { match: { params }, setTrail, hikes } = this.props;

        axios.get(`http://localhost:3000/api/v1/trails/${params.slug}`)
            .then(resp => {
                const trail = resp.data.trail;
                setTrail(trail);

                if (!!hikes.find(hike => hike.id === trail.id)) {
                    this.setState({
                        inHikes: true
                    });
                }
            });
    };

    addTrailToHikes = async () => {
        const { match: { params }, currentUserData } = this.props;
        
        const resp = await axios.post('http://localhost:3000/api/v1/my_hikes/add_hike', {
            user_id: currentUserData.user.id,
            trail_name: params.slug
        });

        const { trail, error, status } = resp.data;
        const { setFlashMessage } = this.props;
        
        if (status === 'success') {
            const alert = "alert-success";
            const message = `${trail} added to hikes`;
            
            setFlashMessage([message], alert);
            
            this.setState({
                inHikes: true
            });
        } else {
            const alert = "alert-danger";
            const message = `${error}`;
            
            setFlashMessage([message], alert);
        }
    };

    removeTrailFromHikes = async () => {
        const resp = await axios.delete(`http://localhost:3000/api/v1/my_hikes/delete_hike/${this.props.trail.id}`);

        const { error } = resp.data;
        const { trail, setFlashMessage } = this.props;
        
        if (!error) {
            const alert = "alert-success";
            const message = `${trail.name} removed from your hikes`;

            setFlashMessage([message], alert);

            this.setState({
                inHikes: false
            })
        } else {
            const alert = "alert-danger";
            const message = `${error}`;

            setFlashMessage([message], alert);
        }
    };

    renderFlashMessage = () => {
        const { messages, alert, unmountFlashMessage } = this.props;

        return messages.map((message) => {
            return <FlashMessage
                        key={message[0]}
                        unmount={unmountFlashMessage}
                        message={message}
                        alert={alert}
                        className="subtext form-flash"
                    />
        })
    }

    render() {

        const { trail, flashMessage } = this.props;
        const { inHikes } = this.state;
        const { addTrailToHikes, removeTrailFromHikes, renderFlashMessage } = this;

        return (
            trail ?
                <div className="d-flex container-fluid show-container">
                    <div className="container-fluid button-container">
                        <Button variant="link" href="/trails" className="headline">Back to search</Button>
                        <Button onClick={ addTrailToHikes } className="headline">Add to my hikes</Button>
                        {
                            inHikes
                                ?
                                    <Button onClick={ removeTrailFromHikes } className="headline">Remove from hikes</Button>
                                :
                                    <span/>
                        }
                        {
                            flashMessage
                                ?
                                    renderFlashMessage()
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

    const {
        messages,
        alert,
        flashMessage
    } = state.form;

    return {
        currentUserData,
        trail,
        hikes,
        messages,
        alert,
        flashMessage
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
        },
        setFlashMessage: (messages, alert) => {
            dispatch({
                type: "SET_FLASH_MESSAGE",
                payload: {
                    alert: alert,
                    messages: messages
                }
            })
        },
        unmountFlashMessage: () => {
            dispatch({
                type: "UNMOUNT_FLASH_MESSAGE"
            })
        }
    };
};

export default connect(msp, mdp)(TrailShow); 
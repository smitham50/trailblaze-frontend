import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

//  Components
import FlashMessage from '../Components/FlashMessage';
import { Button, Figure } from 'react-bootstrap';
import Map from '../Components/Map';
import { withRouter } from 'react-router';

class TrailShow extends PureComponent {
    state = {
        inHikes: false,
        trailSet: false
    };

    async componentDidMount() {
        await axios.get('https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes')
            .then(resp => {
                this.props.setHikes(resp.data.hikes);
            });

        const { match: { params }, setTrail, hikes } = this.props;

        axios.get(`https://nameless-wave-57808.herokuapp.com/api/v1/trails/${params.slug}`)
            .then(resp => {
                const trail = resp.data.trail;
                setTrail(trail);

                this.setState({
                    trailSet: true
                });

                if (!!hikes.find(hike => hike.id === trail.id)) {
                    this.setState({
                        inHikes: true
                    });
                }
            });
    };

    addTrailToHikes = async () => {
        const { match: { params }, currentUserData } = this.props;
        
        const resp = await axios.post('https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes/add_hike', {
            user_id: currentUserData.user.id,
            trail_name: params.slug
        });

        const { trail, error, status } = resp.data;
        const { setFlashMessage } = this.props;
        
        if (status === 'success') {
            const alert = "alert-success";
            const message = `${trail} added to favorites`;
            
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
        const resp = await axios.delete(`https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes/delete_hike/${this.props.trail.id}`);

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

    backToPreviousPage = () => {

    };

    render() {

        const { trail, flashMessage, fromSearchPage } = this.props;
        const { inHikes, trailSet } = this.state;
        const { addTrailToHikes, removeTrailFromHikes, renderFlashMessage } = this;

        return (
            trail ?
                <div className="trail-show-container">
                    <div className="d-flex button-container">
                        {
                            fromSearchPage
                                ?
                                <Button variant="link" className="headline"><Link to={"/trails"}>Back to search</Link></Button>
                                :
                                <Button variant="link" className="headline"><Link to={"/myhikes"}>Back to hikes</Link></Button>
                        }           
                        {
                            inHikes
                                ?
                                <Button variant="link" onClick={removeTrailFromHikes} className="headline">Remove from favorite hikes</Button>
                                :
                                <Button variant="link" onClick={addTrailToHikes} className="headline">Add to favorite hikes</Button>
                        }
                        {
                            flashMessage
                                ?
                                renderFlashMessage()
                                :
                                <span />
                        }
                    </div>
                    <div className="info-container">
                        <Figure className="trail">
                            <Figure.Image
                                src={trail.imgMedium}
                            />
                            <Figure.Caption className="headline">{trail.name}</Figure.Caption>
                            <Figure.Caption className="subtext small">Length: {trail.length} miles</Figure.Caption>
                            <Figure.Caption className="subtext small">Difficulty: {trail.difficulty}</Figure.Caption>
                            <Figure.Caption className="subtext small">Location: {trail.location}</Figure.Caption>
                        </Figure>
                        {
                            trailSet
                            ?
                                <Map></Map>
                            :
                                null
                        }
                        
                    </div>
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
        trail,
        fromSearchPage
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
        flashMessage,
        fromSearchPage
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

export default withRouter(connect(msp, mdp)(TrailShow)); 
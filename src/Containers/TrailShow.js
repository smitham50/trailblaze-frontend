import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

//  Components
import FlashMessage from '../Components/FlashMessage';
import { Figure } from 'react-bootstrap';
import Map from '../Components/Map';
import { withRouter } from 'react-router';

const TrailShowContainer = styled.div`
    width: 100%;
`;

const ButtonContainer = styled.div`
    margin-bottom: 1vh;
    & > * {
        margin: 0 .5%;
    }
    .flash-message {
        font-size: .6em;
        display: block;
        color: rgba(91, 87, 87, 0.544);
    }
    .btn-link, 
    .btn-link:active,
    .btn-link:visited {
        margin: .5%;
        color: #635d5d
    }
`;

const Button = styled.button`
    margin: .5%;
    color: #635d5d;
    background: transparent;
    border: none;
    font-size: 1rem;

    &:active,
    &:visited,
    a {
        color: #635d5d;
        text-decoration: none;
    }

    &:hover {
        text-decoration: underline;
    }
`;

const InfoContainer = styled.div`
    padding-left: 1%;
    padding-right: 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .trail img {
        max-height: 45vh;
    }

    .headline {
        font-size: 2rem;
    }

    .subtext {
        font-size: 1rem;
    }

    .map {
        height: 65vh;
        flex: 1 1 450px;
    }
`;

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
            trail 
                &&
                <TrailShowContainer>
                    <ButtonContainer className="d-flex">
                        {
                            fromSearchPage
                                ? <Button className="headline"><Link to={"/trails"}>Back to search</Link></Button>
                                : <Button className="headline"><Link to={"/myhikes"}>Back to hikes</Link></Button>
                        }           
                        {
                            inHikes
                                ? <Button onClick={removeTrailFromHikes} className="headline">Remove from favorite hikes</Button>
                                : <Button onClick={addTrailToHikes} className="headline">Add to favorite hikes</Button>
                        }
                        {
                            flashMessage
                                ? renderFlashMessage()
                                : <span />
                        }
                    </ButtonContainer>
                    <InfoContainer>
                        <Figure className="trail">
                            <Figure.Image
                                src={trail.imgMedium}
                            />
                            <Figure.Caption className="headline">{trail.name}</Figure.Caption>
                            <Figure.Caption className="subtext small">Length: {trail.length} miles</Figure.Caption>
                            <Figure.Caption className="subtext small">Difficulty: {trail.difficulty}</Figure.Caption>
                            <Figure.Caption className="subtext small">Location: {trail.location}</Figure.Caption>
                        </Figure>
                        { trailSet && <Map></Map> }
                        
                    </InfoContainer>
                </TrailShowContainer>
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
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import Trail from '../Components/Trail';
import axios from 'axios';

class Trails extends PureComponent {

    async componentDidMount() {
        if (!this.props.trails.length) {
            const options = {
                method: 'post',
                url: 'http://localhost:3000/api/v1/search_reload',
                data: { trail_ids: localStorage.trails?.split(',').map(id => id) }
            };

            const resp = await axios(options);
            const trails = resp.data.trails;

            this.props.setTrails(trails);
        }
    };

    renderTrails = () => {
        return this.props.trails.map(trail => {
            return <Trail 
                        key = { trail.id }
                        trailName = { trail.name }
                        image = { trail.imgMedium }
                        length = { trail.length }
                        difficulty = { trail.difficulty }
                        location = { trail.location }
                    />;
        });
    };

    render() {
        return (
            <Fragment>
                {
                    this.props.trails.length > 0
                        ?
                            <div className="trails-container">
                                { this.renderTrails() }
                            </div>
                        :
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Searching for trails</span>
                            </Spinner>
                }
            </Fragment>
        );
    };
};

function msp(state) {

    const {
        latitude,
        longitude
    } = state.user;

    const {
        trails
    } = state.trailSearch;

    return {
        latitude,
        longitude,
        trails
    };
};

function mdp(dispatch) {
    return {
        setTrails: (trails) => {
            dispatch({
                type: "SET_TRAILS",
                payload: trails
            })
        }
    }
}

export default connect(msp, mdp)(Trails);
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Trail from '../Components/Trail'

class Trails extends Component {

    renderTrails = () => {
        return this.props.trails.map(trail => {
            return <Trail 
                        key = { trail.id }
                        trailName = { trail.name }
                        image = { trail.imgMedium }
                        description = { trail.description }
                        length = { trail.length }
                        difficulty = { trail.difficulty }
                        location = { trail.location }
                    />;
        });
    };

    render () {
        return (
            <Fragment>
                { this.renderTrails() }
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

export default connect(msp, null)(Trails);
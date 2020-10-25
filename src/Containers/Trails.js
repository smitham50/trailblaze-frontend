import React, { Component } from 'react';
import { connect } from 'react-redux';
import Trail from '../Components/Trail';
import axios from 'axios';

class Trails extends Component {

    componentDidMount() {
        if (!this.props.trails.length) {
            const options = {
                method: 'post',
                url: 'http://localhost:3000/api/v1/search_reload',
                data: { trail_ids: localStorage.trails.split(',').map(id => id) }
            };

            axios(options)
                .then(resp => {
                    const trails = resp.data.trails;
                    this.props.setTrails(trails);
                });
        }
    }


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
        console.log("rendered", this.props.trails)
        return (
            <div className="container-fluid d-flex trails-container">
                { this.renderTrails() }
            </div>
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
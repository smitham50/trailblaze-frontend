import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
// import Trail from '../Components/Trail'

class Trails extends Component {

    

    render () {
        return (
            <div></div>
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
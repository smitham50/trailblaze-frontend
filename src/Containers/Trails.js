import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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

    return {
        latitude,
        longitude
    };
};

export default connect(msp, null)(Trails);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Trails extends Component {

    componentDidUpdate(prevProps) {
        
        // Once geolocation is retrieved from browser make proxy request to Hiking Project API
        // through server to avoid CORS issue. Returns trails in specified distance from user.
        if (this.props.latitude !== prevProps.latitude) {
            const queryURL = `https://www.hikingproject.com/data/get-trails?lat=${this.props.latitude}&lon=${this.props.longitude}&maxDistance=100&maxResults=500&key=200492212-d7400571b0620563169df18724f8dc46`;
            
            const options = {
                method: 'post',
                url: 'http://localhost:3000/api/v1/trails',
                data: {
                    url: queryURL
                }
            };

            axios(options)
            .then(resp => {
                debugger
            });
        }

    };

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
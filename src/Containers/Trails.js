import React, { Component } from 'react';
import { connect } from 'react-redux';

class Trails extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.latitude !== prevProps.latitude) {
            const url = `https://www.hikingproject.com/data/get-trails?lat=${this.props.latitude}&lon=${this.props.longitude}&maxDistance=100&maxResults=500&key=200492212-d7400571b0620563169df18724f8dc46`;
            fetch('http://localhost:3000/api/v1/trails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    'url': url
                })
            })
            .then(resp => resp.json())
            .then(trails => {
                console.log(trails)
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
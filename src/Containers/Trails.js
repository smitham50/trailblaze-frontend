import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
// import Trail from '../Components/Trail'

class Trails extends Component {

    renderTrails = () => {
        return this.props.trails.map(trail => {
            return  (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ trail.imgMedium }
                            alt="Trail slide"
                        />
                        <Carousel.Caption>
                            <h3>{ trail.name }</h3>
                            <p>{ trail.location }</p>
                            <p>Description: { trail.description }</p>
                            <p>Length: { trail.length } miles</p>
                            <p>Difficulty: { trail.difficulty }</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            );
        });
    };

    render () {
        return (
            <Carousel>
                { this.renderTrails() }
            </Carousel>
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
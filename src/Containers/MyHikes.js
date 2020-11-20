import React, { Component } from 'react';
import axios from 'axios';
import Trail from '../Components/Trail';
import { connect } from 'react-redux';

class MyHikes extends Component {

    async componentDidMount() {
        const resp = await axios.get('http://localhost:3000/api/v1/my_hikes');
        
        this.props.setHikes(resp.data.hikes);
    };

    renderHikes = () => {
        return this.props.hikes?.map(hike => {
            return <Trail
                        key={hike.id}
                        trailName={hike.name}
                        image={hike.imgMedium}
                        description={hike.description}
                        length={hike.length}
                        difficulty={hike.difficulty}
                        location={hike.location}
                    />;
        });
    };

    render() {
        return (
            <div className="container-fluid d-flex trails-container">
                { this.renderHikes() }
            </div>
        );
    };
};

function msp(state) {
    const {
        hikes
    } = state.myHikes

    return {
        hikes
    };
};

function mdp(dispatch) {
    return {
        setHikes: (hikes) => {
            dispatch({
                type: "SET_HIKES",
                payload: hikes
            })
        }
    }
}

export default connect(msp, mdp)(MyHikes);
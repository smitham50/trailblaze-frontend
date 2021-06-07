import React, { Component } from 'react';
import axios from 'axios';
import Trail from '../Components/Trail';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TrailsContainer } from '../StyledComponents/TrailsContainer';

class MyHikes extends Component {

    async componentDidMount() {
        const { setHikes } = this.props;
        const resp = await axios.get('https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes');
        
        setHikes(resp.data.hikes);
    };

    renderHikes = () => {
        return this.props.hikes?.map(hike => {
            return <Trail
                        key={ hike.id }
                        trailName={ hike.name }
                        image={ hike.imgMedium }
                        length={ hike.length }
                        difficulty={ hike.difficulty }
                        location={ hike.location }
                    />;
        });
    };

    render() {
        const { setPreviousPage, location } = this.props;

        setPreviousPage(location);

        return (
            <TrailsContainer>
                { this.renderHikes() }
            </TrailsContainer>
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
        },
        setPreviousPage: (location) => {
            dispatch({
                type: "SET_PREVIOUS_PAGE",
                payload: location
            })
        }
    }
}

export default withRouter(connect(msp, mdp)(MyHikes));
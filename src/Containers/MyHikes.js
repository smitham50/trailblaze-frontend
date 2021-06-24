import React, { useEffect } from 'react';
import axios from 'axios';
import Trail from '../Components/Trail';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TrailsContainer } from '../StyledComponents/TrailsContainer';

const MyHikes = (props) => {
    const { 
        setHikes, 
        setPreviousPage, 
        location 
    } = props;

    setPreviousPage(location);

    const getMyHikes = async () => {
        const resp = await axios.get(
            "https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes"
        );
        setHikes(resp.data.hikes);
    }

    useEffect(() => {
        getMyHikes();
    }, []);

    const renderHikes = () => {
        return props.hikes?.map(hike => {
            const {
                id,
                name,
                length,
                difficulty,
                location,
                imgMedium
            } = hike;

            return <Trail
                        key={ id }
                        trailName={ name }
                        image={ imgMedium }
                        length={ length }
                        difficulty={ difficulty }
                        location={ location }
                    />;
        });
    };

    return (
        <TrailsContainer>
            { renderHikes() }
        </TrailsContainer>
    );
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
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Spinner } from 'react-bootstrap';
import Trail from '../Components/Trail';
import axios from 'axios';

class Trails extends PureComponent {

    async componentDidMount() {
        if (!this.props.trails.length) {
            const options = {
                method: 'post',
                url: 'http://localhost:3000/api/v1/search_reload',
                data: { trail_ids: localStorage.trails?.split(',').map(id => id) }
            };

            const resp = await axios(options);

            const { trails } = resp.data;
            const { setTrails } = this.props;
            
            setTrails(trails);
        }
    };

    renderTrails = () => {
        const { trails } = this.props;
        
        return trails.map(trail => {
            return <Trail 
                        key = { trail.id }
                        trailName = { trail.name }
                        image = { trail.imgMedium }
                        length = { trail.length }
                        difficulty = { trail.difficulty }
                        location = { trail.location }
                    />;
        });
    };

    render() {
        const { trails, setPreviousPage, location } = this.props;
        const { renderTrails } = this;

        setPreviousPage(location);

        return (
            <Fragment>
                {
                    trails.length
                        ?
                            <div className="trails-container">
                                { renderTrails() }
                            </div>
                        :
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Searching for trails</span>
                            </Spinner>
                }
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

function mdp(dispatch) {
    return {
        setTrails: (trails) => {
            dispatch({
                type: "SET_TRAILS",
                payload: trails
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

export default withRouter(connect(msp, mdp)(Trails));
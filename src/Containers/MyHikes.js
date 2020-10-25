import React, { Component } from 'react';
import axios from 'axios';
import Trail from '../Components/Trail';

class MyHikes extends Component {
    state = {
        hikes: []
    };

    componentDidMount() {
        axios.get('http://localhost:3000/api/v1/my_hikes')
            .then(resp => {
                this.setState({
                    hikes: resp.data.hikes
                });
            });
    };

    renderHikes = () => {
        return this.state.hikes.map(hike => {
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

export default MyHikes;
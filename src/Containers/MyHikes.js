import React, { Component } from 'react';
import axios from 'axios';
// import Trail from '../Components/Trail';

class MyHikes extends Component {
    componentDidMount() {
        axios.get(`http://localhost:3000/api/v1/my_hikes/${localStorage.userId}`)
            .then(resp => {
                debugger
            });
    };

    render() {
        return (
            <div></div>
        );
    };
};

export default MyHikes;
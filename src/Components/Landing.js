import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../Stylesheets/Landing.css';


const Landing = (props) => {
    return (
            <Jumbotron className="jumbotron-mod">
                <h1 className="headline">Welcome to Trailblaze</h1>
                <p className="subtext">
                    If you've ever spent hours researching hikes in range of you because there were too many choices, this app is for you.
                    Tell us how far you're willing to travel and how many miles you want to hike and we'll give you twenty options
                    to choose from. Pick the one you like, get directions, and add it to your hiked trails.
                    Get to the forest without a fuss.
            </p>
            </Jumbotron>
    )
}

export default Landing;
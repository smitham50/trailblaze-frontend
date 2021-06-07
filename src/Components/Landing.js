import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const Header = styled.h1`
    font-family: Amatic SC, cursive;
`;

const Paragraph = styled.p`
    font-size: .7em;
    font-family: Source Sans Pro, sans-serif;
`;

const JumbotronMod = styled(Jumbotron)`
    background-color: #758ea9;
    color: white;
`;


const Landing = (props) => {
    return (
            <JumbotronMod>
                <Header>Welcome to Trailblaze</Header>
                <Paragraph>
                    If you've ever spent hours researching hikes in range of you because there were too many choices, this app is for you.
                    Tell us how far you're willing to travel and how many miles you want to hike and we'll give you twenty options
                    to choose from. Pick the one you like, get directions, and add it to your hiked trails.
                    Get to the forest without a fuss.
                </Paragraph>
            </JumbotronMod>
    )
}

export default Landing;
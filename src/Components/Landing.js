import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const JumbotronMod = styled(Jumbotron)`
    background-color: #758ea9;
    color: white;
    background-image: url(${process.env.PUBLIC_URL + '/trail.jpeg'});
    background-position-y: -25rem;
    height: 70vh;
    padding-top: 13rem;
`;

const Header = styled.h1`
    font-family: Amatic SC, cursive;
    font-size: 3.5rem;
    width: 100vw;
    letter-spacing: .7rem;
`;

const Landing = () => {
    return (
        <JumbotronMod>
            <Header>
                Welcome to Trailblaze
            </Header>
        </JumbotronMod>
    )
}

export default Landing;
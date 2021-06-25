import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const JumbotronMod = styled(Jumbotron)`
    background-color: #758ea9;
    color: white;
    background-image: url(${process.env.PUBLIC_URL + '/jan-huber-6-MVRkr4TmA-unsplash.jpg'});
    background-position-y: -162rem;
    background-position-x: -136rem;
    height: 70vh;
    padding-top: 13rem;
    margin-bottom: 1rem;
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
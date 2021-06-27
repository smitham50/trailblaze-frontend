import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';

const fadeInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(4rem);
    }
    80% {
        opacity: .80;
        transform: translateY(-1rem);
    }
    100% {
        opacity: 1;
    }
`;

const JumbotronMod = styled(Jumbotron)`
    color: white;
    background-image: url(${process.env.PUBLIC_URL + '/trail.jpeg'});
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
    animation: 1s ${fadeInBottom} ease-in;
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
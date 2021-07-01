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
    background-position-y: -172rem;
    background-position-x: -119rem;
    height: 70vh;
    padding-top: 13rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 768px) {
        background-position-y: -22rem;
        background-position-x: -40rem;
    }
`;

const Header = styled.h1`
    font-family: Amatic SC, cursive;
    font-size: 3.5rem;
    width: 100vw;
    letter-spacing: .7rem;
    animation: 1s ${fadeInBottom} ease-in;
    @media screen and (max-width: 768px) {
        font-size: 2.2rem;
    }
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
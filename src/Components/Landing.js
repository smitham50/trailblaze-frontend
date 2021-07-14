import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-6rem);
    }
    80% {
        opacity: .80;
        transform: translateX(1rem);
    }
    100% {
        opacity: 1;
    }
`;

const fadeInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(6rem);
    }
    80% {
        opacity: .80;
        transform: translateX(-1rem);
    }
    100% {
        opacity: 1;
    }
`;

const LandingContainer = styled.div`
    display: flex;
    padding: 1rem 2rem;
    color: #635d5d;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        padding: 0 1rem;
    }
`;

const TextContainer = styled.div`
    padding-left: 8rem;
    font-family: "Lato", sans-serif;
    font-weight: 200;
    animation: 1.5s ${fadeInLeft} ease-out;

    @media screen and (max-width: 1000px) {
        padding-left: 0;
    }
`;

const Header = styled.h1`
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    text-align: left;
    letter-spacing: .6rem;
    padding-top: 5rem;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
        padding-top: 0;
    }
`;

const WelcomeText = styled.div`
    text-align: left;
    font-size: 1rem;
    padding-left: .8rem;
    letter-spacing: 1rem;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

const LandingImage = styled.img`
    width: 50%;
    border-radius: 2px;
    animation: 1.5s ${fadeInRight} ease-out;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const Landing = () => {
    return (
        <LandingContainer>
            <TextContainer>
                <Header>
                Welcome to Trailblaze
            </Header>
            <WelcomeText>
                The woods await
            </WelcomeText>
            </TextContainer>
            <LandingImage src={process.env.PUBLIC_URL + '/trail.jpeg'} alt=""/>
        </LandingContainer>
    )
}

export default Landing;
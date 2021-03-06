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

export const LandingContainer = styled.div`
  display: flex;
  padding: 1rem 2rem;
  color: #635d5d;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0 1rem;
    margin: auto 0;
  }
`;

export const TextContainer = styled.div`
  padding-left: 8rem;
  font-family: "Lato", sans-serif;
  font-weight: 200;
  animation: 1.5s ${fadeInLeft} ease-out;

  @media screen and (max-width: 1000px) {
    padding-left: 0;
  }
`;

export const Header = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 3.5rem;
  text-align: left;
  letter-spacing: 0.6rem;
  padding-top: 5rem;

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
    text-align: center;
    padding-top: 0;
  }
`;

export const WelcomeText = styled.div`
  text-align: left;
  font-size: 1rem;
  padding-left: 0.8rem;
  letter-spacing: 1rem;

  @media screen and (max-width: 1024px) {
    text-align: center;
    margin-bottom: 1rem;
    padding: 0;
  }
`;

export const LandingImage = styled.img`
  width: 50%;
  border-radius: 2px;
  animation: 1.5s ${fadeInRight} ease-out;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

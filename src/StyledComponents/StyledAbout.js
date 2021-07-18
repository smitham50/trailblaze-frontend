import styled from 'styled-components';

export const AboutContainer = styled.div`
  color: #635d5d;
  padding: 2rem 3rem;
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    padding: 0 1rem;
    margin-top: 5rem;
  }
`;

export const TextContainer = styled.div`
  margin: 0 3rem;
  width: auto;
  padding: 3rem;

  @media screen and (max-width: 1000px) {
    padding: 0 0.3rem;
    margin: 1rem 1rem 0 1rem;
  }
`;

export const Heading = styled.h1`
  text-align: left;
  letter-spacing: 0.3rem;

  @media screen and (max-width: 1000px) {
    margin-bottom: 0;
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 1rem;

  text-align: left;
  line-height: 1.5rem;

  @media screen and (max-width: 1000px) {
    padding: 0.5rem 0;
    text-align: center;
  }
`;

export const AboutImage = styled.img`
  width: 55%;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
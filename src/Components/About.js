import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background: #f5f5f5;
  color: #635d5d;
  padding: 2rem 3rem;
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    margin: 1rem 0;
  }
`;

const TextContainer = styled.div`
  margin: 0 3rem;
  width: auto;
  padding: 3rem;
`;

const Heading = styled.h1`
  text-align: left;
  letter-spacing: .3rem;
`;

const Description = styled.p`
  font-size: 1rem;
  
  text-align: left;
  line-height: 1.5rem;

  @media screen and (max-width: 1000px) {
    padding: 1.5rem 0;
  }
`;

const AboutImage = styled.img`
  width: 55%;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <TextContainer>
        <Heading>About</Heading>
        <Description className="subtext">
          Trailblaze is a location based trail-finding application. Plug in how
          far you're willing to travel and how many miles you'd like to hike and
          choose from the results to get directions to the trailhead. You can
          also save any trails that you've hiked and enjoyed or want to hike
          some other time so you can pull them up easily in the future.
        </Description>
      </TextContainer>
      <AboutImage
        src={process.env.PUBLIC_URL + "/chris-rosiak-wMloxuYrjt0-unsplash.jpg"}
        alt=""
      />
    </AboutContainer>
  );
}

export default About;

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background: #f5f5f5;
  color: #635d5d;
  padding: 6rem 3rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 0 3rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <Description>
        Trailblaze is a location based trail finding application. Plug in how far you're willing to travel and how many miles you'd like to hike and choose from the results to get directions to the trailhead. You can also save any trails that you've hiked and enjoyed or want to hike some other time so you can pull them up easily in the future.
      </Description>
    </AboutContainer>
  );
}

export default About;

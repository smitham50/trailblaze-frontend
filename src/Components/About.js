import React from 'react';
import {
  AboutContainer,
  TextContainer,
  Heading,
  Description,
  AboutImage
} from '../StyledComponents/StyledAbout';

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

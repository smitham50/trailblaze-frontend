import React from 'react';
import {
  LandingContainer,
  TextContainer,
  Header,
  WelcomeText,
  LandingImage
} from '../StyledComponents/StyledLanding';

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
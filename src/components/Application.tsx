import React from 'react';
import styled from 'styled-components';
import './Application.scss';
import {
  LandingHero,
  LandingIntro,
  LandingRulesAndGuidelines,
  LandingJudging,
  LandingFaq,
  LandingTimeline,
  LandingPrizes,
  LandingPartners,
  LandingPrivacy,
} from './LandingPage';

const Application: React.FC = () => {
  return (
    <Wrapper>
      <div className='gradient' />
      <LandingHero />

      <LandingIntro />
      <LandingRulesAndGuidelines />
      <LandingJudging />
      <LandingFaq />
      <LandingTimeline />
      <LandingPrizes />
      <LandingPartners />
      <LandingPrivacy />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* .gradient {
    background: radial-gradient(
      circle,
      rgba(144, 58, 255, 1) 0%,
      rgba(144, 58, 255, 0) 100%
    );
    width: 100%;
    height: 100%;
    position: absolute;
  } */
`;

export default Application;

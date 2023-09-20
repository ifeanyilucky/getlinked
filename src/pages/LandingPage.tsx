import React from 'react';
import styled from 'styled-components';
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
} from '@src/components/LandingPage';

const LandingPage: React.FC = () => {
  return (
    <Wrapper>
      <div className='lense-flare lense-1' />
      <div className='lense-flare lense-2' />
      <LandingHero />

      <div className='divider' />
      <div className='position-relative'>
        <LandingIntro />
        <div className='divider' />

        <div className='lense-flare lense-3' />
        <div className='lense-flare lense-4' />
        <LandingRulesAndGuidelines />
        <div className='divider' />
      </div>
      <div className='position-relative'>
        <div className='lense-flare lense-5' />
        <div className='lense-flare lense-6' />
        <LandingJudging />
        <div className='divider' />
      </div>
      <LandingFaq />
      <div className='divider' />
      <LandingTimeline />
      <div className='divider' />
      <div className='position-relative'>
        <div className='lense-flare lense-7' />
        <LandingPrizes />
      </div>
      <div className='divider' />
      <LandingPartners />
      <div className='divider' />
      <LandingPrivacy />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .lense-flare {
    max-width: 100%;
    width: 480px;
    height: 480px;
    background-image: radial-gradient(
      circle closest-side,
      rgba(144, 58, 255, 0.68),
      rgba(21, 14, 40, 0)
    );
    backdrop-filter: blur(4px);
    opacity: 0.68;
    z-index: -9;
  }
  .lense-1 {
    position: absolute;
    left: 0;
    top: 0;
  }
  .lense-2 {
    position: absolute;
    right: 0;
    top: 30px;
  }
  .lense-3 {
    position: absolute;
    left: 0;
    top: 45%;
  }
  .lense-4 {
    position: absolute;
    right: -18rem;
    top: 55%;
  }
  .lense-5 {
    position: absolute;
    left: 0;
    top: 50%;
  }
  .lense-6 {
    position: absolute;
    right: -3rem;
    top: 66%;
  }
  .lense-7 {
    position: absolute;
    left: 0;
    top: 40%;
  }
`;

export default LandingPage;

/* Purple-Lens-Flare-PNG */

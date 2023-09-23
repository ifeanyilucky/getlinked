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
// images
import StarWhite from '@assets/images/start-white.png';
import StarLight from '@assets/images/start-light.png';
import StarPurple from '@assets/images/start-purple.png';
import StarGrey from '@assets/images/star-grey.png';

const LandingPage: React.FC = () => {
  return (
    <Wrapper>
      <div className='position-relative'>
        <img src={StarWhite} className='star star-1' />
        <img src={StarGrey} className='star star-2' />
        <img src={StarGrey} className='star star-3' />
        <LandingHero />
      </div>

      <div className='divider' />
      <div className='position-relative'>
        <img src={StarLight} className='star star-4' />
        <img src={StarPurple} className='star star-5' />

        <LandingIntro />
        <div className='divider' />

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
  .star {
    position: absolute;
    width: 15px;
  }
  .star-1 {
    top: 50px;
    left: 10rem;
  }
  .star-2 {
    top: 20%;
    right: 50%;
  }
  .star-3 {
    bottom: 50px;
    left: 10rem;
  }
  .star-4 {
    top: 30%;
    left: 20%;
  }
  .star-5 {
    bottom: 40%;
    right: 20%;
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

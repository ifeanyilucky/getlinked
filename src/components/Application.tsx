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
import PurpleLenseFlare from '@assets/images/purple-lens-flare.png';
import PurpleLenseFlare2 from '@assets/images/purple-lense-flare-2.png';
import PurpleLenseFlare3 from '@assets/images/Purple-Lens-Flare-3.png';
import PurpleLenseFlare4 from '@assets/images/Purple-Lens-Flare-4.png';
import PurpleLenseFlare5 from '@assets/images/Purple-Lens-Flare-5.png';
import PurpleLenseFlare6 from '@assets/images/Purple-Lens-Flare-6.png';
import { Logo } from './Logo';
import Footer from '@src/layout/Footer';
import { Navbar } from '@src/layout/Navbar';

const Application: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />

      <img className='lense-flare' src={PurpleLenseFlare} />
      <img className='lense-flare-2' src={PurpleLenseFlare2} />
      <LandingHero />

      <div className='divider' />
      <div className='position-relative'>
        <LandingIntro />
        <div className='divider' />
        <img className='lense-flare-3' src={PurpleLenseFlare3} />
        <img className='lense-flare-4' src={PurpleLenseFlare4} />
        <LandingRulesAndGuidelines />
        <div className='divider' />
      </div>
      <div className='position-relative'>
        <img className='lense-flare-5' src={PurpleLenseFlare5} />
        <LandingJudging />
        <div className='divider' />
      </div>
      <LandingFaq />
      <div className='divider' />
      <LandingTimeline />
      <div className='divider' />
      <LandingPrizes />
      <div className='divider' />
      <LandingPartners />
      <div className='divider' />
      <LandingPrivacy />

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .lense-flare {
    position: absolute;
    z-index: -9;
    right: 0;
    opacity: 0.68;
    top: 0;
    filter: contrast(90%);
  }
  .lense-flare-2 {
    position: absolute;
    z-index: -9;
    left: 0;
    opacity: 0.68;
    top: 0;
    filter: contrast(90%);
  }

  .lense-flare-3 {
    position: absolute;
    z-index: -9;
    left: 0;
    opacity: 0.68;
    top: 40%;
    filter: contrast(90%);
    width: 60%;
  }
  .lense-flare-4 {
    position: absolute;
    z-index: -9;
    right: 0;
    opacity: 0.68;
    top: 50%;
    filter: contrast(90%);
  }
  .lense-flare-5 {
    position: absolute;
    z-index: -9;
    left: 0;
    opacity: 0.68;
    top: 50%;
    filter: contrast(90%);
  }
  .lense-flare-6 {
    position: absolute;
    z-index: -9;
    right: 0;
    opacity: 0.68;
    top: 50%;
    filter: contrast(90%);
  }
`;

export default Application;

/* Purple-Lens-Flare-PNG */

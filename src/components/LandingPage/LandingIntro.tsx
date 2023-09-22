import React from 'react';
import styled from 'styled-components';
import MotionInView from '../animate/MotionInView';
import { varFadeIn, varFadeInUp } from '../animate/variants';
import TheBigIdea from '@assets/images/The-big-idea.png';
import Arrow from '@assets/images/arrow.png';
import StarWhite from '@assets/images/start-white.png';

const LandingIntro: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row py-5 my-5 align-items-center'>
          <div className='col-md-6 intro-png position-relative'>
            <img src={StarWhite} className='position' />
            <MotionInView variants={varFadeInUp}>
              <img
                src={TheBigIdea}
                alt='the-big-idea'
                style={{ width: '70%' }}
                className='align-items-center'
              />
            </MotionInView>
            <img src={Arrow} alt='arrow' className='arrow' />
          </div>
          <div className='col-md-6'>
            <div className='intro-wrapper'>
              <MotionInView variants={varFadeInUp}>
                <h3 className='display-6 header'>
                  Introduction to getlinked <br />
                  <span className='highlight'>tech Hackathon 1.0</span>
                </h3>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <p className='mt-3 intro-text'>
                  Our tech hackathon is a melting pot of visionaries, and its
                  purpose is as clear as day: to shape the future. Whether
                  you're a coding genius, a design maverick, or a concept
                  wizard, you'll have the chance to transform your ideas into
                  reality. Solving real-world problems, pushing the boundaries
                  of technology, and creating solutions that can change the
                  world, that's what we're all about!
                </p>
              </MotionInView>
            </div>
          </div>
        </div>
      </div>{' '}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .intro-wrapper {
    max-width: 500px;
  }
  @media (max-width: 768px) {
    .intro-png {
      text-align: center;
      padding: 1.3rem 0;
    }
    .display-6 {
      text-align: center;
    }
    .intro-text {
      text-align: center;
    }
  }

  .arrow {
    position: absolute;
    bottom: 0;
    right: 3em;
  }
`;
export default LandingIntro;

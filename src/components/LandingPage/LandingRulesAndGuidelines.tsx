import React from 'react';
import styled from 'styled-components';

import LadySitting from '@assets/images/lady-sitting.png';
import MotionInView from '../animate/MotionInView';
import { varFadeInUp } from '../animate/variants';

const LandingRulesAndGuidelines: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row py-5 align-items-center'>
          <div className='col-md-5'>
            <MotionInView variants={varFadeInUp}>
              <h3 className='display-6 header'>
                Rules and <br />
                <span className='highlight'>Guidelines</span>
              </h3>
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <p className='mt-3 guideline-text'>
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </MotionInView>
          </div>
          <div className='col-md-7 text-center d-flex justify-content-center'>
            <MotionInView variants={varFadeInUp}>
              <img src={LadySitting} alt='LadySitting' className='w-75' />
            </MotionInView>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (max-width: 768px) {
    .display-6 {
      text-align: center;
    }
    .guideline-text {
      text-align: center;
    }
  }
`;
// /* Ellipse 2 */

// position: absolute;
// width: 134px;
// height: 134px;
// left: 163px;
// top: 2359px;

// background: linear-gradient(270deg, #8F01FE 0%, #FF2674 97.24%);

export default LandingRulesAndGuidelines;

import React from 'react';
import { styled } from 'styled-components';
import ManStandOnPadlock from '@assets/images/stand-on-padlock.png';
import Guard from '@assets/images/guard.png';
import MotionInView from '../animate/MotionInView';
import { varFadeInUp } from '../animate/variants';
import { Bullet } from '../svgs';

const licenses = [
  `You are licensed to use the item available at any free source
    sites, for your project development`,
  `The Standard License grants you a non-exclusive right to
    navigate and register for our event`,
];
const LandingPrivacy: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <MotionInView variants={varFadeInUp}>
              <h5 className='display-6 header'>
                Privacy Policy and <br />{' '}
                <span className='highlight'>Terms</span>
              </h5>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <p className='my-4 updated-time'>
                Last updated on September 12, 2023
              </p>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <p className='my-4 pb-5 privacy-text'>
                Below are our privacy & policy. which outline a lot of goodies.
                it's our aim to always take of our participant.
              </p>
            </MotionInView>

            <div className='privacy-box'>
              <MotionInView variants={varFadeInUp}>
                <p className='privacy-text'>
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </p>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <h6 className='highlight'>Licensing Policy</h6>
                <p>
                  <strong>Here are terms of our Standard License:</strong>
                </p>
              </MotionInView>
              <div className='license-list'>
                {licenses.map((item: string, index: number) => (
                  <MotionInView variants={varFadeInUp} key={index}>
                    <div className='item'>
                      <div className='bullet'>
                        <Bullet />
                      </div>
                      <p>{item}</p>
                    </div>
                  </MotionInView>
                ))}
              </div>
              <MotionInView variants={varFadeInUp}>
                <button>Read more</button>
              </MotionInView>
            </div>
          </div>

          <div className='col-md-6 text-center position-relative'>
            <img src={Guard} alt='guard-or-shield' className='w-75 guard' />

            <div className='img-wrapper'>
              <MotionInView variants={varFadeInUp}>
                <img
                  src={ManStandOnPadlock}
                  alt='stand-on-padlock'
                  className='w-75 man-on-padlock'
                />
              </MotionInView>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 4rem 0;
  .privacy-box {
    border: 1px solid var(--app-accent-color);
    border-radius: 5px;
    padding: 2rem;
    background-color: rgba(217, 217, 217, 3%);
    p {
      max-width: 400px;
    }
    .highlight {
      font-family: var(--app-title-font-family);
    }

    .license-list {
      .item {
        display: flex;
        gap: 20px;
      }
    }
  }
  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 768px) {
    .display-6,
    .updated-time {
      text-align: center;
    }

    .privacy-text {
      text-align: center;
    }

    .guard {
      margin-top: 3rem;
    }
    .man-on-padlock {
      width: 40% !important;
    }
  }
`;

export default LandingPrivacy;

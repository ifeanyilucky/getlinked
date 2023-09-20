import React from 'react';
import styled from 'styled-components';
import ManStandOnPadlock from '@assets/images/stand-on-padlock.png';
import Guard from '@assets/images/guard.png';

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
            <h5 className='display-6 header'>
              Privacy Policy and <br /> <span className='highlight'>Terms</span>
            </h5>

            <p className='my-4'>Last updated on September 12, 2023</p>

            <p className='my-4 pb-5'>
              Below are our privacy & policy. which outline a lot of goodies.
              it's our aim to always take of our participant.
            </p>

            <div className='privacy-box'>
              <p>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>

              <h6 className='highlight'>Licensing Policy</h6>
              <p>
                <strong>Here are terms of our Standard License:</strong>
              </p>
              <div className='license-list'>
                {licenses.map((item, index) => (
                  <div className='item' key={index}>
                    <div className='bullet'>
                      <svg
                        width='17'
                        height='17'
                        viewBox='0 0 17 17'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='8.5' cy='8.5' r='8.5' fill='#2DE100' />
                        <path
                          d='M5 8L7 10.5L13.5 6'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </svg>
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <button>Read more</button>
            </div>
          </div>

          <div className='col-md-6 text-center position-relative'>
            <img src={Guard} alt='guard-or-shield' className='w-75' />
            <img
              src={ManStandOnPadlock}
              alt='stand-on-padlock'
              className='w-75 man-on-padlock'
            />
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
      width: 400px;
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

  .man-on-padlock {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export default LandingPrivacy;

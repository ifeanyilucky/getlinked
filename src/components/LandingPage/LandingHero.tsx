import React from 'react';
import { styled } from 'styled-components';

// IMAGES
import HeroImg from '@assets/images/man-wearing-smart-glasses-touching-virtual-screen.png';
import HeroImg2 from '@assets/images/hero-img-2.png';
import Chain from '@assets/images/chain-9365116-7621444.png';
import Light from '@assets/images/light.png';
import TopTextUnderline from '@assets/images/top-text-underline.png';
import Creative from '@assets/images/Creative 1.png';

const LandingHero: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='top-text'>
          <h3>
            <i>Igniting a Revolution in HR Innovation</i>
          </h3>
          <img
            src={TopTextUnderline}
            alt='top-text-underline'
            className='top-text-underline'
          />
        </div>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <div className='me-md-3 my-4'>
              <div className='position-relative'>
                <img src={Creative} alt='creative' className='creative' />
                <h1 className='display-4 header'>
                  getlinked Tech Hackathon{' '}
                  <span className='highlight'>1.0</span>
                  <span>
                    <img src={Chain} alt='chain' className='chain' />
                    <img src={Light} alt='light' className='light' />
                  </span>
                </h1>
              </div>
              <div className=' hero-info'>
                <p className='my-3 me-md-5 pe-md-5 hero-info'>
                  Participate in getlinked tech Hackathon 2023 stand a chance to
                  win a Big prize
                </p>
                <button>Register</button>
              </div>
            </div>
            <div className='timer-wrapper mt-5'>
              <div className='timer'>
                <p className='display-5'>00</p> <span>H</span>
              </div>
              <div className='timer'>
                <p className='display-5'>00</p> <span>M</span>
              </div>
              <div className='timer'>
                <p className='display-5'>00</p> <span>S</span>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='position-relative'>
              <img
                src={HeroImg}
                alt='man-wearing-smart-glasses'
                className='w-100'
              />
              <img src={HeroImg2} alt='overlay-image' className='overlay-img' />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 2rem;
  .top-text {
    h3 {
      font-weight: 700;
    }
    text-align: right;
  }

  .creative {
    position: absolute;
    right: 132px;
    top: -55px;
  }

  .timer-wrapper {
    display: flex;
    gap: 10px;
    .timer {
      display: flex;
      align-items: baseline;
      p {
        font-family: 'Unica One', cursive;
      }
    }
  }

  .overlay-img {
    width: 90%;
    position: absolute;
    left: 0;
  }
  .top-text-underline {
    margin-top: -1.8rem;
  }

  /* screen size of 762px */
  @media (max-width: 768px) {
    .display-4 {
      text-align: center;
    }
    .light {
      width: 45px;
    }
    .chain {
      width: 45px;
    }
    .hero-info {
      text-align: center;
      max-width: 330px;
      margin-left: auto;
      margin-right: auto;
    }
    .timer-wrapper {
      justify-content: center;
    }
    button {
      text-align: center;
    }
    .creative {
      right: 78px !important;
      width: 30px;
      top: -29px !important;
    }
    .top-text {
      .top-text-underline {
        width: 40%;
      }
    }
  }
`;
export default LandingHero;

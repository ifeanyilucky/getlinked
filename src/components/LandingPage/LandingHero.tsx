import React from 'react';
import { styled } from 'styled-components';

// IMAGES
import HeroImg from '@assets/images/man-wearing-smart-glasses-touching-virtual-screen.png';
import HeroImg2 from '@assets/images/hero-img-2.png';
import Chain from '@assets/images/chain-9365116-7621444.png';
import Light from '@assets/images/light.png';
import TopTextUnderline from '@assets/images/top-text-underline.png';

const LandingHero: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='top-text'>
          <h2>
            <i>Igniting a Revolution in HR Innovation</i>
          </h2>
          <img
            src={TopTextUnderline}
            alt='top-text-underline'
            className='top-text-underline'
          />
        </div>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <div className='me-md-5 my-4'>
              <div>
                <h1 className='display-5 header'>getlinked Tech</h1>
                <h1 className='display-5 header'>
                  Hackathon <span className='highlight'>1.0</span>
                  <span>
                    <img src={Chain} alt='chain' />
                    <img src={Light} alt='light' />
                  </span>
                </h1>
              </div>
              <p className='my-3 me-md-5'>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <button>Register</button>
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
  border-bottom: 1px solid #85858531;
  .top-text {
    h2 {
      font-weight: 700;
    }
    text-align: right;
  }

  .hightlight {
    color: var(--app-accent-color);
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
`;
export default LandingHero;

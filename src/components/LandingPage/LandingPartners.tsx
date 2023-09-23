import React from 'react';
import styled from 'styled-components';
// IMAGES
import LibertyPayLogo from '@assets/images/brand/Liberty-logo.png';
import LibertyAssured from '@assets/images/brand/Liberty.png';
import Paybox from '@assets/images/brand/Paybox.png';
import VizualPlus from '@assets/images/brand/Vizual-Plus.png';
import WinwiseLogo from '@assets/images/brand/Winwise-logo.png';
import WisperLogo from '@assets/images/brand/wisper-logo.png';

const LandingPartners: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row py-3'>
          <div className='col-md-6 mx-auto text-center text-head'>
            <h4 className='display-6 header mb-2'>Partners and Sponsors</h4>
            <p>
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
        </div>

        <div className='sponsors-wrapper'>
          <div className='sponsors mx-auto'>
            <div className='sponsor-item mx-auto position-relative'>
              <div className='logo'>
                <img src={LibertyAssured} alt='liberty-assured-logo' />
              </div>
              <div className='hr-line hr-line-1' />
              <div className='vt-line vt-line-1' />
            </div>
            <div className='sponsor-item mx-auto position-relative'>
              <div className='logo'>
                <img src={LibertyPayLogo} alt='liberty-pay-logo' />
              </div>
              <div className='hr-line hr-line-2' />
            </div>
            <div className='sponsor-item mx-auto position-relative'>
              <div className='vt-line vt-line-2' />
              <div className='logo'>
                <img src={WinwiseLogo} alt='winwise-logo' />
              </div>
              <div className='hr-line hr-line-3' />
            </div>
            <div className='sponsor-item mx-auto position-relative'>
              <div className='logo'>
                <img src={WisperLogo} alt='wisper-sms-logo' />
              </div>
              <div className='vt-line vt-line-3' />
            </div>
            <div className='sponsor-item mx-auto'>
              <div className='logo'>
                <img src={Paybox} alt='paybox-logo' />
              </div>
            </div>
            <div className='sponsor-item mx-auto position-relative'>
              <div className='logo'>
                <img src={VizualPlus} alt='vizual-plus-logo' />
              </div>
              <div className='vt-line vt-line-4' />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 0;
  .text-head {
    max-width: 500px;
  }
  .sponsors-wrapper {
    border-radius: 5px;
    border: 1px solid var(--app-accent-color);
    padding: 5rem 4rem;
    .sponsors {
      display: grid;
      grid-template-columns: 33% 33% 33%;
      gap: 10px;
      flex-wrap: wrap;
    }
    .sponsor-item {
      width: 100%;

      .logo {
        border-bottom: none;
        padding: 10px;
        text-align: center;
        img {
          height: 40px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .sponsors-wrapper {
      padding: 3.4rem 0;
      zoom: 0.5;
      /* .sponsor-item {
        .logo {
          img {
            width: 50px;
            height: auto;
          }
        }
      } */
    }
  }
  .hr-line {
    width: 240px;
    height: 2px;
    position: absolute;
    bottom: 0;
    background-color: var(--app-accent-color);
  }
  .vt-line {
    width: 2px;
    background-color: var(--app-accent-color);
    position: absolute;
    width: 112.48px;
    height: 2px;
    transform: rotate(-90deg);
  }
  .vt-line-1 {
    right: 0;
    top: 0;
  }
  .vt-line-2 {
    left: 0;
    bottom: 0;
  }
  .vt-line-3 {
    right: 0;
    bottom: 0;
  }
  .vt-line-4 {
    left: -63px;
    bottom: 0;
  }
`;
export default LandingPartners;

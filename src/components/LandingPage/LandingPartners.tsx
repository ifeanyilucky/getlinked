import React from 'react';
import styled from 'styled-components';
// IMAGES
import LibertyPayLogo from '@assets/images/brand/Liberty-logo.png';
import LibertyAssured from '@assets/images/brand/Liberty.png';
import Paybox from '@assets/images/brand/Paybox.png';
import VizualPlus from '@assets/images/brand/Vizual-Plus.png';
import WinwiseLogo from '@assets/images/brand/Winwise-logo.png';
import WisperLogo from '@assets/images/brand/wisper-logo.png';
import LightStar from '@assets/images/start-light.png';
import WhiteStar from '@assets/images/start-white.png';
import PurpleStar from '@assets/images/start-purple.png';

const LandingPartners: React.FC = () => {
  return (
    <Wrapper>
      <img src={LightStar} className='star star-1' />
      <img src={PurpleStar} className='star star-2' />
      <img src={WhiteStar} className='star star-3' />
      <div className='lense-flare lense-flare-1' />
      <div className='lense-flare lense-flare-2' />
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
            <div className='sponsor-item p-3 mx-auto position-relative'>
              <div className='logo'>
                <img src={LibertyAssured} alt='liberty-assured-logo' />
              </div>
            </div>
            <div className='sponsor-item p-3 mx-auto position-relative'>
              <div className='logo'>
                <img src={LibertyPayLogo} alt='liberty-pay-logo' />
              </div>
            </div>
            <div className='sponsor-item p-3 mx-auto position-relative'>
              <div className='logo'>
                <img src={WinwiseLogo} alt='winwise-logo' />
              </div>
            </div>
            <div className='sponsor-item p-3 mx-auto position-relative'>
              <div className='logo'>
                <img src={WisperLogo} alt='wisper-sms-logo' />
              </div>
            </div>
            <div className='sponsor-item p-3 mx-auto'>
              <div className='logo'>
                <img src={Paybox} alt='paybox-logo' />
              </div>
            </div>
            <div className='sponsor-item p-3 mx-auto position-relative'>
              <div className='logo'>
                <img src={VizualPlus} alt='vizual-plus-logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .lense-flare-1 {
    position: absolute;
    left: -20%;
    top: 0;
  }
  .lense-flare-2 {
    position: absolute;
    right: -20%;
    bottom: 0;
  }
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
      grid-template-columns: repeat(3, minmax(0px, 1fr));
      gap: 10px;
      flex-wrap: wrap;
    }
    .sponsor-item {
      width: 100%;
      display: grid;
      position: relative;
      place-items: center;

      &:nth-child(1) {
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-color: var(--app-accent-color) !important;
        &::before {
          content: '';
          position: absolute;
          right: -25px;
          bottom: -25px;
          height: 50px;
          width: 50px;
        }
      }
      &:nth-child(2) {
        border-right-width: 2px;
        border-left-width: 2px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-right-style: solid;
        border-left-style: solid;
        border-color: var(--app-accent-color);
      }
      &:nth-child(3) {
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-style: solid;
        border-color: var(--app-accent-color);
      }
      &:nth-child(5) {
        border-right-width: 2px;
        border-left-width: 2px;
        border-right-style: solid;
        border-left-style: solid;
      }

      /* ::before {
        width: 25px;
        height: 25px;
        bottom: -12.25px;
        right: -12.25px;
        position: absolute;
        content: '';
      } */
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

  .star-1 {
    top: 20%;
    left: 20%;
  }
  .star-2 {
    right: 40%;
    top: 40%;
  }
  .star-3 {
    bottom: 30%;
    left: 50%;
  }
`;
export default LandingPartners;

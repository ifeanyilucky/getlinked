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
          <div className='col-md-6 mx-auto text-center'>
            <h4 className='display-6 header'>Partners and Sponsors</h4>
            <p>
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
        </div>

        <div className='sponsors-wrapper'>
          <div className='row mx-auto'>
            <div className='col-4 mx-auto'>
              <div className='logo'>
                <img src={LibertyAssured} alt='liberty-assured-logo' />
              </div>
            </div>
            <div className='col-4 mx-auto'>
              <div className='logo'>
                <img src={LibertyPayLogo} alt='liberty-pay-logo' />
              </div>
            </div>
            <div className='col-4 mx-auto'>
              <div className='logo'>
                <img src={WinwiseLogo} alt='winwise-logo' />
              </div>
            </div>
            <div className='col-4 mx-auto'>
              <div className='logo'>
                <img src={WisperLogo} alt='wisper-sms-logo' />
              </div>
            </div>
            <div className='col-4 mx-auto'>
              <div className='logo'>
                <img src={Paybox} alt='paybox-logo' />
              </div>
            </div>
            <div className='col-4 mx-auto'>
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
  padding: 5rem 0;

  .sponsors-wrapper {
    border-radius: 5px;
    border: 1px solid var(--app-accent-color);
    padding: 5rem 0;

    .col-4 {
      .logo {
        &:first-child,
        &:nth-child(2),
        &:nth-child(3) {
          border-bottom: 3px solid var(--app-accent-color);
        }
      }
      .logo {
        border-bottom: none;
        padding: 3rem 0;
        text-align: center;
        img {
          height: 40px;
        }
      }
    }
  }
`;
export default LandingPartners;

import React from 'react';
import styled from 'styled-components';

// Images
import TargetCup from '@assets/images/target-cup.png';
import BronzeMedal from '@assets/images/bronze_medal.png';
import GoldMedal from '@assets/images/gold_medal.png';
import SilverMedal from '@assets/images/silver_medal.png';

const LandingPrizes: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <img
              src={TargetCup}
              alt='award-and-prizes-cup-image'
              className='w-100'
            />
          </div>

          <div className='col-md-7'>
            <div className='prize-header'>
              <h5 className='display-6 header'>
                Prizes and <br />
                <span className='highlight'>Rewards</span>
              </h5>
              <p className='my-3'>
                Highlight of the prizes or rewards for winners and for
                participants
              </p>
            </div>

            {/* MEDAL SHOWCASE */}
            <div className='prizes'>
              <div className='row'>
                <div className='col-4'>
                  <div className='prize'>
                    <img
                      src={SilverMedal}
                      className='medal'
                      alt='silver-medal'
                    />
                    <div className='mt-4 text-center prize-text'>
                      <h4>2nd</h4>
                      <h5> Runner</h5>
                      <h4 className='amount'>N300,000</h4>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='prize'>
                    <img src={GoldMedal} className='medal' alt='silver-medal' />
                    <div className='mt-4 text-center prize-text'>
                      <h4>2nd</h4>
                      <h5> Runner</h5>
                      <h4 className='amount'>N300,000</h4>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='prize'>
                    <img
                      src={BronzeMedal}
                      className='medal'
                      alt='silver-medal'
                    />
                    <div className='mt-4 text-center prize-text'>
                      <h4>2nd</h4>
                      <h5> Runner</h5>
                      <h4 className='amount'>N300,000</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 4rem 0;
  .prize-header {
    margin-bottom: 10rem;
    width: 360px;
    margin-left: 3rem;
  }
  .prizes {
    display: flex;
    gap: 30px;
    .prize {
        flex: 1,
      border: 1px solid var(--app-accent-color);
      display: inline-block;
    
      border-radius: 5px;
      padding-bottom: 2rem;

      .prize-text {
        h4,
        h5 {
          font-weight: 600 !important;
          font-family: var(--app-font-family);
        }
      }
      &:first-child,
      &:last-child {
        background-color: rgba(212, 52, 254, 12%);
        height: 250px;
        .prize-text {
          .amount {
            color: var(--app-accent-color);
          }
        }
        .medal {
          margin-top: -7rem;
        }
      }
      &:nth-child(2) {
        background-color: rgba(144, 58, 255, 12%);
        border: 1px solid var(--app-secondary-color);
        height: 270px;
        .prize-text {
          .amount {
            color: var(--app-secondary-color);
          }
        }
        .medal {
          margin-top: -7rem !important;
          margin-right: -35px;
          margin-left: -35px;
        }
      }
    }
  }
`;

export default LandingPrizes;

import React from 'react';
import styled from 'styled-components';

// Images
import TargetCup from '@assets/images/target-cup.png';
import BronzeMedal from '@assets/images/bronze_medal.png';
import GoldMedal from '@assets/images/gold_medal.png';
import SilverMedal from '@assets/images/silver_medal.png';

const prizes = [
  {
    position: '2nd',
    amount: '300,000',
    medal: SilverMedal,
  },
  {
    position: '1st',
    amount: '400,000',
    medal: GoldMedal,
  },
  {
    position: '3rd',
    amount: '150,000',
    medal: BronzeMedal,
  },
];
const LandingPrizes: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row align-items-center'>
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
                {prizes.map((item, index) => {
                  return (
                    <div className='col-4' key={index}>
                      <div className='prize'>
                        <img
                          src={item.medal}
                          className='medal'
                          alt='silver-medal'
                        />
                        <div className='mt-4 text-center prize-text'>
                          <h4>{item.position}</h4>
                          <h5> Runner</h5>
                          <h4 className='amount'>{item.amount}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
      /* border: 1px solid var(--app-accent-color); */
      display: inline-block;
      border-radius: 5px;

      .prize-text {
        h4,
        h5 {
          font-weight: 600 !important;
          font-family: var(--app-font-family);
        }
      }
    }
    .row {
      .col-4 {
        &:first-child,
        &:last-child {
          .prize {
            border: 1px solid var(--app-accent-color) !important;
            background-color: rgba(212, 52, 254, 12%);
            padding-bottom: 3rem;
            .prize-text {
              .amount {
                color: var(--app-accent-color);
              }
            }
            .medal {
              margin-top: -7rem;
              width: 100%;
            }
          }
        }
        &:nth-child(2) {
          .prize {
            background-color: rgba(144, 58, 255, 12%);
            border: 1px solid var(--app-secondary-color) !important;
            /* height: 270px; */
            padding-bottom: 2rem;
            .prize-text {
              .amount {
                color: var(--app-secondary-color);
              }
            }
            .medal {
              width: 132%;
              align-items: center;
              text-align: center;
              margin-left: -31px;
              margin-top: -8rem;
            }
          }
        }
      }
    }
  }
`;

export default LandingPrizes;

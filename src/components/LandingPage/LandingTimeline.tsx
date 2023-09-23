import React from 'react';
import styled from 'styled-components';
import { Timeline } from '../timeline';
import LightStar from '@assets/images/start-light.png';
import WhiteStar from '@assets/images/start-white.png';
import PurpleStar from '@assets/images/start-purple.png';
import GrayStar from '@assets/images/star-grey.png';

const LandingTimeline: React.FC = () => {
  return (
    <Wrapper id='timeline'>
      <img src={PurpleStar} className='star star-1' />
      <img src={WhiteStar} className='star star-2' />
      <img src={GrayStar} className='star star-3' />
      <div className='container'>
        <div className='row mx-auto timeline-header'>
          <div className='col-md-4 mx-auto'>
            <div className='text-center'>
              <h3 className='display-6 header'>Timeline</h3>
              <p>
                Here is the breakdown of the time we anticipate using for the
                upcoming event.
              </p>
            </div>
          </div>
        </div>

        {/* TIMELINE SECTION  */}
        <Timeline />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 0;
  position: relative;
  .timeline-header {
    margin-bottom: 15%;
  }

  .star-1 {
    left: 14%;
    top: 30%;
  }
  .star-2 {
    top: 50%;
    left: 10%;
  }
  .star-3 {
    bottom: 10%;
    left: 8%;
  }
`;

export default LandingTimeline;

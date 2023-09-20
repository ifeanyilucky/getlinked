import React from 'react';
import styled from 'styled-components';
import { Timeline } from '../timeline';

const LandingTimeline: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row mx-auto'>
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
`;

export default LandingTimeline;

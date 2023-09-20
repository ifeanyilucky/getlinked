import React from 'react';
import styled from 'styled-components';

export const Timeline: React.FC = () => {
  return (
    <TimelineWrapper>
      <div id='timeline'>
        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>1</div>
          </div>
          <div className='timeline-content'>
            <h2 className='header'>Hackathon Announcement</h2>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
        </div>

        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>2</div>
          </div>
          <div className='timeline-content right'>
            <h2 className='header'>Teams Registration begins</h2>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register{' '}
            </p>
          </div>
        </div>

        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>3</div>
          </div>
          <div className='timeline-content'>
            <h2>Teams Registration ends</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              facilis quo. Maiores magnam modi ab libero praesentium blanditiis
              consequatur aspernatur accusantium maxime molestiae sunt ipsa.
            </p>
          </div>
        </div>
      </div>
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div``;

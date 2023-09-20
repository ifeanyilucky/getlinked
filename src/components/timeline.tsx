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
            <h2 className='header'>Teams Registration ends</h2>
            <p>Interested Participants are no longer Allowed to register </p>
          </div>
        </div>

        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>4</div>
          </div>
          <div className='timeline-content right'>
            <h2 className='header'>
              Announcement of the accepted teams and ideas
            </h2>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
        </div>

        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>5</div>
          </div>
          <div className='timeline-content'>
            <h2 className='header'>Getlinked Hackathon 1.0 Offically Begins</h2>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions{' '}
            </p>
          </div>
        </div>
        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>6</div>
          </div>
          <div className='timeline-content right'>
            <h2 className='header'>Demo Day</h2>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>
      </div>
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div``;

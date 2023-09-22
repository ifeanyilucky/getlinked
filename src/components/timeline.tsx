import React from 'react';
import styled from 'styled-components';
import MotionInView from './animate/MotionInView';
import { varFadeInUp } from './animate/variants';

// const timeline = [
//   {
//     title: ``,
//     description: '',
//     id: 1
//   },
//   {
//     title: ``,
//     description: '',
//     id: 1
//   },
//   {
//     title: ``,
//     description: '',
//     id: 1
//   },
//   {
//     title: ``,
//     description: '',
//     id: 1
//   },
//   {
//     title: ``,
//     description: '',
//     id: 1
//   },
// ]
export const Timeline: React.FC = () => {
  return (
    <TimelineWrapper>
      <div id='timeline'>
        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>
              <h4>1</h4>
            </div>
          </div>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content'>
              <h2 className='header highlight'>Hackathon Announcement</h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content right'>
              <h2 className='header highlight'>November 18, 2023</h2>
            </div>
          </MotionInView>
        </div>

        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>
              <h4>2</h4>
            </div>
          </div>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content right'>
              <h2 className='header highlight'>Teams Registration begins</h2>
              <p>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register{' '}
              </p>
            </div>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content left'>
              <h2 className='header highlight'>November 18, 2023</h2>
            </div>
          </MotionInView>
        </div>

        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>
              <h4>3</h4>
            </div>
          </div>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content'>
              <h2 className='header highlight'>Teams Registration ends</h2>
              <p>Interested Participants are no longer Allowed to register </p>
            </div>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content right'>
              <h2 className='header highlight'>November 18, 2023</h2>
            </div>
          </MotionInView>
        </div>

        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>
              <h4>4</h4>
            </div>
          </div>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content right'>
              <h2 className='header highlight'>
                Announcement of the accepted teams and ideas
              </h2>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content left'>
              <h2 className='header highlight'>November 18, 2023</h2>
            </div>
          </MotionInView>
        </div>

        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>
              <h4>5</h4>
            </div>
          </div>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content'>
              <h2 className='header highlight'>
                Getlinked Hackathon 1.0 Offically Begins
              </h2>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content right'>
              <h2 className='header highlight'>November 18, 2023</h2>
            </div>
          </MotionInView>
        </div>

        <div className='timeline-item'>
          <div className='timeline-icon d-flex align-items-center justify-content-center'>
            <div>
              <h4>6</h4>
            </div>
          </div>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content right'>
              <h2 className='header highlight'>Demo Day</h2>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <div className='timeline-content left'>
              <h2 className='header highlight'>November 18, 2023</h2>
            </div>
          </MotionInView>
        </div>
      </div>
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div`
  h4 {
    margin-bottom: 0 !important;
  }
`;

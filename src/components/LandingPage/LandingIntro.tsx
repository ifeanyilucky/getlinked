import React from 'react';
import TheBigIdea from '@assets/images/The-big-idea.png';
import styled from 'styled-components';

const LandingIntro: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row py-5 align-items-center'>
          <div className='col-md-7 intro-png'>
            <img
              src={TheBigIdea}
              alt='the-big-idea'
              className='w-75 align-items-center'
            />
          </div>
          <div className='col-md-5'>
            <h3 className='display-6 header'>
              Introduction to getlinked <br />
              <span className='highlight'>tech Hackathon 1.0</span>
            </h3>

            <p className='mt-3 intro-text'>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
      </div>{' '}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media (max-width: 768px) {
    .intro-png {
      text-align: center;
      padding: 1.3rem 0;
    }
    .display-6 {
      text-align: center;
    }
    .intro-text {
      text-align: center;
    }
  }
`;
export default LandingIntro;

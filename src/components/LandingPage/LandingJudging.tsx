import React from 'react';
import styled from 'styled-components';
import JudgeImage from '@assets/images/judges.png';
import MotionInView from '../animate/MotionInView';
import { varFadeInUp } from '../animate/variants';

const attributes = [
  {
    title: 'Innovation and Creativity',
    description: `Evaluate the uniqueness and creativity of the
    solution. Consider whether it addresses a real-world problem in a novel 
    way or introduces innovative features.`,
  },
  {
    title: 'Functionality',
    description: `Assess how well the solution works. Does it perform its 
    intended functions effectively and without major issues? Judges would
    consider the completeness and robustness of the solution.`,
  },
  {
    title: 'Impact and Relevance',
    description: `Determine the potential impact of the solution 
    in the real world. Does it address a significant problem, and is it relevant 
    to the target audience? Judges would assess the potential social, 
    economic, or environmental benefits.`,
  },
  {
    title: 'Technical Complexity',
    description: `Evaluate the technical sophistication of the solution. 
    Judges would consider the complexity of the code, the use of advanced 
    technologies or algorithms, and the scalability of the solution.`,
  },
  {
    title: 'Adherence to Hackathon Rules',
    description: `Judges will Ensure that the team adhered 
    to the rules and guidelines of the hackathon, including deadlines, use of 
    specific technologies or APIs, and any other competition-specific requirements.`,
  },
];

const LandingJudging: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row py-5 align-items-center'>
          <div className='col-md-7 d-flex justify-content-center'>
            <MotionInView variants={varFadeInUp}>
              <img src={JudgeImage} alt='JudgeImage' className='w-100' />
            </MotionInView>
          </div>
          <div className='col-md-5'>
            <MotionInView variants={varFadeInUp}>
              <h3 className='display-6 header mb-3'>
                Judging Criteria <br />
                <span className='highlight'>Key attributes</span>
              </h3>
            </MotionInView>

            {attributes.map((item, index) => (
              <MotionInView variants={varFadeInUp} key={index}>
                <div className='py-1'>
                  <p className='attribute'>
                    <strong style={{ color: '#FF26B9' }}>{item.title}:</strong>{' '}
                    {item.description}
                  </p>
                </div>
              </MotionInView>
            ))}
            <MotionInView variants={varFadeInUp}>
              <div className='button-wrapper'>
                <button>Read More</button>
              </div>
            </MotionInView>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (max-width: 768px) {
    .display-6 {
      text-align: center;
    }
    .attribute {
      text-align: center;
    }
    .button-wrapper {
      text-align: center;
    }
  }
`;

export default LandingJudging;

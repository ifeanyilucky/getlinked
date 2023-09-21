import React from 'react';
import styled from 'styled-components';

// Images
import FaqImage from '@assets/images/faq-image.png';
import QuestionMarks from '@assets/images/question-marks.png';
import MotionInView from '../animate/MotionInView';
import { varFadeInUp } from '../animate/variants';

const faqs = [
  {
    question: 'Can I work on a project I started before the hackathon?',
  },
  {
    question: 'What happens if I need help during the hackathon?',
  },
  {
    question: `What happens if I don't have an idea for a project?`,
  },
  {
    question: `Can I join a team or do I have to come with one?`,
  },
  {
    question: `What happens after the hackathon ends`,
  },
  {
    question: `Can I work on a project I started before the hackathon?`,
  },
];

const LandingFaq: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-5'>
            <MotionInView variants={varFadeInUp}>
              <h3 className='display-6 header'>
                Frequently Ask <br />
                <span className='highlight'>Question</span>
              </h3>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <p className='my-3 pb-5'>
                We got answers to the questions that you might want to ask{' '}
                <strong>about getlinked Hackathon 1.0 </strong>
              </p>
            </MotionInView>

            {/* FAQS  */}

            <div className='faqs-wrapper'>
              {faqs.map((item, index) => (
                <MotionInView variants={varFadeInUp} key={index}>
                  <div className='faqs d-flex justify-content-between'>
                    <p>{item.question}</p>
                    <h5 className='highlight'>+</h5>
                  </div>
                </MotionInView>
              ))}
            </div>
          </div>
          <div className='col-md-7 d-flex justify-content-end'>
            <div className='text-center'>
              <MotionInView variants={varFadeInUp}>
                <img
                  src={QuestionMarks}
                  alt='QuestionMarks'
                  className='question-marks'
                />
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <img src={FaqImage} alt='FaqImage' className='w-75' />
              </MotionInView>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 6rem 0;
  .question-marks {
    margin-bottom: -1.5rem;
  }
  .faqs-wrapper {
    display: flex;
    flex-flow: column;
    gap: 15px;
    .faqs {
      border-bottom: 1px solid var(--app-accent-color);
    }
  }
`;

export default LandingFaq;

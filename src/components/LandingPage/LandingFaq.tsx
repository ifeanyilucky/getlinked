import React, { useState } from 'react';
import styled from 'styled-components';
// Images
import FaqImage from '@assets/images/faq-image.png';
import QuestionMarks from '@assets/images/question-marks.png';
import MotionInView from '../animate/MotionInView';
import { varFadeInUp } from '../animate/variants';
import { AnimatePresence, motion } from 'framer-motion';

interface IFaq {
  question: string;
  answer: string;
  id: number;
}
const faqs: IFaq[] = [
  {
    question: 'Can I work on a project I started before the hackathon?',
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo doloremque deserunt quas modi. At explicabo quis, cupiditate alias reprehenderit deleniti, perspiciatis ea hic odio, architecto ipsa. Doloremque, dignissimos harum?`,
    id: 1,
  },
  {
    question: 'What happens if I need help during the hackathon?',
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo doloremque deserunt quas modi. At explicabo quis, cupiditate alias reprehenderit deleniti, perspiciatis ea hic odio, architecto ipsa. Doloremque, dignissimos harum?`,
    id: 2,
  },
  {
    question: `What happens if I don't have an idea for a project?`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo doloremque deserunt quas modi. At explicabo quis, cupiditate alias reprehenderit deleniti, perspiciatis ea hic odio, architecto ipsa. Doloremque, dignissimos harum?`,
    id: 3,
  },
  {
    question: `Can I join a team or do I have to come with one?`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo doloremque deserunt quas modi. At explicabo quis, cupiditate alias reprehenderit deleniti, perspiciatis ea hic odio, architecto ipsa. Doloremque, dignissimos harum?`,
    id: 4,
  },
  {
    question: `What happens after the hackathon ends`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo doloremque deserunt quas modi. At explicabo quis, cupiditate alias reprehenderit deleniti, perspiciatis ea hic odio, architecto ipsa. Doloremque, dignissimos harum?`,
    id: 5,
  },
  {
    question: `Can I work on a project I started before the hackathon?`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo doloremque deserunt quas modi. At explicabo quis, cupiditate alias reprehenderit deleniti, perspiciatis ea hic odio, architecto ipsa. Doloremque, dignissimos harum?`,
    id: 6,
  },
];

const LandingFaq: React.FC = () => {
  const [currentFaq, setCurrentFaq] = useState<number>(1);
  return (
    <Wrapper id='faqs'>
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
              {faqs.map((item: IFaq) => (
                <MotionInView variants={varFadeInUp} key={item.id}>
                  <div className='faqs' onClick={() => setCurrentFaq(item.id)}>
                    <div className='question d-flex justify-content-between'>
                      <p>{item.question}</p>
                      <h5 className='highlight'>
                        {currentFaq === item.id ? '-' : '+'}
                      </h5>
                    </div>

                    <AnimatePresence initial={false} key={item.id}>
                      {currentFaq === item.id ? (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{
                            type: 'spring',
                            duration: 0.4,
                            bounce: 0,
                          }}
                        >
                          <div className={'current answer'}>
                            <p>{item.answer}</p>
                          </div>
                        </motion.div>
                      ) : (
                        ''
                      )}
                    </AnimatePresence>
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
    @media (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  .faqs-wrapper {
    display: flex;
    flex-flow: column;
    gap: 15px;
    .faqs {
      border-bottom: 1px solid var(--app-accent-color);
      cursor: pointer;
      .answer {
        display: none;
        transition: 0.4s ease-in-out;
      }
      .current {
        display: block;
      }
    }
  }
`;

export default LandingFaq;

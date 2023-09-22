import React from 'react';
import styled from 'styled-components';
import { Variants, motion } from 'framer-motion';
import CongratImage from '@assets/images/congratulation.png';
import { varBounceIn } from '../animate/variants';
import MotionContainer from '../animate/MotionContainer';
import WinkEmoji from '@assets/images/wink-emoji-woman-png.png';

interface IModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const CongratModal: React.FC<IModalProps> = ({ showModal, setShowModal }) => {
  function handleClose() {
    setShowModal(false);
  }
  return (
    <>
      {showModal && (
        <MotionContainer initial='initial' open>
          <ModalWrapper>
            <div className='register-modal text-center'>
              <motion.div variants={varBounceIn as Variants}>
                <img
                  src={CongratImage}
                  alt='congratulation-image'
                  className='w-75 congrat-image'
                />
              </motion.div>
              <div className='modal-content text-center'>
                <motion.div variants={varBounceIn as Variants}>
                  <h3>
                    Congratulations <br /> you have successfully registered!
                  </h3>
                </motion.div>
                <motion.div variants={varBounceIn as Variants}>
                  <p>
                    Yes, it was easy and you did it!
                    <br />
                    check your mail box for next step &nbsp;
                    <span>
                      <img src={WinkEmoji} alt='wink-emoji' />
                    </span>
                  </p>
                </motion.div>
                <motion.div variants={varBounceIn as Variants}>
                  <button className='gl-button' onClick={handleClose}>
                    Back
                  </button>
                </motion.div>
              </div>
            </div>
          </ModalWrapper>
        </MotionContainer>
      )}
    </>
  );
};

const ModalWrapper = styled.div`
  background: rgba(21, 14, 40, 0.93);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  @media (max-width: 768px) {
    padding: 1rem;
    .register-modal {
      height: auto !important;
      h3 {
        margin: 2rem 0;
      }
    }
  }
  .register-modal {
    border-radius: 5px;
    padding: 2.5rem 2rem;
    border: 1px solid var(--app-accent-color);
    width: 540px;
    height: 540px;
    /* z-index: 999; */
  }
`;

export default CongratModal;

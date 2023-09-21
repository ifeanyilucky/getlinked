import React from 'react';
import styled from 'styled-components';
import CongratImage from '@assets/images/congratulation.png';

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
        <ModalWrapper>
          <div className='register-modal text-center'>
            <img
              src={CongratImage}
              alt='congratulation-image'
              className='w-75'
            />
            <div className='modal-content text-center'>
              <h3>
                Congratulations <br /> you have successfully registered!
              </h3>
              <p>
                Yes, it was easy and you did it!
                <br />
                check your mail box for next step
              </p>

              <button onClick={handleClose}>Back</button>
            </div>
          </div>
        </ModalWrapper>
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
  }
`;

export default CongratModal;

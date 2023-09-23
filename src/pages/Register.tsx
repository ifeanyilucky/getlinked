import styled from 'styled-components';
import React, { useState } from 'react';
import MotionInView from '@src/components/animate/MotionInView';
import { varFadeInUp } from '@src/components/animate/variants';
import { CongratModal, RegisterForm } from '@src/components/RegisterPage';
// images
import FemaleWalking from '@assets/images/female-walking-emoji.png';
import MaleWalking from '@assets/images/male-walking-emoji.png';
import DesignerShowingThumbs from '@assets/images/3d-graphic-designer-showing-thumbs-up.png';
import PurpleStar from '@assets/images/start-purple.png';
import LightPurpleStar from '@assets/images/start-light.png';
import GrayStar from '@assets/images/star-grey.png';
import WhiteStar from '@assets/images/start-white.png';

const Register = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Wrapper>
      <CongratModal showModal={showModal} setShowModal={setShowModal} />
      {/* stars */}
      <img src={LightPurpleStar} className='star star-1' alt='star' />
      <img src={GrayStar} className='star star-2' alt='star' />
      <img src={PurpleStar} className='star star-3' alt='star' />
      <img src={WhiteStar} className='star star-4' alt='star' />

      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-5 d-flex justify-content-center'>
            <div className='lense-flare lense-1' />
            <img
              src={DesignerShowingThumbs}
              className='register-img'
              alt='DesignerShowingThumbs'
            />
          </div>
          <div className='col-md-7'>
            <div className='lense-flare lense-2' />
            <div className='register-box'>
              <MotionInView variants={varFadeInUp}>
                <h4 className='highlight header'>Register</h4>
                <div className='be-part'>
                  <p className='pt-4 d-flex align-items-center'>
                    <span>Be part of this movement!</span>
                    <span className='highlight movement-img'>
                      {' '}
                      <img
                        src={FemaleWalking}
                        alt='female-walking-emoji'
                        className='emoji'
                      />{' '}
                      <img src={MaleWalking} alt='male-walking-emoji' />
                    </span>
                  </p>

                  <h5>CREATE YOUR ACCOUNT</h5>

                  <RegisterForm setShowModal={setShowModal} />
                </div>
              </MotionInView>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 0;
  position: relative;
  button {
    width: 100%;
    @media (max-width: 768px) {
      width: auto;
    }
  }
  .register-img {
    width: 500px;
    @media (max-width: 768px) {
      width: 100%;
      width: none;
    }
  }
  .lense-1 {
    position: absolute;
    top: 0;
    left: 0;
  }
  .lense-2 {
    position: absolute;
    @media (max-width: 768px) {
      top: 90%;
    }
    top: 40%;
    right: 0;
  }
  .register-box {
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    width: 540px;
    max-width: 100%;
    padding: 2.5rem;
    .movement-img {
      border-bottom: 1px dashed var(--app-accent-color);
      margin-top: -20px !important;
    }
    @media (max-width: 768px) {
      background: transparent;
      box-shadow: none;
      width: 100%;
      padding: 0;
    }
  }

  .star {
    position: absolute;
    width: 17px;
  }
  .star-1 {
    left: 10%;
  }
  .star-2 {
    right: 20%;
  }
  .star-3 {
    bottom: 20%;
    left: 10%;
  }
  .star-4 {
    right: 20%;
    bottom: 10%;
    width: 10px;
  }
`;
export default Register;

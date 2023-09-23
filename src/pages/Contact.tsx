import React from 'react';
import styled from 'styled-components';
import { Api } from '@src/utils/api';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@src/components/svgs';
// images
import PurpleStar from '@assets/images/start-purple.png';
import LightPurpleStar from '@assets/images/start-light.png';
import GrayStar from '@assets/images/star-grey.png';
import WhiteStar from '@assets/images/start-white.png';
import MotionInView from '@src/components/animate/MotionInView';
import { varFadeInUp } from '@src/components/animate/variants';

interface IContactBody {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
}
const Contact: React.FC = () => {
  const initialValues = {
    email: '',
    phone_number: '',
    first_name: '',
    message: '',
  };
  const [values, setValues] = React.useState<IContactBody>(initialValues);
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(values);
    try {
      setIsLoading(true);
      const { data } = await Api.post('/hackathon/contact-form', values);

      setIsLoading(false);

      window.alert('Thank you! Your submission has been sent');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  return (
    <Wrapper>
      {/* stars */}
      <img src={LightPurpleStar} className='star star-1' alt='star' />
      <img src={GrayStar} className='star star-2' alt='star' />
      <img src={PurpleStar} className='star star-3' alt='star' />
      <img src={WhiteStar} className='star star-4' alt='star' />
      <div className='lense-flare lense' />
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4 desktop py-5 py-md-0'>
            <div>
              <MotionInView variants={varFadeInUp}>
                <h4 className='header highlight'>Get in touch</h4>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <p>
                  Contact <br />
                  Information
                </p>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <p>
                  27, Alara Street <br />
                  Yaba 100012 <br />
                  Lagos State
                </p>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <p>Call Us: 07067981819</p>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <p>
                  We are open from Monday-Friday <br />
                  08:00am - 05:00pm
                </p>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <div>
                  <p className='highlight'>Share on</p>
                  <div
                    className='d-flex align-items-baseline'
                    style={{ gap: '10px' }}
                  >
                    <InstagramIcon />
                    <XIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                  </div>
                </div>
              </MotionInView>
            </div>
          </div>

          <div className='col-md-8 d-flex justify-content-center'>
            <MotionInView variants={varFadeInUp}>
              <div className='contact-box'>
                <h4 className='header mb-3 highlight'>
                  Questions or need assistance? <br />
                  Let us know about it!
                </h4>

                <p className='mobile'>
                  Email us below to any question related to our event
                </p>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      className='gl-input'
                      type='text'
                      placeholder='First Name'
                      required
                      onChange={(e) =>
                        setValues({ ...values, first_name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <input
                      className='gl-input'
                      type='tel'
                      placeholder='Phone number'
                      required
                      onChange={(e) =>
                        setValues({ ...values, phone_number: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <input
                      className='gl-input'
                      type='email'
                      placeholder='Email'
                      required
                      onChange={(e) =>
                        setValues({ ...values, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <textarea
                      className='gl-input'
                      placeholder='Message'
                      required
                      onChange={(e) =>
                        setValues({ ...values, message: e.target.value })
                      }
                    />
                  </div>

                  <div className='text-center'>
                    <button
                      className='gl-button'
                      type='submit'
                      disabled={isLoading}
                    >
                      {isLoading ? 'Please wait...' : 'Submit'}
                    </button>
                  </div>
                </form>
                <div className='mobile text-center mt-5'>
                  <p className='highlight'>
                    <strong>Share on</strong>
                  </p>
                  <div
                    className='d-flex align-items-center justify-content-center'
                    style={{ gap: '10px' }}
                  >
                    <InstagramIcon />
                    <XIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                  </div>
                </div>
              </div>
            </MotionInView>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 5rem 0;
  .lense {
    position: absolute;
    top: 0;
    left: -9rem;
  }
  .contact-box {
    /* maxwidth: 617px; */
    @media (max-width: 768px) {
      background: transparent;
      box-shadow: none;
    }
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    max-width: 540px;
    width: 540px;
    padding: 3rem;
  }
  .gl-input {
    border-radius: 5px;
    border: 1px solid #fff;
    padding: 10px 16px;
    width: 100%;
    margin: 13px 0;
    color: #fff;
    background-color: transparent;
    ::placeholder {
      color: #fff;
      font-weight: bolder !important;
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

export default Contact;

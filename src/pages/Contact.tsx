import React from 'react';
import styled from 'styled-components';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@src/components/svgs';
// import { Api } from '@src/utils/api';

const Contact: React.FC = () => {
  // const [values, setValues] = React.useState({
  //   email: '',
  //   phone_number: '',
  //   first_name: '',
  //   message: '',
  // });

  // async function handleSubmit() {
  //   console.log(values);
  //   // try {
  //   //   const { data } = await Api.get('/hackathon/contact-form');
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // }
  return (
    <Wrapper>
      <div className='lense-flare lense' />
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4 desktop py-5 py-md-0'>
            <div>
              <h4 className='header highlight'>Get in touch</h4>
              <p>
                Contact <br />
                Information
              </p>

              <p>
                27, Alara Street <br />
                Yaba 100012 <br />
                Lagos State
              </p>

              <p>Call Us: 07067981819</p>
              <p>
                We are open from Monday-Friday <br />
                08:00am - 05:00pm
              </p>

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
            </div>
          </div>

          <div className='col-md-8 d-flex justify-content-center'>
            <div className='contact-box'>
              <h4 className='header mb-3 highlight'>
                Questions or need assistance? <br />
                Let us know about it!
              </h4>
              <p className='mobile'>
                Email us below to any question related to our event
              </p>
              <form>
                <div>
                  <input
                    className='gl-input'
                    type='text'
                    placeholder='First Name'
                  />
                </div>
                <div>
                  <input className='gl-input' type='email' placeholder='Mail' />
                </div>
                <div>
                  <textarea className='gl-input' placeholder='Message' />
                </div>

                <div className='text-center'>
                  <button className='gl-button' type='submit'>
                    Submit
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
    margin: 20px 0;
    color: #fff;
    background-color: transparent;
    ::placeholder {
      color: #fff;
      font-weight: bolder !important;
    }
  }

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
  }
`;

export default Contact;

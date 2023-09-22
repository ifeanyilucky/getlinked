import React from 'react';
import styled from 'styled-components';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@src/components/svgs';

const Contact: React.FC = () => {
  return (
    <Wrapper>
      <div className='lense-flare lense' />
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-4 py-5 py-md-0'>
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
              <h6 className='header highlight'>
                Questions or need assistance? <br />
                Let us know about it!
              </h6>
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
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 0;
  .lense {
    position: absolute;
    top: 0;
    left: -9rem;
  }
  .contact-box {
    /* maxwidth: 617px; */

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
    }
  }
`;

export default Contact;

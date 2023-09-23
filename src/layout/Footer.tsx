import React from 'react';
import styled from 'styled-components';
import { Logo } from '@src/components/Logo';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@src/components/svgs';
import LightStar from '@assets/images/start-light.png';
import WhiteStar from '@assets/images/start-white.png';
import PurpleStar from '@assets/images/start-purple.png';
import GrayStar from '@assets/images/star-grey.png';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <img src={WhiteStar} alt='star' className='star star-1' />
      <img src={LightStar} alt='star' className='star star-2' />
      <img src={GrayStar} alt='star' className='star star-3' />
      <img src={WhiteStar} alt='star' className='star star-4' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mx-auto'>
            <Logo />
            <p className='mb-5 pt-3'>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div>
              <p>
                Terms of Use <span className='highlight'>|</span> Privacy Policy
              </p>
            </div>
          </div>

          {/* USEFUL LINKS SECTION */}
          <div className='col-md-4 mx-auto'>
            <p>
              <strong className='highlight'>Useful Links</strong>
            </p>
            <ul className='link-list'>
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
              <li className='socials'>
                <div className='highlight'>Follow us</div>
                <div>
                  <InstagramIcon />
                </div>
                <div>
                  <XIcon />
                </div>
                <div>
                  <FacebookIcon />
                </div>
                <div>
                  <LinkedInIcon />
                </div>
              </li>
            </ul>
          </div>

          {/* CONTACT SECTION */}
          <div className='col-md-4 pt-5 pt-md-0 mx-auto'>
            <p>
              <strong className='highlight'>Contact us</strong>
            </p>
            <div className='contact-item'>
              <div className='bullet'>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z'
                    fill='#F8F8F8'
                  />
                  <path
                    d='M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z'
                    fill='#F8F8F8'
                  />
                </svg>
              </div>
              <p>+234 679 81819</p>
            </div>
            <div className='contact-item'>
              <div className='bullet'>
                <svg
                  width='13'
                  height='15'
                  viewBox='0 0 13 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z'
                    fill='#F8F8F8'
                  />
                </svg>
              </div>
              <p>27, Alara Street Yaba 100012, Lagos State</p>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <p>All rights reserved. &copy; getlinked Ltd.</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 1rem;
  position: relative;
  background-color: #100b20;
  .socials {
    display: flex;
    gap: 12px;
    align-items: baseline;
  }
  .link-list {
    list-style-type: none;
    padding-left: 0;
    li {
      margin: 1rem 0;
    }
  }
  .contact-item {
    display: flex;
    gap: 12px;
    width: 230px;
  }
  .copyright {
    text-align: center;
    margin-top: 3rem;
  }

  .star-1 {
    top: 20%;
    left: 20%;
  }

  .star-2 {
    bottom: 10%;
    left: 50%;
  }
  .star-3 {
    right: 40%;
    top: 10%;
    width: 10px;
  }
  .star-4 {
    bottom: 10%;
    left: 10%;
  }
`;

export default Footer;

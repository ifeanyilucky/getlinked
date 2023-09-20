import { Logo } from '@src/components/Logo';
import React from 'react';
import styled from 'styled-components';

const navconfig = [
  { title: 'Timeline' },
  { title: 'Overview' },
  { title: 'FAQs' },
  { title: 'Contact' },
];
export const Navbar: React.FC = () => {
  return (
    <>
      <Wrapper>
        <div className='container'>
          <div className='nav-bar'>
            <div className='nav-logo'>
              <Logo />
            </div>
            <div className='nav-content'>
              <ul className='nav-items'>
                {navconfig.map((item, index) => (
                  <li className='nav-item' key={index}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <button>Register</button>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className='divider' />
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  .nav-bar {
    display: flex;
    flex-flow: row;
    align-items: baseline;
    justify-content: space-between;
    .nav-logo {
      flex: 50%;
    }
    .nav-content {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      flex: 50%;
      .nav-items {
        display: flex;
        list-style-type: none;
        gap: 15px;
        .nav-item {
        }
      }
    }
  }
`;

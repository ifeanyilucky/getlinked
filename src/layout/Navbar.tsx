import { Logo } from '@src/components/Logo';
import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import { Chevron, CloseIcon } from '@src/components/svgs';
import { PATH } from '@src/routes/paths';

const navconfig = [
  { title: 'Timeline' },
  { title: 'Overview' },
  { title: 'FAQs' },
  { title: 'Contact', link: PATH.contacT },
];
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Wrapper isOpen={isOpen}>
        <div className='container'>
          <div className='nav-bar'>
            <div className='nav-logo'>
              <Logo />
            </div>
            <div className='chevron' onClick={handleOpen}>
              <Chevron />
            </div>
            <div className='nav-content'>
              <div className='close-btn' onClick={handleClose}>
                <CloseIcon />
              </div>
              <ul className='nav-items'>
                {navconfig.map((item, index) => (
                  <li className='nav-item' key={index}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <Link to={PATH.register}>
                <button>Register</button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className='divider' />
      <Outlet />
    </>
  );
};

interface StyleProps {
  isOpen: boolean;
}
const Wrapper = styled.div<StyleProps>`
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
      @media (max-width: 768px) {
        flex-flow: column;
        display: ${({ isOpen }) => (isOpen === true ? 'block' : 'none')};
        background-color: var(--app-bgcolor);
        width: 100%;
        position: fixed;
        height: 100%;
        z-index: 9999;
        top: 0;
        left: 0;
        justify-content: start;
        padding-left: 4rem;
        align-items: flex-start;
        padding-top: 6rem;
        .nav-items {
          flex-flow: column;
          padding-left: 0;
        }
        .close-btn {
          cursor: pointer !important;
          position: absolute;
          top: 20px;
          right: 20px;
        }
      }
    }
    .chevron {
      cursor: pointer !important;
    }
    @media (min-width: 768px) {
      .chevron,
      .close-btn {
        display: none !important;
      }
    }
  }
`;

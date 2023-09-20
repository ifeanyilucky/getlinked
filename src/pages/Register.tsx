import React from 'react';
import styled from 'styled-components';

const Register = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'></div>
          <div className='col-md-7'>
            <div className='register-box'>
              <h5 className='highlight header'>Register</h5>

              <p className='pt-4'>Be part of this movement!</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 0;

  .register-box {
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    max-width: 540px;
    padding: 3rem;
  }
`;
export default Register;

import React from 'react';
import styled from 'styled-components';

interface IFormProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const RegisterForm: React.FC<IFormProps> = ({ setShowModal }) => {
  const [form, setForm] = React.useState({});
  const [isLoading, setLoading] = React.useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<any>): void => {
    e.preventDefault();
    console.log(form);
    setLoading(true);
    setTimeout(() => {
      setShowModal(true);
      setLoading(false);
    }, 2000);
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-md-6'>
          <div className='input-wrapper'>
            <label>Team's Name</label>
            <input
              className='gl-input'
              type='text'
              placeholder='Enter the name of your group'
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='input-wrapper'>
            <label>Phone</label>
            <input
              className='gl-input'
              type='text'
              placeholder='Enter your phone number'
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='input-wrapper'>
            <label>Email</label>

            <input
              className='gl-input'
              type='email'
              placeholder='Enter your email address'
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='input-wrapper'>
            <label>Project Topic</label>
            <input
              className='gl-input'
              type='text'
              placeholder='What is your group project topic'
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='input-wrapper'>
            <label>Category</label>
            <input
              className='gl-input'
              type='text'
              placeholder='Select your category'
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='input-wrapper'>
            <label>Group Size</label>
            <input className='gl-input' type='text' placeholder='Select' />
          </div>
        </div>
      </div>
      <div className='py-3'>
        <small className='highlight'>
          <i>Please review your registration details before submitting.</i>
        </small>
      </div>
      <div className='d-flex align-items-baseline pb-3'>
        <input type='checkbox' className='checkbox' />
        <small>
          I agreed with the event terms and conditions and privacy policy.
        </small>
      </div>

      <div className='text-center'>
        <button type='submit' disabled={true}>
          Register Now
        </button>
      </div>
    </FormWrapper>
  );
};
const FormWrapper = styled.form`
  .input-wrapper {
    margin: 10px 0;
    label {
      display: block;
      margin-bottom: 8px;
    }
    .gl-input {
      width: 100%;
      background-color: rgba(255, 255, 255, 0.03);
      border: 1px solid #fff;
      padding: 10px 12px;
      padding-left: 20px;
      border-radius: 4px;
      ::placeholder {
        color: rgba(255, 255, 255, 25%);
      }
    }
  }
  .checkbox {
    margin-right: 10px;
  }
`;

export default RegisterForm;

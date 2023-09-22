import React from 'react';
import styled from 'styled-components';

interface IFormProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IForm<T> {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: T;
  project_topic: string;
  category: T;
  privacy_poclicy_accepted: boolean;
}
const RegisterForm: React.FC<IFormProps> = ({ setShowModal }) => {
  const [form, setForm] = React.useState<IForm<string>>({
    email: '',
    phone_number: '',
    team_name: '',
    group_size: '',
    project_topic: '',
    category: '',
    privacy_poclicy_accepted: true,
  });
  const [checkAgree, setCheckAgree] = React.useState<boolean>(false);

  const [isLoading, setLoading] = React.useState<boolean>(false);

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
              onChange={(e) => setForm({ ...form, team_name: e.target.value })}
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
              onChange={(e) =>
                setForm({ ...form, phone_number: e.target.value })
              }
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
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              onChange={(e) =>
                setForm({ ...form, project_topic: e.target.value })
              }
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
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='input-wrapper'>
            <label>Group Size</label>
            <input
              className='gl-input'
              type='text'
              placeholder='Select'
              onChange={(e) => setForm({ ...form, group_size: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className='py-3'>
        <small className='highlight'>
          <i>Please review your registration details before submitting.</i>
        </small>
      </div>
      <div className='d-flex align-items-baseline pb-3'>
        <input
          type='checkbox'
          checked={checkAgree}
          className='checkbox'
          onChange={(e) => console.log(e.target)}
        />
        <small>
          I agreed with the event terms and conditions and privacy policy.
        </small>
      </div>

      <div className='text-center'>
        <button
          type='submit'
          disabled={isLoading}
          className='gl-button'
          // disabled={isLoading === true && checkAgree === true ? true : false}
        >
          {isLoading ? 'Please wait...' : '  Register Now'}
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

import { Api } from '@src/utils/api';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IFormProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IForm<T> {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: number;
  privacy_poclicy_accepted: boolean;
}
interface ICategory {
  id: number;
  name: string;
  disabled: boolean;
}

const RegisterForm: React.FC<IFormProps> = ({ setShowModal }) => {
  const [form, setForm] = React.useState<IForm<number>>({
    email: '',
    phone_number: '',
    team_name: '',
    group_size: 0,
    project_topic: '',
    category: 0,
    privacy_poclicy_accepted: false,
  });

  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([
    { id: 0, name: 'Select your category', disabled: true },
  ]);

  // initialize categories to populate category selection option
  useEffect(() => {
    const getCategories = async () => {
      await Api.get('/hackathon/categories-list')
        .then(({ data }) => {
          console.log(data);
          setCategories([...categories, ...data]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent<any>): Promise<void> => {
    e.preventDefault();
    console.log(form);
    setLoading(true);
    await Api.post('hackathon/registration', form)
      .then((res) => {
        setLoading(false);
        console.log(res);
        setShowModal(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
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
              required
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
              required
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
              required
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
              required
              placeholder='What is your group project topic'
              onChange={(e) =>
                setForm({ ...form, project_topic: e.target.value })
              }
            />
          </div>
        </div>
        <div className='col-md-6 col-sm-8 col-xs-8'>
          <div className='input-wrapper'>
            <label>Category</label>
            <select
              className='gl-input'
              required
              placeholder='Select your category'
              onChange={(e) =>
                setForm({ ...form, category: Number(e.target.value) })
              }
              defaultValue={''}
            >
              {categories.length &&
                categories.map((category: ICategory) => (
                  <option
                    key={category.id}
                    disabled={category.id === 0 ? true : false}
                    value={category.id === 0 ? '' : category.id}
                  >
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className='col-md-6 col-sm-4 col-xs-4'>
          <div className='input-wrapper'>
            <label>Group Size</label>
            <select
              className='gl-input'
              required
              onChange={(e) =>
                setForm({ ...form, group_size: Number(e.target.value) })
              }
            >
              <option value='disabled' selected disabled>
                Select
              </option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
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
          checked={form.privacy_poclicy_accepted}
          className='checkbox'
          required
          onChange={() => {
            setForm({
              ...form,
              privacy_poclicy_accepted: !form.privacy_poclicy_accepted,
            });
          }}
        />
        <small>
          I agreed with the event terms and conditions and privacy policy.
        </small>
      </div>

      <div className='text-center'>
        <button type='submit' className='gl-button' disabled={isLoading}>
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
      padding: 10px 15px;
      border-radius: 4px;
      color: #fff;
      ::placeholder {
        color: rgba(255, 255, 255, 25%);
      }
    }
  }
  .checkbox {
    margin-right: 10px;
  }
  option {
    background-color: var(--app-accent-color);
  }
`;

export default RegisterForm;

import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => (
  <Link to='/'>
    <h3 className='header'>
      get<span className='highlight'>linked</span>
    </h3>
  </Link>
);

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import './Application.scss';
import Router from '@src/routes';

const Application: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default Application;

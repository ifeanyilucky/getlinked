import { useRoutes } from 'react-router-dom';
import React from 'react';
import { Navbar } from '@src/layout/Navbar';
import Footer from '@src/layout/Footer';
import LandingPage from '@src/pages/LandingPage';

const Router = () => {
  return useRoutes([
    {
      element: (
        <>
          <Navbar />
          <Footer />
        </>
      ),
      children: [{ path: '/', element: <LandingPage /> }],
    },
  ]);
};

export default Router;

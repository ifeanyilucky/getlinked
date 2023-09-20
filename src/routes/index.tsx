import { useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Navbar } from '@src/layout/Navbar';
import Footer from '@src/layout/Footer';
import { LandingPage, Contact, Register } from '@src/pages';

const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <>
          <Navbar />
          <Footer />
        </>
      ),
      children: [
        { path: '/', element: <LandingPage /> },
        { path: 'contact', element: <Contact /> },
        { path: 'register', element: <Register /> },
      ],
    },
  ]);

  const location = useLocation();
  if (!routes) return null;
  return (
    <AnimatePresence mode='wait'>
      {React.cloneElement(routes, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default Router;

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import React from 'react';

const MotionContainer: React.FC<{
  open: boolean;
  children: React.ReactNode;
  initial: string;
  other?: any;
}> = ({ open, children, ...other }) => {
  return (
    <motion.div
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={{
        animate: {
          transition: { staggerChildren: 0.1 },
        },
      }}
      {...other}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;

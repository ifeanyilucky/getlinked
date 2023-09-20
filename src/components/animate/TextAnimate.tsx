import React from 'react';
import { motion } from 'framer-motion';

import { varFadeInUp } from './variants';

interface ITextAnimateProps {
  text: string;
  variants: object;
  sx: object;
}

export default function TextAnimate({
  text,
  variants,
  sx,
  ...other
}: ITextAnimateProps) {
  return (
    <motion.h1
      style={{
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <motion.span key={index} variants={variants || varFadeInUp}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

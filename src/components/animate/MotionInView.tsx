import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface IMotionInViewProps {
  children: React.ReactNode;
  variants: object;
  transition: object;
  triggerOnce: boolean;
  threshold: number | [];
}

export default function MotionInView({
  children,
  variants,
  transition,
  threshold,
  ...other
}: IMotionInViewProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold || 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start(Object.keys(variants)[1]);
    } else {
      controls.start(Object.keys(variants)[0]);
    }
  }, [controls, inView, variants]);

  return (
    <motion.div
      ref={ref}
      initial={Object.keys(variants)[0]}
      animate={controls}
      variants={variants}
      transition={transition}
      {...other}
    >
      {children}
    </motion.div>
  );
}

import React, { useEffect } from 'react';
import { Variants, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface IMotionInViewProps<T> {
  children: React.ReactNode;
  variants?: T;
  transition?: object;
  triggerOnce?: boolean;
  threshold?: number | [];
}

export default function MotionInView({
  children,
  variants,
  transition,
  threshold,
  ...other
}: IMotionInViewProps<any>) {
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
      transition={{ ease: 'easeIn', duration: 5 }}
      {...other}
    >
      {children}
    </motion.div>
  );
}

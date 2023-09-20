const DISTANCE = 120;

const TRANSITION_ENTER = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const TRANSITION_EXIT = {
  duration: 0.48,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const varFadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: TRANSITION_ENTER },
  exit: { opacity: 0, transition: TRANSITION_EXIT },
};

export const varFadeInUp = {
  initial: { y: DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER },
  exit: { y: DISTANCE, opacity: 0, transition: TRANSITION_EXIT },
};

export const varFadeInDown = {
  initial: { y: -DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER },
  exit: { y: -DISTANCE, opacity: 0, transition: TRANSITION_EXIT },
};

export const varFadeOut = {
  initial: { opacity: 1 },
  animate: { opacity: 0, transition: TRANSITION_ENTER },
  exit: { opacity: 1, transition: TRANSITION_EXIT },
};

export const varFadeOutUp = {
  initial: { y: 0, opacity: 1 },
  animate: { y: -DISTANCE, opacity: 0, transition: TRANSITION_ENTER },
  exit: { y: 0, opacity: 1, transition: TRANSITION_EXIT },
};

export const varFadeOutDown = {
  initial: { y: 0, opacity: 1 },
  animate: { y: DISTANCE, opacity: 0, transition: TRANSITION_ENTER },
  exit: { y: 0, opacity: 1, transition: TRANSITION_EXIT },
};

import { keyframes } from "framer-motion";

// Keyframe Animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const scaleIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
`;

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
  }
`;

// Framer Motion Variants
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const fadeUp = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const fadeDown = {
  hidden: {
    y: -60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const fadeLeft = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const fadeRight = {
  hidden: {
    x: 60,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const scaleUp = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Hover Animations
export const hoverScale = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

export const hoverLift = {
  y: -5,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

export const hoverGlow = {
  boxShadow: [
    "0 0 20px rgba(59, 130, 246, 0.5)",
    "0 0 40px rgba(59, 130, 246, 0.3)",
    "0 0 20px rgba(59, 130, 246, 0.5)",
  ],
  transition: { duration: 1, repeat: Infinity },
};

// Tap Animations
export const tapScale = {
  scale: 0.95,
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

// Loading Animations
export const loadingSpin = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const loadingPulse = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Text Animations
export const textReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const letterReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Stagger Children Utility
export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Custom Animation Hooks (for use in components)
export const getAnimationProps = (type = "fadeUp", delay = 0) => {
  const baseVariants = {
    fadeUp,
    fadeDown,
    fadeLeft,
    fadeRight,
    scaleUp,
  };

  return {
    variants: baseVariants[type] || fadeUp,
    initial: "hidden",
    animate: "show",
    transition: { delay },
  };
};

// Parallax Scrolling Effects
export const parallaxVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Magnetic Button Effect
export const magneticVariants = {
  rest: {
    x: 0,
    y: 0,
  },
  hover: {
    x: 5,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
  tap: {
    x: 2,
    y: -2,
  },
};

// Gradient Background Animation
export const gradientBackground = {
  initial: {
    backgroundPosition: "0% 50%",
  },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Export all animations as a single object for easy importing
export default {
  // Keyframes
  fadeIn,
  slideInFromTop,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  scaleIn,
  bounce,
  pulse,
  shake,
  spin,
  float,
  glow,

  // Variants
  pageVariants,
  pageTransition,
  staggerContainer,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleUp,

  // Interactions
  hoverScale,
  hoverLift,
  hoverGlow,
  tapScale,

  // Loading
  loadingSpin,
  loadingPulse,

  // Text
  textReveal,
  letterReveal,

  // Utilities
  stagger,
  getAnimationProps,
  parallaxVariants,
  magneticVariants,
  gradientBackground,
};

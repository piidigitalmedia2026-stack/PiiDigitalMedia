import type { Variants } from "framer-motion";

/** easeOutQuint — the one easing curve used everywhere for consistency. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  micro: 0.2,
  section: 0.6,
  hero: 0.9,
} as const;

/** Elements never travel further than this on reveal — keeps motion calm. */
export const DISTANCE = 24;

export const VIEWPORT_ONCE = { once: true, amount: 0.2 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.section, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.section, ease: EASE } },
};

export const scaleFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.section, ease: EASE },
  },
};

export const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.section, ease: EASE },
  },
};

/** For masked word/line reveals in headlines. */
export const wordUp: Variants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const springPop = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
};

"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, amount: 0.12 } as const;

const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

/**
 * A <section> that fades and rises into place the first time it scrolls into view.
 * Only opacity and transform are animated: animating a blur filter on a whole
 * section repaints it every frame and makes scrolling stutter.
 */
export function RevealSection({ children, className, id }: BaseProps) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {children}
    </motion.section>
  );
}

/** Same reveal as RevealSection, for a block inside a section. */
export function Reveal({ children, className, delay = 0 }: BaseProps & { delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Wraps a grid or list so its StaggerItem children appear one after another. */
export function Stagger({ children, className }: BaseProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, lift = true }: BaseProps & { lift?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={staggerChild}
      whileHover={lift && !reduce ? { y: -8, transition: { duration: 0.25, ease: EASE } } : undefined}
    >
      {children}
    </motion.div>
  );
}

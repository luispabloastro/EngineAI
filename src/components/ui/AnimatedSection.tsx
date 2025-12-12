'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView, type TargetAndTransition } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
  id?: string;
}

type AnimationProps = TargetAndTransition;

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.5,
  once = true,
  id,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px 0px' });

  // Set initial and animate values based on direction
  const getInitialAndAnimate = () => {
    const initial: AnimationProps = { opacity: 0 };
    const animate: AnimationProps = { opacity: 1 };

    switch (direction) {
      case 'up':
        initial.y = 50;
        animate.y = 0;
        break;
      case 'down':
        initial.y = -50;
        animate.y = 0;
        break;
      case 'left':
        initial.x = 50;
        animate.x = 0;
        break;
      case 'right':
        initial.x = -50;
        animate.x = 0;
        break;
      case 'none':
      default:
        break;
    }

    return { initial, animate };
  };

  const { initial, animate } = getInitialAndAnimate();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      id={id}
    >
      {children}
    </motion.div>
  );
} 
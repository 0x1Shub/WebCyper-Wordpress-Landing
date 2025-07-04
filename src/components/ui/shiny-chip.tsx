'use client';

import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps, type Transition } from 'framer-motion';
import React from 'react';

const animationProps = {
  initial: { '--x': '100%', scale: 0.8 },
  animate: { '--x': '-100%', scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: 'loop',
    repeatDelay: 0.2,
    type: 'spring',
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  } satisfies Transition, 
};

interface ShinyChipProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

const ShinyChip = React.forwardRef<HTMLButtonElement, ShinyChipProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...animationProps}
        {...props}
        className={cn(
          'relative rounded-full px-5 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow',
          className
        )}
      >
        <span
          className="relative block size-full text-sm text-black"
          style={{
            maskImage:
              'linear-gradient(-75deg, #000 calc(var(--x) + 20%), transparent calc(var(--x) + 30%), #000 calc(var(--x) + 100%))',
          }}
        >
          {children}
        </span>
        <span
          style={{
            mask: 'linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))',
            maskComposite: 'exclude',
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(0,0,0,0.1)_calc(var(--x)+20%),rgba(0,0,0,0.5)_calc(var(--x)+25%),rgba(0,0,0,0.1)_calc(var(--x)+100%))] p-px"
        ></span>
      </motion.button>
    );
  }
);

ShinyChip.displayName = 'ShinyChip';

export default ShinyChip;

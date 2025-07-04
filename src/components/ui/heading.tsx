'use client';

import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import { ElementType } from 'react';

interface HeadingProps {
  title: string;
  description?: string;
  className?: string;
  chip?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: ElementType;
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      duration: 0.7,
      delay: 0.2,
    },
  },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      duration: 0.4,
    },
  },
};

const headingElements = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const;

export default function Heading({
  title,
  description,
  className,
  chip,
  align = 'center',
  level = 2,
  as,
}: HeadingProps) {
  const Component = as || (headingElements[level] as ElementType);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'mx-auto',
        {
          'text-left sm:text-center': align === 'center',
          'text-left': align === 'left',
          'text-right': align === 'right',
        },
        className
      )}
      role="heading"
      aria-level={level}
    >
      {chip && (
        <motion.div
          variants={chipVariants}
          className={cn('mb-6 sm:mb-16', {
            'flex justify-start sm:justify-center': align === 'center',
            'flex justify-start': align === 'left',
            'flex justify-end': align === 'right',
          })}
        >
          {chip}
        </motion.div>
      )}

      <motion.div variants={titleVariants}>
        <Component
          className="mx-auto max-w-full font-[family-name:var(--font-display)] text-3xl font-[400] text-balance text-neutral-950 sm:text-4xl md:text-5xl"
          itemProp="headline"
        >
          {title}
        </Component>
      </motion.div>

      {description && (
        <motion.p
          variants={descriptionVariants}
          className={cn(
            'mx-auto mt-4 max-w-3xl text-base font-[family-name:var(--font-sans)] font-medium text-balance text-neutral-700 min-[400px]:text-lg sm:mt-8',
            {
              'text-left sm:text-center': align === 'center',
              'text-left': align === 'left',
              'text-right': align === 'right',
            }
          )}
          itemProp="description"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

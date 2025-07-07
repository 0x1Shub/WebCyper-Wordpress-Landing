'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';
import {
  AnimatePresence,
  MotionValue,
  Variants,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import useMeasure, { type RectReadOnly } from 'react-use-measure';
import Heading from './ui/heading';
import ShinyChip from './ui/shiny-chip';

const testimonials = [
  {
    id: 1,
    img: '/images/mask_group.png',
    title: '✅ 98% Issue Resolved Within 12 Hours',
    quote:
      'We act fast. Our WordPress fix crew has solved 98% of tickets in under half a day.',
    companyLogo: '/images/company/genuus_logo.png',
  },
  {
    id: 2,
    img: '/images/lock_shield.png',
    title: '🔐 Full Backup + Security Patch Included',
    quote: "We don't just fix - we protect. Every fix includes a full backup and malware check.",
    companyLogo: '/images/company/manasvi_infotech_logo.png',
  },
  {
    id: 3,
    img: '/images/our_customer.png',
    title: '👨‍💻 India-Based Team, Available 24X7',
    quote: 'No time zone drama. Get direct access to real WordPress pros anytime.',
    companyLogo: '/images/company/slimkm_logo.png',
  },
  {
    id: 4,
    img: '/images/safe_guard.png',
    title: '🚫 No Fix? No Fee.',
    quote: "You don't pay unless we deliver. That's our promise.",
    companyLogo: '/images/company/motofits_logo.png',
  },
  // {
  //   id: 5,
  //   img: '/images/our_customer.png',
  //   title: 'VP of Sales, Detax',
  //   quote: 'I was able to replace 80% of my team with RadiantAI bots.',
  //   companyLogo: '/images/company/scarface_logo.png',
  // },
  // {
  //   id: 6,
  //   img: '/images/our_customer.png',
  //   title: 'Account Manager, Commit',
  //   quote: 'I’ve smashed all my targets without having to speak to a lead in months.',
  //   companyLogo: '/images/company/sysarks_logo.png',
  // },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  }),
};


const backgroundVariants: Variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export function TestimonialCard({
  title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}: {
  img: string;
  title: string;
  children: React.ReactNode;
  bounds: RectReadOnly;
  scrollX: MotionValue<number>;
} & HTMLMotionProps<'div'>) {
  const ref = useRef<HTMLDivElement | null>(null);

  const computeOpacity = useCallback(() => {
    const element = ref.current;
    if (!element || bounds.width === 0) return 1;

    const rect = element.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const elementCenterX = rect.left + rect.width / 2;
    const distance = Math.abs(centerX - elementCenterX);
    const maxDistance = bounds.width / 2;

    // Only dim if the element is significantly off-center
    if (distance > rect.width) {
      const dimFactor = Math.max(0.6, 1 - (distance - rect.width) / maxDistance);
      return dimFactor;
    }

    return 1;
  }, [bounds]);

  const opacity = useSpring(computeOpacity(), {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  useLayoutEffect(() => {
    opacity.set(computeOpacity());
  }, [computeOpacity, opacity]);

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity());
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-[9/16] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col overflow-hidden rounded-3xl bg-neutral-950 sm:aspect-[3/4] sm:w-96"
    >
      <motion.img
        alt=""
        src={img}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-neutral-950/10 ring-inset sm:from-25%"
      />
      <motion.figure
        className="relative p-10 flex flex-col justify-around h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        
        <div className="z-10">
          <h3
            className="text-3xl text-white font-[family-name:var(--font-sans)] font-semibold text-balance text-neutral-950 text-shadow-md"
            itemProp="name"
          >
            {title}
          </h3>
        </div>

        <div className="z-10">
          <p
            className="text-xl text-white font-[family-name:var(--font-sans)] font-semibold text-balance text-neutral-950 text-shadow-md"
            itemProp="name"
          >
            {children}
          </p>
        </div>
      </motion.figure>
    </motion.div>
  );
}

function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className='w-full'
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.p variants={itemVariants} className="max-w-sm text-base text-neutral-700">
        Brands we have worked with
      </motion.p>
    </motion.div>
  );
}

export function Customers() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollX } = useScroll({ container: scrollRef });
  const [setReferenceWindowRef, bounds] = useMeasure();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Track scroll position and update active index
  useMotionValueEvent(scrollX, 'change', (x) => {
    const width = scrollRef.current?.children[0].clientWidth || 0;
    const gap = 32;
    const totalWidth = width + gap;
    const index = Math.round(x / totalWidth);

    if (index !== activeIndex) {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index >= testimonials.length ? 0 : index);
    }
  });

  const scrollTo = useCallback((index: number, newDirection: number) => {
    if (!scrollRef.current) return;

    const gap = 32;
    const width = (scrollRef.current.children[0] as HTMLElement).offsetWidth;
    const totalWidth = width + gap;

    let targetIndex = index;
    let scrollPosition = totalWidth * index;

    // Handle looping
    if (index >= testimonials.length) {
      targetIndex = 0;
      scrollPosition = 0;
      newDirection = 1;
    } else if (index < 0) {
      targetIndex = testimonials.length - 1;
      scrollPosition = totalWidth * (testimonials.length - 1);
      newDirection = -1;
    }

    setDirection(newDirection);
    setActiveIndex(targetIndex);

    scrollRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  }, []);

  const scrollPrev = useCallback(() => {
    scrollTo(activeIndex - 1, -1);
  }, [activeIndex, scrollTo]);

  const scrollNext = useCallback(() => {
    scrollTo(activeIndex + 1, 1);
  }, [activeIndex, scrollTo]);

  // Auto-scroll with pause functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scrollTo(activeIndex + 1, 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, scrollTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        scrollPrev();
      } else if (e.key === 'ArrowRight') {
        scrollNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, scrollNext, scrollPrev]);

   // Auto-rotation effect that updates progress
  useEffect(() => {
    if (isPaused) return;

    setProgress(0); // Reset progress on index change
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          scrollTo(activeIndex + 1, 1);
          return 0;
        }
        return newProgress;
      });
    }, 30); // 30ms * 100 = 3000ms (3 seconds)

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, scrollTo]);

  // SEO Schema
  const testimonialSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WebCyper',
    review: testimonials.map((testimonial) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        // name: testimonial.name,
        jobTitle: testimonial.title,
      },
      reviewBody: testimonial.quote,
      publisher: {
        '@type': 'Organization',
        name: 'WebCyper',
      },
    })),
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialSchema) }}
        />
      </Head>

      <motion.div
        ref={sectionRef}
        className="relative isolate overflow-hidden mx-auto max-w-7xl h-auto mt-[30px] rounded-lg bg-neutral-50 ring shadow ring-neutral-950/10 px-4 py-16 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        id="customers"
      >


        {/* Background Grid */}
        <motion.svg
          variants={backgroundVariants}
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full stroke-neutral-950/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="testimonials-pattern"
              width={50}
              height={50}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-neutral-100">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#testimonials-pattern)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </motion.svg>

        <motion.div ref={setReferenceWindowRef} variants={itemVariants}>
          <Heading
            title="Why our customers Trust WebCyper"
            description="We fix fast, fix right, and fix with accountability."
            align="center"
            level={2}
            chip={<ShinyChip>Our Customers</ShinyChip>}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            variants={itemVariants}
            className={clsx([
              'relative mt-12 flex gap-8 pr-[var(--scroll-padding)]',
              '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
              'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
              '[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.2xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]',
            ])}
          >
            {testimonials.map(({ img, title, quote }, testimonialIndex) => (
              <motion.div
                key={testimonialIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <TestimonialCard
                  title={title}
                  img={img}
                  bounds={bounds}
                  scrollX={scrollX}
                >
                  {quote}
                </TestimonialCard>
              </motion.div>
            ))}
            {/* <div className="w-[42rem] shrink-0 sm:w-[54rem]" /> */}
          </motion.div>
        </AnimatePresence>

        <motion.div className="mt-16 flex items-start justify-between max-sm:flex-col-reverse max-sm:items-center max-sm:gap-10" variants={itemVariants}>
          <CallToAction />
          <div className="flex items-center gap-4">
            <motion.button
              onClick={scrollPrev}
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group rounded-full bg-white p-2 ring-1 shadow ring-neutral-950/10 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="size-5 text-neutral-500 transition group-hover:text-orange-600" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollTo(index, index > activeIndex ? 1 : -1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={clsx(
                    'group relative h-2 overflow-hidden rounded-full transition-all duration-300 hover:bg-orange-400',
                    activeIndex === index ? 'w-8 bg-orange-600' : 'w-2 bg-neutral-300'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {activeIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-orange-700"
                      initial={{ x: '-100%' }}
                      animate={{ x: '0%' }}
                      transition={{ duration: 3, ease: 'linear' }}
                      key={`progress-${activeIndex}`}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={scrollNext}
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="group rounded-full bg-white p-2 ring-1 shadow ring-neutral-950/10 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="size-5 text-neutral-500 transition group-hover:text-orange-600" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div>
          <div className="mx-auto mt-16 w-full">
            <div className="mx-auto grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
              {testimonials.map((company, idx) => (
                <button
                  key={company.id}
                  onClick={() => scrollTo(idx, 1)}
                  className="relative pb-2"
                >
                  <Image
                    src={company.companyLogo}
                    width={158}
                    height={48}
                    alt='company logo'
                    className={`max-h-12 w-full cursor-pointer object-contain transition-all duration-200 ease-in-out ${
                      idx === activeIndex ? '' : 'scale-100 hover:scale-105'
                    }`}
                  />
                  {idx === activeIndex && (
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-neutral-200">
                      <motion.div
                        className="absolute bottom-0 left-0 h-full bg-orange-600"
                        style={{ width: `${progress}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.05, ease: 'linear' }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

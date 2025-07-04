'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from './ui/button';



// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 20,
      delay: 0.2,
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
      stiffness: 50,
      damping: 20,
      delay: 0.4,
    },
  },
};

const buttonGroupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
    },
  },
};



export default function HeroSection() {
  

  return (
    <motion.section
    //   className="relative isolate overflow-hidden mx-auto max-w-7xl h-[900px] mt-[30px] rounded-lg bg-neutral-50 ring shadow ring-neutral-950/10"
    className="relative isolate overflow-hidden mx-auto max-w-7xl mt-[30px] rounded-lg
    h-[450px] min-[400px]:h-[600px] min-[500px]:h-[700px] sm:h-[800px] md:h-[900px]
    "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      role="banner"
      aria-labelledby="hero-heading"
    >
        <div className="relative w-full h-full">

            <motion.img
                alt=""
                src={'./images/hero_banner.webp'}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />

            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-10" /> */}

            <motion.div 
                // className='my-auto max-md:mx-auto lg:w-[704px] h-[716px] p-[64px] absolute inset-0 z-10 rounded-lg bg-black/30 backdrop-blur-[10px] border border-white/20 ml-[84px] lg:mt-[84px] lg:mb-[84px] md:w-[504px] sm:w-[454px] max-sm:w-auto max-sm:mr-[48px] max-sm:ml-[48px] max-sm:px-[48px]'
                className="my-auto max-md:mx-auto lg:w-[704px] h-auto min-h-[300px] absolute inset-0 z-10 rounded-lg bg-black/30 backdrop-blur-[10px] border border-white/20 
                mx-5 min-[400px]:mx-10 min-[500px]:mx-12 sm:mx-16 md:ml-20 
                mt-5 min-[400px]:mt-10 min-[500px]:mt-12 sm:mt-16 md:mt-20 
                mb-5 min-[400px]:mb-10 min-[500px]:mb-12 sm:mb-16 md:mb-20 
                p-4 min-[300px]:p-6 min-[400px]:p-8 min-[500px]:p-10 sm:p-12 md:p-16 
                max-sm:mx-4 max-sm:px-6"
                variants={contentVariants}>
                <motion.h1
                    id="hero-heading"
                    // className="mx-auto max-w-full text-white font-[family-name:var(--font-display)] font-[400] tracking-normal text-balance text-neutral-950 
                    // text-3xl 
                    // min-[300px]:text-4xl 
                    // min-[400px]:text-5xl 
                    // min-[500px]:text-6xl 
                    // sm:text-7xl 
                    // md:text-7xl 
                    // lg:text-[120px] 
                    // lg:leading-[1.2]
                    // "
                    className="mx-auto max-w-full text-white font-[family-name:var(--font-display)] font-[400] tracking-normal text-balance text-neutral-950 
                    text-3xl 
                    min-[300px]:text-4xl 
                    min-[400px]:text-5xl 
                    min-[500px]:text-6xl 
                    sm:text-7xl 
                    md:text-7xl 
                    lg:text-[120px] 
                    lg:leading-[1.2]"
                    variants={titleVariants}
                    itemProp="headline"
                >
                    Broken <br />WordPress <br />Site? 
                </motion.h1>

                <motion.p
                    // className="text-basefont-medium text-white mx-auto mt-[48px] w-full max-w-full text-center max-[300px]:text-xl text-xl sm:text-3xl sm:w-auto sm:max-w-3xl md:text-left "
                    className="text-white mx-auto w-full max-w-full 
                    text-lg min-[300px]:text-xl min-[400px]:text-2xl min-[500px]:text-3xl 
                    mt-6 min-[300px]:mt-8 min-[400px]:mt-10 min-[500px]:mt-12 
                    text-center md:text-left"
                    variants={descriptionVariants}
                    itemProp="description"
                >
                    We&apos;ll Fix It in <span className='font-bold'>24 Hours</span> or Less
                </motion.p>

                <motion.div
                    // className="mt-[48px] flex w-full lg:flex-row max-lg:flex-col gap-4 lg:items-end max-lg:items-center max-lg:justify-center"
                    className="w-full 
                    mt-8 min-[300px]:mt-10 min-[400px]:mt-12 
                    flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-start"
                    variants={buttonGroupVariants}
                >
                    <motion.div
                      variants={buttonVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto"
                    >
                      <Button 
                        href="https://cal.com/amol-surve-webcyper/30min" 
                        variant="primary" 
                        className="w-full sm:min-w-[200px] px-6 py-3 
                          text-base min-[400px]:text-lg min-[500px]:text-xl"
                      >
                        Let&apos;s Talk
                      </Button>
                    </motion.div>
                    <motion.div
                      variants={buttonVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto"
                    >
                      <Button 
                        href="/#featured-projects" 
                        variant="secondary" 
                        className="w-full sm:min-w-[200px] px-6 py-3 
                          text-base min-[400px]:text-lg min-[500px]:text-xl"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 min-[400px]:size-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                        </svg> 
                        <span className='text-white'>Show me how</span>
                      </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </motion.section>
  );
}


'use client';

import Heading from '@/components/ui/heading';
import { motion, Variants } from 'framer-motion';
import ShinyChip from './ui/shiny-chip';

interface Result {
  id: string;
  title: string;
  tag: string;
  description: string;
  img: string;
  author: string;
  company: string;
}

const results: Result[] = [
  {
    id: 'urgent-fix',
    title: 'Urgent Fix',
    tag: 'WordPress Crash',
    description: 
      "They restored my site in 6 hours after another agency gave up. Saved my launch!",
    img: './images/female.png',
    author: 'Rohit D.',
    company: 'eCommerce Entrepreneur',
  },
  {
    id: 'woocommerce',
    title: 'WooCommerce',
    tag: 'Custom Checkout',
    description:
      "My cart abandonment dropped by half after WebCyper built a custom checkout flow. These guys know WooCommerce inside out.",
    img: './images/female.png',
    author: 'Meenal G.',
    company: 'Founder at Naturista Skincare',
  },
  {
    id: 'figma-to-wordpress',
    title: 'Figma to WordPress',
    tag: 'Build',
    description:
      'I handed over a complex Figma file and they delivered a pixel-perfect, blazing fast website in a week. Better than my dev team!',
    img: './images/male.png',
    author: 'Jatin P.',
    company: 'Designer at Verloop Agency',
  },
  {
    id: 'plugin-development',
    title: 'Plugin Development',
    tag: 'LMS',
    description:
      'We needed a custom attendance plugin for our LMS. WebCyper not only built it fast but documented every detail like pros.',
    img: './images/male.png',
    author: 'Vaibhav R.',
    company: 'CTO, Mahesh Tutorials',
  },
  {
    id: 'malware-removal',
    title: 'Malware Removal',
    tag: 'Speed Boost',
    description:
      "Our WordPress site was hacked and crawling. WebCyper cleaned it, secured it, and made it 3x faster - all in 48 hours.",
    img: './images/female.png',
    author: 'Ashwini S.',
    company: 'Head of Ops, BharatLegal.in',
  },
  
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.2,
    },
  },
};

const featureVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: custom * 0.1,
      duration: 0.8,
    },
  }),
  hover: {
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

const iconVariants: Variants = {
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


// const ResultCard = ({ feature, index }: { feature: Result; index: number }) => (
//   <motion.div
//     key={feature.id}
//     className="relative w-auto h-auto flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-5 items-start rounded-2xl bg-white px-8 py-14 text-left ring-1 shadow-sm ring-black/5 h-full"
//     variants={featureVariants}
//     custom={index}
//     whileHover="hover"
//     role="listitem"
//     aria-labelledby={`feature-title-${feature.id}`}
//   >
//     <div className="flex-shrink-0 mr-4 w-auto h-auto">
//       <motion.img 
//         src={feature.img} 
//         alt={feature.author}
//         className="w-full h-full object-cover my-auto"
//         variants={iconVariants}
//       />
//     </div>
//     <div className='max-sm:flex-col max-sm:items-center max-sm:justify-center'>
//       <h3
//         id={`feature-title-${feature.id}`}
//         className="text-xl max-sm:text-lg font-[family-name:var(--font-sans)] font-semibold text-balance text-neutral-950 max-sm:text-center"
//       >
//         {feature.title}
//       </h3>
//       <p className="text-base font-[family-name:var(--font-sans)] text-pretty text-neutral-500 max-sm:text-center">
//         ({feature.tag})
//       </p>
//       <p className="text-base font-[family-name:var(--font-sans)] text-pretty text-neutral-700 mt-3 italic max-sm:text-center">
//         &quot;{feature.description}&quot;
//       </p>
//       <p className="text-base font-[family-name:var(--font-sans)] text-pretty text-neutral-700 max-sm:text-center">
//         — {feature.author}, {feature.company}
//       </p>
//     </div>
//   </motion.div>
// );

const ResultCard = ({ feature, index }: { feature: Result; index: number }) => (
  <>
    {/* Mobile version (image background with gradient) */}
    <motion.div
      className="relative w-full h-[384px] rounded-2xl overflow-hidden group sm:hidden"
      variants={featureVariants}
      custom={index}
      whileHover="hover"
      role="listitem"
      aria-labelledby={`feature-title-${feature.id}-mobile`}
    >
      {/* Background Image with Blur */}
      <motion.img
        src={feature.img}
        alt={feature.author}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full object-cover blur-xs"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start h-full p-8">
        <div className="mb-4">
          <h3
            id={`feature-title-${feature.id}-mobile`}
            className="text-2xl font-bold text-white"
          >
            {feature.title}
          </h3>
          <p className="text-lg text-white/80 mt-1">
            ({feature.tag})
          </p>
        </div>
        
        <p className="text-white italic text-lg mt-4">
          &quot;{feature.description}&quot;
        </p>
        
        <p className="mt-4 text-base text-white/90 font-medium">
          — {feature.author}, {feature.company}
        </p>
      </div>
    </motion.div>

    {/* Desktop version (original layout) */}
    <motion.div
      className="relative w-auto h-auto flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-5 items-start rounded-2xl bg-white px-8 py-14 text-left ring-1 shadow-sm ring-black/5 h-full hidden sm:flex"
      variants={featureVariants}
      custom={index}
      whileHover="hover"
      role="listitem"
      aria-labelledby={`feature-title-${feature.id}-desktop`}
    >
      <div className="flex-shrink-0 mr-4 w-auto h-auto">
        <motion.img 
          src={feature.img} 
          alt={feature.author}
          className="w-full h-full object-cover my-auto"
          variants={iconVariants}
        />
      </div>
      <div className='max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        <h3
          id={`feature-title-${feature.id}-desktop`}
          className="text-xl max-sm:text-lg font-[family-name:var(--font-sans)] font-semibold text-balance text-neutral-950 max-sm:text-center"
        >
          {feature.title}
        </h3>
        <p className="text-base font-[family-name:var(--font-sans)] text-pretty text-neutral-500 max-sm:text-center">
          ({feature.tag})
        </p>
        <p className="text-base font-[family-name:var(--font-sans)] text-pretty text-neutral-700 mt-3 italic max-sm:text-center">
          &quot;{feature.description}&quot;
        </p>
        <p className="text-base font-[family-name:var(--font-sans)] text-pretty text-neutral-700 mt-3 max-sm:text-center">
          — {feature.author}, {feature.company}
        </p>
      </div>
    </motion.div>
  </>
);


// const ConnectCard = () => (
//   <motion.div 
//     className="relative flex flex-col justify-center rounded-2xl bg-neutral-950 p-6 text-left ring-1 shadow-sm ring-black/5 h-full"
//     variants={featureVariants}
//     whileHover="hover"
//     role="listitem"
//     aria-labelledby={`connected-card`}
//     >
//     <div className="flex flex-col h-full justify-center">
//       <div className='lg:mx-[40px] max-md:p-12'>
//         <p className="text-4xl max-sm:text-3xl text-center font-[family-name:var(--font-display)] font-medium text-white">
//           Most of our customers have faced issues and have made peace with it
//         </p>
//       </div>
//       <a
//         href="#contact"
//         className="mt-6 inline-flex items-center justify-center text-center px-6 py-3 border border-transparent text-2xl max-sm:text-xl font-medium rounded-md shadow-sm text-neutral-950 bg-white hover:bg-neutral-100 transition-colors duration-200 font-[family-name:var(--font-sans)]"
//       >
//         It doesn&apos;t have to be that way!
//       </a>
//     </div>
//   </motion.div>
// );

const ConnectCard = () => (
  <motion.div 
    className="relative flex flex-col justify-center rounded-2xl bg-neutral-950 p-4 min-[400px]:p-6 min-[500px]:p-8 text-left ring-1 shadow-sm ring-black/5 h-full"
    variants={featureVariants}
    whileHover="hover"
    role="listitem"
    aria-labelledby="connected-card"
  >
    <div className="flex flex-col h-full justify-center items-center">
      <div className='w-full max-w-2xl p-4 min-[400px]:p-6 min-[500px]:p-8'>
        <p className="text-2xl min-[400px]:text-3xl min-[500px]:text-4xl text-center font-[family-name:var(--font-display)] font-medium text-white">
          Most of our customers have faced issues and have made peace with it
        </p>
      </div>
      
      <a
        href="#contact"
        className="mt-4 min-[400px]:mt-6 min-[500px]:mt-8 w-full max-w-xs inline-flex items-center justify-center text-center px-6 py-3 border border-transparent text-lg min-[400px]:text-xl min-[500px]:text-2xl font-medium rounded-md shadow-sm text-neutral-950 bg-white hover:bg-neutral-100 transition-colors duration-200 font-[family-name:var(--font-sans)]"
      >
        It doesn&apos;t have to be that way!
      </a>
    </div>
  </motion.div>
);

export default function RealResults() {
  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Why Choose WebCyper',
    description:
      "First impressions matter more than ever. Having a great idea isn't enough anymore. Today's users judge fast and scroll faster.",
    itemListElement: results.map((feature, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: feature.title,
        description: feature.description,
        provider: {
          '@type': 'Organization',
          name: 'WebCyper',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <motion.section
        id="real-results"
        className="relative isolate overflow-hidden mx-auto max-w-7xl h-auto mt-[30px] rounded-lg bg-neutral-50 ring shadow ring-neutral-950/10 px-4 py-16 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        role="region"
        aria-labelledby="why-us-heading"
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

        <div className="">
          <Heading
            title="Real Results"
            description="See what people have to say about us"
            align="center"
            level={2}
            chip={<ShinyChip>Our Results</ShinyChip>}
          />

          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-2"
            role="list"
            aria-label="Customer Testimonials"
            variants={sectionVariants}
          >
            <ResultCard feature={results[0]} index={0} />
            <ResultCard feature={results[1]} index={1} />
            
            {/* Second row */}
            <ResultCard feature={results[2]} index={2} />
            <ResultCard feature={results[3]} index={3} />
            
            <ResultCard feature={results[4]} index={4} />
            <ConnectCard />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
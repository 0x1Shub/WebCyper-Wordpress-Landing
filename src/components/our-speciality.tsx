'use client';

import Heading from '@/components/ui/heading';
import { Variants, motion } from 'framer-motion';
import ShinyChip from './ui/shiny-chip';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  metadata: {
    keywords: string[];
    category: string;
  };
}

const features: Feature[] = [
  {
    id: 'conversion-first',
    title: 'White Screen of Death',
    description:
      "Every pixel is strategically designed to turn visitors into customers. Our focus isn't just on the great looks, but on improving your KPIs.",
    image: './images/Rectangle_1.png',
    metadata: {
      keywords: ['Conversion Rate', 'UX Design', 'KPI Optimization', 'Strategic Design'],
      category: 'Design',
    },
  },
  {
    id: 'dedicated-focus',
    title: 'Broken Layouts After Update',
    description:
      "We only take on 3 new clients per month. Why? Quality over quantity. Your project deserves our full attention, not whatever's left after juggling 20 others.",
    image: './images/Rectangle_6.png',
    metadata: {
      keywords: ['Client Focus', 'Quality Service', 'Dedicated Team', 'Personalized Attention'],
      category: 'Service',
    },
  },
  {
    id: 'beautiful-animations',
    title: 'Login & Admin Access Issue',
    description:
      'We use a powerful combination of Rive and no-code to engage your users with fluid animations that enhance the experience.',
    image: './images/Rectangle_5.png',
    metadata: {
      keywords: ['Animations', 'User Engagement', 'Interactive Design', 'Motion Graphics'],
      category: 'Design',
    },
  },
  {
    id: 'industry-experience',
    title: 'Slow or Crashing Website',
    description:
      'From MVP to IPO, we design success, convincing investors and crushing your competition. Your tech deserves the best treatment.',
    image: './images/Rectangle_4.png',
    metadata: {
      keywords: ['Industry Expertise', 'MVP Development', 'Startup Success', 'Tech Innovation'],
      category: 'Experience',
    },
  },
  {
    id: 'growth-focused',
    title: 'WooCommerce Checkout or Payment Errors',
    description:
      'Our clients see an average 40% increase in conversions and have secured over $100M in funding after working with us.',
    image: './images/Rectangle_3.png', 
    metadata: {
      keywords: ['Growth Strategy', 'Conversion Optimization', 'Funding Success', 'ROI'],
      category: 'Results',
    },
  },
  {
    id: 'rapid-pace',
    title: 'Malware or Security Breach',
    description:
      "We turn 'meh' into 'holy sh*t' in 90 days or less. Elevate your brand and user experience to match the quality of your technology.",
    image: './images/Rectangle_2.png',
    metadata: {
      keywords: ['Fast Delivery', 'Quick Turnaround', 'Efficient Development', 'Brand Elevation'],
      category: 'Process',
    },
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
  

export default function WhatWeFix() {
  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Why Choose WebCyper',
    description:
      "First impressions matter more than ever. Having a great idea isn't enough anymore. Today's users judge fast and scroll faster.",
    itemListElement: features.map((feature, index) => ({
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
        serviceType: feature.metadata.category,
        keywords: feature.metadata.keywords.join(', '),
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
        id="speciality"
        className="relative isolate overflow-hidden mx-auto max-w-7xl h-auto mt-[30px] rounded-lg bg-neutral-50 ring shadow ring-neutral-950/10 px-4 py-16 sm:px-6 lg:px-8"
        // className="mx-auto mt-6 max-w-7xl rounded-lg bg-neutral-50 px-4 py-16 ring shadow ring-neutral-950/10 sm:px-6 lg:px-8"
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

        <div className="w-full h-full my-auto">
          <Heading
            title="What We Fix"
            description="From white screens to plugin conflicts, our WordPress rescue team is on standby."
            align="center"
            level={2}
            chip={<ShinyChip>Our Speciality</ShinyChip>}
          />

          <motion.div
            className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Our Key Features"
            variants={sectionVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="relative flex flex-col w-auto h-[384px] items-start p-8 overflow-hidden text-left group"
                variants={featureVariants}
                custom={index}
                whileHover="hover"
                role="listitem"
                aria-labelledby={`feature-title-${feature.id}`}
              >

                <motion.img
                    alt=""
                    src={feature.image}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />

                {/* <div className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-t from-black/60 via-black/40 to-black/20 z-10" /> */}

                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-lg" />

                {/* Animated hover gradient */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }}
                />

                <div className="flex flex-col justify-end items-start z-20 h-full pointer-events-none">
                  <h3
                    id={`feature-title-${feature.id}`}
                    className="text-3xl text-white font-[family-name:var(--font-sans)] font-semibold text-balance text-neutral-950 text-shadow-md"
                    itemProp="name"
                  >
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

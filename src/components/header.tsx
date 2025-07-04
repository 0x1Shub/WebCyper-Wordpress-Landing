'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Speciality', href: '/#speciality', ariaLabel: 'View our specialities' },
  { name: 'Customers', href: '/#customers', ariaLabel: 'Explore our customers' },
  { name: 'Results', href: '/#real-results', ariaLabel: 'Explore our results' },
  { name: 'Connect on WhatsApp', href: '/#connect-with-us', ariaLabel: 'Connect with us on whatsapp' },
  // { name: 'Testimonials', href: '/#testimonials', ariaLabel: 'Read client testimonials' },
  // { name: 'Blog', href: '/blog', ariaLabel: 'Read our blog' },
  // { name: 'About', href: '/about-us', ariaLabel: 'Learn about Web Cyper' },
] as const;

const logoVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const menuVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const navItemVariants: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: custom * 0.1,
    },
  }),
};

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
};

export default function Header({ isFullScreen = false }: { isFullScreen?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add structured data for navigation
  const navigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Main Navigation',
    hasPart: navigation.map((item) => ({
      '@type': 'SiteNavigationElement',
      name: item.name,
      url: item.href,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
      <motion.header
        initial="initial"
        animate="animate"
        className={`mx-auto ${isFullScreen ? 'max-w-full' : 'max-w-7xl'} rounded-lg bg-neutral-50 p-6 ring shadow ring-neutral-950/10 lg:px-8`}
        role="banner"
      >
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          <motion.div variants={logoVariants}>
            <Link
              href="/"
              className="group flex items-center gap-1 rounded-full transition-all duration-150 ease-in-out hover:gap-2"
              aria-label="Web Cyper - Home"
              itemProp="url"
            >
              <span className="sr-only">Web Cyper - Digital Agency</span>
              <Image
                alt="Web Cyper Logo"
                src="/web-cyper-logo.svg"
                width={32}
                height={32}
                className="h-11 w-auto transition-all duration-150 ease-in-out group-hover:scale-95 group-active:scale-90"
                priority
                itemProp="image"
              />
              <motion.p
                className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-neutral-950 transition-all duration-150 ease-in-out group-hover:tracking-wide group-hover:text-neutral-900 active:tracking-wider"
                itemProp="name"
              >
                Web Cyper
              </motion.p>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div className="flex lg:hidden" variants={menuVariants}>
            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-full bg-neutral-100 p-2.5 text-neutral-700 ring ring-neutral-950/10 transition-all duration-150 ease-in-out hover:shadow"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6 stroke-2" />
            </motion.button>
          </motion.div>

          {/* Desktop navigation */}
          <motion.div
            className="hidden items-center lg:flex lg:gap-x-6"
            initial="initial"
            animate="animate"
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                variants={navItemVariants}
                custom={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-neutral-700 ring-neutral-950/10 transition-all duration-150 ease-in-out hover:bg-neutral-100 hover:text-neutral-950 hover:ring hover:shadow"
                  aria-label={item.ariaLabel}
                  itemProp="url"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              variants={navItemVariants}
              custom={navigation.length}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button href="/contact-us" variant="primary">
                Get a Free Quote
              </Button>
            </motion.div>
          </motion.div>
        </nav>

        {/* Mobile menu dialog */}
        <Dialog
          as={motion.div}
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
          initial="closed"
          animate={mobileMenuOpen ? 'open' : 'closed'}
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel
            as={motion.div}
            variants={mobileMenuVariants}
            className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-4 sm:max-w-sm sm:p-6 sm:ring-1 sm:ring-neutral-900/10"
          >
            <div className="mx-auto flex items-center justify-between rounded-lg bg-neutral-50 p-6 ring shadow ring-neutral-950/10 lg:px-8">
              <Link
                href="/"
                className="group flex items-center gap-1 rounded-full transition-all duration-150 ease-in-out hover:gap-2"
                aria-label="Web Cyper - Home"
              >
                <span className="sr-only">Web Cyper - Digital Agency</span>
                <Image
                  alt="Web Cyper Logo"
                  src="/web-cyper-logo.svg"
                  width={32}
                  height={32}
                  className="h-11 w-auto transition-all duration-150 ease-in-out group-hover:scale-95 group-active:h-10"
                />
                <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-neutral-950 transition-all duration-150 ease-in-out group-hover:tracking-wide group-hover:text-neutral-900 active:tracking-wider">
                  Web Cyper
                </p>
              </Link>
              <motion.button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-full bg-neutral-100 p-2.5 text-neutral-950 ring ring-neutral-950/10 transition-all duration-150 ease-in-out hover:bg-neutral-100 hover:shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6 stroke-2" />
              </motion.button>
            </div>
            <nav className="mt-6 flow-root" aria-label="Mobile navigation">
              <motion.div className="space-y-2 rounded-lg bg-neutral-50 p-6 py-6 ring shadow ring-neutral-950/10">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={navItemVariants}
                    custom={index}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      href={item.href}
                      className="-mx-4 block rounded-full px-5 py-2 text-base font-semibold text-neutral-900 ring-neutral-950/10 hover:bg-neutral-100 hover:ring-1 hover:shadow active:bg-neutral-100 active:ring-1 active:shadow"
                      aria-label={item.ariaLabel}
                    >
                      <span className="index-number mr-2 font-mono">0{index + 1}</span>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <div className="flex w-full flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-center sm:space-y-0">
                <motion.div
                  variants={navItemVariants}
                  custom={navigation.length}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button href="/contact-us" variant="primary">
                    Get a free quote
                  </Button>
                </motion.div>
              </div>
            </nav>
          </DialogPanel>
        </Dialog>
      </motion.header>
    </>
  );
}

'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
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



export default function ChatSection() {

  const [message, setMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const fullMessage = "Hi,\nI need to talk about my\nbroken wordpress website";
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
    if (currentIndex < fullMessage.length && isTyping) {
      const timer = setTimeout(() => {
        setMessage(prev => prev + fullMessage.charAt(currentIndex));
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping, fullMessage]);


  useEffect(() => {
    if (!isTyping) {
      const timer = setTimeout(() => {
        setMessage('');
        setCurrentIndex(0);
        setIsTyping(true);
      }, 3000); 
      
      return () => clearTimeout(timer);
    }
  }, [isTyping]);
  

  return (
    <motion.section
    //   className="relative isolate overflow-hidden mx-auto max-w-7xl h-[900px] mt-[30px] rounded-lg bg-neutral-50 ring shadow ring-neutral-950/10"
      className="relative isolate overflow-hidden mx-auto max-w-7xl h-auto mt-[30px] rounded-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      role="banner"
      aria-labelledby="hero-heading"
      id='connect-with-us'
    >
        {/* Desktop Section */}

        <div className="hidden md:block">
          <div className="relative w-full h-full">

            <motion.img
                alt=""
                src={'./images/hero_banner.webp'}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover rounded-lg blur-sm"
            />

            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-10" /> */}

            <div 
            // className="relative w-full h-full flex flex-row max-md:flex-col max-md:gap-5 items-center justify-between p-[64px]"
            className="relative w-full h-full flex items-center justify-between p-16 gap-12"
            >

                {/* Left Section */}
                <motion.div 
                    className='my-auto w-[600px] max-lg:w-[500px] flex flex-col max-sm:w-auto h-[540px] p-[48px] rounded-2xl bg-black/30 backdrop-blur-[10px] border border-white/20'
                    variants={contentVariants}>
                    <motion.h1
                        id="hero-heading"
                        className="mx-auto max-w-full text-white font-[family-name:var(--font-display)] font-[400] tracking-normal text-balance text-neutral-950 text-4xl md:text-5xl lg:text-7xl text-shadow-lg "
                        variants={titleVariants}
                        itemProp="headline"
                    >
                        Let&apos;s continue the conversation on Whatsapp
                    </motion.h1>

                    <motion.p
                        className="text-basefont-medium text-white md:text-2xl lg:text-3xl mx-auto mt-4 w-full max-w-full text-center sm:mt-8 sm:w-auto sm:max-w-3xl md:text-left text-shadow-lg"
                        variants={descriptionVariants}
                        itemProp="description"
                    >
                        We will be able to share more details and explain the entire service in details
                    </motion.p>

                    <motion.div
                      variants={buttonVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-auto flex justify-end"
                    >
                      <Button 
                        href="https://cal.com/amol-surve-webcyper/30min" 
                        variant="primary" 
                        className="min-w-[200px] px-6 py-3 text-base"
                      >
                        Get on a Phone Call
                      </Button>
                    </motion.div>
                </motion.div>

                {/* Right Section */}
                <motion.div 
                    className='w-[361px] max-sm:w-auto my-auto h-[540px] rounded-2xl'
                    variants={contentVariants}
                >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
                        <div className="bg-[#128C7E] p-4 flex items-center">
                        <div className="relative">
                            <div className="relative mr-3">
                            <div className="bg-white border-2 border-white rounded-full w-12 h-12 flex items-center justify-center">
                                <img src="./images/whatapp_webcyper.png" alt="whatsapp_profile" className='rounded-full bg-white' />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3 border-2 border-white"></div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-bold font-[family-name:var(--font-sans)] text-lg">Webcyper</h3>
                            <p className="text-green-100 text-sm flex items-center">
                            <span className="w-2 h-2 bg-green-400 font-[family-name:var(--font-sans)]  rounded-full mr-1"></span> 
                            Online
                            </p>
                        </div>
                        </div>
                        
                        <div className="bg-[#ECE5DD] flex-grow p-4 bg-[url('/images/whatsapp-bg.png')] bg-cover bg-center flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="mx-auto w-[20%] font-[family-name:var(--font-sans)]  text-center bg-[#a0d8f2] text-xs text-black py-1 rounded-sm">Today</div>
                            </div>

                            {/* Input Area Container */}
                            <div className="relative mt-4">
                                <div className="bg-white rounded-lg py-3 pl-4 pr-10 border border-gray-200">
                                    {/* <p className="text-gray-700 text-md font-[family-name:var(--font-sans)] ">
                                        Hi,<br />
                                        I need to talk about my<br />
                                        broken wordpress website
                                    </p> */}
                                    <p className="text-gray-700 text-md font-[family-name:var(--font-sans)] whitespace-pre-line">
                                      {message}
                                      {isTyping && <span className="ml-1 inline-block w-1 h-4 bg-gray-500 animate-pulse"></span>}
                                    </p>
                                </div>
                                
                                {/* Send Button */}
                                <a 
                                    href="https://wa.me/1234567890" 
                                    className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 bg-[#128C7E] rounded-full p-3 hover:bg-[#075E54] transition-colors duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white text-bolder">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </a>
                            </div>

                            </div>
                        </div>
                </motion.div>

            </div>
          </div>
        </div>

        {/* Mobile Version (hidden on desktop) */}
        {/* <div className="md:hidden">
          <div className="relative w-full h-full">
              <motion.img
                  alt=""
                  src={'./images/hero_banner.webp'}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg blur-sm"
              />

              <div 
              className="relative w-full h-full flex flex-row max-md:flex-col max-md:gap-5 items-center justify-between p-[64px]"
              // className="relative w-full h-full"
              >

                  <motion.div 
                      className='my-auto w-[600px] max-lg:w-[500px] flex flex-col max-sm:w-auto h-[540px] p-[48px] rounded-2xl bg-black/30 backdrop-blur-[10px] border border-white/20'
                      variants={contentVariants}>
                      <motion.h1
                          id="hero-heading"
                          className="mx-auto max-w-full text-white font-[family-name:var(--font-display)] font-[400] tracking-normal text-balance text-neutral-950 text-4xl md:text-5xl lg:text-7xl text-shadow-lg "
                          variants={titleVariants}
                          itemProp="headline"
                      >
                          Let&apos;s continue the conversation on Whatsapp
                      </motion.h1>

                      <motion.p
                          className="text-basefont-medium text-white text-xl mt-4 w-full max-w-full text-left mt-8 w-auto max-w-3xl text-shadow-lg"
                          variants={descriptionVariants}
                          itemProp="description"
                      >
                          We will be able to share more details and explain the entire service in details
                      </motion.p>


                      <motion.div 
                          className='w-auto my-auto h-[400px] rounded-2xl'
                          variants={contentVariants}
                      >
                          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
                              <div className="bg-[#128C7E] p-4 flex items-center">
                              <div className="relative">
                                  <div className="relative mr-3">
                                  <div className="bg-white border-2 border-white rounded-full w-12 h-12 flex items-center justify-center">
                                      <img src="./images/whatapp_webcyper.png" alt="whatsapp_profile" className='rounded-full bg-white' />
                                  </div>
                                  <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3 border-2 border-white"></div>
                                  </div>
                              </div>
                              <div>
                                  <h3 className="text-white font-bold font-[family-name:var(--font-sans)] text-lg">Webcyper</h3>
                                  <p className="text-green-100 text-sm flex items-center">
                                  <span className="w-2 h-2 bg-green-400 font-[family-name:var(--font-sans)]  rounded-full mr-1"></span> 
                                  Online
                                  </p>
                              </div>
                              </div>
                              
                              <div className="bg-[#ECE5DD] flex-grow p-4 bg-[url('/images/whatsapp-bg.png')] bg-cover bg-center flex flex-col justify-between">

                                  <div className="relative mt-4">
                                      <div className="bg-white rounded-lg py-3 pl-4 pr-10 border border-gray-200">
                                          <p className="text-gray-700 text-md font-[family-name:var(--font-sans)] whitespace-pre-line">
                                            {message}
                                            {isTyping && <span className="ml-1 inline-block w-1 h-4 bg-gray-500 animate-pulse"></span>}
                                          </p>
                                      </div>
                                      <a 
                                          href="https://wa.me/1234567890" 
                                          className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 bg-[#128C7E] rounded-full p-3 hover:bg-[#075E54] transition-colors duration-200"
                                      >
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white text-bolder">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                          </svg>
                                      </a>
                                  </div>

                                  </div>
                              </div>
                      </motion.div>

                      <motion.div
                        variants={buttonVariants}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full sm:w-auto items-end text-right my-8"
                      >
                        <Button 
                          href="https://cal.com/amol-surve-webcyper/30min" 
                          variant="primary" 
                          className="w-full sm:min-w-[200px] px-6 py-3 
                            text-base min-[400px]:text-lg min-[500px]:text-xl text-right"
                        >
                          Get on a Phone Call
                        </Button>
                      </motion.div>
                  </motion.div>

              </div>
          </div>
        </div> */}

        <div className="md:hidden">
          <div className="relative w-full">
            <motion.img
              alt=""
              src={'./images/hero_banner.webp'}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover rounded-lg blur-sm"
            />

            <div className="relative w-full flex flex-col items-center p-6  gap-6 sm:gap-8">
              <motion.div 
                className='w-full flex flex-col p-6 rounded-2xl bg-black/30 backdrop-blur-[10px] border border-white/20'
                variants={contentVariants}
              >
                <motion.h1
                    id="hero-heading"
                    className="mx-auto max-w-full text-white font-[family-name:var(--font-display)] font-[400] tracking-normal text-balance text-neutral-950 text-4xl md:text-5xl lg:text-7xl text-shadow-lg "
                    variants={titleVariants}
                    itemProp="headline"
                >
                    Let&apos;s continue the conversation on Whatsapp
                </motion.h1>

                <motion.p
                    className="text-basefont-medium text-white text-xl mt-4 w-full max-w-full text-left mt-8 w-auto max-w-3xl text-shadow-lg"
                    variants={descriptionVariants}
                    itemProp="description"
                >
                    We will be able to share more details and explain the entire service in details
                </motion.p>

                <motion.div 
                  className='w-full mx-auto my-8 max-w-[361px] h-[340px] rounded-2xl'
                  variants={contentVariants}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
                    <div className="bg-[#128C7E] p-4 flex items-center">
                      <div className="relative">
                        <div className="relative mr-3">
                          <div className="bg-white border-2 border-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                            <img 
                              src="./images/whatapp_webcyper.png" 
                              alt="whatsapp_profile" 
                              className='rounded-full bg-white w-8 h-8 sm:w-10 sm:h-10'
                            />
                          </div>
                          <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3 border-2 border-white"></div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-bold font-sans text-base sm:text-lg">Webcyper</h3>
                        <p className="text-green-100 text-xs sm:text-sm flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span> 
                          Online
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-[#ECE5DD] flex-grow p-4 bg-[url('/images/whatsapp-bg.png')] bg-cover bg-center flex flex-col">
                      <div className="space-y-4">
                        <div className="mx-auto w-[20%] font-[family-name:var(--font-sans)]  text-center bg-[#a0d8f2] text-xs text-black py-1 rounded-sm">Today</div>
                        </div>
                      <div className="mt-auto">
                        <div className="bg-white rounded-lg py-3 pl-4 pr-12 border border-gray-200">
                          <p className="text-gray-700 text-sm sm:text-base font-sans whitespace-pre-line">
                            {message}
                            {isTyping && <span className="ml-1 inline-block w-1 h-4 bg-gray-500 animate-pulse"></span>}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mx-auto max-w-[361px]"
                >
                  <Button 
                    href="https://cal.com/amol-surve-webcyper/30min" 
                    variant="primary" 
                    className="w-full py-4 flex gap-3"
                  >
                    <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-5 h-5 text-white text-xl"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" 
                            />
                          </svg>
                          <span className='text-xl'>91364 11922</span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        
    </motion.section>
  );
}


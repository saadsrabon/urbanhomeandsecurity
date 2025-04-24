import React from 'react';
import About from './About';

import { motion } from 'framer-motion';
import WhyChooseUS from './WhyChooseUS';
import OurService from './OurService';
const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
    <section className='container mx-auto px-4 max-h-screen font-monst'>
      <div
        className="relative rounded-2xl bg-cover   flex items-center"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)"
        }}
      >
        {/* Dark overlay with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 px-8 lg:px-16 text-white p-30">
          <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl">
            <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3"
          >
            Building trust and delivering protection—<br />
            <span className="text-[#D7263D]">Urban Security</span>, your partner in safety and service.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg opacity-90">
            To provide disciplined, dependable, and professional security services that protect lives,
            property, and peace of mind across Houston and beyond.
          </motion.p>

          <motion.button
            variants={fadeUp}
            className="font-oswald bg-[#D7263D] text-white text-lg lg:text-2xl tracking-wider px-6 rounded-xl pb-3 pt-2 mt-4 hover:bg-[#b31e2f] transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
        </div>
      </div>
    </section>
    <About />
    <WhyChooseUS></WhyChooseUS>
    <OurService></OurService>
    </>
  );
};

export default Home;

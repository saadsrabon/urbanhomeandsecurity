import React from 'react';
import { motion } from 'framer-motion';
import leftSmallImage from '../assets/handsome-guard-in-black-uniform-looking-at-camera-2022-12-16-18-11-22-utc-1.jpg';
import rightBigImage from '../assets/rear-view-of-guard-in-black-uniform-with-earphone-2022-12-16-20-49-11-utc-1.jpg'

const About = () => {
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
    // main section 
    <section className="container mx-auto px-6 py-16 font-monst">
  <motion.div
    className="grid lg:grid-cols-2 gap-10 items-center"
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Left Section */}
    <div className="space-y-6">
      <motion.div variants={fadeUp}>
        <p className="font-roboto text-sm font-medium text-[#111]">About Us</p>
        <h2 className="text-4xl lg:text-5xl font-semibold font-monst leading-tight mt-2">
          Discover Our <br /> Security Legacy
        </h2>
        <p className="text-[#777777] font-roboto mt-4">
          In a world where safety can no longer be assumed, Urban Security was built to provide peace of mind through presence, precision, and professionalism.
        </p>
        <p className="text-[#777777] font-roboto mt-4">
          Born out of a need for dependable, community-centered protection in densely populated areas, Urban Security delivers tailored security solutions for residential buildings, commercial properties, events, and high-traffic urban environments.
        </p>
        <p className="text-[#777777] font-roboto mt-4">
          We understand that security isn't just about standing guard—it's about being seen, being prepared, and being trusted. Every patrol we make, every post we hold, and every threat we deter is rooted in a commitment to keep people, property, and peace intact.
        </p>
        <button className="mt-6 font-oswald bg-black text-white text-lg lg:text-2xl tracking-wider px-6 py-2 rounded-xl hover:bg-[#D7263D] transition-all duration-300">
          Learn More 
        </button>
      </motion.div>
      {/* hii */}

      {/* Stats and small image */}
      <motion.div className="grid grid-cols-3 gap-6 items-center mt-8" variants={fadeUp}>
        {/* Stats */}
        <div className="space-y-4 col-span-2">
          <div className="flex items-center gap-4">
            <div className="bg-[#00A3FF] text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">01</div>
            <div>
              <h3 className="text-xl font-semibold">100%</h3>
              <p className="text-sm text-gray-600">Satisfied Clients</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#D7263D] text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">02</div>
            <div>
              <h3 className="text-xl font-semibold">200%</h3>
              <p className="text-sm text-gray-600">Total Awards</p>
            </div>
          </div>
        </div>

        {/* Small image */}
        <div>
          <img src={leftSmallImage} alt="Guard at computer" className="rounded-md w-full object-cover" />
        </div>
      </motion.div>
    </div>

    {/* Right Section */}
    <motion.div className="space-y-6" variants={fadeUp}>
      {/* Big Image */}
      <div>
        <img src={rightBigImage} alt="Guard looking out window" className="rounded-md w-full object-cover" />
      </div>
      {/* Text below image */}
      <div>
        <h3 className="text-lg font-semibold">Customer-Centric Approach</h3>
        <p className="text-[#777777] mt-2">
          To provide disciplined, dependable, and professional security services that protect lives, property, and peace of mind across Houston and beyond.
        </p>
      </div>
    </motion.div>
  </motion.div>
</section>

  );
};

export default About;
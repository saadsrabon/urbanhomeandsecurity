import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import logo from '../assets/logo.png'; // Update with your logo path
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    const introTimeout = setTimeout(() => {
        setShowIntro(false);
      }, 1800); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    {/* Initial Logo Animation */}
    <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-black z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.6 },
            }}
          >
            <motion.img
              src={logo}
              alt="Urban Security"
              initial={{ y: 0, scale: 1 }}
              animate={{
                x: -window.innerWidth / 2 + 95,
                y: -window.innerHeight / 2 + 95,
                scale:1,
              }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              
              className="w-40 h-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
    <div className={`${darkMode ? 'dark' : ''}`}>
      {/* Top Info Bar */}
      <div className="bg-darkBlue text-white text-sm px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-2">
          <span>📧 info@urbanhomeandsecurity.com</span>
          <span>📍 Houston, TX</span>
        </div>
        <div className="flex gap-3 mt-2 md:mt-0">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
    scrolled
      ? 'bg-primary lg:py-2 py-4 shadow-md'
      : 'bg-transparent lg:py-6 py-4'
  } text-white backdrop-blur-md`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold"><img  className="w-40 h-auto" src={logo} alt="" /></div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-6 text-sm items-center">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li className="group relative">
              <button className="flex items-center gap-1">Services ▾</button>
              <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg rounded mt-1">
                <li><a href="/remodeling" className="block px-4 py-1 hover:bg-gray-100">Remodeling & Renovation</a></li>
                <li><a href="/security" className="block px-4 py-1 hover:bg-gray-100">Security Installations</a></li>
                <li><a href="/ac" className="block px-4 py-1 hover:bg-gray-100">Air Conditioning</a></li>
                <li><a href="/steel-cage" className="block px-4 py-1 hover:bg-gray-100">Steel Cage</a></li>
                <li><a href="/electrical" className="block px-4 py-1 hover:bg-gray-100">Electrical Services</a></li>
                <li><a href="/painting" className="block px-4 py-1 hover:bg-gray-100">Painting & Power Washing</a></li>
                <li><a href="/roofing" className="block px-4 py-1 hover:bg-gray-100">Roofing</a></li>
                <li><a href="/flooring" className="block px-4 py-1 hover:bg-gray-100">Flooring & Cabinets</a></li>
              </ul>
            </li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/appointment">Appointment</a></li>
          </ul>

          {/* Sticky CTA + Dark Mode */}
          <div className="hidden lg:flex gap-4 items-center">
            <button className="bg-white text-primary px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition">
              Get a Quote
            </button>
            <button onClick={toggleDarkMode} className="text-white">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-2xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'tween', duration: 0.4 }}
      className="fixed top-0 left-0 w-4/5 max-w-xs h-full bg-deepNavy text-white z-[99] px-6 py-8 shadow-2xl"
    >
      {/* Close Button */}
      <div className="flex justify-end mb-6">
        <FaTimes onClick={() => setMenuOpen(false)} className="text-2xl cursor-pointer" />
      </div>

      {/* Menu Items */}
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="space-y-6"
      >
        {[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Blog', path: '/blog' },
          { label: 'Appointment', path: '/appointment' },
        ].map((item, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <a
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-medium transition-all duration-300 relative group"
            >
              <span className="group-hover:ml-2 transition-all duration-300">{item.label}</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </motion.li>
        ))}

        {/* Services Dropdown */}
        <motion.li
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <details className="group cursor-pointer">
            <summary className="text-lg font-medium mb-2 hover:underline">Services</summary>
            <div className="ml-4 space-y-1 text-sm text-gray-300">
              <a href="/remodeling" className="block hover:text-white">Remodeling</a>
              <a href="/security" className="block hover:text-white">Security</a>
              <a href="/ac" className="block hover:text-white">AC Installation</a>
              <a href="/steel-cage" className="block hover:text-white">Steel Cage</a>
              <a href="/electrical" className="block hover:text-white">Electrical</a>
              <a href="/painting" className="block hover:text-white">Painting</a>
              <a href="/roofing" className="block hover:text-white">Roofing</a>
              <a href="/flooring" className="block hover:text-white">Flooring</a>
            </div>
          </details>
        </motion.li>
      </motion.ul>

      {/* Call to Action */}
      <div className="mt-10">
        <button className="bg-white text-primary font-semibold px-4 py-2 rounded-full w-full hover:bg-gray-200 transition">
          Get a Quote
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </nav>
    </div>
    </>
  );
}

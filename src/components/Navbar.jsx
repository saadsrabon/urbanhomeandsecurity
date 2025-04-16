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
      <nav className={`transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'}text-white sticky top-0 z-50`}>
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
        {menuOpen && (
          <div className="lg:hidden bg-deepNavy text-white px-4 py-4 space-y-2 text-sm">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <details className="group">
              <summary className="cursor-pointer">Services</summary>
              <div className="ml-4 space-y-1">
                <a href="/remodeling">Remodeling</a>
                <a href="/security">Security</a>
                <a href="/ac">Air Conditioning</a>
                <a href="/steel-cage">Steel Cage</a>
                <a href="/electrical">Electrical</a>
                <a href="/painting">Painting</a>
                <a href="/roofing">Roofing</a>
                <a href="/flooring">Flooring</a>
              </div>
            </details>
            <a href="/blog">Blog</a>
            <a href="/appointment">Appointment</a>
            <div className="pt-3 border-t border-gray-500">
              <span>📞 (346) 365-7221</span>
              <span className="block text-xs italic">Free Quotes</span>
              <button className="mt-2 bg-white text-primary px-4 py-1 rounded-full text-sm">
                Get a Quote
              </button>
              <button onClick={toggleDarkMode} className="ml-4 text-white">
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
    </>
  );
}

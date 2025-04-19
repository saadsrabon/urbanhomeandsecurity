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
                scale: 1,
              }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}

              className="w-40 h-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`${darkMode ? 'dark' : ''}`}>
        {/* Top Info Bar */}
        <div className="bg-[#0A1F44] text-white text-sm px-4 md:px-18 py-2 flex justify-center md:flex-row md:justify-between items-center">
          <div className="flex justify-center items-center md:flex-row gap-2">
            <span className='border-r pr-5'>📧 info@urbanhomeandsecurity.com</span>
            <span className=' pl-2'>📍 Houston, TX</span>
          </div>
          <div className="hidden md:flex gap-4 mt-2 md:mt-0">
            <a className='hover:text-xl hover:text-[#D7263D] duration-250' href="#"><FaFacebookF /></a>
            <a className='hover:text-xl hover:text-[#D7263D] duration-250' href="#"><FaTwitter /></a>
            <a className='hover:text-xl hover:text-[#D7263D] duration-250' href="#"><FaInstagram /></a>
            <a className='hover:text-xl hover:text-[#D7263D] duration-250' href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={`transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'}text-white sticky top-0 z-50`}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-xl font-bold"><img className="w-40 h-auto" src={logo} alt="" /></div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex gap-10 text-xl items-center">
              <li><a className='hover:text-[#D7263D] hover:text-2xl hover:font-bold duration-300' href="/">Home</a></li>
              <li><a className='hover:text-[#D7263D] hover:text-2xl hover:font-bold duration-300' href="/about">About</a></li>
              <li className="group relative">
                <button className="flex items-center gap-1 hover:text-[#D7263D] hover:text-2xl hover:font-bold duration-300">Services ▾</button>
                <ul className="absolute hidden group-hover:block bg-white text-[#0A1F44] p-2 shadow-lg rounded mt-1">
                  <li><a href="/remodeling" className="block px-4 py-1 hover:bg-gray-100  rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350">Remodeling & Renovation</a></li>
                  <li><a href="/security" className="block px-4 py-1 hover:bg-gray-100 rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350 hover:tex-[20px] ">Security Installations</a></li>
                  <li><a href="/ac" className="block px-4 py-1 hover:bg-gray-100 rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350">Air Conditioning</a></li>
                  <li><a href="/steel-cage" className="block px-4 py-1 hover:bg-gray-100 rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350">Steel Cage</a></li>
                  <li><a href="/electrical" className="block px-4 py-1 hover:bg-gray-100 rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350">Electrical Services</a></li>
                  <li><a href="/painting" className="block px-4 py-1 hover:bg-gray-100 rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350">Painting & Power Washing</a></li>
                  <li><a href="/roofing" className="block px-4 py-1 hover:bg-gray-100 rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350">Roofing</a></li>
                  <li><a href="/flooring" className="block px-4 py-1 hover:bg-gray-100 rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350">Flooring & Cabinets</a></li>
                </ul>
              </li>
              <li><a className='hover:text-[#D7263D] hover:text-2xl hover:font-bold duration-300' href="/blog">Blog</a></li>
              <li><a className='hover:text-[#D7263D] hover:text-2xl hover:font-bold duration-300' href="/appointment">Appointment</a></li>
            </ul>

            {/* Sticky CTA + Dark Mode */}
            <div className="hidden lg:flex gap-4 items-center">
              <button className="bg-white text-[#D7263D] text-xl font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition">
                Get a Quote
              </button>
              <button onClick={toggleDarkMode} className="text-[#D7263D] text-xl">
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
            <div className="lg:hidden flex flex-col bg-[#0A1F44] text-white px-4 py-4 space-y-2 text-sm">
              <a className='text-[16px]' href="/">Home</a>
              <a className='text-[16px]' href="/about">About</a>
              <details className="group">
                <summary className="cursor-pointer text-[16px]">Services</summary>
                <div className="ml-4 space-y-2 flex flex-col border border-[#505050] w-2/6 p-3 rounded-2xl">
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

              <a className='text-[16px]' href="/blog">Blog</a>
              <a className='text-[16px]' href="/appointment">Appointment</a>

              <div className="pt-3 border-t border-gray-500 flex flex-col gap-3">
                <span className='text-[16px] font-semibold'>📞 (346) 365-7221</span>
                <span className="block text-xs italic text-[16px] font-semibold">Free Quotes</span>
                <div className='flex justify-start items-center'>
                  <button className="mt-2 bg-white text-[#D7263D] text-[16px] font-bold px-4 py-1 rounded-full text-sm">
                    Get a Quote
                  </button>
                  <button onClick={toggleDarkMode} className="ml-4 text-[#D7263D] text-[20px]">
                    {darkMode ? <FaSun /> : <FaMoon />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

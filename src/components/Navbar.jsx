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
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import logo from '../assets/logo.png'; // Update with your logo path
export default function NavbarMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const navItems = [
    {
      name: "Home",
      link: "#features",
    },
    {
      name: "About",
      link: "#pricing",
    },
    {
      name: "Service",
      link: "#contact",
    },
    {
      name: "Service",
      link: "#contact",
    },
    {
      name: "Blog",
      link: "#contact",
    },
    {
      name: "Appointement",
      link: "#contact",
    },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        <div className='flex justify-between items-center bg-white dark:bg-black  px-4 md:px-18 py-4'>
          <img className='w-20 h-auto hidden md:block' src={logo} alt="" />
        
        <Navbar className="py-8">
        {/* Desktop Navigation */}
        <NavBody className="py-8">
          {/* <NavbarLogo /> */}
          <NavItems className="text-black" items={navItems} />
          
        </NavBody>
        
        
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      </div>
      
      </div>
    </>
  );
}

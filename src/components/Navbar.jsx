import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // Update with your logo path
import MobileMenu from "./MobileNav";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    const introTimeout = setTimeout(() => {
      setShowIntro(false);
    }, 1800);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Initial Logo Animation */}
      {/* {window.location.pathname === "/" && (
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
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-40 h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      )} */}
      <div className={`${darkMode ? "dark" : ""}`}>
        {/* Top Info Bar */}
        <div className="bg-black text-white text-sm px-4 md:px-18 py-2 flex justify-center md:flex-row md:justify-between items-center">
          <div className="flex justify-center items-center md:flex-row gap-2">
            <motion.span className="border-r pr-5"

              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              info@urbanhomeandsecurity.com
            </motion.span>
            <motion.span initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }} className=" pl-2"> Houston, TX</motion.span>
          </div>
          <div className="hidden md:flex gap-4 mt-2 md:mt-0">
            <a
              className="hover:text-xl hover:text-[#D7263D] duration-250"
              href="#"
            >
              <FaFacebookF />
            </a>
            <a
              className="hover:text-xl hover:text-[#D7263D] duration-250"
              href="#"
            >
              <FaTwitter />
            </a>
            <a
              className="hover:text-xl hover:text-[#D7263D] duration-250"
              href="#"
            >
              <FaInstagram />
            </a>
            <a
              className="hover:text-xl hover:text-[#D7263D] duration-250"
              href="#"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className={`transition-all duration-300 ${scrolled ? "shadow-md py-2 fixed top-0" : "py-4"
            }text-white sticky top-0 z-50 `}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-xl font-bold">
              <img className="w-40 h-auto" src={logo} alt="" />
            </div>

            {/* Desktop Nav */}
            <ul className={`transition-all duration-300 z-50 hidden lg:flex gap-10 text-xl items-center font-monst border-none text-black  ${scrolled
              ? "fixed  top-4 left-1/2 -translate-x-1/2 bg-white backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-white/10 "
              : "py-4 sticky top-0"
              }`}>

              {/* Home Link */}
              <li className="hover:bg-black/10 px-4 py-2 rounded-full  duration-300">
                <NavLink to="/" className=" hover:text-[#D7263D] hover:text-2xl hover:font-bold duration-300">Home</NavLink>
              </li>

              {/* About Link */}
              <li className="hover:bg-black/10 px-4 py-2 rounded-full  duration-300">
                <NavLink to="/about" className=" hover:text-[#D7263D] hover:text-2xl hover:font-bold duration-300">About</NavLink>
              </li>

              {/* Service Link */}
              <li className="hover:bg-black/10 px-4 py-2 rounded-full  duration-300 group relative">
                <button className="flex items-center gap-1 hover:text-[#D7263D] hover:text-2xl hover:font-bold duration-300">
                  <NavLink to="/service">Services ▾</NavLink>
                </button>
                <ul className="absolute top-12 hidden group-hover:block bg-white text-[#0A1F44] p-2 w-[400px] shadow-lg rounded mt-1">
                  <li>
                    <NavLink to="/securityPlaza" className="block px-4 py-1 hover:bg-gray-100 rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350 hover:tex-[20px] ">Strip plaza security service</NavLink>
                  </li>
                  <li>
                    <NavLink to="/securityGuard" className="block px-4 py-1 hover:bg-gray-100 rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350 hover:tex-[20px] ">Security guard services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/securityHouse" className="block px-4 py-1 hover:bg-gray-100 rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350 hover:tex-[20px] ">House sitting services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/securityInstallation" className="block px-4 py-1 hover:bg-gray-100 rounded-2xl hover:text-[#D7263D] hover:tex-[20px] hover:font-semibold duration-350 hover:tex-[20px] ">Security installations</NavLink>
                  </li>


                </ul>
              </li>

              {/* Blog Link */}
              {/* <li>
                <NavLink to="/blog" className="flex items-center gap-1 hover:text-[#D7263D] hover:text-2xl hover:font-bold duration-300">Blog</NavLink>
              </li> */}

              {/* Appointment Link */}
              <li className="hover:bg-black/10 px-4 py-2 rounded-full  duration-300">
                <NavLink to="/appointment" className=" hover:text-[#D7263D] hover:text-2xl hover:font-bold duration-300">Appointment</NavLink>
              </li>
            </ul>

            {/* Sticky CTA + Dark Mode */}
            <div className="hidden lg:flex gap-4 items-center">
              <NavLink to="/appointment">
                <button className="bg-white text-[#D7263D] text-xl font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition hover:cursor-pointer">
                  Get a Quote
                </button>
              </NavLink>
              <button
                onClick={toggleDarkMode}
                className="text-[#D7263D] text-xl"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-2xl text-black" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <MobileMenu
              menuOpen={toggleMenu}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          )}
        </nav>
      </div>
    </>
  );
}

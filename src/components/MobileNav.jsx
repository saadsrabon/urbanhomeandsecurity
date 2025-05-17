import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

const MobileMenu = ({ menuOpen, toggleDarkMode, darkMode }) => {
  const [serviceOpen, setServiceOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const dropdownVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sidebarVariants}
          className="fixed top-0 left-0 w-4/5 max-w-sm h-full z-50 bg-black/80 text-white px-6 py-6 space-y-4 shadow-lg backdrop-blur-md overflow-y-auto flex flex-col"
        >
          {["Home", "About", "Blog", "Appointment"].map((item, index) => (
            <motion.a
              key={index}
              href={`/${item.toLowerCase()}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, x: 5, color: "#FACC15" }}
              className="text-[16px] font-medium transition-all duration-200"
            >
              {item}
            </motion.a>
          ))}

          {/* Services Dropdown */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="text-[16px] font-medium flex justify-between w-full hover:text-yellow-400"
            >
              Services
              <span>{serviceOpen ? "▲" : "▼"}</span>
            </button>

            <AnimatePresence>
              {serviceOpen && (
                <motion.div
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  variants={dropdownVariants}
                  className="ml-4 mt-2 flex flex-col border-l border-[#505050] pl-3 space-y-2"
                >
                  {[
                    "Strip plaza security service",
                    "Security guard services",
                    "House sitting services",
                    "Security installations",
                  ].map((service, i) => (
                    <motion.a
                      key={i}
                      href={`/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, x: 5, color: "#FACC15" }}
                      className="text-[15px] transition-all duration-150"
                    >
                      {service}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            variants={itemVariants}
            className="pt-4 border-t border-gray-600 flex flex-col gap-3"
          >
            <span className="text-[16px] font-semibold">📞 (346) 365-7221</span>
            <a href="/appointment">
              <span className="text-[15px] italic font-semibold text-gray-300">
                Free Quotes
              </span>
            </a>
            <div className="flex gap-4 items-center mt-2">
              <a href="/appointment">
                <button className="bg-white text-[#D7263D] text-[15px] font-bold px-4 py-1 rounded-full hover:scale-105 transition">
                  Get a Quote
                </button>
              </a>
              <button
                onClick={toggleDarkMode}
                className="text-[#D7263D] text-[20px] hover:scale-110 transition"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-midnight text-white z-50 shadow-lg backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-heading tracking-wide">Urban Security</div>

          <nav className="hidden md:flex space-x-8 font-body">
            <a href="#home" className="hover:text-securityyellow transition">Home</a>
            <a href="#services" className="hover:text-securityyellow transition">Services</a>
            <a href="#about" className="hover:text-securityyellow transition">About</a>
            <a href="#contact" className="hover:text-securityyellow transition">Contact</a>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-midnight bg-opacity-95 text-white p-6 space-y-4 font-body shadow-lg">
          <a href="#home" onClick={toggleMenu} className="block hover:text-securityyellow">Home</a>
          <a href="#services" onClick={toggleMenu} className="block hover:text-securityyellow">Services</a>
          <a href="#about" onClick={toggleMenu} className="block hover:text-securityyellow">About</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:text-securityyellow">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
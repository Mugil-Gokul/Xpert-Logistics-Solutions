import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed z-50 w-full border-b shadow-sm transition-colors duration-500 px-0 ${
        scrolled
          ? "bg-white text-black border-gray-900"
          : "bg-white/35 text-black border-gray-800"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between lg:grid lg:grid-cols-3">

        {/* Left Links (Desktop) */}
        <ul className="hidden lg:flex justify-between space-x-8 font-medium">
          <li className="px-8 py-10 hover:bg-[#620504]/75 hover:text-white transition duration-300 tracking-wider">
            <Link to="/about">ABOUT US</Link>
          </li>

          <li className="px-8 py-10 hover:bg-[#620504]/75 hover:text-white transition duration-300 tracking-wider">
            <Link to="/services">SERVICES</Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="flex justify-center">
          <Link to="/">
            <div
              className={`p-[0.7rem] rounded-sm transition-colors duration-500 ${
                scrolled ? "bg-white" : "bg-transparent"
              }`}
            >
              <img
                src={Logo}
                alt="Xpert Logistics Solutions"
                className="h-16 lg:h-20 w-auto"
              />
            </div>
          </Link>
        </div>

        {/* Right Links (Desktop) */}
        <ul className="hidden lg:flex justify-between space-x-8 font-medium">
          <li className="px-8 py-10 hover:bg-[#620504]/75 hover:text-white transition duration-300 tracking-wider">
            <Link to="/career">CAREER</Link>
          </li>

          <li className="px-8 py-10 hover:bg-[#620504]/75 hover:text-white transition duration-300 tracking-wider">
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl pr-5">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`lg:hidden flex flex-col items-center space-y-6 py-8 ${
            scrolled ? "bg-[#620504] text-white" : "bg-white"
          }`}
        >
          <Link onClick={() => setMenuOpen(false)} to="/about">
            ABOUT US
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/services">
            SERVICES
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/career">
            CAREER
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/contact">
            CONTACT US
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
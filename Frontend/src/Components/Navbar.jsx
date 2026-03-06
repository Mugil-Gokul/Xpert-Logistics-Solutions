import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed z-20 w-full border-b shadow-sm transition-colors duration-500 ${
        scrolled
          ? "bg-black text-white border-gray-900"
          : "bg-white/25 text-gray-800 border-gray-800"
      }`}
    >
      <div className="container mx-auto grid grid-cols-3 items-center">

        {/* Left Links */}
        <motion.ul
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-between space-x-8 font-medium"
        >
          <li className="px-8 py-10 transition-colors duration-300 hover:bg-[#620504]/75 hover:text-white tracking-wider">
            <Link to="/about">ABOUT US</Link>
          </li>

          <li className="px-8 py-10 transition-colors duration-300 hover:bg-[#620504]/75 hover:text-white tracking-wider">
            <Link to="/services">SERVICES</Link>
          </li>
        </motion.ul>

        {/* Logo Center */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link to="/">
            <div
              className={`p-[0.7rem] rounded-sm transition-colors duration-500 ${
                scrolled ? "bg-white shadow-md" : "bg-transparent"
              }`}
            >
              <img
                src={Logo}
                alt="Xpert Logistics Solutions"
                className="h-20 w-auto"
              />
            </div>
          </Link>
        </motion.div>

        {/* Right Links */}
        <motion.ul
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-between space-x-8 font-medium"
        >
          <li className="px-8 py-10 transition-colors duration-300 hover:bg-[#620504]/75 hover:text-white tracking-wider">
            <Link to="/career">CAREER</Link>
          </li>

          <li className="px-8 py-10 transition-colors duration-300 hover:bg-[#620504]/75 hover:text-white tracking-wider">
            <Link to="/contact">CONTACT US</Link>
          </li>
        </motion.ul>

      </div>
    </motion.nav>
  );
};

export default Navbar;
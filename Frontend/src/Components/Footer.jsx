import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoImg from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-14 pb-6 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-100 via-white to-red-100 rounded-2xl py-6 px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-900 shadow-md text-center sm:text-left"
        >
          <div>
            <h4 className="font-semibold mb-1">Registered Office:</h4>
            <p className="text-gray-700">Address Here</p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Corporate Office:</h4>
            <p className="text-gray-700">Address Here</p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Call Us:</h4>
            <p className="text-gray-700">Ph. No Here</p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Email Us:</h4>
            <p className="text-gray-700">Email Address Here</p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >

          {/* Company Info */}
          <div className="flex flex-col items-center sm:items-start space-y-4 text-center sm:text-left">
            <Link to="/">
              <img
                src={LogoImg}
                alt="Xpert Logistics Logo"
                className="w-24 sm:w-28 bg-white p-2 rounded-md shadow-md"
              />
            </Link>

            <h3 className="font-semibold text-white">
              Xpert Logistics Solutions
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Xpert Logistics Solutions offers comprehensive, end-to-end freight
              and supply chain management services with over 20 years of
              industry expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-red-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-red-500 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-red-500 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/career" className="hover:text-red-500 transition">
                  Career
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-red-500 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Services</h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/services/ftl" className="hover:text-red-500 transition">
                  Full Truckload (FTL)
                </Link>
              </li>

              <li>
                <Link to="/services/ltl" className="hover:text-red-500 transition">
                  Less-Than-Truckload (LTL)
                </Link>
              </li>

              <li>
                <Link
                  to="/services/expedited-shipping"
                  className="hover:text-red-500 transition"
                >
                  Expedited Shipping
                </Link>
              </li>

              <li>
                <Link
                  to="/services/dedicated-fleet"
                  className="hover:text-red-500 transition"
                >
                  Dedicated Fleet Services
                </Link>
              </li>

              <li>
                <Link
                  to="/services/brokerage-3pl"
                  className="hover:text-red-500 transition"
                >
                  Brokerage & 3PL
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Follow Us</h3>

            <div className="flex justify-center sm:justify-start space-x-4">
              <a className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#620504] hover:bg-red-700 transition">
                <FaFacebookF />
              </a>

              <a className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#620504] hover:bg-red-700 transition">
                <FaTwitter />
              </a>

              <a className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#620504] hover:bg-red-700 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-sm mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Mugil Technologies Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
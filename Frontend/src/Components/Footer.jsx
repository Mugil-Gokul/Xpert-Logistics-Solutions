import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import LogoImg from "../assets/logo.png"; // replace with your actual logo path

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-12 pb-6 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Section - Contact Info inside capsule gradient */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-100 via-white to-red-100 rounded-full py-6 px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-900 shadow-md"
        >
          <div>
            <h4 className="font-semibold mb-2">Registered Office:</h4>
            <p>Address Here</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Corporate Office:</h4>
            <p>Address Here</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Call Us:</h4>
            <p>Ph. No Here</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Email Us:</h4>
            <p>Email Address Here</p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info with Logo */}
          <div className="flex flex-col space-y-4">
            <img
              src={LogoImg}
              alt="Xpert Logistics Logo"
              className="w-28 h-auto bg-white p-2 rounded-md shadow-md"
            />
            <h3 className="text-white font-semibold">Xpert Logistics Solutions</h3>
            <p className="text-sm leading-relaxed">
              Xpert Logistics Solutions offers comprehensive, end-to-end freight
              and supply chain management services. With over 20 years of industry
              expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-600">Home</a></li>
              <li><a href="#" className="hover:text-red-600">About Us</a></li>
              <li><a href="#" className="hover:text-red-600">Services</a></li>
              <li><a href="#" className="hover:text-red-600">Career</a></li>
              <li><a href="#" className="hover:text-red-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-600">Full Truckload (FTL)</a></li>
              <li><a href="#" className="hover:text-red-600">Less-Than-Truckload (LTL)</a></li>
              <li><a href="#" className="hover:text-red-600">Expedited Shipping</a></li>
              <li><a href="#" className="hover:text-red-600">Dedicated Fleet Services</a></li>
              <li><a href="#" className="hover:text-red-600">Brokerage & 3PL</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-300 text-sm mt-12">
        © {new Date().getFullYear()} Mugil Technologies Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

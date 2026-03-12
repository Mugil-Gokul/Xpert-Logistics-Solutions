import React from "react";
import { motion } from "framer-motion";
import ContactHeroImg from "../assets/ContactHeroImg.png";

const ContactHero = () => {
  return (
    <section className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] mb-10 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={ContactHeroImg}
        alt="Contact Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-20">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-4">
            Contact Us
          </h1>

          {/* Optional content */}
          {/*
          <p className="text-sm sm:text-base lg:text-xl text-gray-200 max-w-md leading-relaxed">
            Get in touch with our team to explore opportunities and be part of
            the workforce redefining logistics.
          </p>

          <button className="mt-4 sm:mt-6 bg-red-600 text-white px-5 py-2 rounded-md font-medium hover:bg-red-700 transition">
            Reach Out →
          </button>
          */}
        </motion.div>

      </div>
    </section>
  );
};

export default ContactHero;
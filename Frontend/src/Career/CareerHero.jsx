import React from "react";
import { motion } from "framer-motion";
import CareerHeroImg from "../assets/CareerHeroImg.png";

const CareerHero = () => {
  return (
    <section className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] mb-10 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={CareerHeroImg}
        alt="Career Hero Background"
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
            Work With Us
          </h1>
        </motion.div>

      </div>
    </section>
  );
};

export default CareerHero;
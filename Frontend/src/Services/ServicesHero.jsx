import React from "react";
import { motion } from "framer-motion";
import ServicesHeroImg from "../assets/ServicesHeroImg.png";

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] mb-8 lg:mb-10">
      
      {/* Background Image */}
      <img
        src={ServicesHeroImg}
        alt="Services Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-4">
            Our Services
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
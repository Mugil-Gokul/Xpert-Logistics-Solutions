import React from "react";
import { motion } from "framer-motion";
import TruckImage from "../assets/HeroIMG.png"; 

const HomeHero = () => {
  return (
    <section
      className="relative h-[110vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${TruckImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative container mx-auto px-40 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Precision Freight. <br /> Unmatched Expertise.
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Delivering industry-leading logistics solutions across North America.
            When it has to be there, trust the Xperts.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md flex items-center space-x-2 transition-colors duration-300"
          >
            <span>View Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;

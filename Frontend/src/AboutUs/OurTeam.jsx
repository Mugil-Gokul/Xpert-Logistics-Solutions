import React from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
  return (
    <section className="relative w-full bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden mt-10 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#620504] to-black"></div>

      {/* NETWORK SVG (responsive safe) */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-10 sm:opacity-20"
      >
        <motion.line
          x1="10" y1="30" x2="90" y2="70"
          stroke="#ff4d4d"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.line
          x1="20" y1="80" x2="80" y2="20"
          stroke="#ff4d4d"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
        />
      </svg>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto text-center z-10">

        {/* Top Nodes */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full shadow-[0_0_12px_rgba(255,0,0,0.7)]"
            />
          ))}
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          Our Management & Expert Team
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Our success is driven by the power of collaboration. Xpert Logistics is powered by a
          world-class team of experts who work together seamlessly to solve complex
          logistics challenges and deliver innovative solutions faster.
        </motion.p>

      </div>

      {/* Floating Nodes (responsive positions) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-10 sm:top-20 left-4 sm:left-10 w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full shadow-md"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full shadow-md"
      />

    </section>
  );
};

export default OurTeam;
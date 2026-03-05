import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CareerCTA = () => {
  return (
    <section className="w-full bg-white py-10 px-6 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between"
      >
        {/* Message */}
        <h2 className="text-xl lg:text-4xl font-semibold text-gray-900 mb-6 lg:mb-0">
          Submit your resume, & we will get back to you.
        </h2>

        {/* Button */}
        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium flex items-center hover:bg-red-700 transition">
          Upload your resume 
        </button>
      </motion.div>
    </section>
  );
};

export default CareerCTA;

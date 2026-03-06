import React from "react";
import { motion } from "framer-motion";
import CareerImg from "../assets/HeroIMG.png"; // replace with your actual image path

const HomeCareer = () => {
  return (
    <section className="w-full bg-white mb-8 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={CareerImg}
            alt="Career at Xpert Logistics"
            className="hadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6"
        >
          <h2 className="text-xl lg:text-2xl font-medium text-gray-900">
            <span className="text-red-600">Join Our</span> Solution Minds
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Be a part of the workforce that redefines logistics.
          </p>

          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition">
              Join Us 
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCareer;

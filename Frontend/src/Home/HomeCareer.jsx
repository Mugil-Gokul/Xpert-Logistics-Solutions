import React from "react";
import { motion } from "framer-motion";
import CareerImg from "../assets/Support.png";
import CustomButton from "../Components/CustomButton";

const HomeCareer = () => {
  return (
    <section className="w-full bg-white text-gray-900 overflow-hidden py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={CareerImg}
            alt="Career at Xpert Logistics"
            className="shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-5 text-center lg:text-left items-center lg:items-start"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            <span className="text-[#620504]">Join Our</span> Solution Minds
          </h2>

          <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
            Be a part of the workforce that redefines logistics.
          </p>

          <div>
            <CustomButton label="Join Us" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeCareer;
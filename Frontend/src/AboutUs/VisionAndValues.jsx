import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaGem, FaUsers, FaClock, FaUserTie } from "react-icons/fa";
import Stars from "../Components/Stars";

const VisionAndValues = () => {
  return (
    <>
      <section className="w-full bg-white py-6 sm:py-12 lg:py-8 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-10 lg:space-y-12">

          {/* Top Section - Vision and Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-3 sm:space-y-4"
            >
              <FaEye className="text-red-600 text-3xl sm:text-4xl" />

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Our Vision
              </h2>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                To remain a customer-focused, multi-technology transport leader
                in India and globally, emphasizing excellence and values that
                benefit society, customers, vendors, employees, stakeholders,
                and the transport industry.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-3 sm:space-y-4"
            >
              <FaGem className="text-red-600 text-3xl sm:text-4xl" />

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Our Values
              </h2>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                Our brand is a living entity, and its behavior should reflect
                its core values. We believe in integrity, innovation, and
                respect, ensuring that every action we take aligns with our
                principles and strengthens our identity.
              </p>
            </motion.div>

          </div>

          {/* Bottom Section - Metrics Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#620504] via-red-900 to-black rounded-lg py-8 sm:py-10 px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center text-white"
          >
            <div className="flex flex-col items-center space-y-2">
              <FaUsers className="text-red-400 text-3xl sm:text-4xl" />
              <h3 className="text-2xl sm:text-3xl font-bold">2,000+</h3>
              <p className="text-xs sm:text-sm">Number of Clients</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <FaClock className="text-red-400 text-3xl sm:text-4xl" />
              <h3 className="text-2xl sm:text-3xl font-bold">20+</h3>
              <p className="text-xs sm:text-sm">Years of Experience</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <FaUserTie className="text-red-400 text-3xl sm:text-4xl" />
              <h3 className="text-2xl sm:text-3xl font-bold">200+</h3>
              <p className="text-xs sm:text-sm">Team Size</p>
            </div>

          </motion.div>

        </div>
      </section>

      <Stars />
    </>
  );
};

export default VisionAndValues;
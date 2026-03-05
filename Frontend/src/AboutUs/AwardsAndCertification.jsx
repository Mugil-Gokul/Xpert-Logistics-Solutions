import React from "react";
import { motion } from "framer-motion";
import Stars from "../Components/Stars";

const AwardsAndCertification = () => {
  return (
    <>
      <section className="w-full bg-white py-8 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#620504] border-b-2 border-[#620504] inline-block">
            Awards & Certifications
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "certificate here",
            "certificate here",
            "certificate here",
            "certificate here",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg shadow-md flex items-center justify-center h-48"
            >
              <p className="text-gray-500 font-medium">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Stars/>
    </>
  );
};

export default AwardsAndCertification;

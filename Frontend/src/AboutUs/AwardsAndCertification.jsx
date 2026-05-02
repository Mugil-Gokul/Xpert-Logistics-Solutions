import React from "react";
import { motion } from "framer-motion";
import Stars from "../Components/Stars";

const AwardsAndCertification = () => {
  const certificates = [
    "CVOR",
    "USDOT and MC Authority",
    "ELD Compliance",
    "Cargo Insurance",
    "OHSA",
  ];

  return (
    <>
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center mb-12 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Awards & Certifications
          </h2>

        </motion.div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">

          {certificates.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-6 flex items-center justify-center text-center
                         shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200"
            >
              
              {/* top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-500"></div>

              {/* subtle background glow */}
              <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition"></div>

              {/* inner content */}
              <p className="relative z-10 text-sm sm:text-base font-semibold text-gray-800 group-hover:text-red-700 transition">
                {text}
              </p>

              {/* corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-600 opacity-10 transform rotate-45 translate-x-6 translate-y-6 group-hover:opacity-20 transition"></div>

            </motion.div>
          ))}

        </div>

      </section>

      <Stars />
    </>
  );
};

export default AwardsAndCertification;
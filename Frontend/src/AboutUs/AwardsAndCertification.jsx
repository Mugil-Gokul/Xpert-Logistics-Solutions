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
      <section className="w-full bg-white py-6 sm:py-12 lg:py-8 px-4 sm:px-6 lg:px-20">

        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#620504] border-b-2 border-[#620504] inline-block pb-2">
            Awards & Certifications
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">
          {certificates.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#620504] rounded-lg shadow-md flex items-center justify-center h-36 sm:h-40 lg:h-48 px-4 text-center"
            >
              <p className="text-white text-sm sm:text-base font-medium">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </section>

      <Stars />
    </>
  );
};

export default AwardsAndCertification;
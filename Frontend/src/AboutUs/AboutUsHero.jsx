import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/AboutHeroImg.png";

const AboutUsHero = () => {
  return (
    <section className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[420px] mb-8 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={AboutImg}
        alt="About Us Team"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Banner Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-full bg-[#6a1b1b]/90 
        py-4 sm:py-6 lg:py-8 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto text-white text-center space-y-2 sm:space-y-3 lg:space-y-4">
          
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
            ABOUT US
          </h2>

          <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Our people are the key to our success as we aspire to become the
            leading global real estate company, as measured by customer service,
            employee engagement, financial performance and balance sheet
            strength.
          </p>

        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsHero;
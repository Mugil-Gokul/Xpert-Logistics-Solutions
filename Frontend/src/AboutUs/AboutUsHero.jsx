import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/HeroIMG.png"; 

const AboutUsHero = () => {
  return (
    <section className="relative w-full h-[200px] lg:h-[400px] mb-8">
      {/* Background Image */}
      <img
        src={AboutImg}
        alt="About Us Team"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (optional subtle dark layer for readability) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Banner Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-full bg-[#6a1b1b]/90 py-8 px-6"
      >
        <div className="max-w-5xl mx-auto text-white space-y-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">ABOUT US</h2>
          <p className="text-sm lg:text-base leading-relaxed ">
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

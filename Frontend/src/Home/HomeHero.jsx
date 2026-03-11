import React from "react";
import { motion } from "framer-motion";
import TruckImage from "../assets/Img.png"; 
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section
      className="relative h-[110vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${TruckImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative container mx-auto px-40 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Precision <span className="text-[#620504]">Freight.</span> <br /> Unmatched <span className="text-[#620504]">Expertise.</span> 
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Delivering industry-leading logistics solutions across North America.
            When it has to be there, trust the Xperts.
          </p>
          <Link to="/services">
            <CustomButton label="View Services"  />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;

import React from "react";
import { motion } from "framer-motion";
import TruckImage from "../assets/Img.png";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section
      className="relative min-h-[90vh] md:h-[110vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${TruckImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-16 lg:px-40 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl lg:max-w-5xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Precision <span className="text-[#620504]">Freight.</span> <br />
            Unmatched <span className="text-[#620504]">Expertise.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            Delivering industry-leading logistics solutions across Ontario and
            throughout North America. From full truckload shipments to
            time-critical expedited deliveries, Xpert Logistics Solutions is the
            freight partner businesses trust when reliability is non-negotiable.
            <br />
            <br />
            Whether you’re shipping across Ontario or coast to coast, our
            experienced team, modern fleet, and real-time tracking technology
            ensure your cargo arrives safely, on time, every time.
          </p>

          <Link to="/services" className="inline-block">
            <CustomButton label="View Services" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
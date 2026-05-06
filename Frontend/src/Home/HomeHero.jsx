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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
            We don’t just manage <span className="text-[#620504]">Freight.</span> <br />
            we protect supply chains and <span className="text-[#620504]">production lines.</span>
            {/* We don’t just manage freight — we protect supply chains and production lines.” */}
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            At Xpert Logistics Solutions, leadership is not behind the desk — it is directly involved in operations. Our company is led by industry professionals with proven experience managing high-volume, time-sensitive freight for major automotive OEMs across North America.
            <br />
            <br />
            We understand that in today’s supply chain, every shipment matters and every delay has a cost. That’s why our operations are built around precision, accountability, and proactive communication.
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
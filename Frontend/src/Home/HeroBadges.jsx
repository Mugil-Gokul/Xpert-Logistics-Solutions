import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaMapMarkedAlt, FaHeadset } from "react-icons/fa";

const HeroBadges = () => {
  const badges = [
    {
      icon: <FaTruck className="text-3xl sm:text-4xl text-red-400" />,
      title: "Reliable Fleet",
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl sm:text-4xl text-red-400" />,
      title: "Real-Time Tracking",
    },
    {
      icon: <FaHeadset className="text-3xl sm:text-4xl text-red-400" />,
      title: "24/7 Support",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#3b0a0a] via-[#5c0a0a] to-[#3b0a0a] py-6 md:py-8 rounded-xl md:rounded-2xl shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">

        {badges.map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-4 md:p-6"
          >
            {/* Icon */}
            <div className="mb-3 md:mb-4">{badge.icon}</div>

            {/* Title */}
            <h3 className="text-sm sm:text-base md:text-lg font-semibold tracking-wide">
              {badge.title}
            </h3>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default HeroBadges;
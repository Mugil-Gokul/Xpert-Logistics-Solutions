import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaMapMarkedAlt, FaHeadset } from "react-icons/fa";

const HeroBadges = () => {
  const badges = [
    {
      icon: <FaTruck className="text-4xl text-red-400" />,
      title: "Reliable Fleet",
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-red-400" />,
      title: "Real-Time Tracking",
    },
    {
      icon: <FaHeadset className="text-4xl text-red-400" />,
      title: "24/7 Support",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#3b0a0a] via-[#5c0a0a] to-[#3b0a0a] py-5 rounded-2xl">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="mb-4">{badge.icon}</div>
            <h3 className="text-lg font-semibold">{badge.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroBadges;

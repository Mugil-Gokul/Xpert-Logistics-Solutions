import React from "react";
import { motion } from "framer-motion";
import { FaTruckMoving, FaCheckCircle, FaGlobe, FaMapMarkedAlt } from "react-icons/fa";
import Stars from "../Components/Stars";

const features = [
  {
    icon: <FaTruckMoving className="text-red-600 text-4xl mb-4" />,
    title: "Driven by Delivery Excellence",
    description:
      "We plan every detail to deliver your cargo safely and on time. With exams and streamlined processes, we ensure precision, security, and consistency in every shipment, every time.",
  },
  {
    icon: <FaCheckCircle className="text-red-600 text-4xl mb-4" />,
    title: "Trusted Logistics, Proven Results",
    description:
      "Xpert Logistics Limited delivers what we promise. Our experience solves complex logistics problems with proven systems, giving your business reliable support and successful results.",
  },
  {
    icon: <FaGlobe className="text-red-600 text-4xl mb-4" />,
    title: "Reliability. Speed. Global Reach.",
    description:
      "We move your goods across the globe with speed and trust. Our strong logistics network connects major trade hubs worldwide, delivering shipments on schedule without compromise.",
  },
  {
    icon: <FaMapMarkedAlt className="text-red-600 text-4xl mb-4" />,
    title: "Smart, Secure Shipping Solutions",
    description:
      "Xpert Logistics uses intelligent systems to track, manage, and secure cargo at every stage. We provide safe, optimized transport with full control, helping you save time and reduce risk.",
  },
];

const HomeChooseUs = () => {
  return (
    <section className="w-full bg-white px-6 lg:px-20 text-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg lg:text-xl font-medium text-red-600"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-black font-bold tracking-wide mt-4 text-base lg:text-2xl max-w-4xl mx-auto"
        >
          Why Businesses Choose Xpert Logistics For Freight & Logistics Services?
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center flex flex-col items-center"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
      <Stars/>
    </section>
  );
};

export default HomeChooseUs;

import React from "react";
import { motion } from "framer-motion";
import Stars from "../Components/Stars";

const HomeAutomotiveAssetTech = () => {
  return (
    <>
      <section className="bg-white py-5 sm:py-8 md:py-10 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automotive & Just-In-Time Specialists
            </h2>

            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We specialize in handling time-sensitive automotive freight where
              delays are not an option. Our focus is simple: zero disruption to
              your production schedule.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {[
              "JIT & sequenced deliveries",
              "Tight appointment window management",
              "Expedited and emergency shipments",
              "Continuous coordination with dispatch and drivers",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative border border-gray-200 rounded-xl p-5 sm:p-6 bg-white
                           hover:border-red-600 transition duration-300 overflow-hidden"
              >
                {/* subtle top accent */}
                <div className="h-1 w-8 bg-red-600 mb-4 group-hover:w-14 transition-all duration-300"></div>

                <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 leading-relaxed">
                  {item}
                </p>

                {/* subtle hover background (not full replace) */}
                <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stars />

      <section className="bg-gradient-to-r from-[#1a0000] to-black text-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Asset-Based, Service-Focused
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              As an asset-based carrier, we maintain full control over our
              operations ensuring consistency, reliability, and accountability.
            </p>
          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              "Fleet of tractors and sprinter vans",
              "Expedited and dedicated freight capability",
              "Direct communication with drivers and dispatch",
              "Flexible capacity for critical shipments",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-[#6a1b1b] p-4 sm:p-5 rounded-lg sm:rounded-xl 
                           border border-transparent hover:border-red-500 transition duration-300 overflow-hidden"
              >
                {/* subtle accent bar */}
                <div className="h-1 w-6 bg-red-400 mb-3 group-hover:w-12 transition-all duration-300"></div>

                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  {item}
                </p>

                {/* subtle glow */}
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Technology & Real-Time Visibility
            </h2>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {[
              "Live GPS tracking on all shipments",
              "Automated status updates (pickup, transit, delivery)",
              "Proactive communication on delays or issues",
              "ELD-integrated fleet monitoring",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative border border-red-900/60 rounded-xl p-5 sm:p-6 bg-white/5 backdrop-blur-sm
                     hover:border-red-500 transition duration-300 overflow-hidden"
              >
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition">
                  {item}
                </p>

                {/* subtle glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-500/10 transition"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stars />
    </>
  );
};

export default  HomeAutomotiveAssetTech;

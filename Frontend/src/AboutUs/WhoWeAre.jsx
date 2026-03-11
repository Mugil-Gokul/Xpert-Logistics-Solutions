import React from "react";
import { motion } from "framer-motion";
import Stars from "../Components/Stars";

const WhoWeAre = () => {
  return (
    <>
      <section className="w-full bg-white py-8 px-6">
        <div className="mx-auto text-center max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-semibold text-[#620504] mb-6"
          >
            Who we are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed text-base lg:text-lg"
          >
            Xpert Logistics Solutions is a trusted freight and logistics
            provider headquartered in Ontario. We specialize in delivering
            reliable, efficient transportation services to businesses across
            North America from local GTA shipments to long-haul cross-border
            freight.
            <br />
            <br />
            Founded on the principles of operational excellence, safety, and a
            customer-first mindset, we’ve built our reputation by treating every
            load as if our own business depended on it because yours does.
          </motion.p>
        </div>
      </section>
      <Stars />
    </>
  );
};

export default WhoWeAre;

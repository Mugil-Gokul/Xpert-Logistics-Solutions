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
          We want to service this industry because we believe that there are
          better ways to transport cargo without making it another routine
          undertaking. Bringing about a positive change. Building efficient
          processes. Keeping clients updated. Being present where it matters.
          DahNAY has been continuously challenging the status quo by bringing
          forth innovative logistics solutions that have contributed to
          economies and transformed the lives of millions that we have touched.
        </motion.p>
      </div>
    </section>
    <Stars/>
    </>
  );
};

export default WhoWeAre;

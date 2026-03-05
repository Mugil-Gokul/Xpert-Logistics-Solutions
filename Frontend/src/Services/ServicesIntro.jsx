import React from "react";
import { motion } from "framer-motion";
import Stars from "../Components/Stars";

const ServicesIntro = () => {
  return (
    <>
    <section className="w-full py-8 px-6 lg:px-20 text-black">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold mb-10"
        >
          Xpert Logistics Solutions – Canada’s Trusted Global Partner
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto text-base lg:text-lg leading-relaxed text-gray-700"
        >
          At Xpert Logistics Solutions, we deliver end-to-end logistics services
          designed to keep businesses moving with speed and reliability. From air
          freight, ocean freight, and land transport to multimodal solutions,
          special shipments, and customs brokerage, our expertise ensures that
          every cargo reaches its destination safely and efficiently. We also
          specialize in oversized Breakbulk shipments, vessel chartering, and
          advanced 3PL & warehousing solutions tailored to diverse industry needs.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto text-base lg:text-lg leading-relaxed text-gray-700 mt-6"
        >
          Headquartered in Canada and connected to major global markets across
          the USA, Europe, and Asia, we proudly serve industries such as
          Renewable Energy, Automotive, Electronics, Healthcare, Furniture &
          Lifestyle, and Chemicals. With advanced technology and customized
          logistics strategies, Xpert Logistics Solutions empowers businesses to
          grow seamlessly across borders, ensuring smooth, secure, and
          cost-effective transport every step of the way.
        </motion.p>
      </div>
    </section>
    <Stars/>
    </>
    
  );
};

export default ServicesIntro;

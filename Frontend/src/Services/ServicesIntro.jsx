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
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto text-base lg:text-lg leading-relaxed text-gray-700 mt-6"
          >
            Xpert Logistics Solutions provides a comprehensive range of
            transportation and supply chain services for businesses across
            Ontario and North America. Whether you’re shipping a single pallet
            or managing a full supply chain operation, we have the equipment,
            expertise, and network to deliver.
            <br />
            <br />
            Every service includes real-time shipment tracking, dedicated
            account support, and the reliability that GTA businesses have come
            to expect from Xpert.
          </motion.p>
        </div>
      </section>
      <Stars />
    </>
  );
};

export default ServicesIntro;

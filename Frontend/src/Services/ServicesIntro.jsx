import React from "react";
import { motion } from "framer-motion";
import Stars from "../Components/Stars";

const ServicesIntro = () => {
  return (
    <>
      <section className="w-full py-6 sm:py-12 lg:py-8 px-4 sm:px-6 lg:px-20 text-black">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10"
          >
            Xpert Logistics Solutions – Canada’s Trusted Global Partner
          </motion.h2>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700"
          >
            <span className="font-semibold text-[#620504]">
              Xpert Logistics Solutions
            </span>{" "}
            provides a comprehensive range of{" "}
            <span className="font-semibold">
              transportation and supply chain services
            </span>{" "}
            across Ontario and North America. Whether you're shipping a single
            pallet or managing a full-scale operation, we deliver with the right{" "}
            <span className="font-semibold">
              equipment, expertise, and network
            </span>
            .
            <br />
            <br />
            We are{" "}
            <span className="font-semibold text-[#620504]">
              CTPAT certified
            </span>
            , <span className="font-semibold text-[#620504]">Bonded</span>, and{" "}
            <span className="font-semibold text-[#620504]">
              FAST-approved (in process)
            </span>
            , ensuring secure and efficient cross-border transportation.
            <br />
            <br />
            Every service includes{" "}
            <span className="font-semibold">
              real-time shipment tracking, dedicated support
            </span>
            , and the reliability that GTA businesses trust.
          </motion.p>
        </div>
      </section>

      <Stars />
    </>
  );
};

export default ServicesIntro;

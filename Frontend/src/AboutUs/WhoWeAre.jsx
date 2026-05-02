import React from "react";
import { motion } from "framer-motion";
import Stars from "../Components/Stars";

const WhoWeAre = () => {
  return (
    <>
      <section className="w-full bg-white py-6 sm:py-12 lg:py-8 px-4 sm:px-6 lg:px-20">
        <div className="mx-auto text-center max-w-4xl lg:max-w-6xl">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Who we are
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg"
          >
            <span className="font-semibold text-[#620504]">
              Xpert Logistics Solutions
            </span>{" "}
            is a trusted freight and logistics provider headquartered in
            Ontario, delivering{" "}
            <span className="font-semibold">
              reliable and efficient transportation
            </span>{" "}
            across North America — from local GTA shipments to{" "}
            <span className="font-semibold">
              long-haul cross-border freight
            </span>
            .
            <br />
            <br />
            Built on{" "}
            <span className="font-semibold">
              operational excellence, safety, and a customer-first approach
            </span>
            , we treat every load as if our business depends on it — because
            yours does.
            <br />
            <br />
            We are committed to{" "}
            <span className="font-semibold text-[#620504]">
              environmental responsibility
            </span>
            , as a{" "}
            <span className="font-semibold">
              SmartWay Transport Partnership member
            </span>
            , focusing on{" "}
            <span className="font-semibold">
              reducing emissions and improving fuel efficiency
            </span>{" "}
            through sustainable practices.
            <br />
            <br />
            Our goal is simple —{" "}
            <span className="font-semibold text-[#620504]">
              dependable service, strong communication, and operational
              excellence
            </span>{" "}
            on every load.
          </motion.p>
        </div>
      </section>

      <Stars />
    </>
  );
};

export default WhoWeAre;

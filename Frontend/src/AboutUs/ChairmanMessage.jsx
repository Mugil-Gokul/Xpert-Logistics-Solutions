import React from "react";
import { motion } from "framer-motion";
import ChairmanImg from "../assets/ChairmanImg1.png";
import Stars from "../Components/Stars";

const ChairmanMessage = () => {
  return (
    <>
      <section className="w-full bg-white py-6 sm:py-12 lg:py-8 px-4 sm:px-6 lg:px-20 overflow-hidden">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#620504] border-b-2 border-[#620504] inline-block mb-10 sm:mb-12 lg:mb-16">
          Chairman's Message
        </h2>

        <div className="max-w-7xl mx-auto gap-8 lg:gap-12 items-start">

          {/* Left Side - Chairman Image
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center lg:text-left"
          >
            <img
              src={ChairmanImg}
              alt="Chairman Portrait"
              className="rounded-lg sm:h-0 md:h-[400px] shadow-lg w-full max-w-[260px] sm:max-w-sm object-cover"
            />

            Name
            <p className="mt-4 text-base sm:text-lg font-semibold text-gray-800 border-t-2 border-[#620504] pt-2">
              Mr. XYZ, Chairman
            </p>
          </motion.div> */}

          {/* Right Side - Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-lg shadow-md p-5 sm:p-6">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-md">
                <span className="font-semibold">Dear Friends,</span>
                <br />
                <br />
                In our journey together, with your support and contributions,
                Xpert Logistics has continued to grow & evolve. Along with increased
                commitment to nurturing environment, society and nation
                building, we are strengthening our roots beyond the Indian
                borders. Through these times, we have grown and learned new
                things about ourselves and the world.
                <br />
                <br />
                With a sense of deep appreciation, I thank all our stakeholders,
                employees, customers, and partners. Your dedication and support
                has helped us to grow with agility, resilience and adaptability.
                I also want to express my gratitude and welcome all the new
                members who have joined us as a part of our vast Xpert Logistics.
                <br />
                <br />
              </p>

              <p className="font-semibold text-gray-800">
                Best wishes,
                <br />
                Mr. XYZ, Chairman
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <Stars />
    </>
  );
};

export default ChairmanMessage;
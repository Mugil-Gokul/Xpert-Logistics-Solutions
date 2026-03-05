import React from "react";
import { motion } from "framer-motion";
import ChairmanImg from "../assets/ChairmanImg1.png";
import Stars from "../Components/Stars";

const ChairmanMessage = () => {
  return (
    <>
      <section className="w-full bg-white py-8 px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#620504] border-b-2 border-[#620504] inline-block mb-16">
          Chairman's Message
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Chairman Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <img
              src={ChairmanImg}
              alt="Chairman Portrait"
              className="rounded-lg shadow-lg w-full max-w-sm object-cover"
            />
            {/* Name Stamp */}
            <p className="mt-4 text-lg font-semibold text-gray-800 border-t-2 border-[#620504] pt-2">
              Mr. XYZ, Chairman
            </p>
          </motion.div>

          {/* Right Side - Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <p className="text-gray-700 leading-relaxed text-base lg:text-md">
                <span className="font-semibold">Dear Friends,</span>
                <br />
                <br />
                In our journey together, with your support and contributions,
                TCI has continued to grow & evolve. Along with increased
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
                members who have joined us as a part of our vast TCI Parivar.
                <br />
                <br />
                <p className="font-semibold">
                  Best wishes,
                  <br />
                  Mr. XYZ, Chairman
                </p>
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

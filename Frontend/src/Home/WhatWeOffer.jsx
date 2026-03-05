import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import FtlImg from "../assets/HeroIMG.png";
import PtlImg from "../assets/HeroIMG.png";
import SpeedTrImg from "../assets/HomeAboutUs.png";
import Stars from "../Components/Stars";

const services = [
  {
    title: "EXPRESS - FTL",
    description:
      "Being a distinguished player in the supply chain and logistics sector, we provide well-established services for full truck load shipments.",
    img: FtlImg,
  },
  {
    title: "EXPRESS - PTL",
    description:
      "As a leading provider of Part Truck Load (PTL) services, we prioritize secure and transparent transportation for diverse industries.",
    img: PtlImg,
  },
  {
    title: "SPEED TR",
    description:
      "Specializing in urgent deliveries, Speed TR ensures super-fast logistics solutions for customers with time-sensitive needs.",
    img: SpeedTrImg,
  },
];

// Duplicate services for seamless loop
const loopedServices = [...services, ...services];

const WhatWeOffer = () => {
  const controls = useAnimation();

  useEffect(() => {
    startLoop();
  }, []);

  const startLoop = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const handlePause = () => {
    controls.stop(); // pauses at current position
  };

  const handleResume = () => {
    startLoop(); // resumes from current position, not reset
  };

  return (
    <>
    <section className="w-full bg-gradient-to-r from-black via-[#3b0a0a] to-black py-16 px-6 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Left Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between space-y-6"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            WHAT WE OFFER
          </h2>
          <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
            Enhancing supply chain efficiency with tailored logistics solutions
            that minimize costs and ensure timely deliveries. With a nationwide
            network, advanced technology and a customer-centric approach, every
            service is customized to meet diverse industry requirements,
            ensuring seamless operations.
          </p>
          <button className="mt-6 inline-block bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition">
            Enquiry Now
          </button>
        </motion.div>

        {/* Right Side - Auto Loop Carousel */}
        <div className="col-span-3 overflow-hidden">
          <motion.div className="flex space-x-6" animate={controls}>
            {loopedServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onHoverStart={handlePause}
                onHoverEnd={handleResume}
                className="rounded-lg shadow-lg p-6 w-80 flex-shrink-0 bg-[#1a1a1a]"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-4 inline-block text-red-500 font-medium hover:text-red-700 transition">
                  Read More
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    <Stars/>
    </>
    
  );
};

export default WhatWeOffer;

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import FtlImg from "../assets/FtlImg.png";
import LtlImg from "../assets/LtlImg.png";
import ExpeditedImg from "../assets/ExpImg.png";
import FleetImg from "../assets/DfsImg.png";
import BrokerageImg from "../assets/B3Img.png";

import Stars from "../Components/Stars";
import CustomButton from "../Components/CustomButton";

const services = [
  {
    title: "Full Truckload (FTL)",
    description:
      "Dedicated truck capacity for large shipments. Direct, point-to-point delivery with no unnecessary stops.",
    img: FtlImg,
    link: "/services/ftl",
  },
  {
    title: "Less-Than-Truckload (LTL)",
    description:
      "Share trailer space and reduce costs on smaller shipments without sacrificing speed or reliability.",
    img: LtlImg,
    link: "/services/ltl",
  },
  {
    title: "Expedited Shipping",
    description:
      "Priority routing and team drivers for time-sensitive freight that can’t wait.",
    img: ExpeditedImg,
    link: "/services/expedited-shipping",
  },
  {
    title: "Dedicated Fleet Services",
    description:
      "Your own trucks and drivers, managed by Xpert, for consistent high-volume shipping needs.",
    img: FleetImg,
    link: "/services/dedicated-fleet",
  },
  {
    title: "Brokerage & 3PL",
    description:
      "Access our carrier network and supply chain management expertise for end-to-end logistics coordination.",
    img: BrokerageImg,
    link: "/services/brokerage-3pl",
  },
];

const WhatWeOffer = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="w-full bg-gradient-to-r from-black via-[#3b0a0a] to-black py-16 px-6 md:px-10 lg:px-20 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6 text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold">WHAT WE OFFER</h2>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Enhancing supply chain efficiency with tailored logistics
              solutions that minimize costs and ensure timely deliveries. With a
              nationwide network, advanced technology and a customer-centric
              approach, every service is customized to meet diverse industry
              requirements.
            </p>

            <Link to="/contact" className="inline-block">
              <button>
                <CustomButton label="Enquire Now" />
              </button>
            </Link>
          </motion.div>

          {/* Right Side Slider */}
          <div className="lg:col-span-3 relative">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition"
            >
              <FaChevronLeft />
            </button>

            {/* Slider */}
            <div
              ref={sliderRef}
              className="flex space-x-6 overflow-x-auto overflow-y-hidden px-10 snap-x snap-mandatory scroll-smooth scrollbar-hide"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="snap-start rounded-lg shadow-lg p-6 w-64 sm:w-72 md:w-80 flex-shrink-0 bg-[#1a1a1a]"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-36 md:h-40 object-cover rounded-md mb-4"
                  />

                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="mt-4 inline-block text-red-500 text-sm font-medium hover:text-red-700 transition"
                  >
                    Read More
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      <Stars />
    </>
  );
};

export default WhatWeOffer;

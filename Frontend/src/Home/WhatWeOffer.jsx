import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
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
      "High-capacity freight solutions designed for large shipments, ensuring efficiency and reliability across long hauls.",
    img: FtlImg,
    link: "/services/ftl",
  },
  {
    title: "Less-Than-Truckload (LTL)",
    description:
      "Flexible and cost-effective shipping for smaller loads, ideal for businesses seeking optimized transport without full capacity.",
    img: LtlImg,
    link: "/services/ltl",
  },
  {
    title: "Expedited Shipping",
    description:
      "Time-critical, team-driver solutions for urgent deliveries, ensuring your freight arrives faster when deadlines matter most.",
    img: ExpeditedImg,
    link: "/services/expedited-shipping",
  },
  {
    title: "Dedicated Fleet Services",
    description:
      "Customized logistics with equipment allocated specifically to high-volume clients, offering consistency and control.",
    img: FleetImg,
    link: "/services/dedicated-fleet",
  },
  {
    title: "Brokerage & 3PL",
    description:
      "End-to-end supply chain management and carrier networking, connecting you with the right partners for seamless operations.",
    img: BrokerageImg,
    link: "/services/brokerage-3pl",
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
    controls.stop();
  };

  const handleResume = () => {
    startLoop();
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
              Enhancing supply chain efficiency with tailored logistics
              solutions that minimize costs and ensure timely deliveries. With a
              nationwide network, advanced technology and a customer-centric
              approach, every service is customized to meet diverse industry
              requirements, ensuring seamless operations.
            </p>
            <Link to="/contact" className="mt-6 inline-block ">
              <CustomButton label="Enquire Now" />
            </Link>
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
                  <Link
                    to={service.link}
                    className="mt-4 inline-block text-red-500 font-medium hover:text-red-700 transition"
                  >
                    Read More
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Stars />
    </>
  );
};

export default WhatWeOffer;

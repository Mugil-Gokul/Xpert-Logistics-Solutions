import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/HomeAboutUs.png";
import Stars from "../Components/Stars";
import {
  FaTruck,
  FaClock,
  FaUsers,
  FaGlobe,
  FaLeaf,
  FaBullseye,
} from "react-icons/fa";

const HomeAboutUs = () => {
  return (
    <section className="relative w-full bg-white py-16 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <img
            src={AboutImg}
            alt="Xpert Logistics Trucks"
            className="shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-4 md:space-y-6 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            About Us
          </h2>

          <div className="space-y-4 text-left">
            <p className="text-black leading-relaxed text-sm sm:text-base md:text-md">
              At{" "}
              <span className="font-semibold text-[#620504]">
                Xpert Logistics Solutions
              </span>
              , we pride ourselves on providing{" "}
              <span className="font-semibold">
                top-notch logistics services
              </span>{" "}
              throughout North America. Our commitment to{" "}
              <span className="font-semibold">excellence</span> ensures that
              your shipments arrive{" "}
              <span className="font-semibold">on time, every time</span>, by
              leveraging a robust network that spans from busy ports to rural
              heartlands.
              <br />
              <br />
              With a team of{" "}
              <span className="font-semibold">
                dedicated professionals
              </span> and{" "}
              <span className="font-semibold">innovative technology</span>, we
              provide{" "}
              <span className="font-semibold">real-time visibility</span> and{" "}
              <span className="font-semibold">
                precision-driven route optimization
              </span>{" "}
              to minimize delays. We understand that a shipment is more than
              cargo — it is{" "}
              <span className="font-semibold">a promise to your customers</span>
              .
              <br />
              <br />
              We also specialize in{" "}
              <span className="font-semibold">cross-border logistics</span> with
              a versatile fleet capable of handling{" "}
              <span className="font-semibold">
                specialized freight and standard hauls
              </span>
              . Our expertise ensures smooth coordination, compliance, and
              distribution so you can focus on{" "}
              <span className="font-semibold">growing your business</span>.
              <br />
              <br />
              We are also committed to{" "}
              <span className="font-semibold text-[#620504]">
                environmental responsibility
              </span>
              . As a{" "}
              <span className="font-semibold">
                proud member of the SmartWay Transport Partnership
              </span>
              , we actively work on{" "}
              <span className="font-semibold">reducing emissions</span>,{" "}
              <span className="font-semibold">improving fuel efficiency</span>,
              and adopting{" "}
              <span className="font-semibold">
                sustainable transportation practices
              </span>{" "}
              as part of our long-term growth strategy.
              <br />
              <br />
              Our goal is simple —{" "}
              <span className="font-semibold text-[#620504]">
                dependable transportation, strong communication, and operational
                excellence
              </span>{" "}
              on every load.
            </p>

            {/* </div> */}
          </div>
        </motion.div>
      </div>

      <Stars />
    </section>
  );
};

export default HomeAboutUs;

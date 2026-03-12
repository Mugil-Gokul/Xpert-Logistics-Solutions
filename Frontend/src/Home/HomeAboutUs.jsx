import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/HomeAboutUs.png";
import Stars from "../Components/Stars";

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

          <p className="text-black leading-relaxed text-sm sm:text-base md:text-lg">
            At{" "}
            <span className="font-semibold text-[#620504]">
              Xpert Logistics Solutions
            </span>
            , we pride ourselves on providing top-notch logistics services
            throughout North America. Our commitment to excellence ensures that
            your shipments arrive on time, every time, by leveraging a robust
            network that spans from the busy ports of the coasts to the rural
            heartlands. With a team of dedicated professionals and innovative
            technology, we are your trusted partner in navigating the
            complexities of modern supply chains, offering real-time visibility
            and precision-driven route optimization that minimizes delays. We
            understand that in today’s fast-paced market, a shipment is more
            than just cargo—it is a promise made to your customers. By
            integrating seamless cross-border expertise with a versatile fleet
            capable of handling everything from specialized freight to standard
            hauls, we provide the stability your operations require. Let us
            handle the intricate details of coordination, compliance, and
            distribution so you can focus on what matters most—growing your
            business and reaching new heights of success.
          </p>
        </motion.div>
      </div>

      <Stars />
    </section>
  );
};

export default HomeAboutUs;

import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/HomeAboutUs.png"; 
import Stars from "../Components/Stars";

const HomeAboutUs = () => {
  return (
    <section className="relative w-full bg-white px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
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
            className="shadow-lg w-full max-w-sm lg:max-w-sm object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            About Us
          </h2>
          <p className="text-gray-600 leading-relaxed text-base lg:text-2xl">
            At <span className="font-semibold text-red-600">Xpert Logistics Solutions</span>, 
            we pride ourselves on providing top-notch logistics services throughout North America. 
            Our commitment to excellence ensures that your shipments arrive on time, every time. 
            With a team of dedicated professionals and innovative technology, we are your trusted 
            partner in navigating the complexities of logistics. Let us handle the details so you 
            can focus on what matters most—growing your business.
          </p>
        </motion.div>
      </div>
      <Stars/>
    </section>
  );
};

export default HomeAboutUs;

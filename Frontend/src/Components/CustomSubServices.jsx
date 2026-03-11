import React from "react";
import { motion } from "framer-motion";
import Stars from "./Stars";

const CustomSubServices = ({
  heroImage,
  heroTitle,
  sectionTitle,
  description,
  services,
  whyTitle,
  benefits,
}) => {
  return (
    <div className="w-full overflow-hidden">

      {/* HERO */}

      <div className="relative h-[420px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="hero"
          className="w-full h-full object-cover scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 flex items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl px-6 lg:px-20"
          >
            <h1 className="text-white text-4xl lg:text-5xl font-bold max-w-3xl leading-tight">
              {heroTitle}
            </h1>

            <div className="mt-4 w-24 h-[3px] bg-red-500 rounded-full"></div>
          </motion.div>

        </div>
      </div>

      {/* INTRO */}

      <section className="py-16 px-6 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 relative inline-block">
            {sectionTitle}

            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-red-600 rounded-full"></span>
          </h2>

          <p className="text-gray-600 leading-relaxed whitespace-pre-line text-lg">
            {description}
          </p>
        </motion.div>
      </section>

      <Stars />

      {/* HOW WE DO IT */}

      <section className="py-8 px-6 lg:px-20 relative">
        <h2 className="text-3xl font-bold text-center mb-14 text-[#8B2C2C]">
          How We Do It ?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-md border border-gray-100 rounded-xl shadow-md p-8 text-center hover:shadow-2xl transition-all duration-300"
            >

              {/* Glow hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-red-500/5 to-transparent rounded-xl"></div>

              {/* ICON */}

              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full 
              bg-red-100 text-red-600 text-2xl shadow-md 
              group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white 
              transition-all duration-300">
                {item.icon}
              </div>

              {/* TITLE */}

              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Stars />

      {/* WHY CHOOSE */}

      <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-8 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-800 relative inline-block mx-auto">
          {whyTitle}

          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-red-600 rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-md p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >

              <div className="w-14 h-14 flex items-center justify-center rounded-full 
              bg-red-600 text-white mx-auto mb-4 shadow-md
              group-hover:scale-110 group-hover:bg-red-700 transition-all">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CustomSubServices;
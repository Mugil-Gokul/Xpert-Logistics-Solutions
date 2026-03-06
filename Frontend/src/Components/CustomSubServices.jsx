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
    <div className="w-full">
      {/* HERO */}

      <div className="relative h-[420px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl px-6 lg:px-20">
            <h1 className="text-white text-4xl lg:text-5xl font-bold max-w-3xl">
              {heroTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* INTRO */}

      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {sectionTitle}
          </h2>

          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>
      </section>
      <Stars />
      {/* HOW WE DO IT */}

      <section className="py-8 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-[#8B2C2C]">
          How We Do It ?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              {/* ICON */}

              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-2xl group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* TITLE */}

              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

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

      <section className="bg-gray-100 py-8 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">
          {whyTitle}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white mx-auto mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

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

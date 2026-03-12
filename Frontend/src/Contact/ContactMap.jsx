import React from "react";
import { motion } from "framer-motion";

const ContactMap = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-20 mb-10">
      <div className="max-w-7xl mx-auto">

        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center"
        >
          Find Us On The Map
        </motion.h2>

        {/* Map */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-lg border border-gray-200"
        >
          <iframe
            title="Canada Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5595286.312345678!2d-106.346771!3d56.130366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d0c8c8c8c8c8c%3A0x0!2sCanada!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin"
            className="w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactMap;
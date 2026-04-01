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
            title="Office Location"
            src="https://www.google.com/maps?q=1055+Canadian+Place+Unit+104A+Mississauga+ON&output=embed"
            className="w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;

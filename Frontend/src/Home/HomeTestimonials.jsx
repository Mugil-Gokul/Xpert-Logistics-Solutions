import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Stars from "../Components/Stars";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Global Trade Inc.",
    feedback:
      "Xpert Logistics consistently delivers beyond expectations. Their efficiency and reliability have made them our trusted logistics partner.",
  },
  {
    name: "Priya Patel",
    role: "Operations Manager, FastMove Ltd.",
    feedback:
      "The real-time tracking and proactive communication give us complete confidence. Shipments always arrive on schedule.",
  },
  {
    name: "Michael Johnson",
    role: "Supply Chain Director, FreshFoods",
    feedback:
      "Their customer-centric approach and innovative solutions have streamlined our supply chain. Truly outstanding service!",
  },
  {
    name: "Sophia Lee",
    role: "Head of Procurement, TechWorld",
    feedback:
      "We value their transparency and speed. Xpert Logistics has simplified our international shipping processes remarkably.",
  },
  {
    name: "Carlos Martinez",
    role: "Logistics Coordinator, AutoParts Co.",
    feedback:
      "Dependable, efficient, and professional. They’ve helped us cut costs while improving delivery times.",
  },
  {
    name: "Emily Davis",
    role: "Founder, EcoGoods",
    feedback:
      "Their smart shipping solutions give us peace of mind. We can track every step and trust our goods are secure.",
  },
];

const ITEMS_PER_PAGE = 3;

const HomeTestimonials = () => {
  const [page, setPage] = useState(0);

  const startIndex = page * ITEMS_PER_PAGE;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < testimonials.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <section className="w-full bg-gradient-to-r from-[#3b0a0a] via-[#5c0a0a] to-[#3b0a0a] py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-20 text-white">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="flex md:flex-row md:justify-between md:items-center gap-6 mb-10 sm:mb-12">

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                TESTIMONIALS
              </h2>

              <p className="text-gray-300 mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base">
                Consistently exceeding expectations, the focus on innovation,
                efficiency and customer-centric solutions is reflected in the
                voices of our satisfied customers.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-4 self-start md:self-auto my-auto">
              <button
                onClick={handlePrev}
                disabled={page === 0}
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${
                  page === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-white text-red-700 hover:bg-red-600 hover:text-white transition"
                }`}
              >
                <FaArrowLeft />
              </button>

              <button
                onClick={handleNext}
                disabled={startIndex + ITEMS_PER_PAGE >= testimonials.length}
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${
                  startIndex + ITEMS_PER_PAGE >= testimonials.length
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-white text-red-700 hover:bg-red-600 hover:text-white transition"
                }`}
              >
                <FaArrowRight />
              </button>
            </div>

          </div>

          {/* Testimonials Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  // whileHover={{ scale: 1.05 }}
                  className="bg-white text-gray-800 rounded-lg shadow-lg p-5 sm:p-6"
                >
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    "{testimonial.feedback}"
                  </p>

                  <h4 className="text-base sm:text-lg font-semibold text-red-700">
                    {testimonial.name}
                  </h4>

                  <span className="text-gray-500 text-xs sm:text-sm">
                    {testimonial.role}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      <Stars />
    </>
  );
};

export default HomeTestimonials;
import React from "react";
import { motion } from "framer-motion";
import CareerCTA from "./CareerCta";
import Stars from "../Components/Stars";
import CustomButton from "../Components/CustomButton";

const CareerForm = () => {
  return (
    <>
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Career Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-6xl font-semibold text-[#620504] mb-8">
            Careers
          </h2>
          <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
            A place for people to be their best. At EasyWay Logistics, we truly
            believe in our people – as skilled employees, supportive team
            members and uniquely talented individuals. While dedicated to
            innovative logistics solutions that serve our customers’ needs, the
            success of our company is only made possible by creating a
            fulfilling work environment for our people. And doing so begins with
            respect and dignity for each and every employee, from the boardroom
            to the front lines. We respect our people for their spirited
            willingness to learn, their sharing of bold ideas and their genuine
            passion for success. We help them to grow, develop their talents and
            make the most of themselves both at work and in their personal life.
          </p>
        </motion.div>

        {/* Right Side - Resume Submission Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white px-8"
        >
          <h2 className="text-6xl font-semibold text-[#620504] mb-8">
            Submit Resume Online
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                placeholder="Position"
                className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <select className="w-full border border-red-500 rounded-md px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600">
              <option>— Please choose an option —</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
            </select>
            <input
              type="file"
              className="w-full border border-red-500 rounded-md px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
            {/* <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition flex items-center justify-center"
            >
              Submit
            </button> */}
            <CustomButton label="Submit" />
          </form>
        </motion.div>
      </div>
    </section>
    <Stars/>
    <CareerCTA/>
    </>
    
  );
};

export default CareerForm;

import React from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      designation: "Operations Manager",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      designation: "Supply Chain Specialist",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Michael Johnson",
      designation: "Logistics Coordinator",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="w-full bg-[#620504] py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-20 text-white mt-10">
      {/* Section Intro */}
      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide mb-4">
          Our Management & Expert Team
        </h2>

        <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
          Our success is driven by the power of collaboration. Xpert Logistics is powered by a
          world-class team of experts who work together seamlessly to solve complex
          logistics challenges and deliver innovative solutions faster.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Circular Image */}
            <img
              src={member.img}
              alt={member.name}
              className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-lg border-2 border-white"
            />

            {/* Name & Designation */}
            <div className="mt-4 bg-white text-gray-800 rounded-md shadow-md px-4 py-3 w-full max-w-xs text-center">
              <p className="font-semibold text-base sm:text-lg">{member.name}</p>
              <p className="text-xs sm:text-sm text-gray-600">
                {member.designation}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leadership Team */}
      <div className="max-w-7xl mx-auto text-center mt-14 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide mb-8">
          Leadership Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-lg border-2 border-white"
              />

              <div className="mt-4 bg-white text-gray-800 rounded-md shadow-md px-4 py-3 w-full max-w-xs text-center">
                <p className="font-semibold text-base sm:text-lg">{member.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {member.designation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
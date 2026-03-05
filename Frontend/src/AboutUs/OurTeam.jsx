import React from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
  const teamMembers = [
    { 
      name: "John Doe", 
      designation: "Operations Manager", 
      img: "https://via.placeholder.com/150" 
    },
    { 
      name: "Jane Smith", 
      designation: "Supply Chain Specialist", 
      img: "https://via.placeholder.com/150" 
    },
    { 
      name: "Michael Johnson", 
      designation: "Logistics Coordinator", 
      img: "https://via.placeholder.com/150" 
    },
  ];

  return (
    <section className="w-full bg-[#620504] py-16 px-6 lg:px-20 text-white mt-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-wide mb-4">
          Our Management & Expert Team
        </h2>
        <p className="max-w-4xl mx-auto text-base lg:text-lg leading-relaxed mb-4">
          Our success is driven by the power of collaboration. Uniworld is powered by a 
          world-class team of experts who work together seamlessly to solve complex 
          logistics challenges and deliver innovative solutions – faster.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Circular Image */}
            <img
              src={member.img}
              alt={member.name}
              className="w-52 h-52 rounded-full object-cover shadow-lg border-2 border-white"
            />

            {/* Name & Designation Container */}
            <div className="mt-4 bg-white text-gray-800 rounded-md shadow-md px-4 py-3 w-full text-center">
              <p className="font-semibold text-lg">{member.name}</p>
              <p className="text-sm text-gray-600">{member.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leadership Team Section */}
      <div className="max-w-7xl mx-auto text-center mt-16">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-wide mb-8">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Circular Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-52 h-52 rounded-full object-cover shadow-lg border-2 border-white"
              />

              {/* Name & Designation Container */}
              <div className="mt-4 bg-white text-gray-800 rounded-md shadow-md px-4 py-3 w-full text-center">
                <p className="font-semibold text-lg">{member.name}</p>
                <p className="text-sm text-gray-600">{member.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

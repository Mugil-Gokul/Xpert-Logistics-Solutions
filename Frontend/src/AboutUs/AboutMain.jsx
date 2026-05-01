import React from "react";
import { motion } from "framer-motion";
import Stars from "../Components/Stars";

const AboutMain = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-br from-black via-[#2b0000] to-red-900 text-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight sm:leading-tight md:leading-[1.1] mb-4 sm:mb-6">
            Xpert Logistics Solutions Inc.
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Driven by Experience. Focused on Performance. Trusted for Critical
            Freight.
          </p>
        </div>
      </section>

      {/* INTRO */}

      <section className="bg-white py-10 sm:py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Precision. Accountability. Performance.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At Xpert Logistics Solutions, leadership is not behind the desk —
              it is directly involved in operations. Our company is led by
              industry professionals with proven experience managing
              high-volume, time-sensitive freight for major automotive OEMs
              across North America.
              <br />
              <br />
              We understand that in today’s supply chain, every shipment matters
              and every delay has a cost. That’s why our operations are built
              around precision, accountability, and proactive communication.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#6a1b1b] to-red-900 text-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-xl flex items-center"
          >
            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              “We don’t just manage freight — we protect supply chains and
              production lines.”
            </p>
          </motion.div>
        </div>
      </section>

      <Stars />

      {/* LEADERSHIP */}

      <section className="bg-[#140000] text-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Leadership That Delivers Results
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Our management team brings years of hands-on experience in
              transportation and logistics, including leading operations for
              major automotive customers such as Ford and Chrysler.
            </p>
          </motion.div>

          {/* RIGHT LIST */}
          <div className="space-y-4 sm:space-y-6">
            {[
              "Proven track record of achieving 99.6% on-time performance",
              "Experience managing critical, high-pressure freight environments",
              "Successfully improved service levels from probationary status to top-tier performance",
              "Deep understanding of Just-In-Time (JIT) and production-critical logistics",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-red-900/40 p-4 sm:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm hover:border-red-500 transition"
              >
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stars />

      {/* AUTOMOTIVE JIT */}

      <section className="bg-white py-5 sm:py-8 md:py-10 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automotive & Just-In-Time Specialists
            </h2>

            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We specialize in handling time-sensitive automotive freight where
              delays are not an option. Our focus is simple: zero disruption to
              your production schedule.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {[
              "JIT & sequenced deliveries",
              "Tight appointment window management",
              "Expedited and emergency shipments",
              "Continuous coordination with dispatch and drivers",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative border border-gray-200 rounded-xl p-5 sm:p-6 bg-white
                     hover:border-red-600 transition duration-300 overflow-hidden"
              >
                {/* subtle top accent */}
                <div className="h-1 w-8 bg-red-600 mb-4 group-hover:w-14 transition-all duration-300"></div>

                <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 leading-relaxed">
                  {item}
                </p>

                {/* subtle hover background (not full replace) */}
                <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stars />

      {/* ASSET BASED */}

<section className="bg-gradient-to-r from-[#1a0000] to-black text-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
        Asset-Based, Service-Focused
      </h2>

      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
        As an asset-based carrier, we maintain full control over our
        operations ensuring consistency, reliability, and accountability.
      </p>
    </motion.div>

    {/* RIGHT GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {[
        "Fleet of tractors and sprinter vans",
        "Expedited and dedicated freight capability",
        "Direct communication with drivers and dispatch",
        "Flexible capacity for critical shipments",
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="group relative bg-[#6a1b1b] p-4 sm:p-5 rounded-lg sm:rounded-xl 
                     border border-transparent hover:border-red-500 transition duration-300 overflow-hidden"
        >
          {/* subtle accent bar */}
          <div className="h-1 w-6 bg-red-400 mb-3 group-hover:w-12 transition-all duration-300"></div>

          <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
            {item}
          </p>

          {/* subtle glow */}
          <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition"></div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

      {/* TECHNOLOGY */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Technology & Real-Time Visibility
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Live GPS tracking on all shipments",
              "Automated status updates (pickup, transit, delivery)",
              "Proactive communication on delays or issues",
              "ELD-integrated fleet monitoring",
            ].map((item, i) => (
              <div key={i} className="border border-red-800 p-6 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stars />

      {/* REEFER */}
      <section className=" text-black py-8 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Reefer & Temperature-Controlled Freight
        </h2>
        <p className="max-w-3xl mx-auto mb-10">
          We handle temperature-sensitive freight with the same level of
          precision and care.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Produce and perishable goods",
            "Temperature-controlled transport",
            "Continuous monitoring to ensure product integrity",
          ].map((item, i) => (
            <span
              key={i}
              className="bg-white text-red-700 px-6 py-3 rounded-full font-medium border border-red-700 hover:bg-[#6a1b1b] hover:text-white transition"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <Stars />

      {/* SUSTAINABILITY - Bold Branded Strip */}
      <section className="relative bg-gradient-to-r from-[#1a0000] via-red-900 to-black text-white py-20 px-6 overflow-hidden">
        {/* background accent */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-700 opacity-20 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Sustainability Commitment
            </h2>

            <p className="text-gray-300 leading-relaxed">
              We are a proud SmartWay Transport Partner, committed to reducing
              emissions and improving fuel efficiency through smarter routing
              and operational practices.
            </p>
          </div>

          {/* Right Side Highlight */}
          <div className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl transform hover:-translate-y-2 transition">
            <p className="text-lg font-semibold mb-4">
              Smarter Routes. Lower Emissions.
            </p>
            <div className="h-1 w-16 bg-red-600 mb-4"></div>
            <p className="text-sm text-gray-600">
              Optimized logistics decisions that reduce environmental impact
              while maintaining performance.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS - Unique Directional Layout */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Service Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-performance cross-border routes built for speed, precision,
              and reliability.
            </p>
          </div>

          {/* unique layout */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Ontario ↔ Michigan / Midwest",
                desc: "High-frequency automotive corridor",
              },
              {
                title: "Ontario ↔ East Coast USA",
                desc: "Long-haul, time-critical freight movement",
              },
              {
                title: "Windsor–Detroit corridor",
                desc: "JIT-critical cross-border operations",
              },
            ].map((area, i) => (
              <div
                key={i}
                className="group relative bg-gray-50 rounded-3xl p-8 overflow-hidden border hover:border-red-500 transition duration-300"
              >
                {/* diagonal accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600 transform rotate-45 translate-x-10 -translate-y-10 opacity-20 group-hover:opacity-40 transition"></div>

                {/* content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                  {area.title}
                </h3>

                <p className="text-gray-600 text-sm">{area.desc}</p>

                {/* bottom line animation */}
                <div className="mt-6 h-[2px] w-10 bg-red-600 group-hover:w-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stars />

      {/* WHY US */}
      <section className="bg-gradient-to-r from-red-800 to-black text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Why Xpert Logistics Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Experienced, hands-on leadership",
            "Proven performance in high-pressure environments",
            "Automotive and JIT specialization",
            "Cross-border expertise",
            "Reliable, asset-based operations",
          ].map((item, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl backdrop-blur">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMain;

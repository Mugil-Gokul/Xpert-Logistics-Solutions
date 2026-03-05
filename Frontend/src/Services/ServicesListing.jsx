import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ---------------- Icons ---------------- */

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16V6a1 1 0 011-1h11v11H4a1 1 0 01-1-1zm13 0V9h3l3 4v3h-6zM5 20a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const BoxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9-4 9 4-9 4-9-4zm0 7l9 4 9-4m-9 4v-8" />
  </svg>
);

const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const FleetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12l9-9 9 9-9 9-9-9z" />
  </svg>
);

const DocIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 11h10M7 15h10M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
  </svg>
);

/* ---------------- Component ---------------- */

const ServicesListing = () => {

  const services = [
    {
      id: "ftl",
      title: "Full Truckload (FTL)",
      subtitle: "Seamless supply chain solutions for every need",
      description:
        "From sourcing to delivery, we provide comprehensive services that optimise efficiency. Our expertise ensures that your supply chain is reliable, responsive, and ready to meet your needs.",
      icon: <TruckIcon />,
    },
    {
      id: "ltl",
      title: "Less-Than-Truckload (LTL)",
      subtitle: "Streamlined logistics management for optimal efficiency",
      description:
        "We offer streamlined logistics management, ensuring optimal efficiency across your supply chain. With our tailored solutions, you can focus on growth while we handle the logistics.",
      icon: <BoxIcon />,
    },
    {
      id: "expedited",
      title: "Expedited Shipping",
      subtitle: "Fast and reliable delivery when it matters most",
      description:
        "From urgent shipments to time-sensitive deliveries, our expedited shipping solutions ensure your cargo arrives quickly and safely, without compromising quality.",
      icon: <LightningIcon />,
    },
    {
      id: "fleet",
      title: "Dedicated Fleet Services",
      subtitle: "Reliable fleet tailored to your business",
      description:
        "Our dedicated fleet services provide consistent, dependable transport solutions designed specifically for your company’s needs, ensuring efficiency and reliability.",
      icon: <FleetIcon />,
    },
    {
      id: "brokerage",
      title: "Brokerage & 3PL",
      subtitle: "Comprehensive third-party logistics solutions",
      description:
        "We offer brokerage and 3PL services to simplify complex logistics challenges. Our expertise helps you reduce costs, improve efficiency, and scale seamlessly.",
      icon: <DocIcon />,
    },
  ];

  const [activeId, setActiveId] = useState(services[0].id);

  /* Scroll detection */

  useEffect(() => {
    const handleScroll = () => {
      const offsets = services.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: el.getBoundingClientRect().top };
      });

      const visible = offsets.find(
        (o) => o.top >= 0 && o.top < window.innerHeight / 2
      );

      if (visible) setActiveId(visible.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [services]);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-8 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Title */}

        <h2 className="text-4xl lg:text-6xl font-bold text-[#620504] mb-20 text-center tracking-tight">
          Our Logistics Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

          {/* Left Navigation */}

          <div className="lg:col-span-1 sticky top-1/4 self-start flex justify-center">

            <ul className="space-y-6 border-l border-red-900 pl-6 relative">
              {services.map((service) => (
                <li key={service.id} className="relative">

                  <a
                    href={`#${service.id}`}
                    className={`block transition-all duration-300 ${
                      activeId === service.id
                        ? "text-[#620504] font-bold text-xl"
                        : "text-gray-600 font-medium text-lg hover:text-[#620504]"
                    }`}
                  >
                    {service.title}
                  </a>

                  {activeId === service.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -left-[26px] top-2 w-3 h-3 rounded-full bg-[#620504]"
                    />
                  )}
                </li>
              ))}
            </ul>

          </div>

          {/* Right Services */}

          <div className="lg:col-span-3 space-y-16">

            {services.map((service, index) => (

              <motion.div
                id={service.id}
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`group relative rounded-2xl border border-gray-200 shadow-lg p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                  index % 2 === 0
                    ? "bg-gray-100"
                    : "bg-[#620504] text-white"
                }`}
              >

                {/* Icon */}

                <div
                  className={`mb-6 w-16 h-16 flex items-center justify-center rounded-xl ${
                    index % 2 === 0
                      ? "bg-[#620504]/10 text-[#620504]"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {service.icon}
                </div>

                {/* Title */}

                <h3
                  className={`text-3xl font-bold tracking-tight mb-3 ${
                    index % 2 === 0 ? "text-[#620504]" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Subtitle */}

                <p
                  className={`text-lg font-medium mb-5 ${
                    index % 2 === 0 ? "text-black" : "text-white"
                  }`}
                >
                  {service.subtitle}
                </p>

                {/* Description */}

                <p
                  className={`leading-relaxed text-[16px] max-w-2xl ${
                    index % 2 === 0 ? "text-gray-700" : "text-gray-200"
                  }`}
                >
                  {service.description}
                </p>

                {/* Button */}

                <div className="mt-8">

                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                      index % 2 === 0
                        ? "bg-[#620504] text-white hover:bg-[#4a0303] hover:gap-3"
                        : "bg-white text-[#620504] hover:bg-gray-100 hover:gap-3"
                    }`}
                  >
                    Learn More

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                  </a>

                </div>

              </motion.div>

            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesListing;
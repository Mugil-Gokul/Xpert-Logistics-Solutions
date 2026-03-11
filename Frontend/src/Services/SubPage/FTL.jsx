import React from "react";
import CustomSubServices from "../../Components/CustomSubServices";
import FTLImg from "../../assets/FtlImg.png";

import {
  FaTruck,
  FaRoute,
  FaBoxes,
  FaClock,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaUsers,
  FaChartLine
} from "react-icons/fa";

const FTL = () => {

  const data = {
    heroImage: FTLImg,

    heroTitle: "Reliable Full Truck Load (FTL) Transportation",

    sectionTitle: "Efficient Full Truck Load Logistics Solutions",

    description: `
Our Full Truck Load (FTL) transportation service is designed for businesses that require 
large-volume shipping with maximum efficiency and security.

With dedicated trucks for your shipment, FTL ensures faster transit times, reduced handling,
and improved safety for your goods. Our logistics network enables seamless transportation
across major cities and industrial hubs while maintaining the highest standards of reliability.

Whether you're transporting bulk materials, manufacturing goods, or high-value cargo,
our FTL service guarantees safe and timely delivery every time.
`,

    services: [
      {
        icon: <FaTruck />,
        title: "Dedicated Truck Capacity",
        description:
          "Entire truck space reserved exclusively for your shipment ensuring maximum safety and efficiency."
      },
      {
        icon: <FaRoute />,
        title: "Optimized Route Planning",
        description:
          "Smart route optimization reduces travel time and ensures faster deliveries across regions."
      },
      {
        icon: <FaBoxes />,
        title: "Secure Cargo Handling",
        description:
          "Professional cargo handling ensures safe transportation for fragile and high-value goods."
      },
      {
        icon: <FaClock />,
        title: "Faster Transit Time",
        description:
          "Direct transportation without multiple stops significantly reduces delivery time."
      },
      {
        icon: <FaMapMarkedAlt />,
        title: "Nationwide Coverage",
        description:
          "Extensive transportation network covering major cities and industrial areas."
      },
      {
        icon: <FaShieldAlt />,
        title: "Safe & Reliable Transport",
        description:
          "Advanced safety measures and professional drivers ensure secure shipment handling."
      }
    ],

    whyTitle: "Why Choose Our FTL Transportation Service",

    benefits: [
      {
        icon: <FaTruck />,
        title: "Dedicated Transport Solutions",
        description:
          "Your shipment travels in a dedicated truck without sharing space with other cargo."
      },
      {
        icon: <FaUsers />,
        title: "Experienced Logistics Team",
        description:
          "Our logistics experts ensure smooth coordination and reliable transportation services."
      },
      {
        icon: <FaChartLine />,
        title: "Scalable Transportation",
        description:
          "Flexible truckload solutions designed to grow with your business transportation needs."
      },
      {
        icon: <FaMapMarkedAlt />,
        title: "Real-Time Tracking",
        description:
          "Track your shipments in real time with advanced monitoring and tracking systems."
      },
      {
        icon: <FaShieldAlt />,
        title: "Secure Cargo Management",
        description:
          "Strict safety protocols ensure that your cargo remains safe throughout the journey."
      }
    ]
  };

  return <CustomSubServices {...data} />;
};

export default FTL;
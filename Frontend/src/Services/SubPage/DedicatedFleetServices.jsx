import React from "react";
import CustomSubServices from "../../Components/CustomSubServices";
import DedicatedFleetServicesImg from "../../assets/HeroIMG.png";

import {
  FaTruck,
  FaRoute,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaChartLine,
  FaCogs
} from "react-icons/fa";

const DedicatedFleetServices = () => {

  const data = {

    heroImage: DedicatedFleetServicesImg,

    heroTitle: "Reliable Dedicated Fleet Services",

    sectionTitle: "Customized Fleet Solutions For Your Business",

    description: `
Our Dedicated Fleet Services provide businesses with exclusive access to 
a fleet of vehicles tailored specifically to their logistics needs. This 
service ensures consistent transportation capacity, improved operational 
efficiency, and complete control over your supply chain.

With dedicated drivers, vehicles, and logistics planning, businesses can 
focus on growth while we manage transportation operations with reliability 
and precision. Whether you require daily deliveries, regional distribution, 
or specialized transport, our dedicated fleet solutions ensure seamless 
and efficient logistics management.
`,

    services: [
      {
        icon: <FaTruck />,
        title: "Exclusive Fleet Allocation",
        description:
          "Dedicated trucks assigned specifically to your business operations."
      },
      {
        icon: <FaRoute />,
        title: "Optimized Delivery Routes",
        description:
          "Strategic route planning ensures efficient and timely deliveries."
      },
      {
        icon: <FaUsers />,
        title: "Professional Drivers",
        description:
          "Experienced drivers trained to handle logistics operations professionally."
      },
      {
        icon: <FaClock />,
        title: "Reliable Scheduling",
        description:
          "Consistent and predictable delivery schedules tailored to your business."
      },
      {
        icon: <FaMapMarkedAlt />,
        title: "Regional & Nationwide Coverage",
        description:
          "Dedicated fleet services covering key cities and industrial zones."
      },
      {
        icon: <FaShieldAlt />,
        title: "Secure Transportation",
        description:
          "Advanced safety protocols ensure secure handling of your cargo."
      }
    ],

    whyTitle: "Why Choose Our Dedicated Fleet Services",

    benefits: [
      {
        icon: <FaTruck />,
        title: "Consistent Transportation Capacity",
        description:
          "Guaranteed vehicle availability to support your growing logistics needs."
      },
      {
        icon: <FaUsers />,
        title: "Dedicated Logistics Support",
        description:
          "Our logistics experts manage your fleet operations efficiently."
      },
      {
        icon: <FaChartLine />,
        title: "Scalable Solutions",
        description:
          "Fleet services that scale as your business grows."
      },
      {
        icon: <FaCogs />,
        title: "Customized Logistics Planning",
        description:
          "Solutions tailored specifically to match your supply chain requirements."
      },
      {
        icon: <FaShieldAlt />,
        title: "Reliable & Safe Operations",
        description:
          "Strict safety measures to ensure secure transportation of goods."
      }
    ]

  };

  return <CustomSubServices {...data} />;
};

export default DedicatedFleetServices;
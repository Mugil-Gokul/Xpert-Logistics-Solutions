import React from "react";
import CustomSubServices from "../../Components/CustomSubServices";
import ExpeditedShippingImg from "../../assets/ExpImg.png";

import {
  FaShippingFast,
  FaClock,
  FaRoute,
  FaTruck,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaUsers,
  FaChartLine
} from "react-icons/fa";

const ExpeditedShipping = () => {

  const data = {

    heroImage: ExpeditedShippingImg,

    heroTitle: "Fast & Reliable Expedited Shipping Solutions",

    sectionTitle: "Time-Critical Expedited Transportation Services",

    description: `
Our Expedited Shipping service is designed for businesses that require urgent 
and time-sensitive deliveries. When speed matters the most, our dedicated 
transportation network ensures that your shipments reach their destination 
as quickly as possible.

We provide priority handling, optimized routes, and dedicated vehicles to 
ensure minimal transit time. Whether it’s emergency inventory replenishment, 
high-value goods, or critical supply chain deliveries, our expedited logistics 
solutions guarantee fast and secure transportation.
`,

    services: [
      {
        icon: <FaShippingFast />,
        title: "Priority Shipping",
        description:
          "Shipments are prioritized to ensure the fastest possible delivery."
      },
      {
        icon: <FaClock />,
        title: "Time-Critical Deliveries",
        description:
          "Perfect solution for urgent shipments requiring immediate transportation."
      },
      {
        icon: <FaRoute />,
        title: "Optimized Fast Routes",
        description:
          "Advanced route planning minimizes delays and speeds up delivery time."
      },
      {
        icon: <FaTruck />,
        title: "Dedicated Transport Vehicles",
        description:
          "Dedicated trucks ensure faster transit without unnecessary stops."
      },
      {
        icon: <FaMapMarkedAlt />,
        title: "Wide Logistics Coverage",
        description:
          "Fast transportation services connecting major cities and business hubs."
      },
      {
        icon: <FaShieldAlt />,
        title: "Secure Cargo Handling",
        description:
          "High-value and urgent shipments handled with strict safety protocols."
      }
    ],

    whyTitle: "Why Choose Our Expedited Shipping Service",

    benefits: [
      {
        icon: <FaShippingFast />,
        title: "Rapid Delivery",
        description:
          "Accelerated shipping process ensures your goods arrive as quickly as possible."
      },
      {
        icon: <FaUsers />,
        title: "Dedicated Logistics Team",
        description:
          "Our logistics experts coordinate shipments to ensure fast and smooth delivery."
      },
      {
        icon: <FaChartLine />,
        title: "Business Continuity",
        description:
          "Ideal for emergency shipments that keep your operations running without delays."
      },
      {
        icon: <FaMapMarkedAlt />,
        title: "Real-Time Tracking",
        description:
          "Track urgent shipments in real time with advanced monitoring systems."
      },
      {
        icon: <FaShieldAlt />,
        title: "Reliable & Secure",
        description:
          "Your cargo is transported with strict safety and handling standards."
      }
    ]

  };

  return <CustomSubServices {...data} />;
};

export default ExpeditedShipping;
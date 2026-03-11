import React from "react";
import CustomSubServices from "../../Components/CustomSubServices";
import LTLImg from "../../assets/LtlImg.png";

import {
  FaTruckLoading,
  FaRoute,
  FaBoxes,
  FaClock,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const LTL = () => {
  const data = {
    heroImage: LTLImg,

    heroTitle: "Flexible Less Than Truck Load (LTL) Transportation",

    sectionTitle: "Cost-Effective LTL Shipping Solutions",

    description: `
Our Less Than Truck Load (LTL) service is ideal for businesses that need to 
transport smaller shipments without paying for an entire truck.

By consolidating multiple shipments into a single vehicle, LTL helps reduce 
transportation costs while still maintaining reliable delivery schedules.

Our optimized logistics network ensures efficient route planning, cargo safety,
and timely delivery across multiple destinations while keeping transportation
costs affordable for businesses of all sizes.
`,

    services: [
      {
        icon: <FaTruckLoading />,
        title: "Shared Truck Capacity",
        description:
          "Ship smaller loads efficiently by sharing truck space with other shipments.",
      },
      {
        icon: <FaRoute />,
        title: "Optimized Delivery Routes",
        description:
          "Smart routing ensures efficient delivery schedules across multiple locations.",
      },
      {
        icon: <FaBoxes />,
        title: "Consolidated Shipments",
        description:
          "Multiple shipments are combined to maximize truck capacity and reduce costs.",
      },
      {
        icon: <FaClock />,
        title: "Scheduled Deliveries",
        description:
          "Well-planned schedules ensure timely pickups and reliable deliveries.",
      },
      {
        icon: <FaMapMarkedAlt />,
        title: "Wide Distribution Network",
        description:
          "Extensive logistics network connecting key cities and business hubs.",
      },
      {
        icon: <FaShieldAlt />,
        title: "Secure Cargo Handling",
        description:
          "Professional cargo handling ensures safety even when shipments are consolidated.",
      },
    ],

    whyTitle: "Why Choose Our LTL Transportation Service",

    benefits: [
      {
        icon: <FaTruckLoading />,
        title: "Cost Efficient Shipping",
        description:
          "Pay only for the space your shipment occupies instead of an entire truck.",
      },
      {
        icon: <FaUsers />,
        title: "Professional Logistics Support",
        description:
          "Our experienced logistics team ensures smooth shipment coordination.",
      },
      {
        icon: <FaChartLine />,
        title: "Flexible Shipping Options",
        description:
          "Perfect solution for businesses with frequent small or medium shipments.",
      },
      {
        icon: <FaMapMarkedAlt />,
        title: "Real-Time Shipment Visibility",
        description:
          "Track shipments and monitor delivery progress across the supply chain.",
      },
      {
        icon: <FaShieldAlt />,
        title: "Reliable Cargo Safety",
        description:
          "Advanced safety protocols ensure secure handling throughout transit.",
      },
    ],
  };

  return <CustomSubServices {...data} />;
};

export default LTL;

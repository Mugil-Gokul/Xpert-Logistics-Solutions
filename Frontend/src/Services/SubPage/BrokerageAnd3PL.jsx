import React from "react";
import CustomSubServices from "../../Components/CustomSubServices";
import BrokerageAnd3PLImg from "../../assets/HeroIMG.png";

import {
  FaNetworkWired,
  FaTruckMoving,
  FaWarehouse,
  FaRoute,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaBoxes
} from "react-icons/fa";

const BrokerageAnd3PL = () => {

  const data = {

    heroImage: BrokerageAnd3PLImg,

    heroTitle: "Efficient Brokerage & 3PL Logistics Solutions",

    sectionTitle: "End-to-End Third-Party Logistics & Freight Brokerage",

    description: `
Our Brokerage and Third-Party Logistics (3PL) services help businesses
simplify their supply chain operations by connecting them with reliable
transportation partners and efficient logistics networks.

Through our brokerage expertise and advanced logistics management,
we coordinate freight movement, manage carriers, and optimize
transportation processes. Our 3PL services provide complete logistics
support including transportation, warehousing coordination, and
distribution management.

By leveraging our industry partnerships and logistics expertise,
businesses can focus on growth while we handle the complexity of
their supply chain operations.
`,

    services: [
      {
        icon: <FaNetworkWired />,
        title: "Extensive Carrier Network",
        description:
          "Access to a wide network of reliable carriers ensuring efficient freight movement."
      },
      {
        icon: <FaTruckMoving />,
        title: "Freight Brokerage",
        description:
          "Connecting shippers with trusted carriers for seamless transportation services."
      },
      {
        icon: <FaWarehouse />,
        title: "3PL Logistics Management",
        description:
          "Complete third-party logistics solutions including transportation and distribution support."
      },
      {
        icon: <FaRoute />,
        title: "Optimized Freight Routing",
        description:
          "Strategic planning of freight routes to reduce costs and improve delivery speed."
      },
      {
        icon: <FaBoxes />,
        title: "Shipment Coordination",
        description:
          "Efficient coordination of shipments across multiple carriers and logistics partners."
      },
      {
        icon: <FaShieldAlt />,
        title: "Secure Freight Handling",
        description:
          "Strict safety and compliance standards to ensure cargo protection."
      }
    ],

    whyTitle: "Why Choose Our Brokerage & 3PL Services",

    benefits: [
      {
        icon: <FaNetworkWired />,
        title: "Strong Carrier Partnerships",
        description:
          "Trusted network of transportation providers to ensure reliable shipping."
      },
      {
        icon: <FaUsers />,
        title: "Expert Logistics Team",
        description:
          "Dedicated professionals managing your freight operations efficiently."
      },
      {
        icon: <FaChartLine />,
        title: "Cost Optimization",
        description:
          "Smart logistics planning that reduces operational and transportation costs."
      },
      {
        icon: <FaTruckMoving />,
        title: "Flexible Shipping Solutions",
        description:
          "Customized freight solutions designed for different shipment requirements."
      },
      {
        icon: <FaShieldAlt />,
        title: "Reliable & Secure Operations",
        description:
          "Ensuring safe and compliant freight transportation at every stage."
      }
    ]

  };

  return <CustomSubServices {...data} />;
};

export default BrokerageAnd3PL;
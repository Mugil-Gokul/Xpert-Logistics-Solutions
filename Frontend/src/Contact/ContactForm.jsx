import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import TruckImg from "../assets/ContactTruckImg.png";
import Stars from "../Components/Stars";
import CustomButton from "../Components/CustomButton";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Contact Request from ${formData.firstName} ${formData.lastName}`;

    const body = `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@xpertlogistics.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <>
      <section className="w-full bg-white py-8 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Left Side - Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8"
          >
            <h2 className="text-6xl font-semibold text-[#620504] mb-8">
              Get In Touch With Us
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

              </div>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                required
                className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="Subject"
                required
                className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Message"
                required
                className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>

              <button type="submit">
                <CustomButton label="Submit" />
              </button>

            </form>
          </motion.div>

          {/* Right Side - Promo Section */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden flex items-center justify-center"
          >

            {/* Background Image */}

            <img
              src={TruckImg}
              alt="Logistics Background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}

            <div className="relative z-10 text-center text-white p-8 space-y-6">

              <h2 className="text-2xl lg:text-3xl font-bold">
                Need A Trusted Logistics Partner?
              </h2>

              <p className="text-lg">Connect with Us Today</p>

              <div className="flex flex-col items-center space-y-6 mt-6">

                <div className="flex flex-col items-center">
                  <FaMapMarkerAlt className="text-red-500 text-2xl mb-2" />
                  <span className="text-sm">Ontario, Canada</span>
                </div>

                <div className="flex flex-col items-center">
                  <FaPhoneAlt className="text-red-500 text-2xl mb-2" />
                  <span className="text-sm">1234 5678</span>
                </div>

                <div className="flex flex-col items-center">
                  <FaEnvelope className="text-red-500 text-2xl mb-2" />
                  <span className="text-sm">info@xpertlogistics.com</span>
                </div>

              </div>

              {/* Social Icons */}

              <div className="flex justify-center space-x-4 mt-8">

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition"
                >
                  <FaLinkedinIn />
                </a>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

      <Stars />
    </>
  );
};

export default ContactForm;
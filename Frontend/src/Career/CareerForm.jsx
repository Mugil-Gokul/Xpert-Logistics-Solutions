import React, { useState } from "react";
import { motion } from "framer-motion";
import CareerCTA from "./CareerCta";
import Stars from "../Components/Stars";
import CustomButton from "../Components/CustomButton";

const CareerForm = () => {

  const [resumeName, setResumeName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setResumeName(e.target.files[0].name);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      <section className="w-full bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SECTION */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-6xl font-semibold text-[#620504] mb-8">
              Careers
            </h2>

            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              A place for people to be their best. At EasyWay Logistics, we truly
              believe in our people – as skilled employees, supportive team
              members and uniquely talented individuals. While dedicated to
              innovative logistics solutions that serve our customers’ needs,
              the success of our company is only made possible by creating a
              fulfilling work environment for our people.
            </p>
          </motion.div>

          {/* FORM SECTION */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white px-8"
          >

            <h2 className="text-6xl font-semibold text-[#620504] mb-8">
              Submit Resume Online
            </h2>

            <form
              action="https://formsubmit.co/info@xpertlogistics.com"
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Hidden Config */}

              <input type="hidden" name="_subject" value="New Career Application" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {/* First Row */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                  name="firstName"
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone"
                  className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

              </div>

              {/* Second Row */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                <input
                  name="position"
                  type="text"
                  required
                  placeholder="Position"
                  className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

              </div>

              {/* Job Type */}

              <select
                name="jobType"
                required
                className="w-full border border-red-500 rounded-md px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="">— Please choose an option —</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
              </select>

              {/* Resume Upload */}

              <div className="border-2 border-dashed border-red-400 rounded-lg p-6 text-center hover:bg-red-50 transition">

                <input
                  type="file"
                  name="resume"
                  required
                  onChange={handleFileChange}
                  className="w-full cursor-pointer"
                />

                {resumeName && (
                  <p className="text-sm text-green-600 mt-2">
                    Uploaded: {resumeName}
                  </p>
                )}

              </div>

              {/* Message */}

              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>

              {/* Submit */}

              <div className="pt-4">
                <button type="submit" disabled={loading}>
                  <CustomButton label={loading ? "Submitting..." : "Submit"} />
                </button>
              </div>

            </form>

          </motion.div>
        </div>
      </section>

      <Stars />
      <CareerCTA />
    </>
  );
};

export default CareerForm;
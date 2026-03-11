import React, { useRef } from "react";
import { motion } from "framer-motion";
import CustomButton from "../Components/CustomButton";

const CareerCTA = () => {

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = () => {
    document.getElementById("resumeForm").submit();
  };

  return (
    <section className="w-full bg-white py-8 px-6 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between"
      >

        {/* Message */}

        <h2 className="text-xl lg:text-4xl font-semibold text-gray-900 mb-6 lg:mb-0">
          Submit your resume, & we will get back to you.
        </h2>

        {/* Upload Button */}

        <div onClick={handleClick} className="cursor-pointer">
          <CustomButton label="Upload your resume" />
        </div>

        {/* Hidden Form */}

        <form
          id="resumeForm"
          action="https://formsubmit.co/info@xpertlogistics.com"
          method="POST"
          encType="multipart/form-data"
          className="hidden"
        >

          <input type="hidden" name="_subject" value="Quick Resume Submission" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input
            ref={fileInputRef}
            type="file"
            name="resume"
            required
            onChange={handleFileChange}
          />

        </form>

      </motion.div>
    </section>
  );
};

export default CareerCTA;
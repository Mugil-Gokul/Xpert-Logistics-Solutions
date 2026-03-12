import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CustomButton = ({ label = "View Services", onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group flex items-center justify-between bg-gradient-to-r from-[#940907] via-[rgb(122,7,5)] to-[#620504] text-white rounded-full px-4 py-2 font-medium shadow-md hover:bg-[#570504] transition-colors duration-300"
    >
      <span className="mr-3">{label}</span>

      <span className="flex items-center justify-center w-8 h-8 bg-white text-black rounded-full group-hover:text-[#620504]/75 transition-colors duration-300">
        <ArrowRight size={18} />
      </span>
    </motion.div>
  );
};

export default CustomButton;
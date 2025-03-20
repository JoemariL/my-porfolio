import React from "react";
import { FiMapPin } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import { motion } from "framer-motion";

const ExperienceCard = ({ 
  logo, 
  companyName, 
  duration, 
  position, 
  type, 
  location, 
  description, 
  children, 
  ...rest 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl p-6 border border-gray-800 shadow-lg bg-gray-900 text-gray-100 hover:shadow-2xl transition-all"
      {...rest}
    >
      {/* Company Logo */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="mb-4 md:mb-0 md:mr-6">
          <img
            src={logo}
            className="object-contain h-24 w-24 md:h-32 md:w-32 rounded-lg"
            alt="company-logo"
          />
        </div>

        {/* Experience Details */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-extrabold text-amber-300">{companyName}</h1>
          <p className="text-md text-gray-400 mt-1">{duration}</p>

          <div className="flex items-center justify-center md:justify-start text-gray-300 mt-2">
            <BsBriefcase className="mr-2" />
            <span>{position} - {type}</span>
          </div>
          
          <div className="flex items-center justify-center md:justify-start text-gray-400 mt-1">
            <FiMapPin className="mr-2" />
            <span>{location}</span>
          </div>

          <p className="text-gray-300 mt-4">{description}</p>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-6">{children}</div>
    </motion.div>
  );
};

export default ExperienceCard;

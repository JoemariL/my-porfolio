import React from "react";
import { motion } from "framer-motion";

const ProjectsCard = ({ projectTitle, projectDate, children, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="border border-gray-700 p-6 rounded-2xl shadow-lg bg-gray-900 text-gray-100 hover:shadow-2xl transition-all"
      {...rest}
    >
      {/* Project Title */}
      <h1 className="text-2xl font-extrabold text-amber-300 text-center">
        {projectTitle}
      </h1>

      {/* Project Date */}
      <p className="text-lg text-gray-400 text-center mt-2">{projectDate}</p>

      {/* Project Description */}
      <p className="text-md text-gray-300 mt-6 leading-relaxed">{children}</p>

      {/* Project Link (Placeholder) */}
      <p className="mt-6 text-gray-500 text-sm">
        <span className="text-gray-400 font-light">Website URL:</span> Coming soon...
      </p>
    </motion.div>
  );
};

export default ProjectsCard;

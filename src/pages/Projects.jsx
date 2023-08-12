import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="container mx-auto text-gray-50">
      <motion.h1 
        initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.6,
					delay: 0.1,
				}}
      className="text-center text-4xl lg:mt-10 mt-6">
        <i>Projects</i>
      </ motion.h1>
    </div>
  )
}

export default Projects;
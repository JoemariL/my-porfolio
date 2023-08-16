import React from 'react';
import { motion } from 'framer-motion';

import projectIcon from "../images/projects-placeholder.png";

import ProjectsCard from '../components/reusable/ProjectsCard';

const Projects = () => {
  return (
    <div className="w-11/12 sm:w-10/12 mx-auto text-gray-50">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-6 gap-6 mb-6 pb-10">
      
        <ProjectsCard 
          projectImage={projectIcon}
          projectTitle={"Project-01"}
          projectDate={"June XXXX - August XXXX"}
        > 
          Hello this is a project description
        </ProjectsCard>
              
        <ProjectsCard 
          projectImage={projectIcon}
          projectTitle={"Project-01"}
          projectDate={"June XXXX - August XXXX"}
        > 
          Hello this is a project description
        </ProjectsCard>
              
        <ProjectsCard 
          projectImage={projectIcon}
          projectTitle={"Project-01"}
          projectDate={"June XXXX - August XXXX"}
        > 
          Hello this is a project description
        </ProjectsCard>
              
        <ProjectsCard 
          projectImage={projectIcon}
          projectTitle={"Project-01"}
          projectDate={"June XXXX - August XXXX"}
        > 
          Hello this is a project description
        </ProjectsCard>

      </div>
      
    </div>
  )
}

export default Projects;
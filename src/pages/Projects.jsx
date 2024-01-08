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
        Projects
      </ motion.h1>

      <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 mb-6 pb-10"
            > 
        <ProjectsCard 
          projectImage={projectIcon}
          projectTitle={"SLU Triage System"}
          projectDate={"January 2022 - June 2022"}
        > 
          A web based application and digitalized the health declaration form.
        </ProjectsCard>
              
        <ProjectsCard 
          projectImage={projectIcon}
          projectTitle={"SLU Ticket Monitoring Distribution System"}
          projectDate={"August 2021 - December 2021"}
        > 
          A web-based application for the monitoring of the ticket distribution 
          and remittances conducted by SLU Center of Culture and the Arts.
        </ProjectsCard>
      </ motion.section>
      
    </div>
  )
}

export default Projects;
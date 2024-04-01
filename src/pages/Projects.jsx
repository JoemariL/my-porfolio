import React from 'react';
import { motion } from 'framer-motion';

import projectIcon from "../images/projects-placeholder.png";

import ProjectsCard from '../components/cards/ProjectsCard';

const Projects = () => {
  return (
    <div className="w-full mx-auto text-gray-100 p-5">
      <motion.h1 
        initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.6,
					delay: 0.1,
				}}
      className="text-4xl lg:mt-10 mt-6 sm:pl-5">
        Projects
      </ motion.h1>

      <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
                className="mx-auto grid grid-cols-1 lg:grid-cols-2 my-6 gap-6"
            > 
        <ProjectsCard 
          projectTitle={"SLU Triage System"}
          projectDate={"June 2022"}
        > 
            Online Triage System is a web application where it digitalized the health declaration form for 
            students, employees, and visitors that are coming inside the University. 
            <br/> <br/>
            A web application that tracks who entered the school and it also notifies the person if he or she is allowed 
            to enter the university according to their filled Health Declaration Form.
        </ProjectsCard>
              
        <ProjectsCard 
          projectTitle={"SLU Ticket Monitoring Distribution System"}
          projectDate={"December 2021"}
        > 
          A web-based application for the monitoring of the ticket distribution 
          and remittances conducted by SLU Center of Culture and the Arts.
        </ProjectsCard>
      </ motion.section>
      
    </div>
  )
}

export default Projects;
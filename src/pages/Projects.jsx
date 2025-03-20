import React from 'react';
import { motion } from 'framer-motion';
import ProjectsCard from '../components/cards/ProjectsCard';

const projectsData = [
    {
        title: "SLU Triage System",
        date: "June 2022",
        description: `Online Triage System is a web application that digitalizes the health declaration form 
        for students, employees, and visitors entering the university. It tracks individuals and notifies them 
        if they are permitted entry based on their Health Declaration Form.`,
    },
    {
        title: "SLU Ticket Monitoring Distribution System",
        date: "December 2021",
        description: `A web-based application for monitoring ticket distribution and remittances 
        conducted by SLU Center of Culture and the Arts.`,
    },
];

const Projects = () => {
  return (
    <div className="w-full mx-auto text-gray-100 p-6">
      {/* Animated Header */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.1 }}
        className="text-5xl font-extrabold text-yellow-300 text-center tracking-wide"
      >
        Projects
      </motion.h1>

      {/* Projects Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 1, delay: 0.4 }}
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-10 px-3"
      > 
        {projectsData.map((project, index) => (
          <ProjectsCard 
            key={index}
            projectTitle={project.title}
            projectDate={project.date}
          > 
            {project.description}
          </ProjectsCard>
        ))}
      </motion.section>
    </div>
  );
}

export default Projects;

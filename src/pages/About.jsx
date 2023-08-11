import React from 'react';
import { motion } from 'framer-motion';
import myPicture from '../images/profile.jpg';

import ExperienceTab from "../components/reusable/ExperienceTab";

const About = () => {
  return (
    <div className="mx-auto place-content-center text-gray-50">
      {/* Picture and description section */}
      <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1.5 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
          <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20"> 
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
              <img src={myPicture} className="rounded-lg w-96" alt="" />
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
              <p className="mb-4 text-lg">
                Passionate and Skilled developer with efficient and innovative solutions in programming. 
                Proficient in various programming languages and committed to delivering high-quality code with 
                strong problem-solving skills and collaborative team player.
              </p>
              <p className="mb-4 text-lg">
                Hello, This second paragraph is about to be filled so yeah.
              </p>
            </div>
          </div>
			</motion.div>

      {/*  */}
      <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="mx-auto grid"
			>
        <div className="font-general-regular w-full sm:w-3/4 text-left mx-auto my-auto">
          <hr className="mt-10"></hr>
            <ExperienceTab
              companyName={"Nexus Technologies Inc."}
              duration={"August 2022 - Present"}
              type={"Full time"}
              position={"Jr. Systems Engineer | Network Systems"}
              location={"Makati City, Philippines"}
              description={"Setting up, configuring, and troubleshooting network systems"}
              accordionContent={"..."}
            />

            <ExperienceTab
              companyName={"Saint Louis University"}
              duration={"January 2022 - June 2022"}
              type={"Internship"}
              position={"Full Stack Developer"}
              location={"Baguio City, Philippines"}
              description={"Developed Triage System for staff, students, visitors of the university"}
              accordionContent={"..."}
            />
        </div>
			</motion.div>
    </div>
  )
}

export default About;
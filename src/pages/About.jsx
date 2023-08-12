import React from 'react';
import { motion } from 'framer-motion';
import myPicture from '../images/profile.jpg';

import ExperienceTab from "../components/reusable/ExperienceTab";

// Logo imports
import nexusLogo from "../images/nexus-logo.png";
import sluLogo from "../images/slu-logo.png";

const About = () => {
  return (
    <div className="mx-auto place-content-center text-gray-50">
      {/* Picture and description section */}
      <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.3,
					delay: 0.1,
				}}
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
                I graduated from Saint Louis University with a degree of <b><i>Bachelor of Science in Information Technology </i></b>
                Batch of 2022.
              </p>
            </div>
          </div>
			</motion.div>

      {/*  */}
      <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1}}
				transition={{
					ease: 'easeInOut',
					duration: 1.0,
					delay: 0.4,
				}}
				className="mx-auto grid"
			>
        <div className="font-general-regular w-full sm:w-3/4 text-left mx-auto my-auto">
          <hr className="mt-10"></hr>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.1,
              }}
            className="text-center text-4xl lg:mt-10 mt-6 mb-10">
              <i>Work Experience</i>
            </ motion.h1>

            <ExperienceTab
              logo={nexusLogo}
              companyName={"Nexus Technologies Inc."}
              duration={"August 2022 - Present"}
              type={"Full time"}
              position={"Jr. Systems Engineer | Network Systems"}
              location={"Makati City, Philippines"}
              description={"Setting up, configuring, and troubleshooting network systems especially in WAF and load balancers"}
            > 
              HELLO, Im a wrapper component 1
            </ExperienceTab>

            <ExperienceTab
              logo={sluLogo}
              companyName={"Saint Louis University"}
              duration={"January 2022 - June 2022"}
              type={"Internship"}
              position={"Full Stack Developer"}
              location={"Baguio City, Philippines"}
              description={"Developed Triage System for staff, students, visitors of the university"}
            >
              HELLO, Im a wrapper component 2
            </ExperienceTab>
        </div>
			</motion.div>
    </div>
  )
}

export default About;
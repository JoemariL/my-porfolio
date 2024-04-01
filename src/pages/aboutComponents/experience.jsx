import React from "react";
import { motion } from "framer-motion";

import ExperienceCard from "../../components/cards/ExperienceCard";

// Logo imports
import nexusLogo from "../../images/nexus-logo.png";
import sluLogo from "../../images/slu-logo.png";

const experience = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                ease: "easeInOut",
                duration: 1.0,
                delay: 0.4,
                }}
                className="p-2 sm:w-full sm:px-6"
            >
                <div className="sm:flex sm:gap-5 mt-10 sm:mt-20 sm:ml-10 flex-col">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                        ease: "easeInOut",
                        duration: 0.6,
                        delay: 0.1,
                        }}
                        className="text-4xl mb-10 md:mb-10 text-center sm:text-left text-amber-200"
                    >
                        My Work Experience
                    </motion.h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">  
                    <ExperienceCard
                        logo={nexusLogo}
                        companyName={"Nexus Technologies Inc."}
                        duration={"August 2022 - Present"}
                        type={"Full time"}
                        position={"Jr. Systems Engineer | Network Systems"}
                        location={"Makati City, Philippines"}
                        description={
                        "Responsible for Setup, Configuration, and Troubleshooting of network systems WAF, SIEMs, PacketBroker, Load Balancer"
                        }
                    >
                        <ul>
                            <li>- Setting up, maintenance, and troubleshooting of Cloud Web application Firewalls</li>
                            <li>- Handling setup, maintenance, and troubleshooting of virtual machines</li>
                            <li>- Maintenance and troubleshooting of load balancers</li>
                        </ul>
                    </ExperienceCard>

                    <ExperienceCard
                        logo={sluLogo}
                        companyName={"Saint Louis University"}
                        duration={"January 2022 - June 2022"}
                        type={"Internship"}
                        position={"Full Stack Developer"}
                        location={"Baguio City, Philippines"}
                        description={
                        "Developed a web based application for a digitized Health Declaration Form"
                        }
                    >
                        <ul>
                            <li>- Contributed to planning and designing for the Triage System web application</li>
                            <li>- Developed Back-end using Nodejs, express.js, and MongoDB</li>
                            <li>- Developed Front-end using React.js and Tailwind CSS</li>
                            <li>- Deployed web application using NGINX and Virtual Machines</li>
                        </ul>
                    </ExperienceCard>

                </div>
            </motion.div>
        </div>
  );
};

export default experience;

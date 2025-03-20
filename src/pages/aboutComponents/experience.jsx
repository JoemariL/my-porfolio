import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../../components/cards/ExperienceCard";

// Logo imports
import gpLogo from "../../images/gp_logo.png"
import nexusLogo from "../../images/nexus-logo.png";
import sluLogo from "../../images/slu-logo.png";

const experienceData = [
    {
        id: 1,
        logo: gpLogo,
        companyName: "Global Payments",
        duration: "August 2024 - Present",
        type: "Full time",
        position: "Web Application Firewall Analyst",
        location: "Quezon City, Philippines",
        description: "Responsible for On-Premise and Cloud Web Application Firewalls",
        responsibilities: [
            "Web Application Firewall Setup, Optimization, Tuning, Configuration",
            "Develops tools and scripts for Web Application Firewall deployments configuration and troubleshooting",
            "Develops WAF integration tools using Terraform with Application Developers to perform continuous deployment"
        ],
    },
    {
        id: 2,
        logo: nexusLogo,
        companyName: "Nexus Technologies Inc.",
        duration: "August 2022 - August 2024",
        type: "Full time",
        position: "Jr. Systems Engineer | Network Systems",
        location: "Makati City, Philippines",
        description: "Responsible for Setup, Configuration, and Troubleshooting of network systems WAF, SIEMs, PacketBroker, Load Balancer",
        responsibilities: [
            "Setting up, maintenance, and troubleshooting of Cloud Web application Firewalls",
            "Handling setup, maintenance, and troubleshooting of virtual machines",
            "Maintenance and troubleshooting of load balancers",
        ],
    },
    {
        id: 3,
        logo: sluLogo,
        companyName: "Saint Louis University",
        duration: "January 2022 - June 2022",
        type: "Internship",
        position: "Full Stack Developer",
        location: "Baguio City, Philippines",
        description: "Developed a web-based application for a digitized Health Declaration Form",
        responsibilities: [
            "Contributed to planning and designing for the Triage System web application",
            "Developed Back-end using Node.js, Express.js, and MongoDB",
            "Developed Front-end using React.js and Tailwind CSS",
            "Deployed web application using NGINX and Virtual Machines",
        ],
    },
];

const Experience = () => {
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
                        My Experience
                    </motion.h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto">
                    {experienceData.map((experience) => (
                        <div key={experience.id} className="rounded-lg shadow-lg p-6">
                            <ExperienceCard
                                logo={experience.logo}
                                companyName={experience.companyName}
                                duration={experience.duration}
                                type={experience.type}
                                position={experience.position}
                                location={experience.location}
                                description={experience.description}
                            >
                                <ul>
                                    {experience.responsibilities.map((responsibility, index) => (
                                        <li key={index}>- {responsibility}</li>
                                    ))}
                                </ul>
                            </ExperienceCard>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Experience;
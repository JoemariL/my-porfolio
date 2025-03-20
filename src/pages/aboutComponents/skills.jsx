import React from 'react';
import { motion } from "framer-motion";
import {
    SiWindows,
    SiLinux,
    SiDocker,
    SiKubernetes,
    SiMongodb,
    SiMysql,
    SiSqlite,
    SiPostgresql,
    SiPython,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiGit,
    SiGithub,
    SiGitlab,
    SiPostman,
    SiInsomnia,
    SiAmazonaws,
    SiGooglecloud,
    SiMicrosoftazure,
    SiCloudflare,
    SiNginx,
    SiJenkins,
    SiElasticsearch,
    SiSplunk,
    SiF5,
    SiTerraform,
    SiAnsible,
} from 'react-icons/si';

const skillsData = [
    {
        category: "Operating Systems",
        skills: [
            { id: 1, name: "Windows", icon: <SiWindows className="w-12 h-12" /> },
            { id: 2, name: "Linux", icon: <SiLinux className="w-12 h-12" /> },
        ],
    },
    {
        category: "Networks and Cloud",
        skills: [
            { id: 3, name: "F5 Networks & ASM", icon: <SiF5 className="w-12 h-12" /> },
            { id: 4, name: "Cloudflare", icon: <SiCloudflare className="w-12 h-12" /> },
            { id: 5, name: "AWS", icon: <SiAmazonaws className="w-12 h-12" /> },
            { id: 6, name: "Google Cloud", icon: <SiGooglecloud className="w-12 h-12" /> },
            { id: 7, name: "Azure", icon: <SiMicrosoftazure className="w-12 h-12" /> },
            { id: 8, name: "Nginx", icon: <SiNginx className="w-12 h-12" /> },
            { id: 9, name: "Docker", icon: <SiDocker className="w-12 h-12" /> },
            { id: 10, name: "Kubernetes", icon: <SiKubernetes className="w-12 h-12" /> },
        ],
    },
    {
        category: "Databases",
        skills: [
            { id: 11, name: "MongoDB", icon: <SiMongodb className="w-12 h-12" /> },
            { id: 12, name: "MySQL", icon: <SiMysql className="w-12 h-12" /> },
            { id: 13, name: "SQLite", icon: <SiSqlite className="w-12 h-12" /> },
            { id: 14, name: "PostgreSQL", icon: <SiPostgresql className="w-12 h-12" /> },
        ],
    },
    {
        category: "Programming",
        skills: [
            { id: 15, name: "Python", icon: <SiPython className="w-12 h-12" /> },
            { id: 16, name: "JavaScript", icon: <SiJavascript className="w-12 h-12" /> },
            { id: 17, name: "React.js", icon: <SiReact className="w-12 h-12" /> },
            { id: 18, name: "Node.js", icon: <SiNodedotjs className="w-12 h-12" /> },
        ],
    },
    {
        category: "DevOps Tools",
        skills: [
            { id: 19, name: "Terraform", icon: <SiTerraform className="w-12 h-12" /> },
            { id: 20, name: "Ansible", icon: <SiAnsible className="w-12 h-12" /> },
            { id: 21, name: "Docker", icon: <SiDocker className="w-12 h-12" /> },
            { id: 22, name: "Kubernetes", icon: <SiKubernetes className="w-12 h-12" /> },
            { id: 23, name: "Jenkins", icon: <SiJenkins className="w-12 h-12" /> },
        ],
    },
    {
        category: "Tools",
        skills: [
            { id: 24, name: "Git", icon: <SiGit className="w-12 h-12" /> },
            { id: 25, name: "GitHub", icon: <SiGithub className="w-12 h-12" /> },
            { id: 26, name: "GitLab", icon: <SiGitlab className="w-12 h-12" /> },
            { id: 27, name: "Postman", icon: <SiPostman className="w-12 h-12" /> },
            { id: 28, name: "Insomnia", icon: <SiInsomnia className="w-12 h-12" /> },
            { id: 29, name: "CMD", icon: <SiWindows className="w-12 h-12" /> }, // Placeholder icon
            { id: 30, name: "Bash", icon: <SiLinux className="w-12 h-12" /> }, // Placeholder icon
            { id: 31, name: "Elasticsearch", icon: <SiElasticsearch className="w-12 h-12" /> },
            { id: 32, name: "Splunk", icon: <SiSplunk className="w-12 h-12" /> },
        ],
    },
];

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 1.0,
                delay: 0.4,
            }}
            className="p-4 sm:p-8"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.6,
                        delay: 0.1,
                    }}
                    className="text-4xl sm:text-5xl font-bold mb-10 text-center text-amber-200"
                >
                    My Skills So Far
                </motion.h1>

                {skillsData.map((category) => (
                    <div key={category.category} className="mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.6,
                                delay: 0.2,
                            }}
                            className="text-3xl font-bold mb-6 text-amber-200"
                        >
                            {category.category}
                        </motion.h2>

                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 0.6,
                                        delay: skill.id * 0.1,
                                    }}
                                    className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
                                >
                                    <div className="text-amber-200 mb-4">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-300">
                                        {skill.name}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
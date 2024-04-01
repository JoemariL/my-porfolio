import React from 'react';
import { motion } from "framer-motion";

const skills = () => {
    return (
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
                    className="text-4xl mb-10 md:mb-0 text-center sm:text-left text-amber-200"
                >
                    My skills so far
                </motion.h1>

                <div className="w-full sm:w-3/4 text-center sm:text-left text-lg">
                    <ul>
                        <li>MERN(MongoDB, Express.Js, React.Js, Node.Js) STACK</li>
                        <li>HTML5, CSS, TailwindCSS</li>
                        <li>Postman, Insomnia</li>
                        <li>Git, Github, Gitlab</li>
                        <li>SQL, Sqlite</li>
                        <li>Python, Machine Learning</li>
                        <li>Windows and Linux</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default skills;
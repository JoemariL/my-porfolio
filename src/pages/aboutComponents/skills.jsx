import React from 'react';
import { motion } from "framer-motion";

const skills = () => {
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
            className="container mx-auto"
        >
            <div className="sm:flex sm:gap-10 mt-10 sm:mt-20 sm:ml-10 flex-col">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                    ease: "easeInOut",
                    duration: 0.6,
                    delay: 0.1,
                    }}
                    className="text-4xl mb-10 md:mb-0"
                >
                    Skills
                </motion.h1>

                <div className="font-general-regular w-full sm:w-3/4 sm:text-left pl-2">
                    <p className="mb-4 text-lg">
                        - MERN(MongoDB, Express.Js, React.Js, Node.Js) STACK <br/>
                        - HTML5, CSS, TailwindCSS <br/>
                        - Postman, Insomnia <br/>
                        - Git, Github, Gitlab <br/>
                        - Python, Machine Learning <br/>
                        - SQL, Sqlite <br/>
                        - Windows and Linux <br/>
                    </p>
                </div>

            </div>
        </motion.div>
    </div>
  )
}

export default skills;
import React from "react";
import { motion } from "framer-motion";

const profile = () => {
    return (
        <div className="">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.1,
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
                        Overview
                    </motion.h1>

                    <div className="font-general-regular w-full sm:w-3/4 sm:text-left pl-2">
                        <p className="mb-4 text-lg">
                            Passionate and Skilled developer with efficient and innovative
                            solutions in programming. Proficient in various programming
                            languages and committed to delivering high-quality code with
                            strong problem-solving skills and collaborative team player.
                        </p>
                        <p className="mb-4 text-lg">
                            Graduated from Saint Louis University with a degree of Bachelor of
                            Science in Information Technology Batch of 2022.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default profile;

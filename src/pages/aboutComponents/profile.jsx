import React from "react";
import { motion } from "framer-motion";

const profile = () => {
    return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.1,
                }}
                className="p-2 sm:w-full sm:px-6"
            >
                <div className="mx-auto flex sm:gap-5 mt-10 sm:mt-20 sm:ml-10 flex-col">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                        ease: "easeInOut",
                        duration: 0.6,
                        delay: 0.1,
                        }}
                        className="text-4xl mb-5 sm:mb-0 text-center sm:text-left text-amber-200"
                    >
                        Who Am I?
                    </motion.h1>

                    <div className="w-full sm:w-3/4 sm:text-left text-center">
                        <p className="mb-4 text-lg">
                            A Passionate Developer with a strong drive for continuous learning.
                            I aim for best possible outcome on the work that i do.
                        </p>
                        <p className="mb-4 text-lg">
                            Graduate with a degree on Bachelor of Science in Information Technology batch 2022.
                        </p>
                    </div>
                </div>
            </motion.div>
    );
};

export default profile;

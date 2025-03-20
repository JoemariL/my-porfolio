import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.1,
            }}
            className="p-4 sm:p-8 flex justify-center items-center min-h-screen"
        >
            <div className="max-w-4xl w-full mx-auto text-center sm:text-left">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.6,
                        delay: 0.1,
                    }}
                    className="text-4xl sm:text-5xl font-bold mb-6 text-amber-200"
                >
                    Who Am I?
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.6,
                        delay: 0.3,
                    }}
                    className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8"
                >
                    <p className="mb-4 text-lg sm:text-xl text-gray-300">
                        A passionate developer / programmer with a strong drive for continuous improvement. I aim for the best possible outcome in the work that I do.
                    </p>
                    <p className="text-lg sm:text-xl text-gray-300">
                        I specialize in building scalable and efficient applications using modern technologies.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Profile;
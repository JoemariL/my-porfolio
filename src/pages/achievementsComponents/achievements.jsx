import React from 'react';
import { motion } from "framer-motion";

const achievements = () => {
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
                Achievements
            </motion.h1>

            <div className="font-general-regular w-full sm:w-3/4 sm:text-left pl-2">
                <p className="mb-4 text-lg">
                    
                </p>
                <p className="mb-4 text-lg">
                    
                </p>
            </div>
        </div>
    </motion.div>
    </div>
  )
}

export default achievements;
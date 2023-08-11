import React from 'react';
import { motion } from 'framer-motion';
import developerIcon from '../images/dev.png';

function Home() {
    return (
        <div className="container mx-auto text-gray-50">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
            > 
                <div className="w-full md:w-1/3 text-left">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.3,
                        }}
                        className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left  uppercase"
                    >
                        Hello, I am Joemari
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.6,
                        }}
                        className=" font-general-medium 
                        mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center 
                        sm:text-left leading-normal"
                    >
                        Software Engineer
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 1.0,
                        }}
                        className="flex justify-center sm:block"
                    >
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -180 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.6 }}
                    className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0 sm:ml-10"
			    >
                    <img
                        src={
                            developerIcon
                        }
                        alt="Developer"
                    />
			    </motion.div>
            </ motion.section>
        </div>
    )
}

export default Home;
import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    return (
        <div className="mx-auto flex flex-col min-h-screen bg-black">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="flex-grow flex items-center justify-center px-4"
            > 
                <div className="max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: 'easeInOut', duration: 1, delay: 0.3 }}
                        className="text-5xl sm:text-7xl font-extrabold text-yellow-300 tracking-wide"
                    >
                        Joemari Lopez
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
                        className="mt-4 text-lg sm:text-2xl text-yellow-200"
                    >
                        Developer | Network & Security
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: 'easeInOut', duration: 1, delay: 0.8 }}
                        className="mt-6 text-md sm:text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed"
                    >
                        An enthusiastic and self-motivated programmer, dedicated to continuous growth, seeking new experiences to improve skills.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: 'easeInOut', duration: 1, delay: 1 }}
                        className="mt-8"
                    >
                        {/* <a
                            href="#projects"
                            className="px-6 py-3 bg-yellow-400 text-black text-lg font-medium rounded-lg hover:bg-yellow-500 transition duration-300"
                        >
                            View My Work
                        </a> */}
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default Home;

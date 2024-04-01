import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className="text-gray-100"
        > 
        <div className='grid grid-rows gap-y-5 sm:grid-cols-2 min-h-[50vh]'>
                <div className='p-4 rounded-xl mx-auto my-auto'>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.3,
                        }}
                        className="
                            font-general-semibold text-5xl 
                            sm:text-left sm:text-8xl
                            text-center capitalize
                            text-nowrap
                            text-blue-gray-200
                        "
                        >
                        joemari lopez
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.6,
                        }}
                        className="
                            font-general
                            mt-1 text-3xl text-center 
                            sm:text-left sm:pl-1 leading-normal
                            text-brown-100
                        "
                    >
                        Developer
                    </motion.p>
                </div>

                <div className='p-4 rounded-xl mx-auto my-auto text-md sm:text-2xl text-center sm:text-left text-light-green-200'>
                    <p>
                        An enthusiastic and self-motivated programmer, 
                        dedicated to continuous growth, 
                        seeking to for new experiences to improve the skills.
                    </p>
                
                </div>
            </div>
        </ motion.section>
    )
}

export default Home;
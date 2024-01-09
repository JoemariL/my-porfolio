import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    return (
        <div className="container mx-auto my-auto text-gray-50">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:my-2 md:ml-5"
            > 
                <div className=''>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.3,
                        }}
                        className="font-general-semibold text-2xl xl:text-4xl text-center sm:text-left"
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
                        className="font-general
                        mt-4 text-xl text-center 
                        sm:text-left leading-normal"
                    >
                        I am a Software Engineer <br />
                        and this is my webpage <br />
                        Webpage is under Development ⚙ 
                    </motion.p>
                </div>
            </ motion.section>
        </div>
    )
}

export default Home;
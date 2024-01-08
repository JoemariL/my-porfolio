import React from 'react';
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const descriptionData = [
	{
		id: 1,
		name: 'lopezjoemari1@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 2,
		name: '+63 949 6272 670',
		icon: <FiPhone />,
	},
	{
		id: 3,
		name: 'Baguio City, Philippines',
		icon: <FiMapPin />,
	},
];

const contact = () => {
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
            <div className="sm:grid sm:gap-10 mt-10 sm:mt-20 sm:ml-10">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                    ease: "easeInOut",
                    duration: 0.6,
                    delay: 0.1,
                    }}
                    className="text-center text-4xl"
                >
                    My Contact Details
                </motion.h1>
                <ul className="font-general-regular mt-10 md:mt-0">
                    {descriptionData.map((info) => (
                    <li className="flex place-content-center" key={info.id}>
                        <i className="text-2xl mr-1">
                            {info.icon}
                        </i>
                        <span className="text-lg mb-4">
                            {info.name}
                        </span>
                    </li>
				    ))}
			    </ul>
            </div>
        </motion.div>
    </div>
  )
}

export default contact;
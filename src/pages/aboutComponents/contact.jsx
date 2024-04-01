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
            className="mx-2 my-5 sm:my-20 sm:mx-5 sm:pl-6"
        >
            <div className="sm:grid sm:gap-5 my-5">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                    ease: "easeInOut",
                    duration: 0.6,
                    delay: 0.1,
                    }}
                    className="text-center text-4xl mb-5 sm:mb-3 text-amber-200"
                >
                    My Contacts
                </motion.h1>
                <ul className="font-general-regular">
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
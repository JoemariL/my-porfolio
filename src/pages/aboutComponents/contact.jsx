import React from 'react';
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const descriptionData = [
	{
		id: 1,
		name: 'lopezjoemari1@gmail.com', // Add your email here
		icon: <FiMail />,
	},
	{
		id: 2,
		name: '+63 949 627 2670', // Add your phone number here
		icon: <FiPhone />,
	},
	{
		id: 3,
		name: 'Philippines', // Add your address here
		icon: <FiMapPin />,
	},
];

const Contact = () => {
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
            <div className="my-5">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                    ease: "easeInOut",
                    duration: 0.6,
                    delay: 0.1,
                    }}
                    className="text-center text-4xl mb-5 sm:mb-10 text-amber-200"
                >
                    My Contacts
                </motion.h1>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-general-regular">
                    {descriptionData.map((info) => (
                    <li className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg shadow-lg" key={info.id}>
                        <i className="text-3xl mb-2 text-amber-200">
                            {info.icon}
                        </i>
                        <span className="text-lg text-gray-300">
                            {info.name}
                        </span>
                    </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    </div>
  );
};

export default Contact;
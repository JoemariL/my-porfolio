import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';


const Description = [
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

const Contacts = () => {
	return (
		<div className="container mx-auto text-gray-50">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10 justify-center"
		>
				<div className="w-full mx-auto text-center ">
			<h2 className="font-general-semibold uppercase text-2xl sm:text-3xl mt-12 mb-8">
				My Contact Details
			</h2>
			<ul className="font-general-regular">
				{Description.map((info) => (
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

export default Contacts;
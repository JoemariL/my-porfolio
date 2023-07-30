import React from 'react'

import {
	FiGithub,
	FiLinkedin,
} from 'react-icons/fi';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/JoemariL/',
	},
	{
		id: 3,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/joemari-lopez-95409423a/',
	},
];

const Footer = () => {
  return (
    <div className="container mx-auto">
        <div className="pt-6 mt-20 border-t-2 border-slate-50">
            <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
                <p className="text-xl text-primary-dark text-slate-50 mb-5">
                    For more follow me on these links
                </p>
                <ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;
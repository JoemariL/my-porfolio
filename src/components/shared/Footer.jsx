import React from 'react';

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
		id: 2,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/joemari-lopez-95409423a/',
	},
];

const Footer = () => {
  return (
    <div className="mx-auto text-gray-100">
        <div className="pt-5 mt-2 border-t border-gray-900 mx-1">
            <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
                <p className="text-xl text-primary-dark text-slate-100 mb-5">
                    Follow me
                </p>
                <ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-100 hover:text-blue-gray-800 cursor-pointer rounded-lg bg-black shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
					<div className='text-center mt-5 text-md sm:text-xl text-gray-100'>
						<p className='font-regular'>Website version 1.0</p>
						<p className='text-sm'>Powered by React.js</p>
					</div>

            </div>
        </div>
    </div>
  )
}

export default Footer;
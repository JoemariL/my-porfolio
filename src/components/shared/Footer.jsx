import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';

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
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.6 }}
      className="w-full bg-gray-900 text-gray-100 py-10 border-t border-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Follow Me Section */}
        <h3 className="text-lg sm:text-2xl text-amber-300 font-semibold mb-5">
          Follow me
        </h3>

        {/* Social Icons */}
        <ul className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <motion.a
              href={link.url}
              target="__blank"
              key={link.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-100 hover:text-amber-300 cursor-pointer rounded-full bg-gray-800 shadow-md p-4 transition-all"
            >
              <i className="text-2xl sm:text-3xl">{link.icon}</i>
            </motion.a>
          ))}
        </ul>

        {/* Footer Info */}
        <div className="mt-5 text-sm sm:text-md text-gray-400">
          <p>Website Version 2.0</p>
          <p className="text-xs">Powered by React.js & TailwindCSS</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

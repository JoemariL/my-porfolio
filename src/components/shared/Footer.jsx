import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const socialLinks = [
  { id: 1, icon: <FiGithub />, url: 'https://github.com/JoemariL/' },
  { id: 2, icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/joemari-lopez-95409423a/' },
];

const contactInfo = [
  { id: 1, icon: <FiMail />, text: 'lopezjoemari1@gmail.com', url: 'mailto:lopezjoemari1@gmail.com' },
  { id: 2, icon: <FiPhone />, text: '+63 949 627 2670', url: 'tel:+639496272670' },
];

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.6 }}
      className="w-full bg-gray-900 text-gray-100 py-10 border-t border-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        {/* Follow Me & Contact Me (Centered Layout) */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center space-y-6 sm:space-y-0 sm:gap-16">
          
          {/* Follow Me Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-2xl text-amber-300 font-semibold">Follow Me</h3>
            <ul className="flex justify-center gap-6 mt-3">
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
          </div>

          {/* Contact Me Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-2xl text-amber-300 font-semibold">Contact Me</h3>
            <ul className="flex flex-col sm:flex-row items-center sm:gap-6 mt-3">
              {contactInfo.map((contact) => (
                <motion.a
                  href={contact.url}
                  key={contact.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-100 hover:text-amber-300 text-lg sm:text-xl transition"
                >
                  {contact.icon} {contact.text}
                </motion.a>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Info */}
        <div className="mt-6 text-sm sm:text-md text-gray-400">
          <p>Website Version 2.0</p>
          <p className="text-xs">Powered by React.js & TailwindCSS</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

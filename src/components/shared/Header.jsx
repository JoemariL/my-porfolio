import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gray-900 text-gray-100 shadow-md px-4 sm:px-20 py-5"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl sm:text-4xl font-semibold text-amber-300 hover:text-amber-400 transition">
          J-Website
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {showMenu ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6 text-lg">
          <Link
            to="/projects"
            className="hover:text-amber-300 transition px-3 py-1 rounded-lg"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="hover:text-amber-300 transition px-3 py-1 rounded-lg"
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Mobile Menu - Animated */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden flex flex-col items-start mt-5 space-y-4 p-4 border-t border-gray-800 bg-gray-900 shadow-lg"
          >
            <Link
              to="/projects"
              className="text-lg hover:text-amber-300 transition"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-lg hover:text-amber-300 transition"
              onClick={toggleMenu}
            >
              About Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;

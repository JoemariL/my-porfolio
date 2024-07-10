import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(prevShowMenu => !prevShowMenu);
    }

    return (
        <motion.nav
            initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="px-2 sm:px-20 bg-background-primary shadow-md"
        > 
            <div className="w-full sm:flex sm:justify-between sm:items-center py-6 font-body">
                <div className="flex justify-between items-center px-4 sm:px-0">
                        <div>
                            <Link to="/">
                                {
                                    <h1 className='text-4xl sm:text-5xl hover:text-blue-gray-800 text-yellow-300'>
                                        J Portfolio
                                    </h1>
                                }
                            </Link>
                        </div> 

                        <div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-gray-100"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
                </div> 
            </div>

            {/* Mobile UI */}
            <div
                className={
                    showMenu
                        ? 'grid sm:ml-4 mt-5 sm:mt-3 sm:flex p-4 sm:p-0 shadow-inner space-y-2 text-xl '
                        : 'hidden'
                }
            >
                <Link
                    to="/projects"
                    className="block text-left pl-1 text-gray-100 sm:mx-4 mb-2 sm:py-2 border-b border-gray-900 pb-2"
                >
                    Projects
                </Link>
                <Link
                    to="/about"
                    className="block text-left pl-1 text-gray-100 sm:mx-4 mb-2 sm:py-2 border-b border-gray-900 pb-2"
                >
                    About Me
                </Link>
                {/* <Link
                    to="/achievementsAndCerts"
                    className="block text-left pl-1 text-gray-100 sm:mx-4 mb-2 sm:py-2 border-b border-gray-900 pb-2"
                    aria-label="Achievements and Certifications"
                >
                    Achievements and Certifications
                </Link> */}
            </div>                    

            {/* Desktop UI */}
            <div className="font-general-medium hidden text-xl m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex sm:space-x-5 p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                <Link
                    to="/projects"
                    className="block text-left pl-1 text-gray-100 sm:px-5 sm:p-2 hover:text-blue-gray-800 hover:bg-cyan-100 rounded-xl"
                >
                    Projects 
                </Link>
                <Link
                    to="/about"
                    className="block text-left pl-1 text-gray-100 sm:px-5 sm:p-2 hover:text-blue-gray-800 hover:bg-cyan-100 rounded-xl"
                >
                    About Me
                </Link>
                {/* <Link
                    to="/achievementsAndCerts"
                    className="block text-left pl-1 text-gray-100 sm:px-5 sm:p-2 hover:text-blue-gray-800 hover:bg-cyan-500 rounded-3xl"
                    aria-label="Achievements and Certifications"
                >
                    Achievements and Certifications
                </Link> */}
            </div>
        </div>
    </motion.nav>
    )
}

export default Header; 
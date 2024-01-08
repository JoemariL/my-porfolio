import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

    return (
        <motion.nav
            initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="sm:container sm:mx-auto"
        > 
            <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
                <div className="flex justify-between items-center px-4 sm:px-0">
                        <div>
                            <Link to="/">
                                {
                                    <h1 className='text-gray-50 hover:text-indigo-500 font-general-medium text-4xl'>
                                        MyPortfolio
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
								className="h-7 w-7 fill-current text-gray-50"
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
                        ? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
                        : 'hidden'
                }
            >
                <Link
                    to="/projects"
                    className="block text-left text-lg text-gray-50 sm:mx-4 mb-2 sm:py-2"
                    aria-label="Projects"
                >
                    Projects
                </Link>
                <Link
                    to="/about"
                    className="block text-left text-lg text-gray-50 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-slate-800"
                    aria-label="About Me"
                >
                    About Me
                </Link>
                <Link
                    to="/AchievementsAndCerts"
                    className="block text-left text-lg text-gray-50 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-slate-800"
                    aria-label="Achievements and Certifications"
                >
                    Achievements and Certifications
                </Link>
            </div>                    

            {/* Desktop UI */}
            <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                <Link
                    to="/projects"
                    className="block text-left text-lg text-gray-50 hover:text-indigo-500 sm:mx-4 mb-2 sm:py-2 "
                    aria-label="Projects"
                >
                    Projects
                </Link>
                <Link
                    to="/about"
                    className="block text-left text-lg text-gray-50 hover:text-indigo-500 sm:mx-4 mb-2 sm:py-2"
                    aria-label="About Me"
                >
                    About Me
                </Link>
                <Link
                    to="/AchievementsAndCerts"
                    className="block text-left text-lg text-gray-50 hover:text-indigo-500 sm:mx-4 mb-2 sm:py-2"
                    aria-label="Achievements and Certifications"
                >
                    Achievements and Certifications
                </Link>
            </div>
        </div>
    </motion.nav>
    )
}

export default Header; 
import React from 'react';
import { motion } from 'framer-motion';
import myPicture from '../images/profile.jpg';

const About = () => {
  return (
    <div className="mx-auto place-content-center">
      {/* Picture and description section */}
      <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1.5 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			  >
          <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20"> 
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
              <img src={myPicture} className="rounded-lg w-96" alt="" />
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
              <p className="mb-4 text-slate-50 text-lg">
                Hello, This is the first paragraph
              </p>
              <p className="mb-4 text-slate-50 text-lg">
                Hello, This is the second paragraph
              </p>
            </div>
          </div>
			</motion.div>

      {/*  */}
      <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto place-content-center"
			>
        <div className="font-general-regular w-full sm:w-3/4 text-left mx-auto my-auto">
          <hr className="mt-10"></hr>
          <p className="mb-4 text-slate-50 text-lg">
              Nexus Technologies Inc. <br/>
              August 2022 - Present <br/>
              Full time
          </p>
          <p className="mb-4 text-slate-50 text-lg">
              Saint Louis University <br/>
              January 2022 - June 2022 <br/>
              Internship
          </p>

        </div>
			</motion.div>
    </div>
  )
}

export default About;
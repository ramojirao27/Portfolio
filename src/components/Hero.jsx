
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons
import { motion } from 'framer-motion'; // Import Framer Motion
import programmer from '../assets/programmers.png';
import resume from "../assets/resume.pdf"

const Hero = () => {
  return (
    <div id='hero' className="bg-gray-100 dark:bg-gray-800 flex flex-col md:flex-row items-center justify-center p-10">
      {/* Text div */}
      <div className="md:w-1/2 w-full text-center md:text-left mb-10 md:mb-0">
        {/* Title with animation */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-5"
          initial={{ opacity: 0, x: -25 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Description with animation */}
        <motion.p 
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, x: -25 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          I am <span className='text-orange-500'>Ramoji Rao</span>, a <span className='text-orange-250'>full-stack web developer</span> with a passion for creating interactive and responsive web applications. Let’s build something great together!
        </motion.p>

        {/* Social Icons with Hover Effect and Animation */}
        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <motion.a
            href="https://github.com/ramojirao27/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-orange-250 transition duration-300 transform hover:scale-110"
            initial={{ opacity: 0, x: -25 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }} 
          >
            <FaGithub size={32} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ramoji-rao-62a6aa205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition duration-300 transform hover:scale-110"
            initial={{ opacity: 0, x: -25 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }} 
          >
            <FaLinkedin size={32} />
          </motion.a>
          <motion.a
            href="https://x.com/ramoji41942?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110"
            initial={{ opacity: 0, x: -25 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }} 
          >
            <FaTwitter size={32} />
          </motion.a>
          {/* <motion.a 
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, x: -25 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
  whileHover={{ scale: 1.05 }}
>
  <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-sm shadow-lg hover:shadow-xl hover:bg-orange-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
    Download My Resume
  </button>
</motion.a> */}

                    
          <motion.a href={resume}
            target="_blank"
            rel="noopener noreferrer"
            
            initial={{ opacity: 0, x: -25 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.0 }} >
      <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition duration-300 ease-in-out">
    Download My Resume
      </button>
</motion.a>

        </div>
      </div>

      {/* Image div */}
      <div className="md:w-1/2 w-full flex justify-center">
        <motion.img
          src={programmer} // Replace with your image link
          alt="Portfolio Image"
          className="w-2/4 h-auto md:w-[80%] rounded-lg"
          initial={{ opacity: 0, x: 50 }}  // Animate from the right
          animate={{ opacity: 1, x: 0 }}  // Move to center
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}  // Same delay as icons
        />
      </div>
    </div>
  );
};

export default Hero;

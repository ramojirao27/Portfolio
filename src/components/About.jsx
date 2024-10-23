
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import hero from "../assets/ramojirao.jpeg"
const About = () => {
  return (
    <section
      className="bg-gray-100 dark:bg-gray-800 flex flex-col md:flex-row items-center justify-center p-10"
    >
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 w-full text-center md:text-left mb-10 md:mb-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // While in view
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}  // This ensures the animation only triggers once
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-5">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-5">
          I'm a passionate <span className='text-orange-500 font-semibold'>full-stack web developer</span> with a focus on creating responsive, user-friendly web applications. My expertise lies in building scalable, performance-driven solutions with modern web technologies.
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          With a strong foundation in both front-end and back-end development, I enjoy tackling complex challenges and crafting solutions that meet the needs of users and businesses alike. Let's collaborate and build something great!
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 w-full flex justify-center"
        initial={{ opacity: 0, y: 50 }}  // Same as text
        whileInView={{ opacity: 1, y: 0 }} // Same as text
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}  // Same as text
        viewport={{ once: true }}  // This ensures the animation only triggers once
      >
        <img
          src={hero} // Replace with your image link
          alt="Profile Image"
          className="w-3/4  md:w-4/5 h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default About;

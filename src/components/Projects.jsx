import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: 'User Management App',
    description: 'A full-stack user management app with CRUD functionality using React and JSONPlaceholder API.',
    link: 'https://user-details-khaki.vercel.app/',
  },
  {
    title: 'PGLife',
    description: 'PG Life is a web application simplifying the search for Paying Guest accommodations. With advanced search features and a user-friendly interface, find your perfect PG hassle-free. Built with HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL"',
    link: 'https://github.com/ramojirao27/PGLife',
  },
  {
    title: 'Askmeguru Assignment',
    description: 'Built a fully responsive home page as a part of an assignement. Built using the react,react animations',
    link: 'https://askmeguru-assignment.vercel.app/',
  },
  {
    title: 'MedicalShala Assignment',
    description: 'Built a fully responsive home page as a part of an assignement. Built using the react,react animations',
    link: 'https://medicalshala-murex.vercel.app/',
  },
  {
    title: 'Text Utils',
    description: 'TextUtils is a simple yet powerful tool designed to streamline various text manipulation tasks. It provides users with the ability to transform text by converting it to uppercase, lowercase, or capitalizing each word',
    link: 'https://textutils-pc8dhrdsb-ramojirao27s-projects.vercel.app/',
  },
];

const Projects = () => {
  const rowRef = useRef(null);
  const isRowInView = useInView(rowRef, { once: true });

  const projectVariant = {
    hidden: { opacity: 0, y: '100px' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id='projects' className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
          Projects
        </h2>

        <motion.div
          ref={rowRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={projectVariant}
          initial="hidden"
          animate={isRowInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              variants={projectVariant}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import { motion } from "framer-motion";

const MyPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="text-center py-10">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Your Name
        </motion.h1>
        <p className="text-lg mt-4">Full Stack Developer | Web Enthusiast</p>
      </header>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <motion.h2
          className="text-3xl font-semibold text-center mb-6"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">University Name</h3>
            <p className="text-gray-600">Degree: Full Stack Development</p>
            <p className="text-gray-500">Graduated: 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-200">
        <motion.h2
          className="text-3xl font-semibold text-center mb-6"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <motion.div
            className="text-center p-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i className="devicon-javascript-plain text-4xl"></i>
            <p className="mt-2">JavaScript</p>
          </motion.div>
          <motion.div
            className="text-center p-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i className="devicon-react-original text-4xl"></i>
            <p className="mt-2">React</p>
          </motion.div>
          <motion.div
            className="text-center p-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i className="devicon-nodejs-plain text-4xl"></i>
            <p className="mt-2">Node.js</p>
          </motion.div>
          <motion.div
            className="text-center p-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i className="devicon-mongodb-plain text-4xl"></i>
            <p className="mt-2">MongoDB</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <motion.h2
          className="text-3xl font-semibold text-center mb-6"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600 mt-2">Description of the project goes here.</p>
            <a href="#" className="text-blue-500 mt-4 block">View Project</a>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600 mt-2">Description of the project goes here.</p>
            <a href="#" className="text-blue-500 mt-4 block">View Project</a>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-gray-600 mt-2">Description of the project goes here.</p>
            <a href="#" className="text-blue-500 mt-4 block">View Project</a>
          </motion.div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-16 bg-gray-200">
        <motion.h2
          className="text-3xl font-semibold text-center mb-6"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hobbies
        </motion.h2>
        <div className="container mx-auto text-center">
          <p className="text-lg">I enjoy coding, playing video games, hiking, and learning new tech skills!</p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <motion.h2
          className="text-3xl font-semibold text-center mb-6"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Awards
        </motion.h2>
        <div className="container mx-auto text-center">
          <p className="text-lg">Received several awards for my contributions in web development and design.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 bg-gray-900 text-white">
        <p>Designed and Developed by Your Name</p>
      </footer>
    </div>
  );
};

export default MyPage;

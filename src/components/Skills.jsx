
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub, FaPython, FaJava, FaJsSquare, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiC, SiMongodb, SiMysql } from 'react-icons/si';

const Skills = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  const isRow1InView = useInView(row1Ref, { once: true });
  const isRow2InView = useInView(row2Ref, { once: true });
  const isRow3InView = useInView(row3Ref, { once: true });

  const leftVariant = {
    hidden: { opacity: 0, x: '-40px' },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: '40px' },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const iconStyle = 'text-4xl md:text-4xl lg:text-4xl mx-6 text-gray-500 dark:text-gray-400 transition duration-300 transform hover:scale-110';
  const iconContainerStyle = ' flex flex-col justify-center items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:bg-orange-500 transition duration-300 mx-4 mb-6';

  return (
    <section id='skills' className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
          Skills
        </h2>

        {/* Row 1 */}
        <motion.div
          ref={row1Ref}
          className="flex flex-wrap justify-center items-center mb-10 gap-6"
          variants={leftVariant}
          initial="hidden"
          animate={isRow1InView ? "visible" : "hidden"}
        >
          <div className={iconContainerStyle}>
            <FaHtml5 className={`${iconStyle} text-orange-500`} />
            <p className=" text-lg text-gray-900 dark:text-white mt-2">HTML5</p>
          </div>
          <div className={iconContainerStyle}>
            <FaCss3Alt className={`${iconStyle} text-blue-500`} />
            <p className=" text-lg text-gray-900 dark:text-white mt-2">CSS3</p>
          </div>
          <div className={iconContainerStyle}>
            <FaJsSquare className={`${iconStyle} text-yellow-500`} />
            <p className="text-lg text-gray-900 dark:text-white mt-2">JavaScript</p>
          </div>
          <div className={iconContainerStyle}>
            <FaReact className={`${iconStyle} text-cyan-400`} />
            <p className="text-lg text-gray-900 dark:text-white mt-2">React</p>
          </div>
          <div className={iconContainerStyle}>
            <FaNodeJs className={`${iconStyle} text-green-600`} />
            <p className="text-lg text-gray-900 dark:text-white mt-2">Node.js</p>
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          ref={row2Ref}
          className="flex flex-wrap justify-center items-center mb-10 gap-6"
          variants={rightVariant}
          initial="hidden"
          animate={isRow2InView ? "visible" : "hidden"}
        >
          <div className={iconContainerStyle}>
            <SiMongodb className={`${iconStyle} text-green-600`} />
            <p className="text-lg text-gray-900 dark:text-white mt-2">MongoDB</p>
          </div>
          <div className={iconContainerStyle}>
            <SiExpress className={`${iconStyle} text-black`} />
            <p className="text-lg text-gray-900 dark:text-white mt-2">Express.js</p>
          </div>
          <div className={iconContainerStyle}>
            <FaPython className={`${iconStyle} text-blue-500`} />
            <p className="text-lg text-gray-900 dark:text-white mt-2">Python</p>
          </div>
          <div className={iconContainerStyle}>
            <FaJava className={`${iconStyle} text-orange-600`} />
            <p className="text-lg text-gray-900 dark:text-white mt-2">Java</p>
          </div>

          <div className={iconContainerStyle}>
            <SiMysql className={`${iconStyle} text-blue-800`} />
            <p className="text-lg text-gray-900 dark:text-white mt-2">MySQL</p>
          </div>
        </motion.div>

        {/* Row 3 */}
        <motion.div
          ref={row3Ref}
          className="flex flex-wrap justify-center items-center gap-6"
          variants={leftVariant}
          initial="hidden"
          animate={isRow3InView ? "visible" : "hidden"}
        >
          <div className={iconContainerStyle}>
            <SiTailwindcss className={`${iconStyle} text-teal-400`} />
            <p className="text-lg text-gray-900 dark:text-white mt-2">Tailwind CSS</p>
          </div>
          <div className={iconContainerStyle}>
            <FaGithub className={`${iconStyle} text-gray-600`} />
            <p className="text-lg text-gray-900 dark:text-white mt-2">GitHub</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

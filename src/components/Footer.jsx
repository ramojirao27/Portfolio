
import React from 'react';
import Wave from 'react-wavify';
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="relative bg-slate-100 dark:bg-slate-800">
      {/* Wave Animation */}
      <div className="bg-none dark:bg-slate-800 absolute bottom-0 left-0 w-full z-0">
        <Wave
          fill="#f97316"
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 30,
            amplitude: 30,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>

      {/* Footer Content */}
      <footer className=" text-white py- relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex gap-1 flex-wrap justify-between items-center">
            {/* Logo or Brand Name */}
            <div className="text-2xl font-bold mb-6 lg:mb-0">
              <a href="#" className="text-white hover:text-orange-400">
                RR
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-4 mb-6 lg:mb-0">
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mb-6 lg:mb-0">
      <a href="#" className="hover:text-gray-400">
        <FaFacebookF />
      </a>
      <a href="#" className="hover:text-gray-400">
        <FaTwitter />
      </a>
      <a href="#" className="hover:text-gray-400">
        <FaGithub />
      </a>
      <a href="#" className="hover:text-gray-400">
        <FaLinkedinIn />
      </a>
    </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

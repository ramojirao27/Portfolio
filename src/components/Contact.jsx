
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'; // Import framer-motion

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicID = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicID,
      )
      .then(
        (response) => {
          console.log('SUCCESS:', response);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('FAILED:', error);
          setStatus('Message failed to send. Please try again.');
        }
      )
      .finally(() => {
        setLoading(false); // Hide loading state
      });
  };

  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
          Contact Me
        </h2>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          transition={{ duration: 0.8, ease: 'easeOut' }} // Animation duration and easing
        >
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
          >
            {/* Name Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label
                htmlFor="name"
                className="block text-gray-900 dark:text-white text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                aria-label="Your Name"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500 dark:placeholder-gray-400"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label
                htmlFor="email"
                className="block text-gray-900 dark:text-white text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                aria-label="Your Email"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500 dark:placeholder-gray-400"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label
                htmlFor="message"
                className="block text-gray-900 dark:text-white text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here"
                rows="6"
                aria-label="Your Message"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500 dark:placeholder-gray-400"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                {loading ? (
                  <span>Sending...</span> // Loading state
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </motion.div>

            {/* Status Message */}
            {status && (
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className={status.includes('success') ? 'text-green-500' : 'text-red-500'}>
                  {status}
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

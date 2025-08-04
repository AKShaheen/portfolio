import * as React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {

  return (
    <motion.section
      className="bg-section px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="absolute -top-8 left-0 w-full h-8 pointer-events-none z-10">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent blur-lg" />
      </div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Contact Me</h2>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.a
            href="mailto:abdelazizshaheen162@gmail.com"
            className="inline-block text-md sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent hover:text-accent-dark transition-colors duration-300 cursor-pointer px-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            abdelazizshaheen162@gmail.com
          </motion.a>
          <p className="mt-4 text-gray-300 text-sm sm:text-base">Click to send me an email</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
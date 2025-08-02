import * as React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const WorkPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-background pt-16 sm:pt-20">
        <div className="max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-5xl mx-auto text-center px-2 sm:px-0">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight break-words">
              Full-Stack Developer.
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight break-words">
              Interfaces. Systems. Strategy.
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-1 sm:px-2 md:px-0"
          >
            I'm Abdelaziz, a full-stack developer based in Egypt with expertise in modern web technologies. 
            I specialize in crafting scalable applications, aligning technical solutions with business objectives, 
            and tackling diverse challenges in the dynamic development landscape.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
          >
            <motion.a
              href="https://github.com/AKShaheen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-xl min-w-[120px] sm:min-w-0"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaGithub size={24} className="sm:w-5 sm:h-5" />
              <span className="text-base sm:text-sm md:text-base font-medium">GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/abdelazizshaheen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-xl min-w-[120px] sm:min-w-0"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaLinkedin size={24} className="sm:w-5 sm:h-5" />
              <span className="text-base sm:text-sm md:text-base font-medium">LinkedIn</span>
            </motion.a>
            
            <motion.a
              href="https://behance.net/abdelazizshaheen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-xl min-w-[120px] sm:min-w-0"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaBehance size={24} className="sm:w-5 sm:h-5" />
              <span className="text-base sm:text-sm md:text-base font-medium">Behance</span>
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-600 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />
    </div>
  );
};

export default WorkPage;

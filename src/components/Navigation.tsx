import * as React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === "/about";

  const handleNavigation = () => {
    const targetPath = isAboutPage ? "/" : "/about";
    navigate(targetPath);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6 md:py-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Name/Logo */}
        <motion.div
          className="text-lg sm:text-xl md:text-2xl font-light text-white cursor-pointer select-none tracking-wide"
          style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/")}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="hidden sm:inline">Abdelaziz Shaheen</span>
          <span className="sm:hidden">A. Shaheen</span>
        </motion.div>

        {/* Navigation Button */}
        <motion.button
          onClick={handleNavigation}
          className="group relative overflow-hidden px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-xl"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 40px rgba(255, 255, 255, 0.1)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* Button content */}
          <motion.span
            className="relative z-10 text-sm md:text-base"
            key={isAboutPage ? "work" : "about"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {isAboutPage ? "Work" : "About"}
          </motion.span>
          
          {/* Hover effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-full opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          
          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/5"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      </div>
      
      {/* Subtle backdrop blur */}
      <div className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-sm" />
    </motion.nav>
  );
};

export default Navigation;

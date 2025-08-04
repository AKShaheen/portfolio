import * as React from "react";
import { motion } from "framer-motion";
import { SiJira ,SiVitest ,SiPostman ,SiRedis ,SiFastapi ,SiVite ,SiExpress ,SiRedux ,SiPython ,SiTypescript, SiJavascript, SiTailwindcss, SiPostgresql, SiDocker, SiNestjs, SiDatadog, SiDotnet, SiSharp } from "react-icons/si";
import { FaFigma,FaLinux ,FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
const skills = [
  { icon: <SiJavascript size={32} />, label: "JavaScript", category: "Language" },
  { icon: <SiTypescript size={32} />, label: "TypeScript", category: "Language" },
  { icon: <SiPython size={32} />, label: "Python", category: "Language" },
  { icon: <SiSharp size={32} />, label: "C#", category: "Language" },
  { icon: <FaReact size={32} />, label: "React", category: "Frontend" },
  { icon: <SiTailwindcss size={32} />, label: "Tailwind CSS", category: "Frontend" },
  { icon: <SiRedux  size={32} />, label: "Redux/Zustand", category: "Frontend" },
  { icon: <SiVite  size={32} />, label: "Webpack/Vite", category: "Frontend" },
  { icon: <SiExpress size={32} />, label: "Express.js", category: "Backend" },
  { icon: <SiFastapi size={32} />, label: "FastAPI", category: "Backend" },
  { icon: <FaNodeJs size={32} />, label: "Node.js", category: "Backend" },
  { icon: <SiNestjs size={32} />, label: "NestJS", category: "Backend" },
  { icon: <SiDotnet size={32} />, label: "ASP.NET Core", category: "Backend" },
  { icon: <SiRedis size={32} />, label: "Redis", category: "Backend" },
  { icon: <SiPostgresql size={32} />, label: "SQL Databases", category: "Database" },
  { icon: <FaDatabase size={32} />, label: "MongoDB", category: "Database" },
  { icon: <SiDocker size={32} />, label: "Docker", category: "Tools" },
  { icon: <FaGitAlt size={32} />, label: "Git", category: "Tools" },
  { icon: <SiDatadog size={32} />, label: "Datadog", category: "Tools" },
  { icon: <SiPostman size={32} />, label: "Postman", category: "Tools" },
  { icon: <SiVitest size={32} />, label: "Jest/Vitest", category: "Testing" },
  { icon: <FaLinux size={32} />, label: "Linux", category: "OS" },
  { icon: <FaFigma size={32} />, label: "Figma", category: "Design Tool" },
  { icon: <SiJira size={32} />, label: "Jira", category: "PM" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const Skills: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-background" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.label}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="relative p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Skill Icon */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="text-gray-300 group-hover:text-white transition-colors duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>
                </div>

                {/* Skill Name */}
                <h3 className="text-center text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 mb-2">
                  {skill.label}
                </h3>

                {/* Category Badge */}
                <div className="flex justify-center">
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-800/50 text-gray-400 group-hover:bg-gray-700/50 group-hover:text-gray-300 transition-all duration-300">
                    {skill.category}
                  </span>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

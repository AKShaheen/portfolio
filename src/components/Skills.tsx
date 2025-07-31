import * as React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiDocker, SiNestjs, SiDatadog, SiDotnet, SiSharp } from "react-icons/si";

const skills = [
  { icon: <FaReact size={32} />, label: "React/Next.js", category: "Frontend" },
  { icon: <SiTypescript size={32} />, label: "TypeScript", category: "Language" },
  { icon: <FaNodeJs size={32} />, label: "Node.js", category: "Backend" },
  { icon: <SiNestjs size={32} />, label: "NestJS", category: "Backend" },
  { icon: <SiDotnet size={32} />, label: "ASP.NET Core", category: "Backend" },
  { icon: <SiSharp size={32} />, label: "C#", category: "Language" },
  { icon: <SiPostgresql size={32} />, label: "SQL Server", category: "Database" },
  { icon: <FaDatabase size={32} />, label: "MongoDB", category: "Database" },
  { icon: <SiDocker size={32} />, label: "Docker", category: "DevOps" },
  { icon: <FaGitAlt size={32} />, label: "GitHub Actions", category: "CI/CD" },
  { icon: <SiTailwindcss size={32} />, label: "Responsive UI", category: "Frontend" },
  { icon: <SiDatadog size={32} />, label: "Datadog", category: "Monitoring" },
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
    <section className="py-24 px-6 bg-background" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
                className="relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
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

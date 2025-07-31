import * as React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-background" id="about">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About Me
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              I'm a full-stack developer with a passion for building responsive and efficient web applications.
              I enjoy transforming ideas into digital experiences and solving real-world problems through code.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              With expertise spanning frontend and backend technologies, I focus on creating seamless user experiences 
              while maintaining robust, scalable architectures. I'm always eager to learn new technologies and 
              tackle challenging projects.
            </p>
          </div>

          {/* Experience Highlights */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50">
              <h3 className="text-2xl font-bold text-white mb-2">Frontend</h3>
              <p className="text-gray-400">Modern React, TypeScript, and responsive design</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50">
              <h3 className="text-2xl font-bold text-white mb-2">Backend</h3>
              <p className="text-gray-400">Node.js, NestJS, databases, and API development</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50">
              <h3 className="text-2xl font-bold text-white mb-2">DevOps</h3>
              <p className="text-gray-400">Docker, deployment, and development workflows</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

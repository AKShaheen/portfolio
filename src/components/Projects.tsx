import * as React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Doctor Booking Back-End",
    year: "2025",
    description: "Node.js modular monolith with MongoDB, enabling appointments, user authentication, and notifications system.",
    tech: ["Node.js", "MongoDB", "Express.js", "JWT Auth"],
    image: "/images/doctor-booking.png",
    repo: "https://github.com/AKShaheen/doctor-booking-api",
  },
  {
    title: "Generic E-Commerce API",
    year: "2024",
    description: "Comprehensive REST API for e-commerce applications with authentication, product management, and order processing.",
    tech: ["ASP.NET Core", "C#", "Entity Framework", "JWT Auth"],
    image: "/images/gec-api.png",
    repo: "https://github.com/AKShaheen/GEC_Api",
  },
  {
    title: "E-Commerce Concept Dashboard",
    year: "2024",
    description: "React-based admin dashboard with comprehensive inventory management and fulfillment modules.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    image: "/images/ecommerce-dashboard.png",
    repo: "https://ecommerce-concept.netlify.app/",
  },
  {
    title: "LMS Graduation Project",
    year: "2023",
    description: "Led team to develop a comprehensive Learning Management System platform serving 3,000 students with 40+ courses.",
    tech: ["React", "Laravel", "MySQL", "PHP"],
    image: "/images/lms-project.png",
    repo: "",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-background" id="projects">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selected Work
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 rounded-2xl bg-gray-900/30 border border-gray-800/50 hover:bg-gray-800/30 hover:border-gray-700/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-gray-400 text-sm mt-1 md:mt-0">{project.year}</span>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
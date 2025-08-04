import * as React from "react";
import { motion } from "framer-motion";

const workExperience = [
  {
    title: "Full-Stack Software Engineer",
    company: "Breadfast",
    location: "Cairo, Egypt",
    period: "Sept 2024 – Present",
    description: "Developed internal inventory dashboards & automation flows for 750+ internal users, reducing manual workflows and improving operational efficiency. Achieved faster page loads with optimized queries and increased automated test coverage from 15% to 80% using Jest and CI pipelines. Implemented Datadog observability reducing critical bug MTTR by 30%."
  },
  {
    title: "Product & UI/UX Designer",
    company: "Freelance",
    location: "Remote",
    period: "Apr 2022 – May 2024",
    description: "Revamped a pharmacy mobile app, improving sign-ups by 20% and revenue by 40%. Delivered responsive prototypes and dev-ready design libraries in Figma/Adobe XD. Collaborated with engineering teams for seamless handoffs and user-centered product updates."
  },
  {
    title: "Programming Instructor",
    company: "CIC & Sector B5",
    location: "Cairo, Egypt",
    period: "Jan 2023 – Dec 2023",
    description: "Led programming instruction for 1,500+ students in Python and web development, with final projects and certifications. Designed project-based learning modules aligned with industry practices."
  }
];

const education = [
  {
    degree: "B.Sc. in Communication & Computer Engineering",
    institution: "Helwan University",
    period: "Sept 2018 – Jan 2024",
    description: "GPA: 3.0/4.0"
  }
];

const disciplines = [
  "Full-Stack Development",
  "React",
  "TypeScript",
  "Node.js",
  "SQL/NoSQL Databases",
  "CI/CD & Testing",
  "UI/UX Design",
  "Revamp Stratiges",
  "Performance Optimization",
  "Cloud Deployment",
  "Datadog Observability",
  "Test Automation"
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight break-words">
            Full-Stack Software Engineer specializing in full-cycle product development and performance optimization.
          </h1>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 sm:space-y-8 mb-16 sm:mb-20 md:mb-24"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-1 sm:px-0">
            I'm Abdelaziz, a Full-Stack Software Engineer skilled in full-cycle product development: from UX prototyping to cloud deployment. 
            With expertise in React/Next.js, TypeScript, Node.js/Nest.js, and SQL/NoSQL databases, I specialize in creating efficient, 
            scalable solutions that drive business growth and operational efficiency.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-1 sm:px-0">
            I have a proven track record in performance optimization, test automation, and cross-functional collaboration. 
            At Breadfast, I developed internal dashboards for 750+ users and increased automated test coverage from 15% to 80%, 
            while implementing Datadog observability that reduced critical bug MTTR by 30%.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-1 sm:px-0">
            My diverse background spans software engineering, UI/UX design, and technical education. I've successfully revamped mobile applications 
            that improved sign-ups by 20% and revenue by 40%, while also leading programming instruction for 1,500+ students. 
            I'm passionate about delivering innovative solutions that align with user expectations and achieve measurable business results.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="border-l-2 border-gray-800 pl-6 pb-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                  <span className="text-gray-400 text-sm">{job.period}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-2 mb-2">
                  <p className="text-gray-300 font-medium">{job.company}</p>
                  {job.location && (
                    <>
                      <span className="hidden md:inline text-gray-500">•</span>
                      <p className="text-gray-400 text-sm">{job.location}</p>
                    </>
                  )}
                </div>
                <p className="text-gray-400 leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="border-l-2 border-gray-800 pl-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <span className="text-gray-400 text-sm">{edu.period}</span>
                </div>
                <p className="text-gray-300 font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-400">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Disciplines */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Disciplines</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {disciplines.map((discipline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-4 rounded-lg bg-gray-900/30 border border-gray-800/50 text-center flex items-center justify-center"
              >
                <span className="text-gray-300 text-sm font-medium break-words">{discipline}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Resume CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Resume</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in learning more about my experience and qualifications? 
            Download my complete resume for detailed information about my projects and achievements.
          </p>
          <motion.a
            href="https://drive.google.com/file/d/1ylGdcqqzTO4SWb2s37Iq6l9r3UxtkEoq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;

import * as React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      await emailjs.sendForm(
        "service_yjj6j4v",
        "template_64e0shc",
        form,
        "MID_sUb3KPD7lgOyW"
      );
      setSubmitted("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setSubmitted("error");
    }

    setTimeout(() => setSubmitted(null), 3000);
  };

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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">Contact Me</h2>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded bg-background text-white focus:ring-2 focus:ring-accent transition-all duration-200 text-sm sm:text-base"
            whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #00c6ff" }}
            whileHover={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded bg-background text-white focus:ring-2 focus:ring-accent transition-all duration-200 text-sm sm:text-base"
            whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #00c6ff" }}
            whileHover={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            required
            placeholder="Your Message"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded bg-background text-white h-24 sm:h-32 focus:ring-2 focus:ring-accent transition-all duration-200 text-sm sm:text-base resize-none"
            whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #00c6ff" }}
            whileHover={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="bg-accent hover:bg-accent-dark px-4 sm:px-6 py-2.5 sm:py-3 rounded text-white shadow-lg text-sm sm:text-base font-medium"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`mt-4 text-center font-medium ${
                submitted === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {submitted === "success"
                ? "Message sent successfully!"
                : "Failed to send. Please try again."}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Contact;
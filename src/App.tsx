import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";
import { motion, AnimatePresence } from "framer-motion";



const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.3 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-accent hover:bg-accent-dark text-white p-2.5 sm:p-3 rounded-full shadow-lg z-50 text-sm sm:text-base"
      aria-label="Scroll to top"
      style={{ display: visible ? 'block' : 'none' }}
    >
      ↑
    </motion.button>
  );
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-background min-h-screen text-white">
        <AnimatedBackground />
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <PageTransition>
                  <WorkPage />
                </PageTransition>
              } 
            />
            <Route 
              path="/about" 
              element={
                <PageTransition>
                  <AboutPage />
                  <section id="contact"><Contact /></section>
                </PageTransition>
              } 
            />
          </Routes>
        </AnimatePresence>
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
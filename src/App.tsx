import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Certificates from './pages/Certificates.jsx';
import DesignShowcase from './pages/DesignShowcase.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import Extracurriculars from './pages/Extracurriculars.jsx';
import './App.css';
import { motion } from 'framer-motion';

const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navbar />
      <motion.section variants={pageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="home">
        <Home />
      </motion.section>
      <motion.section variants={pageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="about">
        <About />
      </motion.section>
      <motion.section variants={pageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="projects">
        <Projects />
      </motion.section>
      <motion.section variants={pageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="certificates">
        <Certificates />
      </motion.section>
      <motion.section variants={pageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="designs">
        <DesignShowcase />
      </motion.section>
      <motion.section variants={pageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="blog">
        <Blog />
      </motion.section>
      <motion.section variants={pageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="extracurriculars">
        <Extracurriculars />
      </motion.section>
      <motion.section variants={pageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="contact">
        <Contact />
      </motion.section>
    </div>
  );
}

export default App;
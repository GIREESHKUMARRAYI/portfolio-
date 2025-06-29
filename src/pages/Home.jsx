import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Brain, Palette } from 'lucide-react';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "AI/ML Developer & Legacy Breaker";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Rayi_Gireesh Kumar.pdf';
    link.download = 'Rayi_Gireesh_Kumar_Resume.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    document.getElementById('projects-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 3 + 4}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12">
          {/* Left: Text Content */}
          <motion.div
            variants={itemVariants}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Rayi Gireesh Kumar</span>
            </h1>
            <div className="text-2xl md:text-3xl font-medium text-gray-300 h-12 flex items-center mb-8">
              <span className="typing-animation">{displayText}</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
              Transforming ideas into intelligent solutions through cutting-edge AI/ML technologies, 
              full-stack development, and innovative design thinking.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="glass px-8 py-4 text-lg font-medium text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Projects</span>
                <ChevronDown size={20} />
              </motion.button>
            </div>
            <div className="flex space-x-6">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/rayigireesh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass hover:bg-white/10 transition-all duration-300"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="https://linkedin.com/in/rayigireesh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass hover:bg-white/10 transition-all duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="mailto:rayigireesh@gmail.com"
                className="p-3 glass hover:bg-white/10 transition-all duration-300"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
          {/* Right: Profile Picture */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-end items-center"
          >
            <img
              src="/PROFILE.png"
              alt="Profile"
              className="w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] rounded-full object-cover border-4 border-blue-400 shadow-2xl animate-float"
              style={{ background: '#222' }}
            />
          </motion.div>
        </div>
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </motion.section>

      {/* Quick Overview Section */}
      <motion.section
        id="projects-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-8 text-center card-hover"
            >
              <Brain size={48} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-4">AI/ML Development</h3>
              <p className="text-gray-400">
                Building intelligent systems with machine learning, deep learning, 
                and natural language processing technologies.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-8 text-center card-hover"
            >
              <Code size={48} className="mx-auto mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-4">Full Stack Development</h3>
              <p className="text-gray-400">
                Creating scalable web applications using MERN stack, 
                with modern frameworks and best practices.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-8 text-center card-hover"
            >
              <Palette size={48} className="mx-auto mb-4 text-orange-400" />
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-400">
                Designing intuitive and beautiful user experiences 
                with modern design principles and tools.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                const section = document.getElementById('projects');
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Explore All Projects
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 
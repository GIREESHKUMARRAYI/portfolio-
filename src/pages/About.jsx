import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, BookOpen, Code, Globe } from 'lucide-react';

const contactInfo = [
  { icon: <Mail />, label: 'Email', value: 'gireeshkumarrayi@gmail.com', href: 'mailto:gireeshkumarrayi@gmail.com' },
  { icon: <Phone />, label: 'Phone', value: '+91 7674877358', href: 'tel:+917674877358' },
  { icon: <Github />, label: 'GitHub', value: 'github.com/GIREESHKUMARRAYI', href: 'https://github.com/GIREESHKUMARARYI' },
  { icon: <Linkedin />, label: 'LinkedIn', value: 'Gireesh Kumar', href: 'https://www.linkedin.com/in/gireesh-kumar-88766824a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { icon: <Globe />, label: 'Live Portfolio', value: 'portfolio-six-tawny-47.vercel.app', href: 'https://portfolio-six-tawny-47.vercel.app/' },
];

const education = [
  {
    degree: 'B.Tech – Artificial Intelligence and Machine Learning',
    school: 'GMR Institute of Technology, JNTUGV, Rajam',
    years: '2022 – 2026',
    details: 'Current CGPA: 8.2/10',
  },
  {
    degree: 'Intermediate (Class XII) – MPC, CBSE',
    school: "Dr KKR's Happy Valley School, Vijayawada",
    years: '2020 – 2022',
    details: 'Percentage: 78.8%',
  },
  {
    degree: 'Secondary (Class X), CBSE',
    school: "Dr KKR's Gowtham School, Visakhapatnam",
    years: '2019 – 2020',
    details: 'Percentage: 65.6%',
  },
];

const skills = [
  'Python (Advanced)',
  'Data Structures',
  'Algorithms',
  'OOP',
  'Database Management',
  'HTML',
  'CSS',
  'JavaScript',
  'Node.js',
  'Express.js',
  'React.js',
  'MongoDB',
  'MySQL',
  'Git',
  'VS Code',
  'Jupyter Notebook',
  'YOLO',
  'VGG16/VGG19',
  'GANs',
  'BERT',
  'Transformers (T2T)',
  'LLMs',
  'Agile',
  'Code Review',
  'Documentation',
];

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const About = () => (
  <div className="min-h-screen pt-20 pb-12 px-4">
    <div className="max-w-5xl mx-auto">
      {/* Contact Info */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-10 flex flex-wrap gap-6 justify-center"
      >
        {contactInfo.map((info) => (
          <a
            key={info.label}
            href={info.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
          >
            {info.icon}
            <span className="font-medium">{info.value}</span>
          </a>
        ))}
      </motion.div>

      {/* Professional Summary */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="bg-gradient-to-br from-blue-900/80 to-purple-900/80 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Professional Summary</h1>
            <p className="text-gray-200 text-lg leading-relaxed text-justify">
              Analytical and driven aspiring Software Engineer specializing in Artificial Intelligence and Machine Learning, with strong proficiency in Python and hands-on experience in deep learning, neural networks, and computer vision. Adept at designing scalable, data-driven solutions and applying ML/DL models to real-world challenges. Demonstrates a solid understanding of software development principles and thrives in collaborative, agile environments.
            </p>
          </div>
          <div className="hidden md:block flex-1 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-gradient-to-br from-blue-500 to-purple-500 p-1 rounded-full shadow-2xl"
            >
              <Code className="w-32 h-32 text-white" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-2"><BookOpen /> Education</h2>
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-60 z-0" style={{ top: 0, bottom: 0 }} />
          <div className="flex flex-col gap-12 relative z-10">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot and icon */}
                <div className="flex flex-col items-center md:w-1/4">
                  <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-3 rounded-full shadow-lg mb-2 border-4 border-white/10">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-blue-300 font-semibold text-sm mt-1">{edu.years}</span>
                </div>
                {/* Card */}
                <div className="flex-1 bg-gradient-to-br from-blue-800/80 to-purple-800/80 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform">
                  <div className="font-semibold text-lg mb-1 text-white">{edu.degree}</div>
                  <div className="text-gray-300 mb-1">{edu.school}</div>
                  <div className="text-purple-300 text-sm">{edu.details}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-2"><Code /> Technical Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, i) => (
            <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-md text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default About; 
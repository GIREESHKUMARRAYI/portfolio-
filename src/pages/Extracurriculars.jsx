import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Calendar, Award, Activity } from 'lucide-react';

const activities = [
  {
    title: 'Joint Secretary, ISTE & Student Professional Bodies Council',
    year: '2024',
    icon: <Users className="w-8 h-8 text-blue-400" />,
    description: `Served as Joint Secretary, contributing to the growth and engagement of student professional bodies. Organized events, fostered collaboration, and promoted technical awareness among peers.`,
  },
  {
    title: 'Lead Organizer, STEPCONE',
    year: '2025',
    icon: <Star className="w-8 h-8 text-purple-400" />,
    description: `Managed operations and coordination for 1,000+ participant national tech fest. Led a team, coordinated with multiple departments, handled communications, and ensured successful event execution.`,
  },
  {
    title: 'Technical Workshops & Training Events',
    year: '2024-2025',
    icon: <Activity className="w-8 h-8 text-orange-400" />,
    description: `Coordinated technical workshops and training events, collaborated with various departments, and managed awareness communications and post-event reporting.`,
  },
];

const timelineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7 }
  }),
};

const Extracurriculars = () => (
  <div className="min-h-screen pt-20 pb-12 px-4 max-w-4xl mx-auto">
    <h1 className="text-5xl font-bold mb-12 gradient-text text-center">Extracurricular Activities</h1>
    <div className="relative">
      {/* Timeline vertical line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400 opacity-60 z-0" style={{ top: 0, bottom: 0 }} />
      <div className="flex flex-col gap-12 relative z-10">
        {activities.map((activity, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={timelineVariants}
            className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Icon and year */}
            <div className="flex flex-col items-center md:w-1/4">
              <div className="bg-gray-900 p-4 rounded-full shadow-lg mb-2 border-4 border-white/10">
                {activity.icon}
              </div>
              <span className="text-blue-300 font-semibold text-sm mt-1">{activity.year}</span>
            </div>
            {/* Card */}
            <div className="flex-1 bg-gradient-to-br from-blue-800/80 to-purple-800/80 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform">
              <h2 className="text-2xl font-bold mb-2 gradient-text">{activity.title}</h2>
              <p className="text-gray-200 text-lg whitespace-pre-line">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Extracurriculars; 
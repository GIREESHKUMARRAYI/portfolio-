import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Download } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialId: 'AWS-CCP-2024-001',
      verifyUrl: 'https://aws.amazon.com/verification',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture']
    },
    {
      id: 2,
      title: 'Python Programming Certification',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialId: 'CISCO-PY-2023-045',
      verifyUrl: 'https://cisco.com/verification',
      skills: ['Python', 'Programming', 'Data Structures']
    },
    {
      id: 3,
      title: 'UI/UX Design Professional',
      issuer: 'Figma Academy',
      date: '2023',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialId: 'FIGMA-UX-2023-078',
      verifyUrl: 'https://figma.com/verification',
      skills: ['UI Design', 'UX Research', 'Prototyping', 'Figma']
    },
    {
      id: 4,
      title: 'Machine Learning Specialization',
      issuer: 'Coursera - Stanford University',
      date: '2023',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialId: 'COURSERA-ML-2023-156',
      verifyUrl: 'https://coursera.org/verification',
      skills: ['Machine Learning', 'Neural Networks', 'Deep Learning']
    },
    {
      id: 5,
      title: 'React.js Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2022',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialId: 'META-REACT-2022-234',
      verifyUrl: 'https://meta.com/verification',
      skills: ['React.js', 'JavaScript', 'Frontend Development']
    },
    {
      id: 6,
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: '2022',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      credentialId: 'MONGO-DEV-2022-089',
      verifyUrl: 'https://university.mongodb.com/verification',
      skills: ['MongoDB', 'Database Design', 'NoSQL']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Certifications
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise across various technologies
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="glass p-6 text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-3xl font-bold mb-2 gradient-text">{certificates.length}</h3>
            <p className="text-gray-400">Total Certifications</p>
          </div>
          <div className="glass p-6 text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-3xl font-bold mb-2 gradient-text">2024</h3>
            <p className="text-gray-400">Latest Certification</p>
          </div>
          <div className="glass p-6 text-center">
            <ExternalLink className="w-12 h-12 mx-auto mb-4 text-orange-400" />
            <h3 className="text-3xl font-bold mb-2 gradient-text">100%</h3>
            <p className="text-gray-400">Verified Credentials</p>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 card-hover group"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 p-2 bg-blue-500 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 gradient-text">{cert.title}</h3>
                  <p className="text-gray-400 font-medium">{cert.issuer}</p>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                <div className="text-sm text-gray-400">
                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Verify</span>
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-4 py-2 btn-primary text-sm"
                  >
                    <Download size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Continuous Learning
            </h2>
            <p className="text-gray-400 mb-6">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my commitment to professional growth and excellence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3"
            >
              View All Credentials
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates; 
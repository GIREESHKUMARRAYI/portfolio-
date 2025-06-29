import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, Download, Filter, Palette, Layout, Image as ImageIcon } from 'lucide-react';

const DesignShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Designs', icon: <Palette className="w-4 h-4" /> },
    { id: 'ui-ux', name: 'UI/UX', icon: <Layout className="w-4 h-4" /> },
    { id: 'posters', name: 'Posters', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'cards', name: 'Cards', icon: <ImageIcon className="w-4 h-4" /> },
  ];

  const designs = [
    {
      id: 1,
      title: 'E-Commerce Mobile App UI',
      category: 'ui-ux',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern e-commerce mobile app interface with clean design and intuitive user experience.',
      tools: ['Figma', 'Adobe XD', 'Principle'],
      year: '2024'
    },
    {
      id: 2,
      title: 'AI Conference Poster',
      category: 'posters',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Futuristic poster design for artificial intelligence conference with dynamic visual elements.',
      tools: ['Photoshop', 'Illustrator', 'After Effects'],
      year: '2024'
    },
    {
      id: 3,
      title: 'Banking App Dashboard',
      category: 'ui-ux',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Clean and secure banking application dashboard with comprehensive financial overview.',
      tools: ['Figma', 'Sketch', 'InVision'],
      year: '2023'
    },
    {
      id: 4,
      title: 'Tech Startup Business Card',
      category: 'cards',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Minimalist business card design for tech startup with modern typography and branding.',
      tools: ['Illustrator', 'Photoshop'],
      year: '2023'
    },
    {
      id: 5,
      title: 'Music Streaming App',
      category: 'ui-ux',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dark-themed music streaming application with focus on album artwork and user engagement.',
      tools: ['Figma', 'Principle', 'Lottie'],
      year: '2023'
    },
    {
      id: 6,
      title: 'Machine Learning Workshop Poster',
      category: 'posters',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Educational poster for machine learning workshop with data visualization elements.',
      tools: ['Photoshop', 'Illustrator', 'Cinema 4D'],
      year: '2023'
    },
    {
      id: 7,
      title: 'Developer Portfolio Card',
      category: 'cards',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Creative portfolio card design for developers with code-inspired visual elements.',
      tools: ['Illustrator', 'Photoshop', 'InDesign'],
      year: '2022'
    },
    {
      id: 8,
      title: 'Food Delivery App Interface',
      category: 'ui-ux',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Appetizing food delivery app interface with focus on food photography and easy ordering.',
      tools: ['Figma', 'Adobe XD', 'Zeplin'],
      year: '2022'
    },
    {
      id: 9,
      title: 'Innovation Summit Poster',
      category: 'posters',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dynamic poster design for innovation summit with geometric patterns and bold typography.',
      tools: ['Photoshop', 'Illustrator', 'Blender'],
      year: '2022'
    }
  ];

  const filteredDesigns = selectedCategory === 'all' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  const openLightbox = (design) => {
    setSelectedImage(design);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
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
            Design Showcase
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of my creative work spanning UI/UX design, poster design, and brand identity
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-purple-500 text-white'
                  : 'glass hover:bg-white/10'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Design Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredDesigns.map((design, index) => (
              <motion.div
                key={design.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-4 card-hover group cursor-pointer"
                onClick={() => openLightbox(design)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                      >
                        <Download className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-purple-500 text-white text-xs rounded-full capitalize">
                    {design.category.replace('-', '/')}
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded-full">
                    {design.year}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold gradient-text">{design.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{design.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {design.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full h-96 lg:h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full capitalize">
                        {selectedImage.category.replace('-', '/')}
                      </span>
                      <span className="ml-2 text-gray-400">{selectedImage.year}</span>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4 gradient-text">
                      {selectedImage.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {selectedImage.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Tools Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedImage.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 btn-primary"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 glass hover:bg-white/10"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Full Size</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
              Let's Create Together
            </h2>
            <p className="text-gray-400 mb-6">
              Interested in collaborating on a design project? I'd love to bring your ideas to life 
              with creative and innovative design solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignShowcase; 
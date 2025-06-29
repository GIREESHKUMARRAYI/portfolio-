import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Tag, ArrowRight, BookOpen, Heart, MessageCircle } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedPosts, setLikedPosts] = useState(new Set());

const blogPosts = [
  {
      id: 1,
      title: 'Building AI-Powered Chatbots: A Complete Guide',
      excerpt: 'Learn how to create intelligent conversational AI using natural language processing and machine learning algorithms.',
      author: 'Rayi Gireesh Kumar',
      date: '2024-12-15',
      category: 'AI/ML',
      tags: ['AI', 'Chatbot', 'NLP', 'Machine Learning'],
      readTime: '8 min read',
      likes: 42,
      comments: 12,
      featured: true,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'How I Organized a National Tech Fest: STEPCONE 2025',
      excerpt: 'Organizing STEPCONE 2025 was a transformative experience. Managing operations for over 1,000 participants.',
      author: 'Rayi Gireesh Kumar',
    date: '2025-02-15',
      category: 'Leadership',
      tags: ['Leadership', 'Event Management', 'Teamwork', 'STEPCONE'],
      readTime: '6 min read',
      likes: 38,
      comments: 8,
      featured: true,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Full-Stack Development with MERN Stack: Best Practices',
      excerpt: 'A deep dive into building scalable web applications using the MERN stack.',
      author: 'Rayi Gireesh Kumar',
      date: '2024-11-20',
      category: 'Development',
      tags: ['MERN Stack', 'Full-Stack', 'Web Development', 'Best Practices'],
      readTime: '10 min read',
      likes: 35,
      comments: 15,
      featured: false,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'AI/ML', name: 'AI/ML', icon: <Tag className="w-4 h-4" /> },
    { id: 'Development', name: 'Development', icon: <Tag className="w-4 h-4" /> },
    { id: 'Design', name: 'Design', icon: <Tag className="w-4 h-4" /> },
    { id: 'Leadership', name: 'Leadership', icon: <Tag className="w-4 h-4" /> },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing insights, experiences, and knowledge about technology, development, and personal growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'glass hover:bg-white/10'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 card-hover group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {post.featured && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-gray-400 text-sm">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-1 text-xs transition-colors ${
                        likedPosts.has(post.id) ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                      }`}
                    >
                      <Heart className={`w-3 h-3 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                      <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                    </motion.button>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 px-3 py-1 btn-primary text-xs"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold text-gray-300 mb-2">No posts found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
  </div>
);
};

export default Blog; 

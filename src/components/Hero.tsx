import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, ArrowDown, ExternalLink, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6 mx-auto md:mx-0"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-gray-300">AI & Data Science Student</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Abhinand UK</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {profile.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>View Projects</span>
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
              </button>
              {profile.resume && (
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 glass rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2"
                  aria-label="View resume in new tab"
                >
                  <ExternalLink size={18} />
                  <span>View Resume</span>
                </a>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-110 group"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} className="group-hover:text-blue-400 transition-colors duration-200" />
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} className="group-hover:text-blue-400 transition-colors duration-200" />
                </a>
              )}
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-110 group"
                  aria-label="Email"
                >
                  <Mail size={24} className="group-hover:text-blue-400 transition-colors duration-200" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Right Visual - AI/ML Dashboard */}
          <motion.div
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              {/* Main Terminal Card */}
              <div className="glass rounded-2xl p-6 space-y-4 border border-white/10">
                {/* Terminal Header */}
                <div className="flex items-center space-x-2 pb-3 border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">~/projects/ai-portfolio</span>
                </div>

                {/* Code Lines */}
                <div className="space-y-3 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-blue-400">$</span>
                    <span className="text-gray-300">import</span>
                    <span className="text-purple-400">machine_learning</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-blue-400">$</span>
                    <span className="text-gray-300">from</span>
                    <span className="text-pink-400">data_science</span>
                    <span className="text-gray-300">import</span>
                    <span className="text-purple-400">*</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-blue-400">$</span>
                    <span className="text-gray-300">deploying</span>
                    <span className="text-green-400">AI solutions</span>
                    <div className="w-2 h-4 bg-blue-400 animate-pulse ml-1"></div>
                  </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="glass p-4 rounded-lg text-center hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="text-2xl font-bold text-gradient">Python</div>
                    <div className="text-xs text-gray-400 mt-1">Primary</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="glass p-4 rounded-lg text-center hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="text-2xl font-bold text-gradient">AI/ML</div>
                    <div className="text-xs text-gray-400 mt-1">Focus</div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.3 }}
      >
        <ArrowDown className="text-gray-500" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;

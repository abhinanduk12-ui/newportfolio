import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Mail, Heart } from 'lucide-react';
import { profile } from '../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gradient mb-2">Abhinand UK</h3>
            <p className="text-gray-400 text-sm">AI & Data Science Student</p>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div 
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {profile.github && (
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-200 group"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={20} className="group-hover:text-blue-400 transition-colors duration-200" />
              </motion.a>
            )}
            {profile.linkedin && (
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-200 group"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={20} className="group-hover:text-blue-400 transition-colors duration-200" />
              </motion.a>
            )}
            {profile.instagram && (
              <motion.a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-200 group"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram size={20} className="group-hover:text-blue-400 transition-colors duration-200" />
              </motion.a>
            )}
            {profile.email && (
              <motion.a
                href={`mailto:${profile.email}`}
                className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-200 group"
                aria-label="Email"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} className="group-hover:text-blue-400 transition-colors duration-200" />
              </motion.a>
            )}
          </motion.div>

          {/* Right - Copyright */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Abhinand UK
            </p>
            <p className="text-gray-500 text-xs mt-1">All rights reserved</p>
          </motion.div>
        </div>

        {/* Bottom - Built with */}
        <motion.div 
          className="mt-8 pt-8 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm flex items-center justify-center space-x-2">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

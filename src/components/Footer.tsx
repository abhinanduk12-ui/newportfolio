import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Heart } from 'lucide-react';
import { profile } from '../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">Abhinand UK</h3>
            <p className="text-gray-400 text-sm">AI & Data Science Student</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center justify-center space-x-6">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-110 group"
                aria-label="GitHub"
              >
                <FaGithub size={20} className="group-hover:text-blue-400 transition-colors duration-200" />
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
                <FaLinkedin size={20} className="group-hover:text-blue-400 transition-colors duration-200" />
              </a>
            )}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-110 group"
                aria-label="Email"
              >
                <Mail size={20} className="group-hover:text-blue-400 transition-colors duration-200" />
              </a>
            )}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} Abhinand UK
            </p>
            <p className="text-gray-500 text-xs mt-1">All rights reserved</p>
          </div>
        </div>

        {/* Bottom - Built with */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center space-x-2">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

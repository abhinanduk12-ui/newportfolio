import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-6">
            <FileText className="w-10 h-10 text-blue-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in <span className="text-gradient">working together?</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            View my resume for a detailed overview of my education, technical skills, projects, and experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <motion.a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View Abhinand UK resume in a new tab"
            >
              <ExternalLink size={24} />
              <span>View Resume</span>
            </motion.a>

            <motion.a
              href={profile.resume}
              download="Abhinand-UK-Resume.pdf"
              className="inline-flex items-center space-x-3 px-8 py-4 glass rounded-xl text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download Abhinand UK resume as PDF"
            >
              <Download size={24} />
              <span>Download Resume</span>
            </motion.a>
          </div>

          <p className="text-gray-500 text-sm">
            Available for internships and entry-level positions in AI/ML and Data Science
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

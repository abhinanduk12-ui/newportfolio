import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/education';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass rounded-xl p-8 md:p-10 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl text-blue-400 flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gradient mb-2">
                  {education.degree}
                </h3>
                <p className="text-xl text-gray-300 mb-2">{education.institution}</p>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin size={16} />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Key Focus Areas</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {education.focus.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="px-3 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg text-center text-sm text-gray-300 hover:border-blue-500/50 transition-all duration-200"
                  >
                    {area}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

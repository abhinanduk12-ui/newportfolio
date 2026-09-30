import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Brain, GraduationCap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      label: 'Computer Science & Data Science',
      value: 'Integrated MSc'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      label: 'AI/ML Projects',
      value: 'Building'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      label: 'Python & SQL',
      value: 'Proficient'
    },
    {
      icon: <Database className="w-6 h-6" />,
      label: 'Continuous Learning',
      value: 'Always'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a Computer Science and Data Science student interested in transforming data into useful intelligent systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I enjoy working with <span className="text-blue-400 font-semibold">Python</span>, <span className="text-purple-400 font-semibold">Machine Learning</span>, <span className="text-pink-400 font-semibold">Data Analysis</span>, SQL, Django, AI tools, and backend systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I am currently focused on improving my problem-solving ability and developing production-oriented AI applications that solve real-world challenges.
            </p>
            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {['Python', 'Machine Learning', 'Data Science', 'Django', 'SQL', 'AI Tools'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 glass rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-gray-400 leading-tight">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

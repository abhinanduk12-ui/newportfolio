import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Code, Database, Brain, Boxes } from 'lucide-react';

const Learning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const learningAreas = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: 'Advanced Machine Learning',
      topics: ['Deep Learning', 'Neural Networks', 'Model Optimization']
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Python & Django',
      topics: ['Advanced Python', 'Django REST', 'Backend Development']
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'SQL & Databases',
      topics: ['Query Optimization', 'Database Design', 'Data Modeling']
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'AI Engineering',
      topics: ['MLOps', 'Model Deployment', 'Production ML']
    },
    {
      icon: <Boxes className="w-5 h-5" />,
      title: 'DSA & Problem Solving',
      topics: ['Algorithms', 'Data Structures', 'System Design']
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Currently <span className="text-gradient">Learning</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-xl p-6 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">{area.title}</h3>
                </div>
              </div>
              <ul className="space-y-2">
                {area.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-gray-400 text-sm">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;

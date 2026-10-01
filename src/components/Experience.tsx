import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Target } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: 'Building AI and machine learning projects',
      description: 'Developing practical AI solutions with real-world applications'
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Learning production ML workflows',
      description: 'Understanding deployment, monitoring, and scaling of ML systems'
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: 'Developing full-stack applications',
      description: 'Creating end-to-end solutions with modern web technologies'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Preparing for AI/ML and Data Science opportunities',
      description: 'Continuously improving skills and building a strong portfolio'
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Current <span className="text-gradient">Focus</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-xl p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">
              AI / Data Science Development
            </h3>
            <p className="text-gray-400 mb-6">
              As a student actively developing my skills in AI, machine learning, and data science, 
              I'm focused on building real-world projects and preparing for professional opportunities.
            </p>
            
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 hover:shadow-md transition-all duration-300 group/item"
                >
                  <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    {activity.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-semibold mb-1">{activity.title}</h4>
                    <p className="text-gray-500 text-sm">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-500 italic">
              Open to internships and entry-level opportunities in AI/ML and Data Science
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

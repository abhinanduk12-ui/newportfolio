import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, ExternalLink, X, Star } from 'lucide-react';
import type { Project } from '../types';
import { projects } from '../data/projects';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-world applications showcasing AI, machine learning, and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                project.isFeatured ? 'ring-2 ring-blue-500/50' : ''
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {project.isFeatured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 flex items-center space-x-2">
                  <Star size={16} className="text-white fill-white" />
                  <span className="text-white text-sm font-semibold">Featured Project</span>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-blue-400 mb-3">{project.category}</p>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  {project.githubUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                      className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="View on GitHub"
                    >
                      <Code size={16} />
                      <span>Code</span>
                    </button>
                  )}
                  {project.liveUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                      className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </button>
                  )}
                  <button
                    className="ml-auto text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-blue-400">{selectedProject.category}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-200">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-400">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-200">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 glass rounded-lg hover:bg-white/10 transition-all duration-200"
                  >
                    <Code size={20} />
                    <span>View on GitHub</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>View Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;

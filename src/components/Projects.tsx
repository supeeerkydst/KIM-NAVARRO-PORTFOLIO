import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'Pamana Credit & Development Cooperative Local Voting System',
      description: 'A personalized local voting system using ReactJS for Pamana CDC which they will use to cater at least 5000 members to join the voting of their board members on an annual basis. The cooperative chose a localized system to eliminate the problems being encountered during an online setup.',
      tags: ['ReactJS', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '#',
      github: '#',
      demo: '#'
    },
    {
      title: 'Grade Threshold and Automated Grade Calculator and Analysis Using Macros-Enabled MS Excel File',
      description: 'An automated grade threshold calculator and college student grade calculator with automated data analysis for a university.',
      tags: ['MS Excel', 'VBA', 'Data Analysis'],
      image: '#',
      github: '#',
      demo: '#'
    },
    {
      title: 'Room Management and Facilitation Web and Mobile Application',
      description: 'A mobile-based application that manages and control use of computer laboratory PCs remotely.',
      tags: ['Python', 'Android Programming', 'PHP'],
      image: '#',
      github: '#',
      demo: '#'
    },
    {
      title: 'Dental Clinic Information System',
      description: 'A web application that stores patient information and tracks teeth information of all dentists patients.  Keeps track of patient oral health.',
      tags: ['PHP', 'MySQL', 'Tailwind', 'WebSocket'],
      image: '#',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
      
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Notable <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See more on my LinkedIn profile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

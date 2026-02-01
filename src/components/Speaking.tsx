import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Calendar, MapPin, Users } from 'lucide-react';

export function Speaking() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const talks = [
  {
    title: 'Hour of Code & AI',
    event: 'Hour of AI Session w/ Dr. Carl E. Balita Review Center',
    location: 'Virtual',
    date: 'January 2025',
    audience: '4000+ attendees',
    description: 'Basics of AI and coding in a fun and engaging way.',
    tags: ['Artificial Intelligence', '#HourOfCode', 'AI Ready ASEAN']
  },
  {
    title: 'A Quantum Leap Towards Excellence',
    event: 'The First IT Congress',
    location: 'City of Malolos, Bulacan',
    date: 'February - April 2023',
    audience: '300+ attendees',
    description:
      'A month long celebration of information technology innovation and learning.',
    tags: ['Technical Education', 'Innovation', 'Seminars', 'Peer Talks']
  },
  {
    title: 'SYNTAX Endgame: Gaming Towards Excellence',
    event: 'The Second IT Congress',
    location: 'Vista Mall - Malolos',
    date: 'February 2024 - April 2024',
    audience: '400+ attendees',
    description: 'A month long celebration of information technology innovation and learning.',
    tags: ['IT Leadership', 'Innovation', 'Game Development']
  },
  {
    title: 'FRXVerse: The Eternal Convergence',
    event: 'FRX Esports League',
    location: 'Malolos, Bulacan',
    date: 'April 2025',
    audience: '100+ attendees',
    description: 'Celebration of Esports Tournament',
    tags: ['Esports', 'Camaraderie', 'Teamwork']
  },
];

  const topics = [
    'Web Development',
    'Software Architecture',
    'Developer Tools',
    'Technical Education',
    'Artificial Intelligence',
    'Programming',
    'Leadership'
  ];

  return (
    <section id="speaking" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/5 to-black" />
      
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Speaking, Events, Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing insights and inspiring communities through talks and workshops
          </p>
        </motion.div>

        {/* Recent Talks */}
        <div className="mb-16 space-y-6">
          {talks.map((talk, index) => (
            <motion.div
              key={talk.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-r from-gray-900 to-black border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{talk.title}</h3>
                  <p className="text-cyan-400 font-medium">{talk.event}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{talk.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{talk.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{talk.audience}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{talk.description}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {talk.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + tagIndex * 0.05
                    }}
                    className="
                      px-4 py-1.5
                      text-sm font-medium
                      rounded-full
                      bg-gradient-to-r from-cyan-500/10 to-blue-500/10
                      border border-cyan-500/30
                      text-cyan-400
                      hover:border-cyan-400
                      hover:bg-cyan-500/20
                      transition-all
                    "
                  >
                    #{tag}
                  </motion.span>
                ))}
              </div> 
            </motion.div>
          ))}
        </div>

        {/* Speaking Topics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Speaking Topics</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {topics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-cyan-400 font-medium"
              >
                {topic}
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Interested in having me speak at your event?</p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

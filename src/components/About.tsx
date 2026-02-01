import { motion } from 'framer-motion';
import { useInView } from './hooks/useInView';
import { Terminal, Users, Sparkles } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: Terminal,
      title: 'Development',
      description: 'Building robust and scalable applications with modern technologies'
    },
    {
      icon: Users,
      title: 'Education',
      description: 'Empowering students and professionals through hands-on learning'
    },
    {
      icon: Sparkles,
      title: 'Speaking',
      description: 'Inspiring audiences with insights on technology and innovation'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black" />
      
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate software developer with a deep commitment to creating impactful technology solutions. 
              My journey in tech has evolved beyond just writing code—I've embraced the role of educator and speaker, 
              sharing knowledge and inspiring others in the developer community.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With expertise in modern web technologies and a teaching mindset, I bridge the gap between complex 
              technical concepts and practical applications. Whether I'm developing software, teaching a class, or 
              speaking at events, my goal is to make technology accessible and empowering.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in continuous learning and sharing. Every project is an opportunity to innovate, every 
              student is a future leader, and every talk is a chance to spark inspiration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-r from-gray-900 to-black border border-cyan-500/20 rounded-xl p-6 flex items-start gap-4"
              >
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-lg">
                  <item.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

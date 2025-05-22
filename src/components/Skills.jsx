import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { 
      category: 'Front-end', 
      items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'ReactJS']
    },
    { 
      category: 'Back-end', 
      items: ['Python', 'NodeJS', 'ExpressJS']
    },
    { 
      category: 'Frameworks', 
      items: ['Django', 'Flutter', 'TailwindCSS']
    },
    { 
      category: 'Database', 
      items: ['MySQL', 'SQLite', 'MongoDB']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg border border-emerald-500/20"
            >
              <h3 className="text-xl font-semibold text-emerald-500 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
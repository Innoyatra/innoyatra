'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { motion } from 'framer-motion'
import {
  NodeIcon,
  PhpIcon,
  PythonIcon,
  DotNetIcon,
  JavaIcon,
  ReactIcon,
  AngularIcon,
  VueIcon,
  MySQLIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  WordPressIcon,
  DrupalIcon,
  AWSIcon,
  AzureIcon,
  DockerIcon,
  KubernetesIcon
} from './tech-icons'

const techCategories = {
  Backend: [
    { name: 'Node.js', icon: NodeIcon },
    { name: 'PHP', icon: PhpIcon },
    { name: 'Python', icon: PythonIcon },
    { name: '.NET', icon: DotNetIcon },
    { name: 'Java', icon: JavaIcon },
  ],
  Frontend: [
    { name: 'React', icon: ReactIcon },
    { name: 'Angular', icon: AngularIcon },
    { name: 'Vue', icon: VueIcon },
  ],
  Databases: [
    { name: 'MySQL', icon: MySQLIcon },
    { name: 'MongoDB', icon: MongoDBIcon },
    { name: 'PostgreSQL', icon: PostgreSQLIcon },
  ],
  CMS: [
    { name: 'WordPress', icon: WordPressIcon },
    { name: 'Drupal', icon: DrupalIcon },
  ],
  CloudTesting: [
    { name: 'AWS', icon: AWSIcon },
    { name: 'Azure', icon: AzureIcon },
  ],
  DevOps: [
    { name: 'Docker', icon: DockerIcon },
    { name: 'Kubernetes', icon: KubernetesIcon },
  ],
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState('Backend')

  return (
    <div className="bg-white py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 flex flex-col items-center"
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900"
            viewport={{ once: true }}
          >
            Our
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900"
            viewport={{ once: true }}
          >
            Tech Stack
          </motion.h2>
        </div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
          viewport={{ once: true }}
        >
          {Object.keys(techCategories).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl place-items-center justify-center"
          viewport={{ once: true }} // Ensures animation happens only once when in view
        >
          {techCategories[activeCategory as keyof typeof techCategories].map((tech) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow w-full h-full max-w-[200px] aspect-square"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} // Ensures animation happens only once when in view
            >
              <div className="flex items-center justify-center mb-4">
                <tech.icon className="w-12 h-12 text-orange-500" />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}


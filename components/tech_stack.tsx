'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
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

// Define the technology categories and their items with icons
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

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('Backend')

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900">Our</h2>
          <h2 className="text-4xl font-bold text-gray-900">Tech Stack</h2>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(techCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl place-items-center justify-center">
          {techCategories[activeCategory as keyof typeof techCategories].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow w-full h-full max-w-[200px] aspect-square"
            >
              <div className="flex items-center justify-center mb-4">
                <tech.icon className="w-12 h-12 text-orange-500" />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


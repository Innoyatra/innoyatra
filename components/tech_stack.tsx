'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

// Define the technology categories and their items
const techCategories = {
  Backend: [
    { name: 'Node.js', logo: '/nodejs-logo.svg' },
    { name: 'PHP', logo: '/php-logo.svg' },
    { name: 'Python', logo: '/python-logo.svg' },
    { name: '.NET', logo: '/dotnet-logo.svg' },
    { name: 'Java', logo: '/java-logo.svg' },
  ],
  Frontend: [
    { name: 'React', logo: '/react-logo.svg' },
    { name: 'Angular', logo: '/angular-logo.svg' },
    { name: 'Vue', logo: '/vue-logo.svg' },
  ],
  Databases: [
    { name: 'MySQL', logo: '/mysql-logo.svg' },
    { name: 'MongoDB', logo: '/mongodb-logo.svg' },
    { name: 'PostgreSQL', logo: '/postgresql-logo.svg' },
  ],
  CMS: [
    { name: 'WordPress', logo: '/wordpress-logo.svg' },
    { name: 'Drupal', logo: '/drupal-logo.svg' },
  ],
  CloudTesting: [
    { name: 'AWS', logo: '/aws-logo.svg' },
    { name: 'Azure', logo: '/azure-logo.svg' },
  ],
  DevOps: [
    { name: 'Docker', logo: '/docker-logo.svg' },
    { name: 'Kubernetes', logo: '/kubernetes-logo.svg' },
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
              <div className="relative w-full h-1/2 flex items-center justify-center mb-4">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


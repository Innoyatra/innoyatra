'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const resources = [
  {
    image: "Rectangle1.svg",
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    href: "#"
  },
  {
    image: "Rectangle2.svg",
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    href: "#"
  },
  {
    image: "Rectangle3.svg",
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    href: "#"
  },
  {
    image: "Rectangle4.svg",
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    href: "#"
  },
  {
    image: "Rectangle5.svg",
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    href: "#"
  },
  {
    image: "Rectangle1.svg",
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    href: "#"
  }
]

export default function FeaturedResources() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-12 h-0.5 bg-[#FF4400] mx-auto mb-2" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl"
          >
            <span className="font-bold text-neutral-900">Featured</span>
            <br />
            <span className="font-normal text-neutral-900">Resources</span>
          </motion.h2>
        </div>

        {/* Resources Row */}
        <div className="flex overflow-x-auto space-x-6 mb-16 pb-4">
          {resources.map((resource, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-none w-[250px] group"
            >
              <div className="relative aspect-[3/2] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm text-neutral-900 mb-2 line-clamp-2 transition-colors group-hover:text-[#FF4400]">
                {resource.title}
              </h3>
              <Link 
                href={resource.href}
                className="inline-flex items-center text-[#FF4400] text-sm font-medium group"
              >
                <span className="transition-transform group-hover:translate-x-1">Read More</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#F8F9FC] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-6 md:mb-0 relative z-10">
            Hire the best developers and<br className="hidden md:inline" /> designers around!
          </h3>
          <div className="relative z-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF4400] hover:bg-[#FF4400]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Hire Top Developers
            </motion.button>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 right-8 transform -translate-y-1/2"
          >
            <div className="w-16 h-16 border-t-4 border-r-4 border-[#FF4400] rotate-45 opacity-20" />
          </motion.div>
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-16 h-16 border-b-4 border-l-4 border-[#FF4400] -rotate-45 opacity-20" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}


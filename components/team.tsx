'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { teamMembers } from '@/lib/constants'

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const getCurrentMembers = () => {
    const members = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamMembers.length
      members.push(teamMembers[index])
    }
    return members
  }

  const scrollTeam = (direction: number) => {
    setCurrentIndex((prev) => (prev + direction + teamMembers.length) % teamMembers.length)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5, ease: 'easeIn' } },
  }

  return (
    <section ref={sectionRef}>
      <motion.img
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
        src="/decoArrowLeft.svg"
        alt="Decorative Arrow left"
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]

        }}
        className="absolute max-sm:rotate-[10deg] !transform -top-12 -left-4 sm:left-10 lg:-top-16 lg:left-[10%] w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
        src="/decoArrowRight.svg"
        alt="Decorative Arrow left"
        transition={{
          delay: 0.5,
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="absolute max-sm:-rotate-[24deg] !transform -top-12 md:-top-10 lg:-top-14 sm:right-10 -right-4 lg:right-36 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 }}
        src="/round.svg"
        alt="Decorative Round"
        transition={{
          delay: 0.6,
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
        aria-hidden="true"
        className="w-2 sm:w-4 absolute top-32 md:top-16 left-16 md:left-[20%] lg:left-1/4 transform translate-x-1/2 hidden sm:block"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
        src="/round.svg"
        alt="Decorative Round"
        className="w-3 sm:w-6 absolute bottom-32 right-20 lg:right-1/4 transform translate-x-1/2 hidden sm:block"
        aria-hidden="true"
      />

      <div id="team-section" className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-700">
            Meet our <span className="text-orange-500">Team</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative max-w-6xl mx-auto"
        >
          <div className="flex justify-center items-center gap-8">
            <AnimatePresence mode="popLayout">
              {getCurrentMembers().map((member, index) => (
                <motion.div
                  key={member.name}
                  className={`flex-shrink-0 text-center ${index === 1 ? 'w-80 mb-32' : 'w-64'}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="relative mx-auto mb-6">
                    <div
                      className={`
                          absolute -top-12 -left-12 -right-12 -bottom-12 rounded-full blur-lg bg-orange-500/10
                          ${index === 1 ? 'opacity-100' : 'opacity-0'}
                        `}
                    />
                    <div
                      className={`
                          relative rounded-full border-4 border-orange-500 mx-auto overflow-hidden
                          ${index === 1 ? 'aspect-square' : 'w-48 h-48'}
                        `}
                    >
                      <Image
                        src={member.image}
                        alt={`Team member ${member.name}`}
                        width={index === 1 ? 256 : 192}
                        height={index === 1 ? 256 : 192}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 px-4 text-sm">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4">
            <motion.button
              onClick={() => scrollTeam(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 transition-colors"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scrollTeam(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              aria-label="Next team member"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


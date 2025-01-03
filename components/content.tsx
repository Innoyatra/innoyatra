"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

import { pageContents } from "@/lib/constants"

interface ContentProps {
  currentContent: typeof pageContents[number]
  nextPage: () => void
  prevPage: () => void
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const ContentSection = ({
  currentContent,
  nextPage,
  prevPage
}: ContentProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="w-full overflow-hidden"
    >
      <div className="grid grid-cols-1 bg-white lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-16 sm:mt-24 lg:mt-32 px-4 md:px-8 lg:px-16">
        <motion.div
          variants={fadeInUp}
          className="space-y-6 lg:space-y-8 mx-4 md:mx-8 lg:ml-32"
        >
          <div className="w-16 h-1 bg-orange-500" />
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-medium space-y-2 lg:space-y-3"
          >
            <div className="text-gray-800">{currentContent.leadingCompanies.title}</div>
            <div className="font-bold">{currentContent.leadingCompanies.subtitle}</div>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 leading-relaxed text-base md:text-lg lg:mr-16"
            dangerouslySetInnerHTML={{ __html: currentContent.leadingCompanies.description }}
          />
          <motion.div
            variants={fadeInUp}
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            <Link
              href="#"
              className="inline-flex items-center text-orange-500 hover:opacity-90 transition-all text-lg duration-300 group"
            >
              {currentContent.leadingCompanies.linkText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          className="mx-4 md:mx-8 lg:mr-32 mt-8 lg:mt-32 relative aspect-video"
        >
          <div className="relative w-full h-full">
            <Image
              src="/Ellipse181.svg"
              alt="Decorative circle"
              width={80}
              height={80}
              className="absolute -top-10 -left-10 w-16 md:w-20 lg:w-[80px] h-auto hidden md:block"
            />
            <Image
              src="/Ellipse181.svg"
              alt="Decorative circle"
              width={80}
              height={80}
              className="absolute -bottom-10 -right-10 w-16 md:w-20 lg:w-[80px] h-auto hidden md:block"
            />
            <Image
              src={currentContent.leadingCompanies.image}
              alt="Team working together"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            />
            <motion.button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-3 md:p-4 lg:p-5 hover:bg-orange-600 transition-colors z-20"
            >
              <Play className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" fill="white" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        className="bg-white mb-2 lg:mb-6 mt-16 px-4 md:px-8 lg:px-16"
      >
        <div className="w-16 h-1 bg-orange-500 mb-6 lg:mb-8 mx-4 md:mx-8 lg:ml-32" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <motion.div
            variants={fadeInUp}
            className="space-y-2 lg:space-y-3 mx-4 md:mx-8 lg:ml-32 mb-8 md:mb-0"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-gray-800">
              {currentContent.meetPeople.title}
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl pb-6 lg:pb-10 font-bold">
              {currentContent.meetPeople.subtitle}
            </h2>
          </motion.div>

          <div className="flex gap-4 lg:gap-6 items-center mx-4 md:mx-8 lg:mr-32">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevPage}
              className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-orange-500 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6 rotate-180 text-orange-500" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextPage}
              className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-500/90 transition-colors"
            >
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ContentSection

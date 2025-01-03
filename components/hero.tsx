"use client"

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const textItem = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const buttonVariant = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto md:w-[80dvw] px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center justify-between py-12 sm:py-16 lg:py-20 gap-8 lg:gap-12"
        >
          <motion.div
            className="w-full lg:w-1/2 max-w-xl text-center lg:text-left z-10"
          >
            <motion.div variants={textItem}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                <span className="text-gray-700">Great </span>
                <span className="text-orange-500">Products</span>
                <span className="text-gray-700"> are</span>
                <br />
                <span className="text-black">built by great</span>
                <br />
                <span className="text-orange-500">teams</span>
              </h1>
            </motion.div>

            <motion.p
              variants={textItem}
              className="text-gray-600 text-lg sm:text-xl mt-6 mb-8"
            >
              We help build and manage high-performing teams for your product development needs.
            </motion.p>

            <motion.div variants={buttonVariant}>
              <Link
                href="/"
                className="inline-block rounded-lg bg-orange-500 hover:bg-orange-600 transition-all duration-300 ease-out hover:translate-y-[-2px] hover:shadow-lg text-white px-8 sm:px-10 py-3 text-lg font-semibold"
              >
                Let&apos;s get started!
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariant}
            className="w-full lg:w-1/2 relative"
          >
            {!isMounted ? (
              <Skeleton className="w-full h-[450px] rounded-lg" />
            ) : (
              <Image
                src="/web-development.svg"
                alt="Team collaboration"
                width={600}
                height={600}
                priority
                className="w-full h-auto max-w-[600px] mx-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            )}
          </motion.div>
        </motion.div>
      </div>

      {isMounted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="absolute bottom-0 left-1/4 transform -translate-x-1/2 hidden sm:block"
        >
          <Image
            src="/Ellipse182.svg"
            alt=""
            width={80}
            height={80}
            className="w-16 sm:w-20"
            aria-hidden="true"
          />
        </motion.div>
      )}
    </div>
  )
}

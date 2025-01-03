'use client'
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from "next/image"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { testimonials } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  image: string
  name: string
  role: string
  rating: number
  isActive: boolean
  onClick: () => void
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(
          "h-4 w-4",
          i < rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"
        )}
      />
    ))}
  </div>
)

const TestimonialCard = ({
  image,
  name,
  role,
  rating,
  isActive,
  onClick,
}: TestimonialCardProps) => (
  <motion.div
    className={cn(
      "flex flex-col items-center cursor-pointer px-4",
      "transition-all duration-300",
      isActive ? "opacity-100 md:scale-110 z-10" : "opacity-50 scale-100 z-0"
    )}
    onClick={onClick}
    whileHover={{ scale: isActive ? 1.1 : 1.05 }}
    layout
  >
    <motion.div
      className="mb-4 h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full"
      layoutId={`image-${name}`}
    >
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="h-full w-full object-cover"
      />
    </motion.div>
    <StarRating rating={rating} />
    <h3 className="mt-2 text-sm font-medium text-gray-900">{name}</h3>
    <p className="text-xs text-gray-500">{role}</p>
  </motion.div>
)

const NavigationButton = ({
  direction,
  onClick,
}: {
  direction: 'left' | 'right'
  onClick: () => void
}) => (
  <motion.button
    onClick={onClick}
    className={cn(
      "absolute z-20 rounded-full bg-orange-500 p-2 shadow-lg hover:bg-orange-600",
      "transition-colors hidden lg:block",
      direction === 'left' ? "left-4 lg:left-20 xl:left-40" : "right-4 lg:right-20 xl:right-40"
    )}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} testimonial`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="h-6 w-6 text-white" />
    ) : (
      <ChevronRight className="h-6 w-6 text-white" />
    )}
  </motion.button>
)

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start("visible")
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [controls])

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-8 md:py-16">
      <motion.div
        className="mx-auto px-4"
        initial="hidden"
        animate={controls}
        variants={animationVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.div
            className="mx-auto mb-4 h-1 w-16 bg-orange-500"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h2
            className="text-2xl md:text-3xl font-medium text-gray-900"
            initial="hidden"
            animate={controls}
            variants={animationVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-bold">Why customers love</span>
            <span className="block mt-1">working with us</span>
          </motion.h2>
        </div>

        <div className="mt-8 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="text-center mb-8 md:mb-16"
              initial="hidden"
              animate={controls}
              variants={animationVariants}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600">
                {testimonials[currentIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="relative">
            <div className="overflow-visible relative flex justify-center items-center">
              <NavigationButton direction="left" onClick={prev} />

              <div className="flex gap-4 md:gap-8 overflow-x-auto lg:overflow-visible px-4 py-4 md:py-0 scrollbar-hide">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    {...testimonial}
                    isActive={index === currentIndex}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <NavigationButton direction="right" onClick={next} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}


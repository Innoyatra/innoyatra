'use client'

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from "next/image"

const testimonials = [
  {
    image: "https://i.pravatar.cc/150?img=1",
    name: "Romeena De Silva",
    role: "Software Engineer",
    rating: 5,
    text: "Without any doubt I recommend Alkaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else."
  },
  {
    image: "https://i.pravatar.cc/150?img=2",
    name: "Sarah Johnson",
    role: "Web Developer",
    rating: 5,
    text: "The team's expertise and dedication to our project was exceptional. They delivered a website that exceeded our expectations in both design and functionality."
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    name: "Imran Khan",
    role: "Software Engineer",
    rating: 5,
    text: "Working with this team has been an absolute pleasure. Their attention to detail and innovative solutions have transformed our online presence completely."
  },
  {
    image: "https://i.pravatar.cc/150?img=4",
    name: "Michael Chen",
    role: "Product Manager",
    rating: 5,
    text: "Outstanding service from start to finish. The team's communication was excellent, and they delivered our project on time and within budget."
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    name: "Emma Wilson",
    role: "Marketing Director",
    rating: 5,
    text: "Their creative approach and technical expertise made our website stand out. I highly recommend their services to anyone looking for top-quality web development."
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ image, name, role, rating, isActive, onClick }: {
  image: string
  name: string
  role: string
  rating: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <div 
      className={`flex flex-col items-center transition-all duration-300 cursor-pointer ${
        isActive ? 'opacity-100 scale-110 z-10' : 'opacity-50 scale-100 z-0'
      }`}
      onClick={onClick}
    >
      <div className="mb-4 h-20 w-20 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="h-full w-full object-cover"
        />
      </div>
      <StarRating rating={rating} />
      <h3 className="mt-2 text-sm font-medium text-gray-900">{name}</h3>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative overflow-hidden bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 h-1 w-16 bg-orange-500" />
          <h2 className="text-3xl font-medium text-gray-900">
            <span className="font-bold">Why customers love</span>
            <span className="block mt-1">working with us</span>
          </h2>
        </div>

        <div className="mt-16">
          <div className="text-center mb-16">
            <p className="max-w-2xl mx-auto text-gray-600 transition-opacity duration-300">
              {testimonials[currentIndex].text}
            </p>
          </div>

          <div className="relative">
            {/* Testimonials */}
            <div className="overflow-visible px-4 relative flex justify-center items-center">
              <button
                onClick={prev}
                className="absolute left-12 z-20 rounded-full bg-orange-500 p-2 shadow-lg hover:bg-orange-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <div className="flex gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={index}
                    {...testimonial} 
                    isActive={index === currentIndex}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="absolute right-12 z-20 rounded-full bg-orange-500 p-2 shadow-lg hover:bg-orange-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

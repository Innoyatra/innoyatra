"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { pageContents, services } from "@/lib/constants"
import ContentSection from "./content"

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

export function ServicesSection() {
  const [current, setCurrent] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [currentPage, setCurrentPage] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageContents.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageContents.length) % pageContents.length)
  }

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  useEffect(() => {
    if (!api || !autoPlay) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const handleMouseEnter = () => setAutoPlay(false)
  const handleMouseLeave = () => setAutoPlay(true)

  const currentContent = pageContents[currentPage]

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-16 bg-[#F9F9FF] border-t-2 shadow-md"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl text-gray-700 font-bold text-center mb-12"
        >
          Services we offer
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="relative w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="basis-5/6 h-min md:h-auto md:basis-1/2 lg:basis-1/3 pb-20">
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card
                      className={cn(
                        "p-6 h-full bg-white md:mx-4 transition-all transform duration-75",
                        current === index
                          ? "border-orange-500 border-2 translate-y-11"
                          : "border-gray-100"
                      )}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                          current === index ? "border-orange-500 border-2" : "border-gray-300 border-2"
                        )}
                      >
                        {service.icon}
                      </motion.div>
                      <h3
                        className={cn(
                          "text-xl font-semibold mb-2 text-gray-700",
                          current === index ? "text-orange-500" : ""
                        )}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-700">{service.description}</p>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex flex-col items-center mt-8">
              <div className="hidden md:flex gap-2 justify-center mb-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "w-3 h-3 rounded-full border-2",
                      current === index ? "bg-orange-500 border-none scale-150" : "border-gray-300 scale-125"
                    )}
                  />
                ))}
              </div>
              <div className="text-sm font-medium absolute bottom-4 right-12 flex items-center gap-2">
                <span>
                  {String(current + 1).padStart(2, '0')}
                </span>
                <div className="relative w-28 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-orange-500 transition-all duration-300"
                    style={{
                      width: `${((current + 1) / services.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <span>
                  {String(services.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </Carousel>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="ml-40 relative"
      >
        <Image
          src="HalfEclipse.svg"
          alt="Decorative circle"
          width={80}
          height={80}
          className="absolute -left-10"
        />
      </motion.div>

      <ContentSection currentContent={currentContent} nextPage={nextPage} prevPage={prevPage} />
    </>
  )
}

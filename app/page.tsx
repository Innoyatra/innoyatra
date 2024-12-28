'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Rocket, Shield, CheckSquare, Share2, TestTube2, ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from "@/components/navbar"
import ServicesSection from "@/components/services"
import Testimonials from "@/components/testimonials"

const developmentApproaches = [
  {
    icon: <Rocket className="w-8 h-8 text-rose-500" />,
    title: "UX Driven Engineering",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
  },
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: "Developing Shared Understanding",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
  },
  {
    icon: <Share2 className="w-8 h-8 text-pink-500" />,
    title: "Proven Experience and Expertise",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
  },
  {
    icon: <Shield className="w-8 h-8 text-emerald-500" />,
    title: "Security & Intellectual Property (IP)",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
  },
  {
    icon: <CheckSquare className="w-8 h-8 text-amber-500" />,
    title: "Code Reviews",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
  },
  {
    icon: <TestTube2 className="w-8 h-8 text-purple-500" />,
    title: "Quality Assurance & Testing",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
  }
]

const teamMembers = [
  {
    name: "Dr Lokesh MR",
    role: "Mentor",
    image: "/lokesh 1.svg",
    description: "At PRS, we understand that finding the right job can be challenging. That's why we offer a range of services designed to support."
  },
  {
    name: "Durgesh AP",
    role: "Member",
    image: "/durgesh.svg",
    description: "John is a highly experienced career coach with a proven track record of helping clients achieve their goals."
  },
  {
    name: "Kishan Bhandary",
    role: "Member",
    image: "/kishan1.svg",
    description: "At PRS, we understand that finding the right job can be challenging. That's why we offer a range of services designed to support."
  },
  {
    name: "Lavanya",
    role: "Member",
    image: "/lavanya.svg",
    description: "Bridging business needs with technical solutions, Emily shapes our product strategy and roadmap."
  },
  {
    name: "Keerthana",
    role: "Member",
    image: "/keer.svg",
    description: "Leading our technical initiatives with 10+ years in software architecture and cloud solutions."
  },
  {
    name: "Krithi",
    role: "Member",
    image: "/krithi.svg",
    description: "Award-winning designer with a passion for creating intuitive and engaging user experiences."
  },
  {
    name: "Neekshith",
    role: "Member",
    image: "/neekshith.svg",
    description: "Full-stack expert specializing in React and Node.js, driving our technical excellence forward."
  },
  {
    name: "Muaz Ismail ",
    role: "Member",
    image: "/muazz.svg",
    description: "Bridging business needs with technical solutions, Emily shapes our product strategy and roadmap."
  },
  {
    name: "Shaman Krishna K",
    role: "Member",
    image: "/shaman.svg",
    description: "Automation expert ensuring smooth deployment pipelines and robust infrastructure."
  },
  {
    name: "Dhyan P Amin",
    role: "Member",
    image: "/dhyan.svg",
    description: "Automation expert ensuring smooth deployment pipelines and robust infrastructure."
  }, {
    name: "Anirudh Rao",
    role: "Member",
    image: "/anirudh.svg",
    description: "Automation expert ensuring smooth deployment pipelines and robust infrastructure."
  },

  {
    name: "Kaushal G ",
    role: "Member",
    image: "/kaushal.svg",
    description: "Ensuring top-notch quality through comprehensive testing strategies and automation."
  }
  

]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalPages, setTotalPages] = useState(Math.ceil((teamMembers.length - 2) / 1))
  const [currentPage, setCurrentPage] = useState(1)

  const getCurrentMembers = () => {
    const members = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamMembers.length
      members.push(teamMembers[index])
    }
    return members
  }

  const scrollTeam = (direction: number) => {
    const newIndex = (currentIndex + direction + teamMembers.length) % teamMembers.length
    setCurrentIndex(newIndex)
    
    const newPage = currentPage + direction
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-10 lg:py-20 px-4">
            <div className="max-w-lg z-10 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-gray-700">Great </span>
                <span className="text-orange-500">Products</span>
                <span className="text-gray-700"> are</span>
              </h1>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-black">built by great</span>
              </h1>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-orange-500">teams</span>
              </h1>
              <p className="text-gray-600 mt-6 mb-8 px-4 lg:px-0">
                We help build and manage high-performing teams for your product development needs.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <Link href="/">
                <button className="rounded-lg bg-orange-500 hover:bg-orange-600 text-white px-8 lg:px-10 py-3 text-lg font-semibold transition-colors">
                  Let&apos;s get started!
                </button>
              </Link>
            </div>
            <div className="hidden lg:block relative mt-10 lg:mt-0">
              <Image
                src="/web-development.svg"
                alt="Team collaboration"
                width={600}
                height={600}
                className="max-h-[calc(100vh-200px)] w-auto"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2">
            <Image
              src="/Ellipse182.svg"
              alt="Decorative element"
              width={80}
              height={80}
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* Companies Section */}
        <section id="companies"></section>

        {/* Testimonials Section */}
        <section id="testimonial">
          <Testimonials />
        </section>

        {/* Team Section */}
        <section id="team" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">
                Meet our <span className="text-orange-500">Team</span>
              </h2>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="flex justify-center items-center gap-8 transition-all duration-300">
                {getCurrentMembers().map((member, index) => (
                  <div 
                    key={`${member.name}-${index}`}
                    className={`flex-shrink-0 text-center transition-all duration-300 ${
                      index === 1 ? 'w-80' : 'w-64'
                    }`}
                  >
                    <div className="relative mx-auto mb-6">
                      <div className={`
                        rounded-full border-4 border-orange-500 mx-auto overflow-hidden
                        ${index === 1 ? 'w-64 h-64' : 'w-48 h-48'}
                        transition-all duration-300
                      `}>
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
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center mt-12 gap-4">
                <button
                  onClick={() => scrollTeam(-1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 transition-colors"
                  aria-label="Previous team member"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollTeam(1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                  aria-label="Next team member"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog"></section>

        {/* Development Approach Section */}
        <section id="dev" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900">Our design and</h2>
              <h2 className="text-4xl font-bold text-gray-900">Development Approach</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {developmentApproaches.map((approach, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="flex flex-col sm:flex-row items-start gap-4 p-6">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {approach.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{approach.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack"></section>

        {/* Features Section */}
        <section id="features"></section>
      </main>
    </div>
  )
}


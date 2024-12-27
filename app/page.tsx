import Image from 'next/image'
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import { Code, Rocket, Shield, CheckSquare, Share2, TestTube2 } from 'lucide-react'
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services";
import TechStack from '@/components/tech_stack';
import DevelopmentProcess from '@/components/DevelopmentProcess';
//import { useState } from "react";

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

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="container mx-auto flex items-center justify-between py-20">
            <div className="max-w-lg z-10">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-gray-700">Great </span>
                <span className="text-orange-500">Products</span>
                <span className="text-gray-700"> are</span>
              </h1>
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-black">built by great</span>
              </h1>
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-orange-500">teams</span>
              </h1>
              <p className="text-gray-600 mt-6 mb-8">
                We help build and manage high-performing teams for your product development needs.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <Link href="/">
                <button className="rounded-lg bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 text-lg font-semibold">
                  Let&apos;s get started!
                </button>
              </Link>
            </div>
            <div className="hidden lg:block relative">
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
        <section id="services">
          <ServicesSection />

        </section>
        <section id="companies"></section>
        <section id="testimonial"></section>
        <section id="team"></section>
        <section id="blog"></section>
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
                  <CardContent className="flex items-start gap-4 p-6">
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
        <section id="tech-stack">
        <TechStack /> 
        </section>
        <section id="development-process">
        <DevelopmentProcess />
      </section>
        <section id="features"></section>
      </main>
    </div>
  );
}


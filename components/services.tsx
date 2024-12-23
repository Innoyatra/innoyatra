"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Code, Laptop, Database, Shield, Cloud, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface Service {
    icon: React.ReactNode
    title: string
    description: string
}

const services: Service[] = [
    {
        icon: <Code className="h-6 w-6 text-primary" />,
        title: "Web Design & Development",
        description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
        icon: <Laptop className="h-6 w-6 text-primary" />,
        title: "Software Testing",
        description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
        icon: <Database className="h-6 w-6 text-primary" />,
        title: "Database Management",
        description: "Optimize, secure, and maintain your databases to ensure the efficient handling of your business data.",
    },
    {
        icon: <Shield className="h-6 w-6 text-primary" />,
        title: "Cybersecurity Services",
        description: "Protect your systems and data with advanced cybersecurity measures to safeguard against digital threats.",
    },
    {
        icon: <Cloud className="h-6 w-6 text-primary" />,
        title: "Cloud Computing",
        description: "Migrate and manage your business applications in the cloud to enhance scalability and efficiency.",
    },
]

const pageContents = [
    {
        leadingCompanies: {
            title: "Leading companies trust us",
            subtitle: "to develop software",
            description: "We <span class=\"text-orange-500\">add development capacity</span> to tech teams. Our value isn't limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.",
            linkText: "See more Informations",
            image: "/Abou-us-Video.svg"
        },
        meetPeople: {
            title: "Meet the People",
            subtitle: "We are Working With"
        }
    },
    {
        leadingCompanies: {
            title: "Innovative solutions",
            subtitle: "for modern businesses",
            description: "Our team of experts delivers <span class=\"text-orange-500\">cutting-edge technology</span> solutions. We focus on creating scalable and efficient software that drives business growth and enhances user experiences.",
            linkText: "Explore our solutions",
            image: "/Abou-us-Video.svg"
        },
        meetPeople: {
            title: "Our Expert Team",
            subtitle: "Driving Your Success"
        }
    },
    {
        leadingCompanies: {
            title: "Transforming ideas",
            subtitle: "into digital reality",
            description: "We specialize in <span class=\"text-orange-500\">turning concepts into functional software</span>. Our agile development process ensures that your vision is realized efficiently, with regular updates and flexibility to adapt to changing needs.",
            linkText: "Start your project",
            image: "/Abou-us-Video.svg"
        },
        meetPeople: {
            title: "Collaborative Approach",
            subtitle: "Building Together"
        }
    }
]

export default function ServicesSection() {
    const [current, setCurrent] = React.useState(0)
    const [api, setApi] = React.useState<CarouselApi>()
    const [currentPage, setCurrentPage] = React.useState(0)

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % pageContents.length)
    }

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + pageContents.length) % pageContents.length)
    }

    React.useEffect(() => {
        if (!api) return

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])


    const currentContent = pageContents[currentPage]

    return (
        <section id="services" className="bg-white relative font-inter">
            <div className="relative py-16 bg-[#F9F9FF] border-t-2 shadow-md">
                <h2 className="text-3xl text-gray-700 font-bold text-center mb-12">Services we offer</h2>

                <div className="relative w-full">
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        className="w-full"
                        setApi={setApi}
                    >
                        <CarouselContent>
                            {services.map((service, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pb-20">
                                    <Card
                                        className={cn(
                                            "p-6 h-full bg-white mx-4 transition-all transform",
                                            current === index
                                                ? "border-orange-500 border-2 translate-y-11 "
                                                : "border-gray-100"
                                        )}
                                    >
                                        <div
                                            id="orange-circle-border"
                                            className={cn(
                                                "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                                                current === index ? "border-orange-500 border-2" : "border-gray-300 border-2"
                                            )}
                                        >
                                            {service.icon}
                                        </div>
                                        <h3
                                            id="orange-title-text"
                                            className={cn(
                                                "text-xl font-semibold mb-2 text-gray-700",
                                                current === index ? "text-orange-500" : ""
                                            )}
                                        >
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-700">{service.description}</p>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex flex-col items-center mt-8">
                            <div className="flex gap-2 justify-center mb-4">
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
                </div>
            </div>

            <div className="ml-40 relative">
                <Image
                    src="HalfEclipse.svg"
                    alt="Decorative circle"
                    width={80}
                    height={80}
                    className="absolute -left-10"
                />
            </div>

            <div>
                {/* Leading Companies Section */}
                <div className="grid grid-cols-1 bg-white lg:grid-cols-2 gap-16 items-center mt-32">
                    <div className="ml-32 space-y-8">
                        <div className="w-16 h-1 bg-orange-500" />
                        <h2 className="text-5xl font-medium space-y-3">
                            <div>{currentContent.leadingCompanies.title}</div>
                            <div className="font-bold">{currentContent.leadingCompanies.subtitle}</div>
                        </h2>
                        <p
                            className="text-gray-600 leading-relaxed text-lg mr-16"
                            dangerouslySetInnerHTML={{ __html: currentContent.leadingCompanies.description }}
                        />
                        <Link
                            href="#"
                            className="inline-flex items-center text-orange-500 hover:opacity-90 transition-opacity text-lg duration-300"
                        >
                            {currentContent.leadingCompanies.linkText}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                    <div className="mr-32 mt-32 relative aspect-video">
                        <Image
                            src="/Ellipse181.svg"
                            alt="Decorative circle"
                            width={80}
                            height={80}
                            className="absolute -top-10 -left-10"
                        />
                        <Image
                            src="/Ellipse181.svg"
                            alt="Decorative circle"
                            width={80}
                            height={80}
                            className="absolute -bottom-10 -right-10"
                        />
                        <Image
                            src={currentContent.leadingCompanies.image}
                            alt="Team working together"
                            fill
                            className="object-cover rounded-2xl"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-5 hover:bg-orange-600 transition-colors z-20">
                            <Play className="h-8 w-8 text-white" fill="white" />
                        </button>
                    </div>
                </div>

                {/* Meet the People Section */}
                <div className="bg-white ml-32 mb-32 mt-32">
                    <div className="w-16 h-1 bg-orange-500 mb-8" />
                    <div className="bg-white space-y-3 mb-12">
                        <h3 className="text-5xl">{currentContent.meetPeople.title}</h3>
                        <h2 className="text-5xl font-bold">{currentContent.meetPeople.subtitle}</h2>
                    </div>
                    <div className="flex justify-end gap-6 mt-12 mr-28">
                        <button onClick={prevPage} className="h-14 w-14 rounded-full border-2 border-orange-500 flex items-center justify-center hover:bg-gray-100 transition-colors">
                            <ArrowRight className="h-6 w-6 rotate-180 text-orange-500" />
                        </button>
                        <button onClick={nextPage} className="h-14 w-14 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-500/90 transition-colors">
                            <ArrowRight className="h-6 w-6 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

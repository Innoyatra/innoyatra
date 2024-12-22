"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Code, Laptop, Database, Shield, Cloud } from "lucide-react";
import { cn } from "@/lib/utils"

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

export default function ServicesSection() {
    const [current, setCurrent] = React.useState(0)
    const [api, setApi] = React.useState<CarouselApi>()

    React.useEffect(() => {
        if (!api) return

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <section id="services" className="relative py-16 bg-[#F9F9FF] font-inter shadow-md border-t-2">
            <h2 className="text-3xl font-bold text-center mb-12">Services we offer</h2>

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
        </section>
    )
}

"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Smartphone, Code, TestTube, Laptop, ShoppingCart, Database, Shield, BarChart, Cloud, Brush, Mic, PieChart } from "lucide-react";
import { cn } from "@/lib/utils"

interface Service {
    icon: React.ReactNode
    title: string
    description: string
}

const services: Service[] = [
    {
        icon: <Smartphone className="h-6 w-6 text-primary" />,
        title: "Mobile App Development",
        description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
        icon: <Code className="h-6 w-6 text-primary" />,
        title: "Web Design & Development",
        description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
        icon: <TestTube className="h-6 w-6 text-primary" />,
        title: "Software Testing Service",
        description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
        icon: <Laptop className="h-6 w-6 text-primary" />,
        title: "Software Testing",
        description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
        icon: <ShoppingCart className="h-6 w-6 text-primary" />,
        title: "E-commerce Solutions",
        description: "Build seamless online shopping experiences with customizable e-commerce platforms tailored to your business needs.",
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
        icon: <BarChart className="h-6 w-6 text-primary" />,
        title: "Data Analytics & Insights",
        description: "Transform raw data into actionable insights to drive informed decision-making for your business.",
    },
    {
        icon: <Cloud className="h-6 w-6 text-primary" />,
        title: "Cloud Computing",
        description: "Migrate and manage your business applications in the cloud to enhance scalability and efficiency.",
    },
    {
        icon: <Brush className="h-6 w-6 text-primary" />,
        title: "Graphic Design",
        description: "Create visually stunning and engaging designs to elevate your brand's identity and marketing materials.",
    },
    {
        icon: <Mic className="h-6 w-6 text-primary" />,
        title: "Voice Assistant Integration",
        description: "Develop solutions that integrate seamlessly with voice assistants like Alexa and Google Assistant.",
    },
    {
        icon: <PieChart className="h-6 w-6 text-primary" />,
        title: "Market Research",
        description: "Gain insights into your target audience and market trends to stay ahead in the competition.",
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
        <section id="services" className="container py-24 mx-auto max-w-7xl font-inter">
            <h2 className="text-3xl font-bold text-center mb-12">Services we offer</h2>

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
                                    "p-6 h-full bg-white transition-all transform",
                                    current === index
                                        ? "border-orange-500 border-2 translate-y-11 "
                                        : "border-gray-100"
                                )}
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h3
                                    id="orange-title-text"
                                    className={cn(
                                        "text-xl font-semibold mb-2",
                                        current === index ? "text-orange-500" : ""
                                    )}
                                >
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground">{service.description}</p>
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
                    <div className="text-sm text-muted-foreground absolute bottom-4 right-4">
                        {String(current + 1).padStart(2, '0')} — {String(services.length).padStart(2, '0')}
                    </div>
                </div>
            </Carousel>
        </section>
    )
}

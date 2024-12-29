import { ReactNode } from 'react'
import {
  Code,
  Rocket,
  Shield,
  CheckSquare,
  Share2,
  TestTube2,
  Laptop,
  Database,
  Cloud
} from 'lucide-react'

export interface Service {
  icon: ReactNode
  title: string
  description: string
}

export const services: Service[] = [
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

export const pageContents = [
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

export const developmentApproaches = [
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

export const testimonials = [
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

export const teamMembers = [
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

import { BlogPage } from "@/components/blog";
import { Development } from "@/components/development";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import { FeaturedResources } from "@/components/featured-resources";
import { TechStack } from '@/components/tech-stack';
import { DevelopmentProcess } from '@/components/development-process';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen overflow-hidden">
      <section id="hero" className="relative overflow-hidden">
        <Hero />
      </section>

      <section id="services" className="bg-white relative font-inter">
        <ServicesSection />
      </section>

      {/*<section id="companies"></section>*/}

      <section id="testimonial">
        <Testimonials />
      </section>

      <section id="team" className="py-10 lg:py-20 relative">
        <Team />
      </section>

      <section id="blog">
        <BlogPage />
      </section>

      <section id="dev" className="bg-gray-50">
        <Development />
      </section>

      <section id="tech-stack">
        <TechStack />
      </section>

      <section id="development-process">
        <DevelopmentProcess />
      </section>

      <section id="featured-resources" className="bg-white">
        <FeaturedResources />
      </section>
    </main>
  )
}


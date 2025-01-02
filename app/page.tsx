import { BlogPage } from "@/components/blog";
import { Development } from "@/components/development";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import FeaturedResources from "@/components/featured-resources";
import TechStack from '@/components/tech_stack';
import DevelopmentProcess from '@/components/DevelopmentProcess';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header>
        <Navbar />
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden">
          <Hero />
        </section>

        <section id="services" className="bg-white relative font-inter">
          <ServicesSection />
        </section>

        <section id="companies"></section>

        <section id="testimonial">
          <Testimonials />
        </section>

        <section id="team" className="py-20">
          <Team />
        </section>

        <section id="blog">
          <BlogPage />
        </section>

        <section id="dev" className="py-20 bg-gray-50">
          <Development />
        </section>
        <section id="featured-resources" className="py-20 bg-white">
          <FeaturedResources />
        </section>
        <section id="tech-stack">
          <TechStack />
        </section>
        <section id="development-process">
          <DevelopmentProcess />
        </section>
        <section id="features"></section>
      </main>
      <footer>
      </footer>
    </div>
  )
}


import { Development } from "@/components/development";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

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

        <section id="services">
          <ServicesSection />
        </section>

        <section id="companies"></section>

        <section id="testimonial">
          <Testimonials />
        </section>

        <section id="team"></section>

        <section id="blog"></section>

        <section id="dev" className="py-20 bg-gray-50">
          <Development />
        </section>

        <section id="tech-stack"></section>

        <section id="features"></section>
      </main>

      <footer>
      </footer>
    </div>
  );
}


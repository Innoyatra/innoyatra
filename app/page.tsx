import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services"

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section id="hero"></section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="companies"></section>
        <section id="testimonial"></section>
        <section id="team"></section>
        <section id="blog"></section>
        <section id="dev"></section>
        <section id="tech-stack"></section>
        <section id="features"></section>
      </main>
    </div>
  );
}

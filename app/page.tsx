import Navbar from "@/components/navbar";
import Image from 'next/image'
import Link from "next/link";

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
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <Image
              src="/round.svg"
              alt="Decorative element"
              width={50}
              height={50}
            />
          </div>
        </section>
        <section id="companies"></section>
        <section id="testimonial"></section>
        <section id="team"></section>
        <section id="blog"></section>
        <section id="dev">

        </section>
        <section id="tech-stack"></section>
        <section id="features"></section>
      </main>
    </div>
  );
}


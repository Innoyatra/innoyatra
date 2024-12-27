import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-12 space-y-24">
      {/* Header Section */}
      <div className="text-center mb-24">
        <div className="w-12 h-1 bg-orange-500 mx-auto mb-6" />
        <h2 className="text-gray-600 text-4xl mb-2">Way of building</h2> {/* Increased font size */}
        <h1 className="text-4xl font-bold text-gray-800">Great Software</h1>
      </div>

      {/* First Section */}
      <section className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-gray-800">Build the right team to scale</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with
            you long term (not the case with freelancers).
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Our <span className="text-orange-500 font-medium">delivery model</span> helps you cut costs and deliver within budget.
          </p>
          <div className="relative pl-6 py-4">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-orange-500" />
            <p className="text-lg italic text-gray-500">
              "Senform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
            </p>
          </div>
          <Link href="/ceo-profile">
            <button className="flex items-center gap-4 pt-4 transition-transform hover:scale-105">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-lg font-medium text-gray-800">Jelena Markram</p>
                <p className="text-gray-500">CEO</p>
              </div>
            </button>
          </Link>
        </div>
        <div className="relative">
          {/* Orange circles around first image */}
          <div className="absolute -z-10 w-8 h-8 bg-orange-500/40 rounded-full -top-4 -right-4" />
          <div className="absolute -z-10 w-12 h-12 bg-orange-500/40 rounded-full -bottom-6 -right-6" />
          <Image
            src="/placeholder.svg"
            alt="Team working at computers"
            width={600}
            height={400}
            className="rounded-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Second Section */}
      <section className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="relative">
          {/* Orange circles around second image */}
          <div className="absolute -z-10 w-8 h-8 bg-orange-500/40 rounded-full -top-4 -left-4" />
          <div className="absolute -z-10 w-12 h-12 bg-orange-500/40 rounded-full -bottom-6 -left-6" />
          <Image
            src="/placeholder.svg"
            alt="Team meeting with whiteboard"
            width={600}
            height={400}
            className="rounded-lg w-full object-cover"
          />
        </div>
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-gray-800">Build the right team to scale</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with
            you long term (not the case with freelancers).
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Our <span className="text-orange-500 font-medium">delivery model</span> helps you cut costs and deliver within budget.
          </p>
          <div className="relative pl-6 py-4">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-orange-500" />
            <p className="text-lg italic text-gray-500">
              "Senform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
            </p>
          </div>
          <button className="flex items-center gap-4 pt-4 transition-transform hover:scale-105">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-lg font-medium text-gray-800">Jelena Markram</p>
              <p className="text-gray-500">CEO</p>
            </div>
          </button>
        </div>
      </section>

      {/* Third Section */}
      <section className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-gray-800">Build the right team to scale</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with
            you long term (not the case with freelancers).
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Our <span className="text-orange-500 font-medium">delivery model</span> helps you cut costs and deliver within budget.
          </p>
          <div className="relative pl-6 py-4">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-orange-500" />
            <p className="text-lg italic text-gray-500">
              "Senform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
            </p>
          </div>
          <button className="flex items-center gap-4 pt-4 transition-transform hover:scale-105">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-lg font-medium text-gray-800">Jelena Markram</p>
              <p className="text-gray-500">CEO</p>
            </div>
          </button>
        </div>
        <div className="relative">
          {/* Orange circles around third image */}
          <div className="absolute -z-10 w-8 h-8 bg-orange-500/40 rounded-full -top-4 left-1/2 -translate-x-1/2" />
          <div className="absolute -z-10 w-12 h-12 bg-orange-500/40 rounded-full -bottom-6 -left-6" />
          <Image
            src="/placeholder.svg"
            alt="Team in a presentation"
            width={600}
            height={400}
            className="rounded-lg w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}

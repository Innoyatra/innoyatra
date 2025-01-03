"use client"

import { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ClassValue } from 'clsx';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface SectionProps {
  children: React.ReactNode
  reversed?: boolean
  className?: ClassValue
}

const Section = ({ children, reversed, className = "" }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${reversed ? "lg:grid-flow-col lg:grid-cols-2" : ""
        } ${className}`}
    >
      {children}
    </motion.section>
  );
};

interface ContentBlockProps {
  title: string
  description: string
  quote: string
  avatarSrc: string
  name: string
  role: string
}

const ContentBlock = ({ title, description, quote, avatarSrc, name, role }: ContentBlockProps) => (
  <motion.div variants={staggerContainer} className="space-y-8">
    <motion.h3
      variants={fadeInUp}
      className="text-2xl lg:text-3xl font-semibold text-gray-800"
    >
      {title}
    </motion.h3>

    <motion.div variants={fadeInUp} className="space-y-4">
      <p className="text-base lg:text-lg leading-relaxed text-gray-600">
        {description}
      </p>
      <p className="text-base lg:text-lg leading-relaxed text-gray-600">
        Our <span className="text-orange-500 font-medium">delivery model</span> helps you cut costs and deliver within budget.
      </p>
    </motion.div>

    <motion.div
      variants={fadeInUp}
      className="relative pl-6 py-4"
    >
      <div className="absolute left-0 top-0 w-1.5 h-full bg-orange-500" />
      <p className="text-base lg:text-lg italic text-gray-500">
        &ldquo;{quote}&rdquo;
      </p>
    </motion.div>

    <motion.div variants={fadeInUp}>
      <Link href="/ceo-profile" className="inline-block">
        <button className="flex items-center gap-4 pt-4 transition-all hover:scale-105 duration-300">
          <Avatar className="h-10 w-10 lg:h-12 lg:w-12">
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="text-base lg:text-lg font-medium text-gray-800">{name}</p>
            <p className="text-sm lg:text-base text-gray-500">{role}</p>
          </div>
        </button>
      </Link>
    </motion.div>
  </motion.div>
);

interface ImageBlockProps {
  src: string
  alt: string
  circlePositions: {
    position: string
    size: string
  }[]
}

const ImageBlock = ({ src, alt, circlePositions }: ImageBlockProps) => (
  <motion.div variants={fadeInUp} className="relative">
    {circlePositions.map((position, index) => (
      <motion.div
        key={index}
        className={`absolute -z-10 ${position.size} bg-orange-500/40 rounded-full ${position.position}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
    ))}
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      className="rounded-lg w-full object-cover shadow-lg"
    />
  </motion.div>
);

export function BlogPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 lg:space-y-24">
      <motion.div
        ref={headerRef}
        variants={staggerContainer}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
        className="text-center mb-16 lg:mb-24"
      >
        <motion.div
          variants={fadeInUp}
          className="w-12 h-1 bg-orange-500 mx-auto mb-6"
        />
        <motion.h2
          variants={fadeInUp}
          className="text-3xl lg:text-4xl text-gray-600 mb-2"
        >
          Way of building
        </motion.h2>
        <motion.h1
          variants={fadeInUp}
          className="text-3xl lg:text-4xl font-bold text-gray-800"
        >
          Great Software
        </motion.h1>
      </motion.div>

      <Section>
        <ContentBlock
          title="Build the right team to scale"
          description="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)."
          quote="Senform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
          avatarSrc="/placeholder.svg"
          name="Jelena Markram"
          role="CEO"
        />
        <ImageBlock
          src="/placeholder.svg"
          alt="Team working at computers"
          circlePositions={[
            { size: 'w-8 h-8', position: '-top-4 -right-4' },
            { size: 'w-12 h-12', position: '-bottom-6 -right-6' }
          ]}
        />
      </Section>

      <Section reversed>
        <ImageBlock
          src="/placeholder.svg"
          alt="Team meeting with whiteboard"
          circlePositions={[
            { size: 'w-8 h-8', position: '-top-4 -left-4' },
            { size: 'w-12 h-12', position: '-bottom-6 -left-6' }
          ]}
        />
        <ContentBlock
          title="Build the right team to scale"
          description="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)."
          quote="Senform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
          avatarSrc="/placeholder.svg"
          name="Jelena Markram"
          role="CEO"
        />
      </Section>

      <Section>
        <ContentBlock
          title="Build the right team to scale"
          description="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)."
          quote="Senform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
          avatarSrc="/placeholder.svg"
          name="Jelena Markram"
          role="CEO"
        />
        <ImageBlock
          src="/placeholder.svg"
          alt="Team in a presentation"
          circlePositions={[
            { size: 'w-8 h-8', position: '-top-4 left-1/2 -translate-x-1/2' },
            { size: 'w-12 h-12', position: '-bottom-6 -left-6' }
          ]}
        />
      </Section>
    </main>
  );
}

export default BlogPage;

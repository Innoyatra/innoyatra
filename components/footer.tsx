'use client'

import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <motion.div
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold">INNOVATRA</h2>
            <p className="text-muted-foreground">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold">Links</h2>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground">
                Services
              </Link>
              <Link href="/case-studies" className="text-muted-foreground hover:text-foreground">
                Case Studies
              </Link>
              <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground">
                How it works
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                Careers
              </Link>
              <Link href="/areas" className="text-muted-foreground hover:text-foreground">
                Areas We Serve
              </Link>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold">Contact us</h2>
            <p className="text-muted-foreground">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-muted-foreground">+923183561921</p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          © 2023 Copyright by IK Developers. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  )
}


"use client"

import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navContainer = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1
    }
  }
}

const navItem = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const logoVariant = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

export function Navbar() {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={navContainer}
      className="bg-white shadow-md font-inter"
    >
      <nav className="px-10 md:px-20 lg:px-40 mx-auto flex items-center py-5">
        <motion.div 
          variants={logoVariant}
          className="flex flex-grow-0 items-center cursor-pointer mr-8"
        >
          <Image
            src="/Logo.svg"
            alt="Innoyatra Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold text-[#374143] cursor-pointer">InnoYatra</span>
        </motion.div>
        
        <ul className="lg:flex gap-1 hidden mr-auto">
          {['home', 'services', 'team', 'blog', 'how-it-Works', 'hire'].map((item) => (
            <motion.li
              key={item}
              variants={navItem}
              whileHover={{ y: -2 }}
              className="hover:text-gray-600 font-medium cursor-pointer"
            >
              <Button variant="link">
                <Link href={item}>
                  {item === 'how-it-Works' ? 'How' : item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </Button>
            </motion.li>
          ))}
        </ul>

        <motion.div
          variants={buttonVariant}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className='hidden lg:flex items-center rounded-full bg-orange-500 hover:bg-orange-600 text-white px-7 py-2.5'>
            Contact Us
          </Button>
        </motion.div>
      </nav>
    </motion.header>
  )
}

"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { teamMembers } from '@/lib/constants'

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalPages, setTotalPages] = useState(Math.ceil((teamMembers.length - 2) / 1))
  const [currentPage, setCurrentPage] = useState(1)

  const getCurrentMembers = () => {
    const members = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamMembers.length
      members.push(teamMembers[index])
    }
    return members
  }

  const scrollTeam = (direction: number) => {
    const newIndex = (currentIndex + direction + teamMembers.length) % teamMembers.length
    setCurrentIndex(newIndex)

    const newPage = currentPage + direction
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Meet our <span className="text-orange-500">Team</span>
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-8 transition-all duration-300">
          {getCurrentMembers().map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className={`flex-shrink-0 text-center transition-all duration-300 ${index === 1 ? 'w-80' : 'w-64'
                }`}
            >
              <div className="relative mx-auto mb-6">
                <div className={`
                        rounded-full border-4 border-orange-500 mx-auto overflow-hidden
                        ${index === 1 ? 'w-64 h-64' : 'w-48 h-48'}
                        transition-all duration-300
                      `}>
                  <Image
                    src={member.image}
                    alt={`Team member ${member.name}`}
                    width={index === 1 ? 256 : 192}
                    height={index === 1 ? 256 : 192}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-700">
                {member.name}
              </h3>
              <p className="text-orange-500 text-sm mb-4">{member.role}</p>
              <p className="text-gray-600 px-4 text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-12 gap-4">
          <button
            onClick={() => scrollTeam(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 transition-colors"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTeam(1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            aria-label="Next team member"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

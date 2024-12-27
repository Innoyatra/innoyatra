import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LinkedinIcon, TwitterIcon, GlobeIcon } from 'lucide-react'

export default function CEOProfile() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="relative h-48 bg-gradient-to-r from-orange-500/10 to-orange-500/20">
          <div className="absolute -bottom-16 left-6">
            <Avatar className="h-32 w-32 border-4 border-white">
              <AvatarImage src="/placeholder.svg" alt="Jelena Markram" />
              <AvatarFallback className="text-2xl">JM</AvatarFallback>
            </Avatar>
          </div>
        </CardHeader>
        <CardContent className="pt-20">
          <div className="space-y-8">
            {/* Basic Info */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-800">Jelena Markram</h1>
              <p className="text-xl text-orange-500">Chief Executive Officer</p>
              <p className="text-gray-600 max-w-2xl">
                Passionate technology leader with over 15 years of experience in building and scaling software companies. 
                Focused on creating innovative solutions that help businesses grow.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-800">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-800">200+</p>
                <p className="text-sm text-gray-600">Projects Delivered</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-800">50+</p>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
            </div>

            {/* Expertise */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Expertise</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Software Development</Badge>
                <Badge variant="secondary">Team Leadership</Badge>
                <Badge variant="secondary">Strategic Planning</Badge>
                <Badge variant="secondary">Product Management</Badge>
                <Badge variant="secondary">Business Development</Badge>
                <Badge variant="secondary">Agile Methodologies</Badge>
              </div>
            </div>

            {/* Quote */}
            <div className="relative pl-6 py-4 bg-gray-50 rounded-lg">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-orange-500" />
              <p className="text-lg italic text-gray-600">
                "Our mission is to help businesses build the right team and deliver exceptional software solutions. 
                We believe in long-term partnerships and sustainable growth."
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <GlobeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


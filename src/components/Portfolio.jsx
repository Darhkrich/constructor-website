'use client'
import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "The Obsidian Tower",
    location: "Downtown Metropolis",
    category: "Residential High-Rise",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Azure Coast Villas",
    location: "Pacific Palisades",
    category: "Luxury Residential",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Meridian Tech Park",
    location: "Innovation District",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  }
]

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Selected Works</h2>
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="text-slate-600 max-w-md mt-6 md:mt-0">
            A curated collection of our most ambitious developments, ranging from urban high-rises to secluded coastal retreats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <ArrowUpRight className="w-5 h-5 text-slate-900" />
                </div>
              </div>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-2">{project.category}</p>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">{project.title}</h3>
              <div className="flex items-center text-slate-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{project.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
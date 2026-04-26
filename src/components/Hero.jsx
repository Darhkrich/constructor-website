'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
export default function Hero() {

 const navLinks = [
    { name: 'Portfolio', href: '#projects' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]


  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Replace URL with your actual asset */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-slate-900/60" /> {/* Dark Overlay */}
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium text-amber-400 uppercase tracking-widest mb-6 backdrop-blur-sm">
            Est. 1998
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Defining the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Skyline</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
            We craft architectural masterpieces that blend sustainable innovation with timeless luxury.
          </p>

          
     
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm uppercase tracking-wider transition-colors">
              View Projects
            </button>
           
            <button className="px-8 py-4 border border-white text-white hover:bg-white hover:text-slate-900 font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
              Contact Us <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'
import { Ruler, ShieldCheck, Leaf, Users } from 'lucide-react'

const features = [
  { icon: <Ruler className="w-8 h-8" />, title: "Precision Planning", desc: "Meticulous attention to architectural detail." },
  { icon: <Leaf className="w-8 h-8" />, title: "Sustainable Design", desc: "LEED Platinum certified construction practices." },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Quality Assurance", desc: "Rigorous standards for materials and finish." },
  { icon: <Users className="w-8 h-8" />, title: "Client Focus", desc: "Transparent partnership from blueprint to keys." },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-8 leading-tight">
              We build more than structures. <br /> We build legacies.
            </h2>
            <p className="text-slate-400 mb-8 text-lg font-light">
              With over 25 years in the industry, Vanguard Development has established itself as a leader in mixed-use and luxury residential projects. We combine cutting-edge technology with traditional craftsmanship.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="border-l border-amber-500/30 pl-6">
                <h4 className="text-4xl font-serif font-bold text-white mb-1">2M+</h4>
                <p className="text-slate-400 text-sm">Sq Ft Built</p>
              </div>
              <div className="border-l border-amber-500/30 pl-6">
                <h4 className="text-4xl font-serif font-bold text-white mb-1">$1.5B</h4>
                <p className="text-slate-400 text-sm">Project Value</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <div key={idx} className="bg-slate-800 p-8 hover:bg-slate-700 transition-colors border-t-2 border-transparent hover:border-amber-500">
                <div className="text-amber-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 font-serif">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
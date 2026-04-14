import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Expertise from '@/components/Expertise'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <Expertise />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-serif font-bold text-white">VANGUARD<span className="text-amber-500">.</span></h2>
            <p className="text-xs mt-2">© 2024 Vanguard Development. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
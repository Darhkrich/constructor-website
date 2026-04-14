export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full"></div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Start Your Project</h2>
            <p className="text-slate-600">Interested in working with us? Fill out the form below.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input type="text" className="w-full p-4 bg-white border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="Emma Smith" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full p-4 bg-white border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="emma@example.com" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Project Interest</label>
              <select className="w-full p-4 bg-white border border-slate-200 focus:border-amber-500 outline-none">
                <option>Residential Development</option>
                <option>Commercial Space</option>
                <option>Investment Opportunity</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              <textarea rows="4" className="w-full p-4 bg-white border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
            </div>

            <button className="w-full py-5 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
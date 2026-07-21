'use client'

import { motion } from 'framer-motion'
import { Building2, Landmark, GraduationCap, Building, Briefcase, BookOpen } from 'lucide-react'

const markets = [
  { icon: Building2, title: 'Corporate Organisations', desc: 'Enterprise-grade ICT hardware and licensing for large-scale operations and data centres.' },
  { icon: Landmark, title: 'Government Departments', desc: 'ICT equipment, software licensing and procurement support for public-sector technology requirements.' },
  { icon: Building, title: 'Municipalities', desc: 'Reliable networking and computing equipment for municipal service delivery operations.' },
  { icon: BookOpen, title: 'TVET Colleges', desc: 'Modern technology equipment for technical and vocational education environments.' },
  { icon: GraduationCap, title: 'Educational Institutions', desc: 'Campus-wide IT solutions for universities, schools, and academic administration.' },
  { icon: Briefcase, title: 'SMEs', desc: 'Scalable business hardware and software licensing for growing enterprises.' },
]

export function TargetMarkets() {
  return (
    <section id="target-markets" className="bg-[#020817] py-20 lg:py-28 relative scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-[#00b4d8]">
            Target Markets
          </span>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Empowering South African Organisations
          </h2>
          <p className="mt-4 text-lg text-slate-300/70">
            We deliver tailored technology procurement solutions to public and private sector clients across the nation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {markets.map((market, idx) => (
            <motion.div
                key={idx}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-[#071423]/70 rounded-2xl p-8 border border-white/10 shadow-sm hover:shadow-2xl hover:border-[#4dd9ff]/30 transition-all duration-300 relative overflow-hidden"
              >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00b4d8]/10 to-transparent rounded-bl-[100px] -z-10 group-hover:from-[#00b4d8]/20 transition-colors" />
              
              <div className="w-14 h-14 bg-[#0a1128] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#00b4d8] transition-all">
                <market.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{market.title}</h3>
              <p className="text-slate-300/80 font-medium leading-relaxed">{market.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

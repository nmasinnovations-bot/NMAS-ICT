'use client'

import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

const suppliesOnly = [
  'Genuine manufacturer products',
  'Manufacturer warranty',
  'New equipment only',
  'Trusted supply channels',
  'Professional quotation support'
]

const doesNotSupply = [
  'Used equipment',
  'Refurbished equipment',
  'Grey imports'
]

export function Quality() {
  return (
    <section id="quality" className="bg-[#0a1128] py-20 lg:py-28 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] to-[#0a1128]/95" />
      
      {/* Abstract Background pattern */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00b4d8]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#00b4d8]">
              Quality Assurance
            </span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Genuine Products. Manufacturer Warranty.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              NMAS Innovations supplies brand-new genuine ICT products sourced through trusted distribution channels.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div 
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#071423]/70 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <CheckCircle className="h-6 w-6 text-[#00b4d8]" />
                <h3 className="text-xl font-bold text-white">Customers receive:</h3>
              </div>
              <ul className="space-y-4">
                {suppliesOnly.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80 font-medium">
                    <CheckCircle className="h-5 w-5 text-[#00b4d8] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#071423]/70 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Subtle warning red glow for "does not supply" */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <XCircle className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">NMAS does not supply:</h3>
              </div>
              <ul className="space-y-4">
                {doesNotSupply.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80 font-medium relative z-10">
                    <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { FileSpreadsheet, Search, CheckSquare, PackageSearch, Calculator, ShoppingCart, Truck, ShieldCheck } from 'lucide-react'

const steps = [
  { icon: FileSpreadsheet, title: 'Submit RFQ or Bill of Quantities' },
  { icon: Search, title: 'Review Requirements' },
  { icon: CheckSquare, title: 'Validate Specifications' },
  { icon: PackageSearch, title: 'Product Sourcing' },
  { icon: Calculator, title: 'Competitive Quotation' },
  { icon: ShoppingCart, title: 'Order Processing' },
  { icon: Truck, title: 'Nationwide Delivery' },
  { icon: ShieldCheck, title: 'Manufacturer Warranty & Support' },
]

export function Workflow() {
  return (
    <section className="bg-[#020817] py-20 lg:py-28 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#4dd9ff]/10 -skew-x-12 translate-x-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-[#4dd9ff]">
            Procurement Process
          </span>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Enterprise ICT Supply Workflow
          </h2>
          <p className="mt-4 text-lg text-slate-300/70">
            Our streamlined procurement methodology ensures requirement review, specification validation, product sourcing and quotation support.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-[#0a1128]/10 -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#00b4d8] to-transparent" 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#071423]/60 shadow-xl shadow-[#4dd9ff]/10 flex items-center justify-center border-2 border-white/10 group-hover:border-[#4dd9ff] transition-colors relative z-10">
                  <step.icon className="h-7 w-7 text-white group-hover:text-[#4dd9ff] transition-colors" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-7 h-7 bg-[#0a1128] text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                    {idx + 1}
                  </div>
                </div>
                
                <h3 className="mt-6 font-bold text-lg text-white leading-tight">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#020817] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div 
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-[#0a1128]/5 blur-2xl rounded-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#071423]/80 shadow-2xl">
            <Image
              src="/images/it-team.png"
              alt="ICT professionals reviewing technology requirements"
              width={1000}
              height={800}
              className="h-full w-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <ShieldCheck className="h-10 w-10 text-[#00b4d8] mb-3" />
              <p className="text-white font-bold text-xl">Trusted South African ICT Partner</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#4dd9ff]">
            Company Profile
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            A South African B2B ICT Supplier
          </h2>
          
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-300/80">
            <p>
              NMAS Innovations (Pty) Ltd is a South African B2B ICT supplier and reseller providing genuine technology products, software licensing and enterprise solutions to organisations.
            </p>
            <p>
              We supply businesses, government departments, municipalities, educational institutions and other organisations with technology sourced through trusted distribution channels.
            </p>
            <p>
              Our founder started working in ICT in 2001 and brings more than 20 years of experience in IT support, technology sourcing and ICT procurement environments.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-white/10">
              <div>
                <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#4dd9ff]" />
                  Trusted Distribution
                </h3>
                <p className="text-sm text-slate-300/80 mb-3 leading-relaxed">
                  NMAS sources genuine products through trusted distribution channels.
                </p>
                <ul className="space-y-1.5 text-sm font-medium text-slate-300/80">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4dd9ff]" /> Authentic products</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4dd9ff]" /> Manufacturer warranty</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4dd9ff]" /> Procurement confidence</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#4dd9ff]" />
                  Why Choose NMAS
                </h3>
                <ul className="space-y-1.5 text-sm font-medium text-slate-300/80">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4dd9ff]" /> B2B focused supplier</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4dd9ff]" /> More than 20 years ICT experience</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4dd9ff]" /> Enterprise technology sourcing</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4dd9ff]" /> Procurement support</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4dd9ff]" /> South African business presence</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

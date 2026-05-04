'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Target } from 'lucide-react'
import Link from 'next/link'

export default function OutputSelectorTeaser() {
  return (
    <section className="relative py-32 bg-mid overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
        <Target className="w-[800px] h-[800px]" />
      </div>
      
      <div className="max-w-[1200px] mx-auto px-8 md:px-20 relative z-10 text-center">
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Strategic Guidance</span>
          <div className="w-12 h-[1px] bg-accent" />
        </div>
        <h2 className="font-display text-5xl md:text-7xl text-white mb-8 uppercase tracking-tighter leading-[0.9]">
          Choose the Output Before <br/><span className="text-accent underline underline-offset-8 decoration-accent/20">the Drone Flight</span>
        </h2>
        <p className="font-body text-lg md:text-xl text-white/50 uppercase tracking-widest leading-relaxed mb-12 max-w-3xl mx-auto">
          Not sure whether you need images, a report, a map, a model or a media pack? Start with the output and we’ll show the right drone service and package.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
           <Link 
             href="/choose-your-output"
             className="group flex items-center gap-6 bg-accent text-dark px-12 py-6 font-display text-2xl tracking-[0.1em] transition-all hover:bg-white w-fit"
           >
             CHOOSE YOUR DRONE OUTPUT <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
           </Link>
           <Link 
             href="/sample-deliverables"
             className="font-ui text-[12px] tracking-[0.4em] uppercase text-white/40 hover:text-accent transition-colors"
           >
             View Sample Deliverables →
           </Link>
        </div>
      </div>
    </section>
  )
}

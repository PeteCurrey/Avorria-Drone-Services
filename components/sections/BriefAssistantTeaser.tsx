'use client'

import { motion } from 'framer-motion'
import { ArrowRight, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export default function BriefAssistantTeaser() {
  return (
    <section className="relative py-32 bg-dark overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
        <HelpCircle className="w-[800px] h-[800px]" />
      </div>
      
      <div className="max-w-[1200px] mx-auto px-8 md:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Decision Support</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-white mb-8 uppercase tracking-tighter leading-[0.9]">
              Not Sure Which Drone <br/><span className="text-accent">Service You Need?</span>
            </h2>
            <p className="font-body text-lg md:text-xl text-white/50 uppercase tracking-widest leading-relaxed mb-12">
              Use the project brief assistant to identify the right capture method, commercial bundle and deliverables for your project.
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-6 text-white/20 font-ui text-[9px] tracking-[0.3em] uppercase mb-12">
               <span>No drone terminology required</span>
               <span>Output-led recommendations</span>
               <span>Guided project scoping</span>
            </div>
            <Link 
              href="/project-brief-assistant"
              className="group flex items-center gap-6 bg-white text-dark px-12 py-6 font-display text-2xl tracking-[0.1em] transition-all hover:bg-accent w-fit"
            >
              START BRIEF ASSISTANT <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="w-full lg:w-auto">
             <div className="p-12 border border-white/10 bg-white/[0.02] backdrop-blur-md max-w-md">
                <h3 className="font-display text-2xl text-white uppercase tracking-widest mb-6">How it works</h3>
                <ul className="space-y-8">
                   {[
                     { step: '01', title: 'Intent', desc: 'Tell us what you need to achieve.' },
                     { step: '02', title: 'Context', desc: 'Identify the site type and location.' },
                     { step: '03', title: 'Route', desc: 'Receive a recommended service and package.' }
                   ].map(item => (
                     <li key={item.step} className="flex gap-6">
                        <span className="font-display text-2xl text-accent/30">{item.step}</span>
                        <div>
                           <div className="font-display text-xl text-white uppercase tracking-widest mb-1">{item.title}</div>
                           <div className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">{item.desc}</div>
                        </div>
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

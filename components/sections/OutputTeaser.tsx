'use client'

import Link from 'next/link'
import { ArrowRight, Search, Ruler, Camera, Activity, FileText, Box } from 'lucide-react'

export default function OutputTeaser() {
  const outputs = [
    { label: 'Inspect', icon: Search, desc: 'Roofs, facades, assets and hard-to-access structures.' },
    { label: 'Measure', icon: Ruler, desc: 'Precise site mapping, volumes and orthomosaics.' },
    { label: 'Monitor', icon: Activity, desc: 'Construction progress and repeatable site records.' },
    { label: 'Evidence', icon: FileText, desc: 'Damage records and insurance-ready visual data.' },
    { label: 'Film', icon: Camera, desc: 'Cinematic aerial content for brand and property.' },
    { label: 'Visualise', icon: Box, desc: 'Gaussian Splats and digital twin-style 3D models.' }
  ]

  return (
    <section className="py-32 px-10 md:px-20 bg-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end mb-24">
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none mb-8">
              Not Sure Which Drone<br/><span className="text-accent">Service You Need?</span>
            </h2>
            <p className="font-body text-lg text-white/50 uppercase tracking-widest leading-relaxed max-w-2xl font-light">
              Start with the outcome. Tell us whether you need to inspect, measure, monitor, evidence, film or visualise a site — and we’ll point you towards the right service, package and deliverables.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link href="/brief" className="bg-accent text-dark px-12 py-6 font-display text-2xl tracking-[0.1em] hover:bg-white transition-all flex items-center gap-4 group">
              Choose Your Output <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 overflow-hidden">
          {outputs.map((item, idx) => (
            <div key={idx} className="group bg-dark p-12 hover:bg-accent/5 transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-500" />
              <item.icon className="w-8 h-8 text-accent mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-3xl text-white mb-4 uppercase tracking-widest">{item.label}</h3>
              <p className="font-body text-[13px] text-white/40 uppercase tracking-widest leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

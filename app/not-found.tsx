'use client'

import Link from 'next/link'
import { ArrowRight, MoveLeft } from 'lucide-react'

const NAVIGATION_OPTIONS = [
  { id: '01', label: 'Return to Homepage', path: '/' },
  { id: '02', label: 'Browse Operations', path: '/services' },
  { id: '03', label: 'Contact Command', path: '/contact' },
]

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark flex flex-col items-center justify-center relative overflow-hidden px-10">
      {/* Background Aesthetics */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[800px] w-full text-center">
        <div className="inline-block py-2 px-4 border border-accent/20 bg-accent/5 mb-8 animate-pulse">
          <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">404 · PAGE NOT FOUND</span>
        </div>
        
        <h1 className="font-display text-[clamp(4rem,15vw,10rem)] leading-[0.85] text-white brightness-125 mb-8 tracking-widest drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          OUT OF<br />RANGE.
        </h1>

        <p className="font-body text-xl text-white/40 max-w-[600px] mx-auto mb-16 leading-relaxed">
          That airspace doesn&apos;t exist. The coordinates you followed have led to empty sky.
          Let&apos;s get you back on course before the signal drops.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-[900px] mx-auto w-full">
          {NAVIGATION_OPTIONS.map((opt) => (
            <Link 
              key={opt.id} 
              href={opt.path}
              className="group relative bg-white/5 border border-white/10 p-8 hover:border-accent transition-all duration-500 overflow-hidden"
            >
              {/* Hover Grain/Glow */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="font-ui text-[10px] tracking-widest text-accent/40 mb-2 group-hover:text-accent transition-colors">{opt.id}</div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-white tracking-widest uppercase">
                    {opt.label.split(' ').map((word, i) => i === 0 ? <span key={i} className="block">{word}</span> : word + ' ')}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-accent group-hover:translate-x-2 transition-all duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <Link 
            href="/" 
            className="inline-flex items-center gap-4 text-white/30 hover:text-accent transition-colors font-ui text-[12px] tracking-widest uppercase"
          >
            <MoveLeft className="w-4 h-4" /> REBOOT SYSTEM
          </Link>
        </div>
      </div>

      {/* Ghost Numbering background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[40vw] text-white/[0.02] select-none pointer-events-none z-0">
        404
      </div>
    </main>
  )
}

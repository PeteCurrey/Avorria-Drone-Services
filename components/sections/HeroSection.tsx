'use client'

import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { gsap } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'

export default function HeroSection() {
  // Preload the hero poster for maximum performance (LCP optimization)
  ReactDOM.preload('/images/hero_poster.jpg', { as: 'image', fetchPriority: 'high' })

  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({ delay: 0.3 })
    
    tl.fromTo('.hero-eyebrow', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
    )
    .fromTo('.hero-headline-line', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 }, 
      '-=0.4'
    )
    .fromTo('.hero-service-list', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 
      '-=0.3'
    )
    .fromTo('.hero-right-col', 
      { opacity: 0, x: 30 }, 
      { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out' }, 
      '-=0.6'
    )
  }, [])

  const services = [
    { id: '01', name: 'Drone Inspection', index: 1 },
    { id: '02', name: 'Aerial Photography & Film', index: 2 },
    { id: '03', name: 'Surveying & Mapping', index: 3 },
    { id: '04', name: 'Construction Monitoring', index: 4 },
  ]

  const scrollTo = (index: number) => {
    document.querySelector(`[data-index="${index}"]`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} data-index="0" className="noise-overlay flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
      <VideoBackground 
        src="/videos/hero.mp4" 
        poster="/images/hero_poster.jpg" 
        brightness={0.72} 
        saturation={1.25} 
      />
      <div className="grid-lines" />
      <div className="relative z-10 flex-1 w-full mt-24 md:mt-0">
        <div className="hero-eyebrow flex items-center gap-4 mb-6">
          <div className="w-10 h-[1px] bg-accent" />
          <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Professional UAV Services · UK & Worldwide</span>
        </div>
        <h1 className="hero-headline font-display text-hero text-white mb-12">
          <div className="hero-headline-line">SEE</div>
          <div className="hero-headline-line">FURTHER.</div>
          <div className="hero-headline-line text-accent">KNOW</div>
          <div className="hero-headline-line">MORE.</div>
        </h1>
        <div className="hero-service-list border-t border-white/10 w-full max-w-[500px]">
          {services.map((svc) => (
            <div key={svc.id} onClick={() => scrollTo(svc.index)} className="group flex items-center justify-between py-5 border-b border-white/10 cursor-pointer hover:pl-4 transition-all duration-500 hover:border-accent/30">
              <div className="flex items-center gap-6">
                <span className="font-ui text-[13px] text-white/40 group-hover:text-accent transition-colors">{svc.id}</span>
                <span className="font-ui text-[15px] tracking-[0.1em] uppercase text-white/80">{svc.name}</span>
              </div>
              <span className="text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-right-col relative z-10 flex-1 w-full md:max-w-[480px]">
        <div className="mb-8">
          <span className="font-ui text-[11px] tracking-[0.35em] uppercase text-white/25 mb-4 block">CAA Approved · PFCO Licensed · Fully Insured</span>
          <p className="font-body text-[16px] font-light leading-relaxed text-white/45">Where precision meets altitude. Altitude Drone delivers intelligence from above — transforming complex aerial challenges into clear, actionable data for the industries that build Britain.</p>
        </div>
        <div className="grid grid-cols-2 gap-[1px] bg-white/10 border border-white/5 overflow-hidden">
          <div className="bg-dark/40 p-7">
            <div className="font-display text-4xl text-accent mb-1">500+</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Missions<br/>Complete</div>
          </div>
          <div className="bg-dark/40 p-7">
            <div className="font-display text-4xl text-accent mb-1">CAA</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Licensed &<br/>Approved</div>
          </div>
          <div className="bg-dark/40 p-7">
            <div className="font-display text-4xl text-accent mb-1">4K</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Ultra HD<br/>Capture</div>
          </div>
          <div className="bg-dark/40 p-7">
            <div className="font-display text-4xl text-accent mb-1">48H</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Turnaround</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-20 hidden md:flex flex-col items-center gap-4 opacity-30 animate-pulse">
        <div className="h-12 w-[1px] bg-white" />
        <span className="font-ui text-[10px] tracking-[0.3em] uppercase vertical-text">SCROLL</span>
      </div>
      <style jsx>{` .vertical-text { writing-mode: vertical-rl; transform: rotate(180deg); } `}</style>
    </section>
  )
}

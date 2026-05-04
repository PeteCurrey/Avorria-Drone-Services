'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
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

  const processSteps = [
    { id: '01', name: 'Submit Project Brief', index: 8 },
    { id: '02', name: 'Airspace Assessment & Flight Planning', index: 8 },
    { id: '03', name: 'Deployment & Aerial Data Capture', index: 8 },
    { id: '04', name: 'Data Processing & Delivery', index: 8 },
  ]

  const scrollTo = (index: number) => {
    document.querySelector(`[data-index="${index}"]`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} data-index="0" className="noise-overlay min-h-screen pt-32 pb-20 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
      <VideoBackground 
        src="/videos/hero.mp4" 
        poster="/images/hero_poster.jpg" 
        alt="Altitude Hire UAV taking flight at dawn over a industrial site"
        brightness={0.72} 
        saturation={1.25} 
        isHero={true}
      />
      <div className="grid-lines" />
      <div className="relative z-10 flex-1 w-full mt-24 md:mt-0">
        <div className="hero-eyebrow flex items-center gap-4 mb-6">
          <div className="w-10 h-[1px] bg-accent" />
          <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Professional UAV Services · UK & Worldwide</span>
        </div>
        <h1 className="hero-headline font-display text-hero text-white mb-12">
          <div className="hero-headline-line">COMMERCIAL</div>
          <div className="hero-headline-line">DRONE</div>
          <div className="hero-headline-line text-accent">SERVICES.</div>
        </h1>
        <div className="hero-service-list mb-12">
           <p className="font-body text-xl text-white/50 leading-relaxed uppercase tracking-widest font-light max-w-[600px]">
             Inspection, Surveying, Aerial Media and 3D Site Capture for Property, Construction, Infrastructure, Energy and Insurance teams.
           </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <Link href="/project-brief-assistant?source=hero-primary" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center flex items-center justify-center gap-4 group">
            Find the Right Drone Service <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
          <Link href="/choose-your-output?source=hero-secondary" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
            Choose Your Output
          </Link>
        </div>
      </div>
      <div className="hero-right-col relative z-10 flex-1 w-full md:max-w-[480px]">
        <div className="mb-8">
          <span className="font-ui text-[11px] tracking-[0.35em] uppercase text-white/25 mb-4 block">CAA-Compliant · GVC-Qualified · Operational Authorisation · Fully Insured</span>
          <p className="font-body text-[16px] font-light leading-relaxed text-white/45">Where precision meets altitude. Altitude Hire delivers intelligence from above — transforming complex aerial challenges into clear, actionable data for the industries that build Britain.</p>
        </div>
        <div className="grid grid-cols-2 gap-[1px] bg-white/10 border border-white/5 overflow-hidden">
          <div className="bg-dark/40 p-7">
            <div className="font-display text-4xl text-accent mb-1">GVC</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Qualified<br/>Pilots</div>
          </div>
          <div className="bg-dark/40 p-7">
            <div className="font-display text-4xl text-accent mb-1">CAA</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Compliant<br/>Operations</div>
          </div>
          <div className="bg-dark/40 p-7">
            <div className="font-display text-4xl text-accent mb-1">4K</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Ultra HD<br/>Capture</div>
          </div>
          <div className="bg-dark/40 p-7">
            <div className="font-display text-4xl text-accent mb-1">INSURED</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Professional<br/>Coverage</div>
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

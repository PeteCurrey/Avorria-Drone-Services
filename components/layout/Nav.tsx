// components/layout/Nav.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLenis } from '@/lib/lenis'
import { Rocket, Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const sectorMenu = [
  {
    title: 'Infrastructure & Energy',
    image: '/images/nav/thermal.png',
    services: [
      { name: 'Infrastructure Inspections', slug: 'infrastructure-inspections' },
      { name: 'Utilities & Energy', slug: 'utilities-energy-inspections' },
      { name: 'Solar Panel Inspections', slug: 'solar-panel-inspections' },
      { name: 'Volumetric Surveys', slug: 'volumetric-surveys' },
    ]
  },
  {
    title: 'Construction & Surveying',
    image: '/images/nav/surveying.png',
    services: [
      { name: 'Surveying & Mapping', slug: 'surveying-mapping' },
      { name: 'Construction Monitoring', slug: 'construction-monitoring' },
      { name: 'Agriculture & Land', slug: 'agricultural-surveys' },
    ]
  },
  {
    title: 'Property & Assets',
    image: '/images/nav/inspection.png',
    services: [
      { name: 'Building Envelope', slug: 'building-envelope-inspections' },
      { name: 'Facilities Management', slug: 'facilities-management-inspections' },
      { name: 'Heritage & Conservation', slug: 'heritage-conservation-archaeology' },
    ]
  },
  {
    title: 'Specialist & Response',
    image: '/images/nav/photography.png',
    services: [
      { name: 'Thermal Drone Surveys', slug: 'thermal-imaging' },
      { name: 'Insurance & Claims', slug: 'insurance-loss-adjuster-surveys' },
      { name: 'Emergency Response', slug: 'emergency-incident-response' },
      { name: 'Events & Media', slug: 'events-media' },
    ]
  }
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false)
  const lenis = useLenis()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!lenis) return
    const handleScroll = (scroll: { animatedScroll: number }) => {
      setScrolled(scroll.animatedScroll > 80)
    }
    lenis.on('scroll', handleScroll)
    return () => lenis.off('scroll', handleScroll)
  }, [lenis])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      if (lenis) lenis.stop()
    } else {
      document.body.style.overflow = ''
      if (lenis) lenis.start()
    }
    return () => {
      document.body.style.overflow = ''
      if (lenis) lenis.start()
    }
  }, [mobileMenuOpen, lenis])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setMegaMenuOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false)
    }, 150)
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled || mobileMenuOpen || megaMenuOpen ? 'bg-dark/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-10'} px-6 md:px-20`}
      >
        <div className="max-w-[1600px] mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => { setMobileMenuOpen(false); setMegaMenuOpen(false); }}>
            <span className="font-display text-2xl md:text-3xl tracking-[0.15em] text-white">ALTITUDE</span>
            <span className="font-display text-2xl md:text-3xl tracking-[0.15em] text-accent">DRONE</span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-10">
            <div 
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/services" 
                className={`font-ui text-[12px] tracking-[0.2em] uppercase transition-colors flex items-center gap-1.5 ${megaMenuOpen ? 'text-accent' : 'text-white/70 hover:text-white'}`}
              >
                Services <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180 text-accent' : ''}`} />
              </Link>
            </div>
            <Link href="/gaussian-splat" className="font-ui text-[12px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
              Gaussian Splat
            </Link>
            <Link href="/fleet" className="font-ui text-[12px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
              Fleet
            </Link>
            <Link href="/case-studies" className="font-ui text-[12px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/brief" className="font-ui text-[12px] tracking-[0.2em] uppercase text-accent/80 hover:text-accent transition-colors">
              Briefing
            </Link>
          </div>

          {/* CTA Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Link 
              href="/contact"
              className="hidden lg:block font-ui text-[11px] bg-accent text-dark font-bold tracking-[0.2em] uppercase px-8 py-3 hover:bg-white transition-all duration-300"
            >
              Uplink Terminal
            </Link>
            <button 
              className="lg:hidden text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 w-full bg-dark/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-500 ease-in-out hidden lg:block overflow-hidden ${megaMenuOpen ? 'max-h-[700px] opacity-100 shadow-[0_40px_80px_rgba(0,0,0,0.8)]' : 'max-h-0 opacity-0 pointer-events-none'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1600px] mx-auto px-20 py-16 grid grid-cols-4 gap-8">
            {sectorMenu.map((sector) => (
              <div key={sector.title} className="group/sector flex flex-col h-full">
                {/* Sector Header with Image */}
                <div className="relative aspect-[16/10] overflow-hidden mb-8 border border-white/5 group-hover/sector:border-accent/40 transition-colors duration-500">
                  <Image 
                    src={sector.image} 
                    alt={sector.title}
                    fill
                    className="object-cover opacity-40 group-hover/sector:opacity-100 group-hover/sector:scale-110 transition-all duration-700 ease-out grayscale group-hover/sector:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display text-2xl tracking-widest text-white uppercase">{sector.title}</h3>
                  </div>
                </div>

                {/* Service Links */}
                <ul className="space-y-4 flex-1">
                  {sector.services.map((service) => (
                    <li key={service.slug}>
                      <Link 
                        href={`/services/${service.slug}`}
                        className="font-ui text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-accent transition-all flex items-center gap-3 group/link"
                        onClick={() => setMegaMenuOpen(false)}
                      >
                        <div className="w-0 h-[1px] bg-accent transition-all group-hover/link:w-6" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-white/[0.02] py-6 px-20 flex justify-between items-center border-t border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/20">Operational Authorisation: UK CAA GVC / PDRA-01</span>
            </div>
            <Link href="/services" className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent hover:text-white transition-colors" onClick={() => setMegaMenuOpen(false)}>
              View Strategy Matrix →
            </Link>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark z-[90] flex flex-col transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="flex flex-col items-start px-10 pt-32 gap-6 h-full overflow-y-auto pb-20 custom-scrollbar">
          <div className="w-full">
            <button 
              onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
              className="font-display text-5xl tracking-widest text-white flex items-center justify-between w-full"
            >
              SERVICES <ChevronDown className={`w-8 h-8 text-accent transition-transform ${mobileSectorsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`mt-10 space-y-12 overflow-hidden transition-all duration-500 ${mobileSectorsOpen ? 'max-h-[2500px] opacity-100 mb-10' : 'max-h-0 opacity-0'}`}>
              {sectorMenu.map(sector => (
                <div key={sector.title} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-accent" />
                    <h4 className="font-display text-2xl text-white tracking-widest uppercase">{sector.title}</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-4 pl-16">
                    {sector.services.map(service => (
                      <Link 
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="font-ui text-[12px] tracking-[0.2em] uppercase text-white/40 active:text-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link href="/gaussian-splat" className="font-display text-5xl tracking-widest text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>GAUSSIAN SPLAT</Link>
          <Link href="/fleet" className="font-display text-5xl tracking-widest text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>FLEET</Link>
          <Link href="/case-studies" className="font-display text-5xl tracking-widest text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>PORTFOLIO</Link>
          <Link href="/brief" className="font-display text-5xl tracking-widest text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>BRIEFING</Link>
          <Link href="/contact" className="font-display text-5xl tracking-widest text-accent hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>TERMINAL</Link>
          
          <div className="mt-12 w-full pt-10 border-t border-white/5">
             <Link 
              href="/brief"
              className="flex items-center justify-center gap-4 bg-accent text-dark font-display text-2xl tracking-[0.2em] uppercase py-6 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Rocket className="w-5 h-5" />
              INITIATE BRIEF
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

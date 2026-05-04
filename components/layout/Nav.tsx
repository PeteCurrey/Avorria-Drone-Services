// components/layout/Nav.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useLenis } from '@/lib/lenis'
import { Rocket, Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const servicesMenu = [
  {
    title: 'Aerial Photography',
    slug: 'aerial-photography',
    items: [
      { name: 'Commercial Photography', slug: 'commercial-aerial-photography' },
      { name: 'Property Photography', slug: 'property-aerial-photography' },
      { name: 'Development Sites', slug: 'development-site-photography' },
      { name: 'Industrial Sites', slug: 'industrial-site-photography' },
      { name: 'Hotels & Leisure', slug: 'hotel-venue-and-leisure-aerial-photography' },
      { name: 'Estate Agents', slug: 'estate-agent-drone-photography' },
      { name: 'Land & Farms', slug: 'land-and-farm-aerial-photography' },
      { name: 'Marketing Campaigns', slug: 'marketing-campaign-drone-imagery' },
    ]
  },
  {
    title: 'Drone Videography',
    slug: 'drone-videography',
    items: [
      { name: 'Commercial Video', slug: 'commercial-drone-videography' },
      { name: 'Property Video', slug: 'property-drone-video' },
      { name: 'Construction Video', slug: 'construction-project-video' },
      { name: 'Corporate Filming', slug: 'corporate-drone-filming' },
      { name: 'Industrial Filming', slug: 'industrial-drone-filming' },
      { name: 'Event Filming', slug: 'event-drone-filming' },
      { name: 'Tourism & Hospitality', slug: 'tourism-and-hospitality-drone-video' },
      { name: 'Vehicle Tracking', slug: 'vehicle-tracking-drone-footage' },
    ]
  },
  {
    title: 'Roof Inspections',
    slug: 'roof-inspections',
    items: [
      { name: 'Drone Inspections', slug: 'drone-roof-inspections' },
      { name: 'Commercial Surveys', slug: 'commercial-roof-surveys' },
      { name: 'Industrial Inspections', slug: 'industrial-roof-inspections' },
      { name: 'Flat Roof Surveys', slug: 'flat-roof-drone-inspections' },
      { name: 'Gutter & Drainage', slug: 'gutter-and-drainage-drone-inspections' },
      { name: 'Storm Damage', slug: 'storm-damage-roof-inspection' },
      { name: 'Dilapidation Support', slug: 'dilapidation-roof-survey-support' },
      { name: 'Planned Maintenance', slug: 'planned-maintenance-roof-inspections' },
    ]
  }
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
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
        <div className="max-w-[1400px] mx-auto flex justify-between items-center relative">
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
            <Link href="/fleet" className="font-ui text-[12px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
              Fleet
            </Link>
            <Link href="/team" className="font-ui text-[12px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
              Team
            </Link>
            <Link href="/case-studies" className="font-ui text-[12px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
              Case Studies
            </Link>
          </div>

          {/* CTA Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Link 
              href="/brief"
              className="hidden sm:flex items-center gap-2 font-ui text-[11px] tracking-[0.2em] uppercase text-accent border border-accent/30 px-5 py-2 hover:bg-accent/10 transition-all duration-300"
            >
              <Rocket className="w-3 h-3" />
              Project Brief
            </Link>
            <Link 
              href="/contact"
              className="hidden lg:block font-ui text-[11px] bg-accent text-dark font-bold tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-white transition-all duration-300"
            >
              Uplink
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
          className={`absolute top-full left-0 w-full bg-dark/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-500 ease-in-out hidden lg:block overflow-hidden ${megaMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1400px] mx-auto px-20 py-16 grid grid-cols-3 gap-12">
            {servicesMenu.map((category) => (
              <div key={category.slug} className="space-y-8">
                <Link 
                  href={`/services/${category.slug}`}
                  className="group flex items-center gap-3"
                  onClick={() => setMegaMenuOpen(false)}
                >
                  <div className="w-8 h-[1px] bg-accent transition-all group-hover:w-12" />
                  <h3 className="font-display text-2xl tracking-wider text-white group-hover:text-accent transition-colors">{category.title}</h3>
                </Link>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.slug}>
                      <Link 
                        href={`/services/${item.slug}`}
                        className="font-ui text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-all hover:pl-2 flex items-center gap-2 group/item"
                        onClick={() => setMegaMenuOpen(false)}
                      >
                        <ArrowRight className="w-3 h-3 text-accent opacity-0 -ml-5 transition-all group-hover/item:opacity-100 group-hover/item:ml-0" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-white/5 py-4 px-20 flex justify-between items-center">
            <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/20">Specialised Industrial UAV Solutions</span>
            <Link href="/services" className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent hover:text-white transition-colors" onClick={() => setMegaMenuOpen(false)}>
              View All Services →
            </Link>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark z-[90] flex flex-col transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="flex flex-col items-start px-10 pt-32 gap-6 h-full overflow-y-auto pb-20">
          <div>
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="font-display text-4xl tracking-widest text-white flex items-center gap-4"
            >
              SERVICES <ChevronDown className={`w-6 h-6 text-accent transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`mt-6 space-y-8 overflow-hidden transition-all duration-500 ${mobileServicesOpen ? 'max-h-[1500px] opacity-100 mb-10' : 'max-h-0 opacity-0'}`}>
              {servicesMenu.map(category => (
                <div key={category.slug} className="pl-4 border-l border-white/10 space-y-4">
                  <Link 
                    href={`/services/${category.slug}`}
                    className="font-display text-xl text-accent tracking-widest block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.title}
                  </Link>
                  <div className="space-y-3">
                    {category.items.map(item => (
                      <Link 
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className="font-ui text-[11px] tracking-[0.2em] uppercase text-white/40 block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link href="/fleet" className="font-display text-4xl tracking-widest text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>FLEET</Link>
          <Link href="/team" className="font-display text-4xl tracking-widest text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>TEAM</Link>
          <Link href="/case-studies" className="font-display text-4xl tracking-widest text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>CASE STUDIES</Link>
          <Link href="/contact" className="font-display text-4xl tracking-widest text-accent hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
          
          <div className="mt-auto w-full pt-10 border-t border-white/5">
             <Link 
              href="/brief"
              className="flex items-center justify-center gap-3 font-ui text-[13px] tracking-[0.3em] uppercase text-accent border border-accent/30 py-6 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Rocket className="w-4 h-4" />
              Project Brief
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


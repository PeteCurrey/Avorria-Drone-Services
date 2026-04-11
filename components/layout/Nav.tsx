// components/layout/Nav.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLenis } from '@/lib/lenis'
import { gsap } from '@/lib/gsap-init'
import { ChevronDown, BarChart3, Camera, Map, Construction, Rocket } from 'lucide-react'

const SERVICES = [
  { name: 'Drone Inspection', slug: 'inspection', icon: BarChart3, desc: 'Structural surveys & thermal reporting.', image: '/images/inspection_poster.png' },
  { name: 'Aerial Photography', slug: 'photography', icon: Camera, desc: 'Cinematic 4K marketing & estates.', image: '/images/photography_poster.png' },
  { name: 'Surveying & Mapping', slug: 'surveying', icon: Map, desc: 'Topographical data & 3D photogrammetry.', image: '/images/surveying_poster.png' },
  { name: 'Construction Monitor', slug: 'construction', icon: Construction, desc: 'Progress tracking & time-lapse.', image: '/images/construction_poster.png' },
]

const FLEET = [
  { name: 'DJI Matrice 350 RTK', slug: 'm350-rtk', type: 'Flagship Industrial', image: '/images/fleet_m350.png' },
  { name: 'DJI Matrice 30T', slug: 'm30t', type: 'Tactical Thermal', image: '/images/inspection_poster.png' },
  { name: 'DJI Matrice 300 RTK', slug: 'm300-rtk', type: 'Heavy Lift Support', image: '/images/fleet_m350.png' },
  { name: 'DJI Mavic 3 Enterprise', slug: 'mavic-3e', type: 'Precision Mapping', image: '/images/surveying_poster.png' },
]

const PAYLOADS = [
  { name: 'Zenmuse H20T', slug: 'h20t', type: 'Quad-Sensor / Optic', image: '/images/inspection_poster.png' },
  { name: 'Zenmuse L1', slug: 'l1', type: 'LiDAR / Mapping', image: '/images/surveying_poster.png' },
  { name: 'Zenmuse P1', slug: 'p1', type: 'Photogrammetry', image: '/images/photography_poster.png' },
  { name: 'Zenmuse Z30', slug: 'z30', type: 'Optical Zoom', image: '/images/inspection_poster.png' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return
    const handleScroll = (scroll: { animatedScroll: number }) => {
      setScrolled(scroll.animatedScroll > 80)
    }
    lenis.on('scroll', handleScroll)
    return () => lenis.off('scroll', handleScroll)
  }, [lenis])

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu)
    gsap.to(menuRef.current, { 
      opacity: 1, 
      y: 0, 
      visibility: 'visible',
      duration: 0.4, 
      ease: 'power3.out' 
    })
  }

  const handleMouseLeave = () => {
    gsap.to(menuRef.current, { 
      opacity: 0, 
      y: -10, 
      visibility: 'hidden',
      duration: 0.3, 
      ease: 'power3.in',
      onComplete: () => setActiveMenu(null)
    })
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-dark/80 backdrop-blur-xl py-4' : 'bg-transparent py-10'} px-10 md:px-20`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl md:text-3xl tracking-[0.15em] text-white">ALTITUDE</span>
          <span className="font-display text-2xl md:text-3xl tracking-[0.15em] text-accent">DRONE</span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-12">
          <div 
            className="flex items-center gap-1.5 cursor-pointer group py-2"
            onMouseEnter={() => handleMouseEnter('services')}
          >
            <span className="font-ui text-[13px] tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors">Services</span>
            <ChevronDown className={`w-3.5 h-3.5 text-accent transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
          </div>

          <div 
            className="flex items-center gap-1.5 cursor-pointer group py-2"
            onMouseEnter={() => handleMouseEnter('fleet')}
          >
            <span className="font-ui text-[13px] tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors">Fleet</span>
            <ChevronDown className={`w-3.5 h-3.5 text-accent transition-transform duration-300 ${activeMenu === 'fleet' ? 'rotate-180' : ''}`} />
          </div>

          <div 
            className="flex items-center gap-1.5 cursor-pointer group py-2"
            onMouseEnter={() => handleMouseEnter('payloads')}
          >
            <span className="font-ui text-[13px] tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors">Payloads</span>
            <ChevronDown className={`w-3.5 h-3.5 text-accent transition-transform duration-300 ${activeMenu === 'payloads' ? 'rotate-180' : ''}`} />
          </div>

          <Link href="/case-studies" className="font-ui text-[13px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
            Case Studies
          </Link>
        </div>

        {/* CTA Actions */}
        <div className="flex items-center gap-6">
          <Link 
            href="/brief"
            className="hidden sm:flex items-center gap-2 font-ui text-[11px] tracking-[0.2em] uppercase text-accent border border-accent/30 px-5 py-2 hover:bg-accent/10 transition-all duration-300"
          >
            <Rocket className="w-3 h-3" />
            Project Brief
          </Link>
          <Link 
            href="/contact"
            className="font-ui text-[11px] bg-accent text-dark font-bold tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-white transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mega Menu Dropdown */}
        <div 
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-3xl border-t border-white/5 shadow-2xl invisible opacity-0 -translate-y-[10px]"
        >
          <div className="max-w-[1400px] mx-auto p-12">
            {activeMenu === 'services' && (
              <div className="grid grid-cols-4 gap-8">
                {SERVICES.map((item) => (
                  <Link 
                    key={item.slug} 
                    href={`/services/${item.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-video bg-white/5 border border-white/10 overflow-hidden mb-6">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill
                        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-dark/40" />
                      <div className="absolute top-4 left-4 bg-accent p-2">
                        <item.icon className="w-4 h-4 text-dark" />
                      </div>
                    </div>
                    <div className="font-display text-xl tracking-wider text-white mb-2">{item.name}</div>
                    <p className="font-body text-[13px] text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            )}

            {activeMenu === 'fleet' && (
              <div className="grid grid-cols-2 gap-x-12 gap-y-8 max-w-[1000px]">
                {FLEET.map((item) => (
                  <Link 
                    key={item.slug} 
                    href={`/fleet/${item.slug}`}
                    className="flex gap-6 group"
                  >
                    <div className="h-20 aspect-video bg-white/5 border border-white/10 overflow-hidden relative">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill
                        className="object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent" />
                    </div>
                    <div>
                      <div className="font-display text-lg tracking-wider text-white mb-0.5">{item.name}</div>
                      <div className="font-ui text-[9px] text-accent tracking-[0.2em] uppercase mb-1.5">{item.type}</div>
                      <span className="text-[9px] tracking-widest text-white/30 group-hover:text-white transition-colors">VIEW UNIT →</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {activeMenu === 'payloads' && (
              <div className="grid grid-cols-2 gap-x-12 gap-y-8 max-w-[1000px]">
                {PAYLOADS.map((item) => (
                  <Link 
                    key={item.slug} 
                    href={`/fleet/${item.slug}`}
                    className="flex gap-6 group"
                  >
                    <div className="h-20 aspect-video bg-white/5 border border-white/10 overflow-hidden relative">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill
                        className="object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent" />
                    </div>
                    <div>
                      <div className="font-display text-lg tracking-wider text-white mb-0.5">{item.name}</div>
                      <div className="font-ui text-[9px] text-accent tracking-[0.2em] uppercase mb-1.5">{item.type}</div>
                      <span className="text-[9px] tracking-widest text-white/30 group-hover:text-white transition-colors">VIEW SENSOR →</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

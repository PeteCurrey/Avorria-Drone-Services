// components/layout/Nav.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLenis } from '@/lib/lenis'
import { Rocket, Menu, X } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lenis = useLenis()

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

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled || mobileMenuOpen ? 'bg-dark/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-10'} px-10 md:px-20`}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-display text-2xl md:text-3xl tracking-[0.15em] text-white">ALTITUDE</span>
            <span className="font-display text-2xl md:text-3xl tracking-[0.15em] text-accent">DRONE</span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-12">
            <Link href="/services" className="font-ui text-[13px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors py-2">
              Services
            </Link>
            <Link href="/fleet" className="font-ui text-[13px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
              Fleet
            </Link>
            <Link href="/team" className="font-ui text-[13px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
              Team
            </Link>
            <Link href="/case-studies" className="font-ui text-[13px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
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
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark z-[90] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="flex flex-col items-center gap-10 mt-16">
          <Link href="/services" className="font-display text-5xl tracking-widest text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>SERVICES</Link>
          <Link href="/fleet" className="font-display text-5xl tracking-widest text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>FLEET</Link>
          <Link href="/team" className="font-display text-5xl tracking-widest text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>TEAM</Link>
          <Link href="/case-studies" className="font-display text-5xl tracking-widest text-white hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>CASE STUDIES</Link>
          <Link href="/contact" className="font-display text-5xl tracking-widest text-accent hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
        </div>
      </div>
    </>
  )
}

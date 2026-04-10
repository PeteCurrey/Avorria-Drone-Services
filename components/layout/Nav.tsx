// components/layout/Nav.tsx
'use client'

import { useEffect, useState } from 'react'
import { useLenis } from '@/lib/lenis'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    const handleScroll = (scroll: { animatedScroll: number }) => {
      setScrolled(scroll.animatedScroll > 80)
    }

    lenis.on('scroll', handleScroll)
    return () => lenis.off('scroll', handleScroll)
  }, [lenis])

  const scrollToSection = (index: number) => {
    const target = document.querySelector(`[data-index="${index}"]`)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 transition-colors pointer-events-none ${scrolled ? 'bg-dark/60 backdrop-blur-xl py-6' : 'bg-transparent py-10'} px-10 md:px-20`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center pointer-events-auto">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection(0)}
        >
          <span className="font-display text-2xl tracking-[0.15em] text-white">AVORRIA</span>
          <span className="font-display text-2xl tracking-[0.15em] text-accent">DRONE</span>
        </div>

        <button 
          onClick={() => scrollToSection(5)}
          className="font-ui text-[13px] tracking-[0.2em] uppercase border border-white/30 px-6 py-2.5 hover:border-accent hover:text-accent transition-all duration-300"
        >
          GET A QUOTE
        </button>
      </div>
    </nav>
  )
}

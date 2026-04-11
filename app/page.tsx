'use client'

import { useEffect, useRef } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import InspectionSection from '@/components/sections/InspectionSection'
import PhotographySection from '@/components/sections/PhotographySection'
import SurveyingSection from '@/components/sections/SurveyingSection'
import ConstructionSection from '@/components/sections/ConstructionSection'
import MetricsSection from '@/components/sections/MetricsSection'
import SectorSection from '@/components/sections/SectorSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  const isSnapping = useRef(false)
  const snapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-index]'))

    // Returns the section closest to the center of the viewport
    const getNearestSection = () => {
      const mid = window.innerHeight / 2
      return sections.reduce((closest, s) => {
        const rect = s.getBoundingClientRect()
        const sCenter = rect.top + rect.height / 2
        const closestRect = closest.getBoundingClientRect()
        const closestCenter = closestRect.top + closestRect.height / 2
        return Math.abs(sCenter - mid) < Math.abs(closestCenter - mid) ? s : closest
      })
    }

    const getCurrentIndex = () =>
      sections.findIndex(s => {
        const rect = s.getBoundingClientRect()
        return rect.top > -window.innerHeight * 0.4 && rect.top < window.innerHeight * 0.4
      })

    const snapToSection = (el: HTMLElement) => {
      if (isSnapping.current) return
      isSnapping.current = true
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => { isSnapping.current = false }, 900)
    }

    // Wheel: debounce then snap to nearest
    const handleWheel = () => {
      if (snapTimeout.current) clearTimeout(snapTimeout.current)
      snapTimeout.current = setTimeout(() => {
        snapToSection(getNearestSection())
      }, 80)
    }

    // Keyboard: jump to prev/next section
    const handleKey = (e: KeyboardEvent) => {
      if (!['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp'].includes(e.key)) return
      e.preventDefault()
      const idx = getCurrentIndex()
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        const next = sections[Math.min(idx + 1, sections.length - 1)]
        if (next) snapToSection(next)
      } else {
        const prev = sections[Math.max(idx - 1, 0)]
        if (prev) snapToSection(prev)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKey)
      if (snapTimeout.current) clearTimeout(snapTimeout.current)
    }
  }, [])

  return (
    <main>
      <HeroSection />
      <InspectionSection />
      <PhotographySection />
      <MetricsSection />
      <SurveyingSection />
      <ConstructionSection />
      <SectorSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}

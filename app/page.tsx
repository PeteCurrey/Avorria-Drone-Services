'use client'

import { useEffect } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import InspectionSection from '@/components/sections/InspectionSection'
import PhotographySection from '@/components/sections/PhotographySection'
import SurveyingSection from '@/components/sections/SurveyingSection'
import ConstructionSection from '@/components/sections/ConstructionSection'
import ThermalSection from '@/components/sections/ThermalSection'
import AgricultureSection from '@/components/sections/AgricultureSection'
import EventsSection from '@/components/sections/EventsSection'
import MetricsSection from '@/components/sections/MetricsSection'
import SectorSection from '@/components/sections/SectorSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import { TrustedByStrip, AccreditationsStrip } from '@/components/ui/Strips'

export default function Home() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-index]'))

    const handleKey = (e: KeyboardEvent) => {
      if (!['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp'].includes(e.key)) return
      
      const scrollPos = window.scrollY
      const currentIdx = sections.findIndex(s => {
        const top = s.offsetTop
        return top >= scrollPos - 100 && top <= scrollPos + 100
      })

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentIdx < sections.length - 1) {
          e.preventDefault()
          const next = sections[currentIdx + 1]
          if (next) window.scrollTo({ top: next.offsetTop, behavior: 'smooth' })
        }
      } else {
        if (currentIdx > 0) {
          e.preventDefault()
          const prev = sections[currentIdx - 1]
          if (prev) window.scrollTo({ top: prev.offsetTop, behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <main>
      <HeroSection />
      <TrustedByStrip />
      <InspectionSection />
      <PhotographySection />
      <SurveyingSection />
      <ConstructionSection />
      <AccreditationsStrip />
      <ThermalSection />
      <AgricultureSection />
      <EventsSection />
      <MetricsSection />
      <SectorSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}

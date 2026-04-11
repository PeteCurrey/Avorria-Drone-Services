'use client'

import { useEffect } from 'react'
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
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const sections = document.querySelectorAll('section[data-index]')
      const current = [...sections].findIndex(s => {
        const rect = s.getBoundingClientRect()
        return rect.top > -50 && rect.top < 50
      })

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        const next = Math.min(current + 1, sections.length - 1)
        sections[next]?.scrollIntoView({ behavior: 'smooth' })
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        const prev = Math.max(current - 1, 0)
        sections[prev]?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
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

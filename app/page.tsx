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
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-index]'))

    const getCurrentIndex = () =>
      sections.findIndex(s => {
        const rect = s.getBoundingClientRect()
        return rect.top > -window.innerHeight * 0.4 && rect.top < window.innerHeight * 0.4
      })

    const handleKey = (e: KeyboardEvent) => {
      if (!['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp'].includes(e.key)) return
      
      const idx = getCurrentIndex()
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (idx < sections.length - 1) {
          e.preventDefault()
          sections[idx + 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        if (idx > 0) {
          e.preventDefault()
          sections[idx - 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
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

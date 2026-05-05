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
import BundlesTeaser from '@/components/sections/BundlesTeaser'
import PortfolioTeaser from '@/components/sections/PortfolioTeaser'
import ContactSection from '@/components/sections/ContactSection'
import BriefAssistantTeaser from '@/components/sections/BriefAssistantTeaser'
import OutputSelectorTeaser from '@/components/sections/OutputSelectorTeaser'
import CostEstimatorTeaser from '@/components/sections/CostEstimatorTeaser'
import LeadMagnetTeaser from '@/components/sections/LeadMagnetTeaser'
import { TrustedByStrip, AccreditationsStrip } from '@/components/ui/Strips'

import OutputTeaser from '@/components/sections/OutputTeaser'
import OperationsTrust from '@/components/sections/OperationsTrust'

export default function Home() {
  return (
    <main className="homepage-snap-container">
      <div className="homepage-snap-section"><HeroSection /></div>
      <div className="homepage-snap-section"><OutputTeaser /></div>
      <TrustedByStrip />
      <div className="homepage-snap-section"><InspectionSection /></div>
      <div className="homepage-snap-section"><PhotographySection /></div>
      <div className="homepage-snap-section"><SurveyingSection /></div>
      <div className="homepage-snap-section"><ConstructionSection /></div>
      <AccreditationsStrip />
      <div className="homepage-snap-section"><ThermalSection /></div>
      <div className="homepage-snap-section"><AgricultureSection /></div>
      <div className="homepage-snap-section"><EventsSection /></div>
      <div className="homepage-snap-section"><OperationsTrust /></div>
      <div className="homepage-snap-section"><CostEstimatorTeaser /></div>
      <div className="homepage-snap-section"><BriefAssistantTeaser /></div>
      <div className="homepage-snap-section"><OutputSelectorTeaser /></div>
      <div className="homepage-snap-section"><MetricsSection /></div>
      <div className="homepage-snap-section"><SectorSection /></div>
      <div className="homepage-snap-section"><LeadMagnetTeaser /></div>
      <div className="homepage-snap-section"><PortfolioTeaser /></div>
      <div className="homepage-snap-section"><BundlesTeaser /></div>
      <div className="homepage-snap-section"><FAQSection /></div>
      <div className="homepage-snap-section"><ContactSection /></div>
    </main>
  )
}

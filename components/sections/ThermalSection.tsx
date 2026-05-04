'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-init'
import { useLenis } from '@/lib/lenis'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import FeatureTags from '@/components/ui/FeatureTags'
import GhostNumber from '@/components/ui/GhostNumber'

export default function ThermalSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const lenis = useLenis()

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.svc-tag', '.svc-headline', '.svc-body', '.feature-tags', '.svc-cta'],
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: 'top 75%', 
            toggleActions: 'play none none reverse' 
          }
        }
      )

      gsap.fromTo(
        '.panel-right',
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0,
          duration: 1.0,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: 'top 75%', 
            toggleActions: 'play none none reverse' 
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = ['Building Envelope', 'Roof Moisture Surveys', 'Solar Panel Audits', 'Electrical Inspection', 'Energy Loss Mapping', 'RICS-Compatible Reports']
  
  const applications = [
    { label: 'COMMERCIAL BUILDINGS', detail: 'Energy loss and moisture ingress mapping for full-envelope assessments.' },
    { label: 'SOLAR FARMS & ARRAYS', detail: 'Cell-level fault detection to ensure operational efficiency.' },
    { label: 'INSURANCE & CLAIMS', detail: 'Post-incident damage assessment and precise defect verification.' }
  ]

  const specs = [
    { label: 'Sensor Type', value: 'Radiometric Thermal' },
    { label: 'Resolution', value: 'High-Res Infrared' },
    { label: 'Deliverables', value: 'PDF + Raw Thermal Data' }
  ]

  const scrollToContact = () => {
    if (lenis) {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        lenis.scrollTo(contactSection)
      }
    }
  }

  return (
    <section ref={sectionRef} data-index="5" className="noise-overlay flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      <VideoBackground src="/videos/thermal.mp4" poster="/images/thermal_poster.jpg" brightness={0.65} saturation={1.2} />
      <div className="grid-lines" />
      <GhostNumber number="05" />
      <div className="relative z-10 flex-1 max-w-[640px]">
        <div className="svc-tag"><SectionTag number="05" text="Service" /></div>
        <h2 className="svc-headline font-display text-section text-white mb-8">THERMAL<br/>IMAGING</h2>
        <p className="svc-body font-body text-[16px] font-light leading-relaxed text-white/50 mb-8 max-w-[500px]">
          Radiometric thermal signatures reveal temperature differentials that the naked eye cannot see. Our thermal drone surveys support the identification of anomalies, moisture ingress, and energy loss across building envelopes, rooftops, and solar installations.
        </p>
        <div className="feature-tags"><FeatureTags tags={features} /></div>
        <div className="svc-cta flex flex-col sm:flex-row gap-6 mt-12">
          <Link href="/services/thermal-imaging" className="flex items-center gap-4 font-ui text-[13px] tracking-[0.25em] text-accent group transition-all">
            VIEW THERMAL SURVEYS <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
          <Link href="/brief?service=thermal-imaging" className="flex items-center gap-4 font-ui text-[13px] tracking-[0.25em] text-white/50 hover:text-white transition-all">
            REQUEST THERMAL BRIEF
          </Link>
        </div>
      </div>
      <div className="panel-right relative z-10 flex-1 w-full max-w-[450px] flex flex-col gap-6">
        <div className="bg-black/55 border border-white/7 backdrop-blur-md">
          <div className="flex flex-col">
            {applications.map((item, idx) => (
              <div key={idx} className="relative bg-white/[0.04] p-6 border-b border-white/5 last:border-b-0 group cursor-pointer transition-colors hover:bg-white/[0.08]">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                <span className="font-ui text-[12px] tracking-[0.2em] uppercase text-white mb-2 block">
                  {item.label}
                </span>
                <span className="font-body text-[14px] leading-relaxed text-white/50 block">
                  {item.detail}
                </span>
                <span className="absolute top-6 right-6 font-ui text-[14px] text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-white/10 bg-black/40 backdrop-blur-md">
          {specs.map((spec) => (
            <div key={spec.label} className="flex justify-between items-center px-6 py-4 border-b border-white/5 last:border-0">
              <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">{spec.label}</span>
              <div className="flex items-center gap-3">
                <span className="font-body text-[13px] text-white/75">{spec.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import FeatureTags from '@/components/ui/FeatureTags'
import GhostNumber from '@/components/ui/GhostNumber'

export default function InspectionSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  const features = ['Roofing & Facades', 'Powerlines', 'Bridges & Structures', 'Solar Panels', 'Thermal Imaging', 'Defect Reports']
  const specs = [
    { label: 'Resolution', value: '4K / 48MP' },
    { label: 'Thermal Sensor', value: 'FLIR Radiometric' },
    { label: 'Max Structure Ht', value: 'Unlimited' },
    { label: 'Report Format', value: 'PDF + Raw Data' },
    { label: 'Turnaround', value: '48 Hours' },
    { label: 'Coverage', value: 'Nationwide' },
  ]

  return (
    <section ref={sectionRef} data-index="1" className="noise-overlay flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      <VideoBackground src="/videos/inspection.mp4" poster="/images/inspection_poster.png" brightness={0.72} saturation={1.2} />
      <div className="grid-lines" />
      <GhostNumber number="01" />
      <div className="relative z-10 flex-1 max-w-[640px]">
        <div className="svc-tag"><SectionTag number="01" text="Service" /></div>
        <h2 className="svc-headline font-display text-section text-white mb-8">DRONE<br/>INSPECTION</h2>
        <p className="svc-body font-body text-[16px] font-light leading-relaxed text-white/50 mb-8 max-w-[500px]">Eliminate risk. Eliminate scaffolding. Our inspection drones access the inaccessible — delivering thermal imaging, HD visual data, and detailed defect reporting for structures where traditional access is costly or dangerous.</p>
        <div className="feature-tags"><FeatureTags tags={features} /></div>
        <a href="#contact" className="svc-cta flex items-center gap-4 font-ui text-[13px] tracking-[0.25em] text-accent group transition-all">ENQUIRE NOW <span className="group-hover:translate-x-2 transition-transform duration-300">→</span></a>
      </div>
      <div className="panel-right relative z-10 flex-1 w-full max-w-[450px]">
        <div className="border border-white/10 bg-black/40 backdrop-blur-md">
          {specs.map((spec) => (
            <div key={spec.label} className="flex justify-between items-center px-6 py-5 border-b border-white/5 last:border-0">
              <span className="font-ui text-[11px] tracking-[0.2em] uppercase text-white/30">{spec.label}</span>
              <div className="flex items-center gap-3">
                <span className="font-body text-[14px] text-white/75">{spec.value}</span>
                <span className="text-accent text-lg">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

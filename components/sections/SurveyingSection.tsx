// components/sections/SurveyingSection.tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap, registerGSAP,  } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import FeatureTags from '@/components/ui/FeatureTags'
import GhostNumber from '@/components/ui/GhostNumber'

export default function SurveyingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => { registerGSAP();
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
        { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
        {
          opacity: 1, scale: 1, filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power2.out',
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

  const features = [
    'Topographic Survey', 'Orthomosaic Maps', 'Point Cloud / LiDAR', 
    '3D Modelling', 'Volume Calculations', 'Precision Mapping'
  ]

  return (
    <section ref={sectionRef} data-index="3" className="noise-overlay flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      <VideoBackground 
        src="/videos/surveying.mp4" 
        poster="/images/surveying_poster.png"
        brightness={0.7} 
        saturation={1.25}
      />
      <div className="grid-lines" />
      <GhostNumber number="03" />

      {/* Content Column */}
      <div className="relative z-10 flex-1 max-w-[640px]">
        <div className="svc-tag">
          <SectionTag number="03" text="Service" />
        </div>

        <h2 className="svc-headline font-display text-section text-white mb-8">
          SURVEYING<br/>& MAPPING
        </h2>

        <p className="svc-body font-body text-[16px] font-light leading-relaxed text-white/50 mb-8 max-w-[500px]">
          High-accuracy topographic surveys, orthomosaic maps, and point cloud data — delivered faster than traditional ground surveys. We provide the spatial intelligence needed for planning, design, and construction workflows.
        </p>

        <div className="feature-tags">
          <FeatureTags tags={features} />
        </div>

        <div className="svc-cta flex flex-col sm:flex-row gap-6 mt-12">
          <Link href="/services/surveying-mapping" className="flex items-center gap-4 font-ui text-[13px] tracking-[0.25em] text-accent group transition-all">
            VIEW SURVEYING & MAPPING <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
          <Link href="/brief?service=surveying-mapping" className="flex items-center gap-4 font-ui text-[13px] tracking-[0.25em] text-white/50 hover:text-white transition-all">
            PLAN SURVEY BRIEF
          </Link>
        </div>
      </div>

      {/* Grid Panel */}
      <div className="panel-right relative z-10 flex-1 w-full max-w-[500px] aspect-square flex items-center justify-center">
        <div className="relative w-full h-full border border-white/5 bg-white/[0.02] overflow-hidden">
          {/* SVG Contour Visual */}
          <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-40">
            <path d="M 0 100 Q 100 80 200 120 T 400 100" fill="none" stroke="rgba(200,169,110,0.3)" strokeWidth="1" />
            <path d="M 0 200 Q 150 180 250 250 T 400 220" fill="none" stroke="rgba(200,169,110,0.3)" strokeWidth="1" />
            <path d="M 0 300 Q 100 320 200 280 T 400 310" fill="none" stroke="rgba(200,169,110,0.3)" strokeWidth="1" />
            
            {/* Grid Overlay */}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            ))}
            
            {/* Target Crosshair */}
            <g transform="translate(220, 180)">
              <line x1="-15" y1="0" x2="15" y2="0" stroke="var(--accent)" strokeWidth="2" />
              <line x1="0" y1="-15" x2="0" y2="15" stroke="var(--accent)" strokeWidth="2" />
              <circle r="6" fill="none" stroke="var(--accent)" strokeWidth="1" />
            </g>
          </svg>
          
          <div className="absolute bottom-8 left-8">
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">GPS Coordinates</div>
            <div className="font-ui text-[12px] tracking-[0.1em] text-accent">53.2307° N, 1.4213° W · High-Accuracy Data</div>
          </div>
        </div>
      </div>
    </section>
  )
}

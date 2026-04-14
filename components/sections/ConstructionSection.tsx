// components/sections/ConstructionSection.tsx
'use client'

import { useEffect, useRef } from 'react'
import { gsap, registerGSAP,  } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import FeatureTags from '@/components/ui/FeatureTags'
import GhostNumber from '@/components/ui/GhostNumber'

export default function ConstructionSection() {
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
        '.panel-left',
        { opacity: 0, x: -50 },
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
      
      // Animate progress bars
      gsap.fromTo(
        '.progress-bar-fill',
        { width: 0 },
        { 
          width: (i, target) => target.dataset.width + '%',
          duration: 1.5,
          ease: 'power2.inOut',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    'Progress Reporting', 'Scheduled Flights', 'Time-lapse', 
    'Site Safety', 'Stockpile Volume', 'Client Portals'
  ]

  const milestones = [
    { label: 'GROUNDWORKS', week: 'Week 01', progress: 100, status: 'complete' },
    { label: 'FOUNDATIONS', week: 'Week 04', progress: 100, status: 'complete' },
    { label: 'STEEL FRAME', week: 'Week 10', progress: 80, status: 'active' },
    { label: 'ENVELOPE', week: 'Week 18', progress: 0, status: 'pending' },
    { label: 'FIT-OUT', week: 'Week 28', progress: 0, status: 'pending' },
    { label: 'HANDOVER', week: 'Week 40', progress: 0, status: 'pending' },
  ]

  return (
    <section ref={sectionRef} data-index="4" className="noise-overlay flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      <VideoBackground 
        src="/videos/construction.mp4" 
        poster="/images/construction_poster.png"
        brightness={0.7} 
        saturation={1.2}
      />
      <div className="grid-lines" />
      <GhostNumber number="04" position="left" />

      {/* Content Column */}
      <div className="relative z-10 flex-1 max-w-[640px]">
        <div className="svc-tag">
          <SectionTag number="04" text="Service" />
        </div>

        <h2 className="svc-headline font-display text-section text-white mb-8">
          CONSTRUCTION<br/>MONITORING
        </h2>

        <p className="svc-body font-body text-[16px] font-light leading-relaxed text-white/50 mb-8 max-w-[500px]">
          Keep stakeholders informed and projects on track. Regular scheduled drone flights capture site progress, verify milestone completion, and generate time-lapse documentation from groundworks to handover.
        </p>

        <div className="feature-tags">
          <FeatureTags tags={features} />
        </div>

        <button className="svc-cta flex items-center gap-4 font-ui text-[13px] tracking-[0.25em] text-accent group transition-all">
          DISCUSS YOUR PROJECT 
          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </button>
      </div>

      {/* Timeline Panel */}
      <div className="panel-left relative z-10 flex-1 w-full max-w-[480px]">
        <div className="bg-black/55 border border-white/7 p-8 backdrop-blur-md">
          <div className="flex flex-col gap-6">
            {milestones.map((ms, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-center font-ui text-[10px] tracking-[0.2em] uppercase">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${ms.status === 'complete' || ms.status === 'active' ? 'bg-accent' : 'border border-white/30'}`} />
                    <span className={ms.status === 'pending' ? 'text-white/30' : 'text-white'}>{ms.label}</span>
                  </div>
                  <span className="text-white/30">{ms.week}</span>
                </div>
                <div className="h-[3px] w-full bg-white/10 overflow-hidden">
                  <div 
                    className="progress-bar-fill h-full bg-accent" 
                    data-width={ms.progress}
                  />
                </div>
                {ms.status === 'active' && (
                  <span className="font-ui text-[9px] tracking-[0.1em] text-accent uppercase text-right">In Progress</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

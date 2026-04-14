'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-init'
import { useLenis } from '@/lib/lenis'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import FeatureTags from '@/components/ui/FeatureTags'
import GhostNumber from '@/components/ui/GhostNumber'

export default function EventsSection() {
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

      gsap.fromTo(
        '.progress-bar-fill-events',
        { height: 0 },
        { 
          height: '100%',
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

  const features = ['Live Broadcast', 'Festival Coverage', 'Sports Events', 'Crowd Monitoring', 'Article 16 Authorised', 'Dual Operator']

  const timelineSteps = [
    { label: 'RISK ASSESSMENT', detail: 'Pre-flight safety & airspace compliance.' },
    { label: 'CROWD MANAGEMENT', detail: 'Safe distances and operational volumes.' },
    { label: 'LIVE DEPLOYMENT', detail: 'Secure feed to on-site broadcast units.' },
    { label: 'POST-PRODUCTION', detail: 'Color-graded 4K/6K highlight reels.' }
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
    <section ref={sectionRef} data-index="7" className="noise-overlay flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      <VideoBackground src="/videos/events.mp4" poster="/images/events_poster.jpg" brightness={0.65} saturation={1.2} />
      <div className="grid-lines" />
      <GhostNumber number="07" />
      <div className="relative z-10 flex-1 max-w-[640px]">
        <div className="svc-tag"><SectionTag number="07" text="Service" /></div>
        <h2 className="svc-headline font-display text-section text-white mb-8">EVENTS &<br/>MEDIA</h2>
        <p className="svc-body font-body text-[16px] font-light leading-relaxed text-white/50 mb-8 max-w-[500px]">Capture the scale and energy of live events from breathtaking vantage points. Operating under advanced Article 16 permissions, we safely deliver heavy-lift cinema rigs and live broadcast feeds in complex crowded environments where standard operators cannot fly.</p>
        <div className="feature-tags"><FeatureTags tags={features} /></div>
        <button onClick={scrollToContact} className="svc-cta flex items-center gap-4 font-ui text-[13px] tracking-[0.25em] text-accent group transition-all">BOOK EVENT COVERAGE <span className="group-hover:translate-x-2 transition-transform duration-300">→</span></button>
      </div>
      
      <div className="panel-right relative z-10 flex-1 w-full max-w-[450px] flex flex-col gap-6">
        <div className="bg-black/55 border border-white/7 p-8 backdrop-blur-md">
          <div className="flex flex-col gap-6 relative">
            <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-white/10">
              <div className="progress-bar-fill-events w-full bg-accent" />
            </div>
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative pl-6">
                <div className="absolute left-0 top-[6px] w-[7px] h-[7px] rounded-full bg-black border border-accent" />
                <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-white mb-1">
                  {step.label}
                </div>
                <div className="font-body text-[13px] text-white/50 line-clamp-1">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-white/10 bg-black/40 p-6 flex flex-col justify-center items-center backdrop-blur-md">
           <span className="font-ui text-[11px] tracking-[0.2em] uppercase text-white/50 mb-2">Daily Operator Rates From</span>
           <span className="font-display text-4xl text-white">£1,250<span className="text-xl text-accent">+VAT</span></span>
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-init'
import { useLenis } from '@/lib/lenis'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import FeatureTags from '@/components/ui/FeatureTags'
import GhostNumber from '@/components/ui/GhostNumber'

export default function AgricultureSection() {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = ['NDVI Mapping', 'Crop Health Analysis', 'Yield Estimation', 'Drainage Assessments', 'Multispectral Imaging', 'Regular Monitoring']

  const scrollToContact = () => {
    if (lenis) {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        lenis.scrollTo(contactSection)
      }
    }
  }

  return (
    <section ref={sectionRef} data-index="6" className="noise-overlay flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-24">
      <VideoBackground src="/videos/agriculture.mp4" poster="/images/agriculture_poster.jpg" brightness={0.65} saturation={1.2} />
      <div className="grid-lines" />
      <GhostNumber number="06" position="left" />
      <div className="relative z-10 flex-1 max-w-[640px]">
        <div className="svc-tag"><SectionTag number="06" text="Service" /></div>
        <h2 className="svc-headline font-display text-section text-white mb-8">AGRICULTURAL<br/>SURVEYS</h2>
        <p className="svc-body font-body text-[16px] font-light leading-relaxed text-white/50 mb-8 max-w-[500px]">
          Multispectral aerial data to support precision farming. Our NDVI and high-resolution crop health surveys help identify stress, map drainage issues, and improve yield predictability with data delivered directly to farm management software.
        </p>
        <div className="feature-tags"><FeatureTags tags={features} /></div>
        <div className="svc-cta flex flex-col sm:flex-row gap-6 mt-12">
          <Link href="/services/agricultural-surveys" className="flex items-center gap-4 font-ui text-[13px] tracking-[0.25em] text-accent group transition-all">
            VIEW AGRICULTURAL SURVEYS <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
          <Link href="/brief?service=agricultural-surveys" className="flex items-center gap-4 font-ui text-[13px] tracking-[0.25em] text-white/50 hover:text-white transition-all">
            DISCUSS LAND SURVEY
          </Link>
        </div>
      </div>
      <div className="panel-left relative z-10 flex-1 w-full max-w-[450px] flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-[1px] bg-white/10 border border-white/5 overflow-hidden">
          <div className="bg-dark/60 backdrop-blur-md p-6">
            <div className="font-display text-4xl text-accent mb-1">98%</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Mapping<br/>Accuracy</div>
          </div>
          <div className="bg-dark/60 backdrop-blur-md p-6">
            <div className="font-display text-4xl text-accent mb-1">NDVI</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Multispectral<br/>Analysis</div>
          </div>
          <div className="bg-dark/60 backdrop-blur-md p-6">
            <div className="font-display text-4xl text-accent mb-1">400+</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Hectares<br/>Per Flight</div>
          </div>
          <div className="bg-dark/60 backdrop-blur-md p-6">
            <div className="font-display text-4xl text-accent mb-1">RTK</div>
            <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Centimeter<br/>Precision</div>
          </div>
        </div>
        <div className="bg-accent/10 border border-accent/20 p-5 backdrop-blur-md">
          <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-accent mb-2">Seasonal Advantage</div>
          <p className="font-body text-[13px] text-white/70">Secure automated recurring flights throughout the growing cycle to ensure early detection of crop stress before visible yield loss occurs.</p>
        </div>
      </div>
    </section>
  )
}

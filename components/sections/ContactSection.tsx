// components/sections/ContactSection.tsx
'use client'

import { useEffect, useRef } from 'react'
import { gsap, registerGSAP } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => { registerGSAP();
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.contact-tag', '.contact-headline', '.contact-body', '.contact-details', '.contact-form'],
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} data-index="5" id="contact" className="noise-overlay flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      <VideoBackground 
        src="/videos/contact.mp4" 
        poster="/images/contact_poster.png"
        brightness={0.28} 
      />
      <div className="grid-lines" />

      {/* Left Column */}
      <div className="relative z-10 flex-1 max-w-[640px]">
        <div className="contact-tag">
          <SectionTag number="Ready to Fly" text="" />
        </div>

        <h2 className="contact-headline font-display text-contact text-white mb-8">
          LET&apos;S<br/>GET<br/><span className="text-accent">AIRBORNE.</span>
        </h2>

        <p className="contact-body font-body text-[16px] font-light leading-relaxed text-white/50 mb-12 max-w-[450px]">
          Tell us what you need. We&apos;ll tell you how we can deliver it — with precision, speed, and zero compromise on data quality.
        </p>

        <div className="contact-details flex flex-col gap-8">
          {[
            'hello@avorria-drone.co.uk',
            '0800 000 0000',
            'Chesterfield, Derbyshire · Nationwide Coverage'
          ].map((detail) => (
            <div key={detail} className="flex items-center gap-6 group">
              <div className="w-8 h-[1px] bg-accent transition-all duration-500 group-hover:w-16" />
              <span className="font-ui text-[13px] tracking-[0.2em] text-white/30 group-hover:text-white transition-colors duration-300">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="contact-form relative z-10 flex-1 w-full max-w-[500px]">
        <form className="flex flex-col gap-2">
          {[
            { label: 'Your Name', type: 'text' },
            { label: 'Email Address', type: 'email' },
            { label: 'Company', type: 'text' },
          ].map((field) => (
            <div key={field.label} className="group flex flex-col pt-6 border-b border-white/10 focus-within:border-accent transition-colors duration-300">
              <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/28 mb-2">
                {field.label}
              </label>
              <input 
                type={field.type}
                className="bg-transparent border-none outline-none font-body text-[15px] font-light text-white pb-4"
              />
            </div>
          ))}

          <div className="group flex flex-col pt-6 border-b border-white/10 focus-within:border-accent transition-colors duration-300">
            <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/28 mb-2">
              Service Required
            </label>
            <select className="bg-transparent border-none outline-none font-body text-[15px] font-light text-white/50 pb-4 appearance-none">
              <option>Drone Inspection</option>
              <option>Aerial Photography & Film</option>
              <option>Surveying & Mapping</option>
              <option>Construction Monitoring</option>
              <option>Other</option>
            </select>
          </div>

          <div className="group flex flex-col pt-6 border-b border-white/10 focus-within:border-accent transition-colors duration-300">
            <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/28 mb-2">
              Brief Description
            </label>
            <textarea 
              rows={3}
              className="bg-transparent border-none outline-none font-body text-[15px] font-light text-white pb-4 resize-none"
            />
          </div>

          <div className="flex items-center justify-between mt-12">
            <button className="bg-accent hover:bg-accent-light text-dark font-ui text-[13px] tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300">
              SEND ENQUIRY →
            </button>
            <span className="font-ui text-[10px] tracking-[0.1em] text-white/25 uppercase italic">
              &quot;Response within 24 hours&quot;
            </span>
          </div>
        </form>
      </div>

      {/* Footer Bar */}
      <footer className="absolute bottom-0 left-0 w-full px-10 md:px-20 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-ui text-[10px] tracking-[0.1em] text-white/20 text-center md:text-left">
          © {new Date().getFullYear()} Avorria Drone. CAA Permission for Commercial Operations.
        </div>
        <div className="flex gap-8 font-ui text-[10px] tracking-[0.2em] uppercase">
          {['Privacy', 'Terms', 'CAA Licence', 'Instagram'].map(link => (
            <a key={link} href="#" className="text-white/20 hover:text-accent transition-colors">
              {link}
            </a>
          ))}
        </div>
      </footer>
    </section>
  )
}

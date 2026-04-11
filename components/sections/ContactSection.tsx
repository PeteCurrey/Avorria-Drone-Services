import { useEffect, useRef, useState } from 'react'
import { gsap, registerGSAP } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import { supabase } from '@/lib/supabase'

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: 'Inspection', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: `[${formData.service}] ${formData.message} (Company: ${formData.company})`
      }
      
      if (!supabase) {
        console.warn('Supabase not configured. Simulating success.')
      } else {
        const { error } = await supabase.from('enquiries').insert([payload])
        if (error) throw error
      }
      
      setStatus('success')
    } catch {
      setTimeout(() => setStatus('success'), 1200)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section ref={sectionRef} data-index="8" id="contact" className="noise-overlay min-h-screen py-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 relative overflow-hidden">
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
          LET&apos;S<br/>GET<br/><span className="text-accent underline underline-offset-8">AIRBORNE.</span>
        </h2>

        <p className="contact-body font-body text-[16px] font-light leading-relaxed text-white/50 mb-12 max-w-[450px]">
          Define your mission. Our pilots and data analysts are standing by to deliver the technical intelligence you need.
        </p>

        <div className="contact-details flex flex-col gap-8">
          {[
            { label: 'Ops Desk', val: 'ops@altitude.drone' },
            { label: 'Direct', val: '+44 (0) 20 7946 0123' },
            { label: 'Territory', val: 'UK Wide Operational Support' }
          ].map((detail) => (
            <div key={detail.val} className="flex items-center gap-6 group">
              <div className="w-8 h-[1px] bg-accent transition-all duration-500 group-hover:w-16" />
              <div>
                <div className="font-ui text-[9px] tracking-[0.2em] text-white/20 uppercase mb-1">{detail.label}</div>
                <div className="font-ui text-[13px] tracking-[0.2em] text-white/40 group-hover:text-white transition-colors duration-300">
                  {detail.val}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="contact-form relative z-10 flex-1 w-full max-w-[500px] bg-dark/40 backdrop-blur-3xl border border-white/5 p-10">
        {status === 'success' ? (
          <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-dark font-bold text-2xl">✓</span>
            </div>
            <h3 className="font-display text-3xl text-white mb-4">UPLINK SECURE</h3>
            <p className="font-body text-sm text-white/30 italic">Our team is reviewing your technical requirements.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {[
              { id: 'name', label: 'Full Name', type: 'text' },
              { id: 'email', label: 'Work Email', type: 'email' },
              { id: 'company', label: 'Company', type: 'text' },
            ].map((field) => (
              <div key={field.id} className="group flex flex-col pt-6 border-b border-white/10 focus-within:border-accent transition-colors duration-300">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3 block">{field.label}</label>
                <input 
                  type={field.type} 
                  name={field.id}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 font-body text-white/80 outline-none focus:border-accent/40 transition-all"
                />
              </div>
            ))}

            <div className="group flex flex-col pt-6 border-b border-white/10 focus-within:border-accent transition-colors duration-300">
              <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/28 mb-2">
                Mission Type
              </label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="bg-transparent border-none outline-none font-body text-[15px] font-light text-white/50 pb-4 appearance-none"
              >
                <option>Inspection</option>
                <option>Photography</option>
                <option>Surveying</option>
                <option>Construction</option>
              </select>
            </div>

            <div className="group flex flex-col pt-6 border-b border-white/10 focus-within:border-accent transition-colors duration-300">
              <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/28 mb-2">
                Requirements
              </label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={2}
                className="bg-transparent border-none outline-none font-body text-[15px] font-light text-white pb-4 resize-none"
              />
            </div>

            <div className="flex items-center justify-between mt-12">
              <button 
                disabled={status === 'submitting'}
                className="bg-accent hover:bg-white text-dark font-ui text-[13px] tracking-[0.25em] uppercase px-10 py-5 transition-all duration-300 disabled:opacity-50"
              >
                {status === 'submitting' ? 'TRANSMITTING...' : 'SEND MESSAGE →'}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Footer Bar */}
      <footer className="absolute bottom-0 left-0 w-full px-10 md:px-20 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-ui text-[10px] tracking-[0.1em] text-white/20 text-center md:text-left">
          © {new Date().getFullYear()} Altitude Drone. CAA Permission for Commercial Operations.
          <span className="mx-4 opacity-50">|</span>
          <a href="https://avorria.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Build by Avorria Digital Marketing. A Signature Build.
          </a>
        </div>
        <div className="flex gap-8 font-ui text-[10px] tracking-[0.2em] uppercase">
          {['Privacy', 'Fleet', 'Briefing', 'Login'].map(link => (
            <a key={link} href="#" className="text-white/20 hover:text-accent transition-colors">
              {link}
            </a>
          ))}
        </div>
      </footer>
    </section>
  )
}


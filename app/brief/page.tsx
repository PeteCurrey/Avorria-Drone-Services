'use client'

import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, ArrowLeft, CheckCircle2, Shield, Radio, Activity } from 'lucide-react'
import VideoBackground from '@/components/ui/VideoBackground'

const STEPS = [
  { id: 1, name: 'MISSION ORIGIN', desc: 'Contact Details' },
  { id: 2, name: 'FLIGHT PARAMETERS', desc: 'Project Scope' },
  { id: 3, name: 'TECHNICAL SPECS', desc: 'Site Requirements' },
  { id: 4, name: 'REVIEW & LAUNCH', desc: 'Final Validation' }
]

export default function ProjectBriefPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    // Step 1: Contact
    name: '',
    email: '',
    company: '',
    phone: '',
    // Step 2: Mission
    serviceType: 'Inspection',
    industry: 'Construction',
    timeline: 'Immediate',
    budget: '',
    // Step 3: Technical
    location: '',
    hazards: '',
    nightFlight: 'No',
    indoors: 'No',
    // Step 4: Notes
    notes: ''
  })

  useEffect(() => {
    gsap.fromTo('.brief-step-content', 
      { opacity: 0, x: 20 }, 
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
    )
  }, [currentStep])

  const nextStep = () => setCurrentStep(s => Math.min(s + 1, 4))
  const prevStep = () => setCurrentStep(s => Math.max(s - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'brief',
          message: `Project Brief: ${formData.serviceType} for ${formData.industry}. Location: ${formData.location}. Notes: ${formData.notes}`
        })
      })

      if (!response.ok) throw new Error('brief_transmission_failed')
      setStatus('success')
    } catch (err) {
      console.error('Brief error:', err)
      setTimeout(() => setStatus('success'), 1200)
    }
  }

  return (
    <main className="min-h-screen bg-dark pt-32 pb-20 relative overflow-hidden px-6 md:px-10">
      <VideoBackground src="/videos/brief.mp4" poster="/images/brief_poster.png" brightness={0.15} />
      
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto">
        {/* Header Area */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-3 py-2 px-4 border border-accent/20 bg-accent/5 mb-6">
            <Radio className="w-4 h-4 text-accent animate-pulse" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent">Technical Project Brief</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-widest leading-none mb-6">DEFINE YOUR<br/>MISSION.</h1>
          <p className="font-body text-lg text-white/40 max-w-[600px] uppercase tracking-widest">
            Detailed requirements translate to precision execution. Build your technical brief below.
          </p>
        </div>

        {/* Step Progress */}
        <div className="grid grid-cols-4 gap-4 mb-20 relative">
          {STEPS.map((step) => (
            <div key={step.id} className="relative">
              <div className={`h-[2px] w-full transition-all duration-700 ${currentStep >= step.id ? 'bg-accent' : 'bg-white/5'}`} />
              <div className="mt-4">
                <div className={`font-ui text-[9px] tracking-widest uppercase transition-colors duration-500 ${currentStep === step.id ? 'text-accent' : 'text-white/20'}`}>
                  Step 0{step.id}
                </div>
                <div className={`font-display text-xs tracking-widest uppercase transition-colors duration-500 ${currentStep === step.id ? 'text-white' : 'text-white/10'}`}>
                  {step.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form Main */}
        <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl p-10 md:p-16 min-h-[500px] flex flex-col justify-between overflow-hidden relative">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center py-20 animate-in zoom-in duration-700">
               <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(200,169,110,0.4)]">
                <CheckCircle2 className="w-10 h-10 text-dark" />
              </div>
              <h2 className="font-display text-4xl text-white mb-4 tracking-widest uppercase">Brief Received</h2>
              <p className="font-body text-white/40 text-sm uppercase tracking-[0.2em] max-w-[400px]">
                Technical parameters locked. Our operations team is calculating logistics for your mission.
              </p>
              <button onClick={() => window.location.href = '/'} className="mt-12 font-ui text-[11px] text-accent tracking-[0.4em] uppercase border border-accent/20 px-8 py-4 hover:bg-accent hover:text-dark transition-all">
                Return to Base
              </button>
            </div>
          ) : (
            <>
              <div className="brief-step-content w-full">
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Operator Name</label>
                      <input 
                        type="text" placeholder="John Doe" 
                        value={formData.name} onChange={v => setFormData(d => ({...d, name: v.target.value}))}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-accent font-body"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Email Uplink</label>
                      <input 
                        type="email" placeholder="john@company.com"
                        value={formData.email} onChange={v => setFormData(d => ({...d, email: v.target.value}))}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-accent font-body"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Company Organization</label>
                      <input 
                        type="text" placeholder="Global Assets Ltd"
                        value={formData.company} onChange={v => setFormData(d => ({...d, company: v.target.value}))}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-accent font-body"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Direct Frequency (Phone)</label>
                      <input 
                        type="tel" placeholder="+44 0000 000 000"
                        value={formData.phone} onChange={v => setFormData(d => ({...d, phone: v.target.value}))}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-accent font-body"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Primary Service</label>
                      <select 
                        value={formData.serviceType} onChange={v => setFormData(d => ({...d, serviceType: v.target.value}))}
                        className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-accent font-body uppercase text-xs"
                      >
                        <option value="Inspection">Asset Inspection</option>
                        <option value="Surveying">Topographical Surveying</option>
                        <option value="Photography">Cinematic Media</option>
                        <option value="Construction">Progress Monitoring</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Target Industry</label>
                      <select 
                        value={formData.industry} onChange={v => setFormData(d => ({...d, industry: v.target.value}))}
                        className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-accent font-body uppercase text-xs"
                      >
                        <option value="Construction">Construction</option>
                        <option value="Energy">Energy & Renewables</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Telecoms">Telecoms</option>
                        <option value="Events">Live Events</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Deployment Timeline</label>
                      <select 
                        value={formData.timeline} onChange={v => setFormData(d => ({...d, timeline: v.target.value}))}
                        className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-accent font-body uppercase text-xs"
                      >
                        <option value="Immediate">Immediate (Next 7 days)</option>
                        <option value="30days">Next 30 Days</option>
                        <option value="Ongoing">Long-term / Recurring</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Approx. Budget (GBP)</label>
                      <input 
                        type="text" placeholder="£2,500+" 
                        value={formData.budget} onChange={v => setFormData(d => ({...d, budget: v.target.value}))}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-accent font-body"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Mission Location / Coordinates</label>
                      <input 
                        type="text" placeholder="Postal Code or GPS Coordinates"
                        value={formData.location} onChange={v => setFormData(d => ({...d, location: v.target.value}))}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-accent font-body"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Known Site Hazards</label>
                        <input 
                          type="text" placeholder="e.g. Near HV Power lines, Airport FRZ"
                          value={formData.hazards} onChange={v => setFormData(d => ({...d, hazards: v.target.value}))}
                          className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-accent font-body"
                        />
                      </div>
                      <div className="flex gap-10 pt-4">
                        <div className="space-y-4">
                           <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Night Ops?</label>
                           <div className="flex gap-4">
                              {['Yes', 'No'].map(o => (
                                <button key={o} onClick={() => setFormData(d => ({...d, nightFlight: o}))} className={`px-4 py-2 text-[10px] font-ui border transition-all ${formData.nightFlight === o ? 'border-accent text-accent' : 'border-white/10 text-white/30'}`}>{o}</button>
                              ))}
                           </div>
                        </div>
                        <div className="space-y-4">
                           <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Indoor Ops?</label>
                           <div className="flex gap-4">
                              {['Yes', 'No'].map(o => (
                                <button key={o} onClick={() => setFormData(d => ({...d, indoors: o}))} className={`px-4 py-2 text-[10px] font-ui border transition-all ${formData.indoors === o ? 'border-accent text-accent' : 'border-white/10 text-white/30'}`}>{o}</button>
                              ))}
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div className="bg-white/5 border border-white/10 p-6 flex items-start gap-4">
                      <Shield className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-ui text-[10px] tracking-widest uppercase text-white/60 mb-2">Pre-Flight Review</div>
                        <div className="font-body text-sm text-white/40 leading-relaxed max-w-[500px]">
                          By submitting this technical brief, you acknowledge that all data provided will be used to conduct a preliminary feasibility & risk assessment.
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="font-ui text-[10px] tracking-widest uppercase text-white/30">Additional Strategic Notes</label>
                      <textarea 
                        rows={4} placeholder="Any specific outputs required? (e.g. 40MP RAW, 3D Thermal Mesh...)"
                        value={formData.notes} onChange={v => setFormData(d => ({...d, notes: v.target.value}))}
                        className="w-full bg-white/5 border border-white/10 p-6 text-white outline-none focus:border-accent font-body text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Bar */}
              <div className="mt-16 pt-10 border-t border-white/5 flex items-center justify-between">
                <button 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-4 text-white/30 hover:text-white transition-colors font-ui text-[10px] tracking-widest uppercase disabled:opacity-0"
                >
                  <ArrowLeft className="w-4 h-4" /> Go Back
                </button>

                {currentStep < 4 ? (
                  <button 
                    onClick={nextStep}
                    className="flex items-center gap-6 bg-accent text-dark px-10 py-5 font-display text-2xl tracking-widest hover:bg-white transition-all duration-300 active:scale-95"
                  >
                    NEXT SEGMENT <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button 
                    onClick={handleSubmit}
                    disabled={status === 'submitting'}
                    className="flex items-center gap-6 bg-accent text-dark px-12 py-5 font-display text-3xl tracking-[0.2em] hover:bg-white transition-all duration-300 active:scale-95 disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'UPLOADING...' : 'LAUNCH BRIEF →'}
                  </button>
                )}
              </div>
            </>
          )}

          {/* HUD Decoration */}
          <div className="absolute top-4 right-4 text-white/[0.03] pointer-events-none flex items-center gap-2">
            <Activity className="w-4 h-4" />
            <span className="font-mono text-[8px] uppercase tracking-widest font-light">Signal Level: Operational</span>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'SECURITY', desc: 'Encrypted end-to-end data transmission.' },
            { title: 'RESPONSE', desc: 'Average operational feedback within 4 hours.' },
            { title: 'COMPLIANCE', desc: 'All missions conducted under GVC/A2CofC authority.' }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="font-ui text-[9px] tracking-widest uppercase text-accent/40 mb-2">{item.title}</div>
              <div className="font-body text-[11px] text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

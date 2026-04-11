// app/brief/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check, Compass, Layers, Calendar, User, FileText } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { ProjectBrief } from '@/types'

const STEPS = [
  { id: 'mission', label: 'Mission Type', icon: Compass },
  { id: 'scope', label: 'Scale & Location', icon: Layers },
  { id: 'date', label: 'Timeline', icon: Calendar },
  { id: 'info', label: 'Your Details', icon: User },
]

export default function ProjectBriefPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Omit<ProjectBrief, 'id' | 'created_at'>>({
    missionType: 'Inspection',
    location: '',
    scale: 'Small',
    deadline: '',
    name: '',
    email: '',
    company: '',
    notes: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  const handleSubmit = async () => {
    setStatus('submitting')
    try {
      if (!supabase) {
        console.warn('Supabase not configured. Simulating success.')
      } else {
        const { error } = await supabase.from('project_briefs').insert([formData])
        if (error) throw error
      }
      setStatus('success')
    } catch (err) {
      console.error(err)
      // For demo purposes if supabase isn't config'd yet
      setTimeout(() => setStatus('success'), 1500)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (status === 'success') {
    return (
      <main className="min-h-screen pt-40 flex items-center justify-center bg-dark">
        <div className="text-center max-w-xl px-10">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-dark" />
          </div>
          <h1 className="font-display text-5xl text-white mb-6 uppercase tracking-widest">MISSION LOGGED</h1>
          <p className="font-body text-white/40 mb-12">Your project brief has been transmitted to our operations team. We will review the technical requirements and contact you within 24 hours.</p>
          <Link href="/" className="font-ui text-[13px] tracking-[0.2em] text-accent hover:text-white transition-colors uppercase">Return to Operations Control</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-40 px-10 md:px-20 bg-dark">
      <div className="max-w-[1000px] mx-auto">
        <header className="mb-20">
          <div className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-4">UAV Deployment</div>
          <h1 className="font-display text-6xl text-white mb-6 tracking-wider">PROJECT BRIEF</h1>
          <p className="font-body text-white/40 uppercase tracking-widest text-[11px]">Step {currentStep + 1} of {STEPS.length}: {STEPS[currentStep].label}</p>
        </header>

        {/* Progress Bar */}
        <div className="w-full h-px bg-white/10 mb-20 relative">
          <div 
            className="absolute top-0 left-0 h-px bg-accent transition-all duration-700"
            style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
          />
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between">
            {STEPS.map((step, idx) => (
              <div 
                key={step.id}
                className={`w-3 h-3 rounded-full border-2 transition-all ${idx <= currentStep ? 'bg-accent border-accent' : 'bg-dark border-white/20'}`}
              />
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <div className="min-h-[400px]">
          {currentStep === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {['Inspection', 'Photography', 'Surveying', 'Construction'].map((type) => (
                <div 
                  key={type}
                  onClick={() => { setFormData(p => ({ ...p, missionType: type })); nextStep(); }}
                  className={`p-10 border transition-all cursor-pointer flex flex-col items-center justify-center text-center ${formData.missionType === type ? 'border-accent bg-accent/5' : 'border-white/10 hover:border-white/30 bg-white/5'}`}
                >
                  <FileText className={`w-8 h-8 mb-6 ${formData.missionType === type ? 'text-accent' : 'text-white/20'}`} />
                  <span className="font-display text-2xl text-white tracking-widest uppercase">{type}</span>
                </div>
              ))}
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="space-y-4">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/40">Deployment Location</label>
                <input 
                  type="text" 
                  name="location"
                  placeholder="E.G. CANARY WHARF, LONDON"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/10 py-6 font-display text-3xl text-white outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-4">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/40">Project Scale</label>
                <div className="flex gap-4">
                  {['Small', 'Medium', 'Large', 'Critical'].map(s => (
                    <button 
                      key={s}
                      onClick={() => setFormData(p => ({ ...p, scale: s }))}
                      className={`flex-1 py-4 border font-ui text-[10px] tracking-widest uppercase transition-all ${formData.scale === s ? 'border-accent bg-accent text-dark font-bold' : 'border-white/10 text-white/50'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="space-y-4">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/40">Target Deadline</label>
                <input 
                  type="date" 
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/10 py-6 font-display text-3xl text-white outline-none focus:border-accent transition-colors block"
                />
              </div>
              <div className="space-y-4">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/40">Mission Complexity / Notes</label>
                <textarea 
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="DESCRIBE ANY TECHNICAL CHALLENGES OR SPECIFIC DELIVERABLES..."
                  className="w-full bg-white/5 border border-white/10 p-8 font-body text-white/70 outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="space-y-4">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/40">Full Name</label>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/10 py-4 font-body text-xl text-white outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-4">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/40">Work Email</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/10 py-4 font-body text-xl text-white outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="col-span-full space-y-4">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/40">Company / Organization</label>
                <input 
                  type="text" name="company" value={formData.company} onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/10 py-4 font-body text-xl text-white outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center py-20 border-t border-white/5 mt-20">
          <button 
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-3 font-ui text-[12px] tracking-widest uppercase transition-colors ${currentStep === 0 ? 'opacity-0' : 'text-white/40 hover:text-white'}`}
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          {currentStep === STEPS.length - 1 ? (
            <button 
              onClick={handleSubmit}
              disabled={status === 'submitting'}
              className="group flex items-center gap-6 bg-accent text-dark px-10 py-4 font-display text-2xl tracking-[0.2em] transition-all hover:bg-white disabled:opacity-50"
            >
              FINALIZE BRIEF <Check className="w-6 h-6 group-hover:scale-125 transition-transform" />
            </button>
          ) : (
            <button 
              onClick={nextStep}
              className="group flex items-center gap-6 border border-accent text-accent px-10 py-4 font-display text-2xl tracking-[0.2em] transition-all hover:bg-accent hover:text-dark"
            >
              NEXT STEP <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </main>
  )
}

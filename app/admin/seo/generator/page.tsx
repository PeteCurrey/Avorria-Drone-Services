'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ChevronRight, Wand2, ShieldAlert } from 'lucide-react'
import { servicesData } from '@/lib/services-data'
import { locationsData } from '@/lib/locations-data'
import { industriesData } from '@/lib/industries-data'

export default function SeoGeneratorPage() {
  const [formData, setFormData] = useState({
    pageType: 'service_location',
    service: '',
    location: '',
    sector: '',
    outcome: '',
    targetKeyword: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'checking' | 'passed' | 'failed'>('idle')
  const [score, setScore] = useState(0)

  const handleRunCheck = () => {
    setStatus('checking')
    setTimeout(() => {
      // Mock quality check
      if (formData.service && (formData.location || formData.sector)) {
        setScore(85)
        setStatus('passed')
      } else {
        setScore(40)
        setStatus('failed')
      }
    }, 1500)
  }

  const handleGenerate = () => {
    // In a real app, this would post to an API and insert into DB.
    alert('Mock: Page added to Rollout Queue as Draft.')
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="flex items-center gap-4 text-white/40 mb-10">
        <Link href="/admin/seo" className="hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /></Link>
        <span className="font-ui text-[10px] tracking-widest uppercase">SEO Engine</span>
        <ChevronRight className="w-3 h-3" />
        <span className="font-ui text-[10px] tracking-widest uppercase text-white">Page Generator</span>
      </div>

      <div>
        <h1 className="font-display text-4xl text-white uppercase tracking-widest mb-4 flex items-center gap-4">
          <Wand2 className="w-8 h-8 text-accent" /> Page Generator
        </h1>
        <p className="font-body text-sm text-white/40 uppercase tracking-widest max-w-2xl leading-relaxed">
          Configure a new SEO landing page. The system will build the context, pull the correct deliverables, and assemble the internal links. Pages must pass a quality check before publishing.
        </p>
      </div>

      <div className="bg-black border border-white/5 p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/60">Page Type</label>
            <select 
              className="w-full bg-white/5 border border-white/10 p-4 font-ui text-[11px] tracking-widest text-white uppercase focus:outline-none focus:border-accent"
              value={formData.pageType}
              onChange={e => setFormData({...formData, pageType: e.target.value})}
            >
              <option value="service_location">Service + Location</option>
              <option value="service_sector">Service + Sector</option>
              <option value="service_location_sector">Service + Location + Sector</option>
              <option value="outcome">Outcome Page</option>
              <option value="bundle_location">Bundle + Location</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/60">Core Service</label>
            <select 
              className="w-full bg-white/5 border border-white/10 p-4 font-ui text-[11px] tracking-widest text-white uppercase focus:outline-none focus:border-accent"
              value={formData.service}
              onChange={e => setFormData({...formData, service: e.target.value})}
            >
              <option value="">-- Select Service --</option>
              {servicesData.map(s => (
                <option key={s.slug} value={s.slug}>{s.title.replace(' UK', '')}</option>
              ))}
            </select>
          </div>

          {(formData.pageType.includes('location')) && (
            <div className="space-y-2">
              <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/60">Target Location</label>
              <select 
                className="w-full bg-white/5 border border-white/10 p-4 font-ui text-[11px] tracking-widest text-white uppercase focus:outline-none focus:border-accent"
                value={formData.location}
                onChange={e => setFormData({...formData, location: e.target.value})}
              >
                <option value="">-- Select Location --</option>
                {locationsData.map(l => (
                  <option key={l.slug} value={l.slug}>{l.name}</option>
                ))}
              </select>
            </div>
          )}

          {(formData.pageType.includes('sector')) && (
            <div className="space-y-2">
              <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/60">Target Sector</label>
              <select 
                className="w-full bg-white/5 border border-white/10 p-4 font-ui text-[11px] tracking-widest text-white uppercase focus:outline-none focus:border-accent"
                value={formData.sector}
                onChange={e => setFormData({...formData, sector: e.target.value})}
              >
                <option value="">-- Select Sector --</option>
                {industriesData.map(i => (
                  <option key={i.slug} value={i.slug}>{i.title}</option>
                ))}
              </select>
            </div>
          )}

          <div className="space-y-2 md:col-span-2">
            <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/60">Primary Target Keyword</label>
            <input 
              type="text" 
              placeholder="e.g. drone roof inspections london" 
              className="w-full bg-white/5 border border-white/10 p-4 font-ui text-[11px] tracking-widest text-white uppercase focus:outline-none focus:border-accent"
              value={formData.targetKeyword}
              onChange={e => setFormData({...formData, targetKeyword: e.target.value})}
            />
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={handleRunCheck}
              disabled={status === 'checking'}
              className="px-8 py-4 border border-white/20 font-ui text-[11px] tracking-widest uppercase text-white hover:bg-white hover:text-dark transition-all disabled:opacity-50"
            >
              {status === 'checking' ? 'Analyzing...' : 'Run Quality Check'}
            </button>
            
            {status === 'passed' && (
              <div className="flex items-center gap-2 text-green-500 font-ui text-[10px] tracking-[0.2em] uppercase">
                <CheckCircle2 className="w-4 h-4" /> Score: {score}/100 - Publishable
              </div>
            )}
            {status === 'failed' && (
              <div className="flex items-center gap-2 text-red-500 font-ui text-[10px] tracking-[0.2em] uppercase">
                <ShieldAlert className="w-4 h-4" /> Score: {score}/100 - Too Thin
              </div>
            )}
          </div>

          <button 
            onClick={handleGenerate}
            disabled={status !== 'passed'}
            className="px-8 py-4 bg-accent text-dark font-display text-lg tracking-[0.1em] uppercase hover:bg-white transition-all disabled:opacity-50 disabled:bg-white/10 disabled:text-white/30"
          >
            Generate Draft
          </button>
        </div>
      </div>
    </div>
  )
}

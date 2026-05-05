'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  Mail, 
  Building2, 
  Briefcase, 
  Target, 
  MapPin, 
  Phone, 
  Calendar,
  Check, 
  Download, 
  ArrowRight,
  ShieldCheck,
  Zap,
  LayoutDashboard,
  FileText,
  ChevronRight,
  Activity,
  BookOpen
} from 'lucide-react'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import { LeadMagnetAsset, sectors, projectTypes, getAutomationRoute } from '@/lib/lead-magnets-config'
import { getAssetContent } from '@/lib/asset-content'
import AssetContentRenderer from '@/components/ui/AssetContentRenderer'
import { trackEvent, recordJourneyStep } from '@/lib/analytics'
import { useAttribution } from '@/components/analytics/useAttribution'

interface LeadCaptureFormProps {
  asset: LeadMagnetAsset
  hasContent?: boolean
}

export default function LeadCaptureForm({ asset, hasContent }: LeadCaptureFormProps) {
  const [step, setStep] = useState<'form' | 'success' | 'reading'>('form')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const content = getAssetContent(asset.slug)
  const { getAttributionData } = useAttribution()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    sector: '',
    projectType: '',
    phone: '',
    location: '',
    timeframe: '',
    consent: false
  })

  const route = getAutomationRoute(formData.sector, formData.projectType)

  const handleFormFocus = () => {
    trackEvent(asset.analyticsEvents.formStarted, {
      asset_name: asset.title,
      asset_slug: asset.slug,
      sector: formData.sector,
      project_type: formData.projectType,
    })
    recordJourneyStep(`Started lead magnet form: ${asset.title}`)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const attribution = getAttributionData()

    trackEvent(asset.analyticsEvents.formSubmitted, {
      asset_name: asset.title,
      asset_slug: asset.slug,
      sector: formData.sector,
      project_type: formData.projectType,
      ...attribution
    })
    
    // Save lead to Supabase via API
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'lead_magnet',
          asset_id: asset.id,
          asset_title: asset.title,
          automation_route: route,
          attribution: attribution
        })
      })
    } catch (err) {
      console.error('Lead submission failed:', err)
    }
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setStep('success')
    trackEvent(asset.analyticsEvents.assetUnlocked)
    recordJourneyStep(`Unlocked asset: ${asset.title}`)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {step === 'form' ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-dark border border-white/10 p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-white uppercase tracking-widest">Get the Resource</h3>
                <p className="font-ui text-[9px] tracking-widest uppercase text-white/40">Enter your details to unlock this guide.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-2">
                  <label className="font-ui text-[9px] tracking-widest uppercase text-white/30 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                    <input 
                      required
                      type="text" 
                      placeholder="Name" 
                      className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-ui text-xs tracking-widest text-white focus:border-accent outline-none transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="font-ui text-[9px] tracking-widest uppercase text-white/30 ml-1">Email Uplink</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                    <input 
                      required
                      type="email" 
                      placeholder="contact@company.com" 
                      className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-ui text-xs tracking-widest text-white focus:border-accent outline-none transition-colors"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label className="font-ui text-[9px] tracking-widest uppercase text-white/30 ml-1">Company</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-ui text-xs tracking-widest text-white focus:border-accent outline-none transition-colors"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                {/* Phone (Optional) */}
                <div className="space-y-2">
                  <label className="font-ui text-[9px] tracking-widest uppercase text-white/30 ml-1">Phone (Optional)</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                    <input 
                      type="tel" 
                      placeholder="+44 0000 000 000" 
                      className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-ui text-xs tracking-widest text-white focus:border-accent outline-none transition-colors"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                {/* Sector Select */}
                <div className="space-y-2">
                  <label className="font-ui text-[9px] tracking-widest uppercase text-white/30 ml-1">Which best describes you?</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                    <select 
                      required
                      className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-ui text-xs tracking-widest text-white focus:border-accent outline-none transition-colors appearance-none"
                      value={formData.sector}
                      onChange={e => setFormData({...formData, sector: e.target.value})}
                    >
                      <option value="" className="bg-dark">Select Sector</option>
                      {sectors.map(s => <option key={s} value={s} className="bg-dark">{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Project Type Select */}
                <div className="space-y-2">
                  <label className="font-ui text-[9px] tracking-widest uppercase text-white/30 ml-1">What are you most interested in?</label>
                  <div className="relative">
                    <Target className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                    <select 
                      required
                      className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-ui text-xs tracking-widest text-white focus:border-accent outline-none transition-colors appearance-none"
                      value={formData.projectType}
                      onChange={e => setFormData({...formData, projectType: e.target.value})}
                    >
                      <option value="" className="bg-dark">Select Project Type</option>
                      {projectTypes.map(p => <option key={p} value={p} className="bg-dark">{p}</option>)}
                    </select>
                  </div>
                </div>

                {/* Location (Optional) */}
                <div className="space-y-2">
                  <label className="font-ui text-[9px] tracking-widest uppercase text-white/30 ml-1">Location (Optional)</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                    <input 
                      type="text" 
                      placeholder="e.g. London / Manchester" 
                      className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-ui text-xs tracking-widest text-white focus:border-accent outline-none transition-colors"
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                </div>

                {/* Timeframe (Optional) */}
                <div className="space-y-2">
                  <label className="font-ui text-[9px] tracking-widest uppercase text-white/30 ml-1">Target Timeframe</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                    <select 
                      className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-ui text-xs tracking-widest text-white focus:border-accent outline-none transition-colors appearance-none"
                      value={formData.timeframe}
                      onChange={e => setFormData({...formData, timeframe: e.target.value})}
                    >
                      <option value="" className="bg-dark">Select Timeframe</option>
                      <option value="immediate" className="bg-dark">Immediate / Urgent</option>
                      <option value="next-30-days" className="bg-dark">Next 30 Days</option>
                      <option value="next-90-days" className="bg-dark">Next 90 Days</option>
                      <option value="budgeting" className="bg-dark">Budgeting / Future</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="md:col-span-2 pt-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    required
                    type="checkbox" 
                    className="hidden" 
                    checked={formData.consent}
                    onChange={() => setFormData({...formData, consent: !formData.consent})}
                  />
                  <div className={`w-5 h-5 border flex items-center justify-center shrink-0 transition-all ${formData.consent ? 'border-accent bg-accent text-dark' : 'border-white/20'}`}>
                    {formData.consent && <Check className="w-4 h-4" />}
                  </div>
                  <span className="font-ui text-[10px] tracking-widest uppercase text-white/40 leading-tight">
                    I consent to receive the requested resource and related follow-up about drone operations.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-6 font-display text-2xl tracking-[0.1em] uppercase transition-all flex items-center justify-center gap-4 ${
                  isSubmitting ? 'bg-white/5 text-white/20' : 'bg-accent text-dark hover:bg-white'
                }`}
              >
                {isSubmitting ? (
                  <>Processing Request...</>
                ) : (
                  <>Unlock Resource <ArrowRight className="w-6 h-6" /></>
                )}
              </button>
            </form>
          </motion.div>
        ) : step === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-mid border border-accent/20 p-8 md:p-16 text-center space-y-12"
          >
            <div className="w-24 h-24 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center text-accent mx-auto mb-8">
              <Check className="w-10 h-10" />
            </div>
            
            <div className="space-y-6">
              <h3 className="font-display text-4xl text-white uppercase tracking-tight leading-none">
                {asset.pdfStatus === 'ready' ? 'Download Ready' : 'Resource Unlocked'}
              </h3>
              <p className="font-body text-sm text-white/50 uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
                {asset.pdfStatus === 'ready'
                  ? "Your guide is ready to download below. We've also prepared recommended next steps based on your sector and project type."
                  : "Your request has been recorded. The full guide content is available to read below. A PDF version is currently being prepared for download."}
              </p>
            </div>

            {/* Read inline or download PDF */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {content && (
                <button 
                  onClick={() => {
                    setStep('reading')
                    trackEvent('inline_reading_started', {
                      asset_slug: asset.slug
                    })
                    recordJourneyStep(`Started inline reading: ${asset.title}`)
                  }}
                  className="inline-flex items-center gap-4 bg-white/5 border border-white/10 text-white px-10 py-5 font-display text-2xl tracking-widest hover:bg-white hover:text-dark transition-all"
                >
                  READ GUIDE INLINE <ChevronRight className="w-6 h-6" />
                </button>
              )}
              {asset.pdfStatus === 'ready' && asset.pdfUrl && (
                <a
                  href={asset.pdfUrl}
                  download
                  onClick={() => {
                    trackEvent(asset.analyticsEvents.pdfDownloaded);
                    recordJourneyStep(`Downloaded PDF: ${asset.title}`);
                  }}
                  className="inline-flex items-center gap-4 border border-accent text-accent px-10 py-5 font-display text-2xl tracking-widest hover:bg-accent hover:text-dark transition-all"
                >
                  DOWNLOAD PDF <Download className="w-6 h-6" />
                </a>
              )}
              {asset.pdfStatus === 'pending' && (
                <span className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 font-ui text-[9px] tracking-widest uppercase text-white/20">
                  PDF export pending
                </span>
              )}
            </div>

            {/* Recommendation Panel */}
            <div className="pt-16 border-t border-white/10 text-left space-y-12">
               <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-accent" />
                  <span className="font-ui text-xl text-white uppercase tracking-widest">Recommended Next Steps</span>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-dark border border-white/5 p-10 space-y-8 group hover:border-accent/30 transition-all">
                     <div className="svc-tag"><SectionTag number="REC" text="Bundle Route" /></div>
                     <h4 className="font-display text-2xl text-white uppercase tracking-widest">{route.recommendedBundle}</h4>
                     <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed">
                        Based on your profile, this package provides the most effective route for your requirements.
                     </p>
                     <Link href={`/bundles#${route.recommendedBundle.toLowerCase().replace(/ /g, '-')}`} className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent flex items-center gap-2 group-hover:text-white transition-colors">
                        View Bundle <ChevronRight className="w-3 h-3" />
                     </Link>
                  </div>

                  <div className="bg-dark border border-white/5 p-10 space-y-8 group hover:border-accent/30 transition-all">
                     <div className="svc-tag"><SectionTag number="SEC" text="Industry Hub" /></div>
                     <h4 className="font-display text-2xl text-white uppercase tracking-widest">{formData.sector || 'Your Sector'}</h4>
                     <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed">
                        Explore specific drone workflows and outcomes tailored for your sector.
                     </p>
                     <Link href={`/sectors/${route.sectorSlug}`} className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent flex items-center gap-2 group-hover:text-white transition-colors">
                        Explore Sector <ChevronRight className="w-3 h-3" />
                     </Link>
                  </div>
               </div>

               <div className="p-12 bg-accent/5 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-4 max-w-xl text-center md:text-left">
                     <h4 className="font-display text-2xl text-white uppercase tracking-widest">Start a Qualified Brief</h4>
                     <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
                        Move from scoping to execution. Submit a project brief with your context already applied.
                     </p>
                  </div>
                  <Link 
                    href={`/brief?source=lead-magnet&asset=${asset.slug}&sector=${formData.sector.toLowerCase().replace(/ \/ /g, '-').replace(/ /g, '-')}&projectType=${formData.projectType.toLowerCase().replace(/ \/ /g, '-').replace(/ /g, '-')}&package=${route.recommendedBundle.toLowerCase().replace(/ /g, '-')}`}
                    onClick={() => {
                      trackEvent('brief_clicked', {
                        source_asset: asset.slug,
                        sector: formData.sector,
                        project_type: formData.projectType
                      })
                      recordJourneyStep(`Clicked Start Brief from ${asset.title} success screen`)
                    }}
                    className="bg-accent text-dark px-12 py-5 font-display text-2xl tracking-widest hover:bg-white transition-all flex items-center gap-4"
                  >
                    START BRIEF <ArrowRight className="w-6 h-6" />
                  </Link>
               </div>
               
               <div className="flex justify-center pt-8">
                  <p className="font-ui text-[9px] tracking-widest uppercase text-white/20">
                    Lead Routed to {route.category} · Automation Integration Pending
                  </p>
               </div>
            </div>
          </motion.div>
        ) : (
          /* Reading state — full inline guide content */
          <motion.div
            key="reading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-mid border border-white/10 p-8 md:p-16"
          >
            <div className="flex items-center justify-between mb-12 pb-8 border-b border-white/10">
              <div>
                <h3 className="font-display text-3xl text-white uppercase tracking-widest">{asset.title}</h3>
                <p className="font-ui text-[9px] tracking-widest uppercase text-accent/60 mt-2">{asset.type} · Unlocked</p>
              </div>
              <button
                onClick={() => setStep('success')}
                className="font-ui text-[9px] tracking-widest uppercase text-white/30 hover:text-white transition-colors flex items-center gap-2"
              >
                ← Back to next steps
              </button>
            </div>

            {content && <AssetContentRenderer content={content} />}

            {/* Bottom CTA */}
            <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                <p className="font-ui text-[9px] tracking-widest uppercase text-white/20">Ready to move forward?</p>
                <p className="font-body text-sm text-white/50 uppercase tracking-widest">Start a project brief with your context pre-applied.</p>
              </div>
              <Link
                href={`/brief?source=lead-magnet&asset=${asset.slug}&sector=${formData.sector.toLowerCase().replace(/ \/ /g, '-').replace(/ /g, '-')}`}
                onClick={() => trackEvent(asset.analyticsEvents.briefClicked)}
                className="bg-accent text-dark px-10 py-5 font-display text-xl tracking-widest hover:bg-white transition-all flex items-center gap-4 shrink-0"
              >
                START PROJECT BRIEF <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


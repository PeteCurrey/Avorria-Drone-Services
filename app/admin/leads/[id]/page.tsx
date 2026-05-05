'use client'

import { useState, use, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronLeft, 
  Target, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Building2, 
  Activity, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  AlertCircle,
  Clock,
  Phone,
  Mail,
  User,
  ArrowRight,
  ClipboardList,
  ShieldCheck,
  Zap,
  Hammer,
  Image as ImageIcon,
  Box,
  Copy,
  ChevronRight,
  Loader2
} from 'lucide-react'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'

export default function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [lead, setLead] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('New')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    async function fetchLead() {
      try {
        const response = await fetch(`/api/admin/leads`)
        const data = await response.json()
        const currentLead = data.find((l: any) => l.id === id)
        if (currentLead) {
          setLead(currentLead)
          setStatus(currentLead.status)
        }
      } catch (err) {
        console.error('Failed to fetch lead:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchLead()
  }, [id])

  const handleStatusChange = async (newStatus: string) => {
    try {
      const response = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      })
      if (response.ok) {
        setStatus(newStatus)
      }
    } catch (err) {
      console.error('Failed to update status:', err)
    }
  }

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'Hot': return 'text-orange-500 bg-orange-500/10 border-orange-500/20'
      case 'Qualified': return 'text-accent bg-accent/10 border-accent/20'
      case 'Nurture': return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
      default: return 'text-white/30 bg-white/5 border-white/10'
    }
  }

  const copyEmail = () => {
    if (lead) {
      navigator.clipboard.writeText(lead.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-accent animate-spin mb-6" />
        <span className="font-ui text-xs tracking-[0.4em] uppercase text-white/20">Decrypting Lead Intel...</span>
      </div>
    )
  }

  if (!lead) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center">
        <AlertCircle className="w-12 h-12 text-red-400 mb-6" />
        <span className="font-ui text-xs tracking-[0.4em] uppercase text-white/20">Lead Signal Lost</span>
        <Link href="/admin/leads" className="mt-8 text-accent underline underline-offset-4 font-ui text-[10px] tracking-widest uppercase">Return to Command Centre</Link>
      </div>
    )
  }

  const attr = lead.attribution || {}
  const journey = attr.journey_summary || []

  return (
    <main className="min-h-screen bg-dark text-white pt-32 pb-20 px-8 md:px-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Navigation */}
        <Link href="/admin/leads" className="flex items-center gap-2 font-ui text-[9px] tracking-widest uppercase text-white/30 hover:text-white mb-12">
           <ChevronLeft className="w-3 h-3" /> Back to Leads
        </Link>

        {/* Lead Header */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16 pb-12 border-b border-white/5">
            <div>
               <div className="flex items-center gap-4 mb-6">
                  <span className={`inline-block px-4 py-1 border font-ui text-[9px] tracking-[0.2em] uppercase rounded-full ${getQualityColor(lead.metadata?.quality || 'Hot')}`}>
                     {lead.metadata?.quality || 'Hot'} Lead
                  </span>
                  <span className="font-ui text-[10px] tracking-widest text-white/30 uppercase">{lead.id.substring(0, 8)} · Submitted {new Date(lead.created_at).toLocaleString()}</span>
               </div>
               <h1 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter mb-4 leading-none">
                  {lead.full_name} <span className="text-white/20">/</span> <span className="text-accent">{lead.metadata?.company || 'Direct'}</span>
               </h1>
               <div className="flex flex-wrap gap-8">
                  <button onClick={copyEmail} className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
                     <Mail className="w-4 h-4 group-hover:text-accent" />
                     <span className="font-ui text-[10px] tracking-widest uppercase">{copied ? 'COPIED!' : lead.email_address}</span>
                  </button>
                  <div className="flex items-center gap-3 text-white/40">
                     <Phone className="w-4 h-4" />
                     <span className="font-ui text-[10px] tracking-widest uppercase">{lead.metadata?.phone || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/40">
                     <User className="w-4 h-4" />
                     <span className="font-ui text-[10px] tracking-widest uppercase">{lead.metadata?.role || 'N/A'}</span>
                  </div>
               </div>
            </div>
           
           <div className="flex flex-col items-end gap-6">
              <div className="text-right">
                 <div className="font-ui text-[9px] tracking-[0.4em] uppercase text-white/30 mb-2">Lead Score</div>
                 <div className="font-display text-7xl text-white">{lead.score}<span className="text-white/10 text-2xl">/100</span></div>
              </div>
              <div className="flex gap-4">
                 <select 
                   value={status}
                   onChange={e => handleStatusChange(e.target.value)}
                   className="bg-white/5 border border-white/10 px-6 py-3 font-ui text-[10px] tracking-widest uppercase text-white focus:outline-none"
                 >
                    <option value="New">Status: New</option>
                    <option value="Reviewed">Status: Reviewed</option>
                    <option value="Contacted">Status: Contacted</option>
                    <option value="Quoted">Status: Quoted</option>
                    <option value="Won">Status: Won</option>
                    <option value="Lost">Status: Lost</option>
                 </select>
                 <button className="bg-accent text-dark px-8 py-3 font-display text-xl tracking-widest hover:bg-white transition-all">
                    CREATE QUOTE
                 </button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           
           {/* Left Column: Project Details */}
           <div className="lg:col-span-8 space-y-16">
              
              {/* Description */}
              <section>
                 <h3 className="font-display text-2xl text-white uppercase tracking-widest mb-8 border-l-2 border-accent pl-6">Project Brief</h3>
                 <div className="bg-white/[0.02] border border-white/5 p-10">
                    <p className="font-body text-lg text-white/70 leading-relaxed uppercase tracking-widest italic">
                       &quot;{lead.message_body || 'No description provided.'}&quot;
                    </p>
                 </div>
              </section>

              {/* Classification Grid */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                 {[
                   { label: 'Service Interested', val: lead.metadata?.serviceInterest || lead.lead_type, icon: Activity },
                   { label: 'Recommended Bundle', val: lead.metadata?.packageInterest || 'N/A', icon: Target, accent: true },
                   { label: 'Output Family', val: lead.metadata?.outcomes?.[0] || 'N/A', icon: FileText },
                   { label: 'Sector', val: lead.metadata?.sector || 'N/A', icon: Building2 },
                   { label: 'Location', val: lead.metadata?.location || 'Unknown', icon: MapPin },
                   { label: 'Site Type', val: lead.metadata?.siteType || 'N/A', icon: Briefcase },
                   { label: 'Urgency', val: lead.metadata?.urgency || 'N/A', icon: Clock },
                   { label: 'Complexity', val: 'Assessment Pending', icon: AlertCircle }
                 ].map((item, i) => (
                   <div key={i} className="bg-dark p-8 group">
                      <div className="flex items-center gap-4 mb-4">
                         <item.icon className={`w-4 h-4 ${item.accent ? 'text-accent' : 'text-white/20'}`} />
                         <span className="font-ui text-[9px] tracking-widest uppercase text-white/30">{item.label}</span>
                      </div>
                      <div className={`font-display text-xl uppercase tracking-widest ${item.accent ? 'text-accent' : 'text-white'}`}>
                         {item.val}
                      </div>
                   </div>
                 ))}
              </section>

              {/* Deliverables & Constraints */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="bg-white/[0.02] border border-white/5 p-10">
                    <h4 className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-8">Selected Deliverables</h4>
                    <ul className="space-y-4">
                       {(lead.metadata?.deliverables || []).map((d: string) => (
                         <li key={d} className="flex items-center gap-4">
                            <CheckCircle2 className="w-4 h-4 text-accent/50" />
                            <span className="font-ui text-[10px] tracking-widest text-white/60 uppercase">{d}</span>
                         </li>
                       ))}
                       {(!lead.metadata?.deliverables || lead.metadata?.deliverables.length === 0) && (
                          <li className="font-ui text-[10px] tracking-widest text-white/20 uppercase italic">None specified</li>
                       )}
                    </ul>
                 </div>
                 <div className="bg-white/[0.02] border border-white/5 p-10">
                    <h4 className="font-ui text-[11px] tracking-[0.4em] uppercase text-red-400 mb-8">Known Constraints</h4>
                    <ul className="space-y-4">
                       {(lead.metadata?.constraints || []).map((c: string) => (
                         <li key={c} className="flex items-center gap-4">
                            <AlertCircle className="w-4 h-4 text-red-400/30" />
                            <span className="font-ui text-[10px] tracking-widest text-white/60 uppercase">{c}</span>
                         </li>
                       ))}
                       {(!lead.metadata?.constraints || lead.metadata?.constraints.length === 0) && (
                          <li className="font-ui text-[10px] tracking-widest text-white/20 uppercase italic">None specified</li>
                       )}
                    </ul>
                 </div>
              </div>

              {/* Journey & Attribution */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="bg-dark/40 border border-white/5 p-10">
                    <h4 className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent mb-8">Lead Journey Timeline</h4>
                    <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                       {lead.attribution.journey_summary.map((step, i) => (
                         <div key={i} className="flex gap-4 relative">
                            <div className="w-4 h-4 rounded-full bg-dark border border-white/20 flex-shrink-0 z-10 flex items-center justify-center">
                               <div className={`w-1.5 h-1.5 rounded-full ${i === lead.attribution.journey_summary.length - 1 ? 'bg-accent animate-pulse' : 'bg-white/10'}`} />
                            </div>
                            <span className="font-ui text-[10px] tracking-widest uppercase text-white/50">{step}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-dark/40 border border-white/5 p-10">
                    <h4 className="font-ui text-[10px] tracking-[0.4em] uppercase text-white/30 mb-8">Attribution Details</h4>
                    <div className="space-y-8">
                       <div>
                          <span className="block font-ui text-[8px] tracking-widest text-white/20 uppercase mb-2">First Touch</span>
                          <div className="p-3 bg-white/[0.02] border border-white/5">
                             <div className="font-ui text-[9px] tracking-widest uppercase text-accent mb-1">{lead.attribution.first_touch_source} / {lead.attribution.first_touch_medium}</div>
                             <div className="font-ui text-[8px] tracking-widest uppercase text-white/40 truncate">{lead.attribution.first_touch_url}</div>
                          </div>
                       </div>
                       <div>
                          <span className="block font-ui text-[8px] tracking-widest text-white/20 uppercase mb-2">Last Touch</span>
                          <div className="p-3 bg-white/[0.02] border border-white/5">
                             <div className="font-ui text-[9px] tracking-widest uppercase text-accent mb-1">{lead.attribution.last_touch_source} / {lead.attribution.last_touch_medium}</div>
                             <div className="font-ui text-[8px] tracking-widest uppercase text-white/40 truncate">{lead.attribution.last_touch_url}</div>
                          </div>
                       </div>
                       <div>
                          <span className="block font-ui text-[8px] tracking-widest text-white/20 uppercase mb-2">Campaign Context (UTMs)</span>
                          <div className="grid grid-cols-2 gap-2">
                             {['source', 'medium', 'campaign', 'content', 'term'].map(key => (
                               <div key={key} className="p-2 bg-white/[0.01] border border-white/5">
                                  <span className="block font-ui text-[7px] text-white/20 uppercase mb-1">{key}</span>
                                  <span className="block font-ui text-[8px] text-white/60 uppercase truncate">{(lead.attribution as any)[`utm_${key}`]}</span>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
              </section>
           </div>

           {/* Right Column: Scoring & Actions */}
           <div className="lg:col-span-4 space-y-12">
              
              {/* Score Breakdown */}
              <div className="bg-mid border border-white/10 p-12">
                 <h3 className="font-display text-2xl text-white uppercase tracking-widest mb-8">Score Breakdown</h3>
                 <div className="space-y-8">
                    {[
                      { label: 'Commercial Intent', score: lead.breakdown.intent, max: 25 },
                      { label: 'Project Clarity', score: lead.breakdown.clarity, max: 20 },
                      { label: 'Commercial Value', score: lead.breakdown.value, max: 20 },
                      { label: 'Urgency / Readiness', score: lead.breakdown.readiness, max: 15 },
                      { label: 'Strategic Fit', score: lead.breakdown.strategic, max: 20 }
                    ].map((item, i) => (
                      <div key={i}>
                         <div className="flex justify-between font-ui text-[9px] tracking-[0.2em] uppercase mb-3">
                            <span className="text-white/40">{item.label}</span>
                            <span className="text-white">{item.score} / {item.max}</span>
                         </div>
                         <div className="h-1 bg-white/5 relative">
                            <motion.div 
                              initial={{ scaleX: 0 }} 
                              animate={{ scaleX: item.score / item.max }} 
                              className="absolute inset-0 bg-accent origin-left" 
                            />
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="mt-12 p-6 bg-accent/5 border border-accent/10">
                    <p className="font-body text-[10px] text-accent/80 uppercase tracking-widest leading-relaxed italic text-center">
                       This lead meets high-priority criteria for sector, location, and commercial output.
                    </p>
                 </div>
              </div>

              {/* Next Action */}
              <div className="bg-accent/10 border border-accent/20 p-12">
                 <div className="flex items-center gap-4 mb-8">
                    <Zap className="w-5 h-5 text-accent" />
                    <h3 className="font-display text-2xl text-accent uppercase tracking-widest">Next Action</h3>
                 </div>
                 <p className="font-body text-lg text-white leading-relaxed uppercase tracking-widest mb-10">
                    {lead.nextAction}
                 </p>
                 <div className="space-y-4">
                    <button className="w-full flex items-center justify-between p-6 bg-dark border border-white/10 hover:border-accent transition-all group">
                       <span className="font-ui text-[10px] tracking-widest uppercase text-white/60 group-hover:text-white">Prepare FM Quote</span>
                       <ChevronRight className="w-4 h-4 text-accent" />
                    </button>
                    <button className="w-full flex items-center justify-between p-6 bg-dark border border-white/10 hover:border-accent transition-all group">
                       <span className="font-ui text-[10px] tracking-widest uppercase text-white/60 group-hover:text-white">Request Site Photos</span>
                       <ChevronRight className="w-4 h-4 text-accent" />
                    </button>
                 </div>
              </div>

              {/* Admin Actions */}
              <div className="bg-white/[0.02] border border-white/5 p-12">
                 <h4 className="font-ui text-[10px] tracking-[0.4em] uppercase text-white/30 mb-8">Admin Controls</h4>
                 <div className="space-y-4">
                    <button className="w-full text-left p-6 bg-dark/40 border border-white/5 hover:bg-white/5 transition-all font-ui text-[9px] tracking-widest uppercase text-white/40">
                       Move to Nurture Pipeline
                    </button>
                    <button className="w-full text-left p-6 bg-dark/40 border border-white/5 hover:bg-white/5 transition-all font-ui text-[9px] tracking-widest uppercase text-white/40">
                       Assign to Project Manager
                    </button>
                    <button className="w-full text-left p-6 bg-dark/40 border border-white/5 hover:bg-white/5 transition-all font-ui text-[9px] tracking-widest uppercase text-red-400/40 hover:text-red-400">
                       Archive Lead
                    </button>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </main>
  )
}

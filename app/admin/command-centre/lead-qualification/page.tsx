'use client'

import React from 'react'
import { 
  Zap, ShieldCheck, Target, TrendingUp, 
  ArrowRight, Filter, Search, MoreVertical,
  Activity, BarChart3, AlertCircle
} from 'lucide-react'
import { MOCK_LEADS } from '@/lib/admin/mock-data'

export default function LeadQualificationPage() {
  const bands = [
    { label: 'Hot', range: '80–100', color: 'bg-orange-500', count: MOCK_LEADS.filter(l => l.leadScore >= 80).length },
    { label: 'Qualified', range: '60–79', color: 'bg-accent', count: MOCK_LEADS.filter(l => l.leadScore >= 60 && l.leadScore < 80).length },
    { label: 'Nurture', range: '35–59', color: 'bg-blue-500', count: MOCK_LEADS.filter(l => l.leadScore >= 35 && l.leadScore < 60).length },
    { label: 'Low Intent', range: '0–34', color: 'bg-white/20', count: MOCK_LEADS.filter(l => l.leadScore < 35).length },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Intelligence</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Lead Qualification</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Score, route and prioritise project intelligence for peak operational efficiency.</p>
        </div>
      </div>

      {/* Quality Bands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bands.map((band, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/5 p-8 group hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 ${band.color}`} />
            <div className="flex justify-between items-start mb-6">
               <div className="font-mono text-[9px] text-white/30 uppercase tracking-[0.3em]">{band.range} SCORE</div>
               <Activity className="w-4 h-4 text-white/10 group-hover:text-accent transition-colors" />
            </div>
            <div className="font-display text-4xl text-white mb-2 tracking-widest">{band.count}</div>
            <div className="font-ui text-[10px] tracking-widest text-white/30 uppercase">{band.label} Leads</div>
          </div>
        ))}
      </div>

      {/* Main Analysis Area */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
         
         {/* Lead Scoring Table */}
         <div className="xl:col-span-8 space-y-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-6">
               <h2 className="font-display text-2xl text-white uppercase tracking-widest">Scoring Matrix</h2>
               <div className="flex items-center gap-4">
                  <div className="relative">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20" />
                     <input 
                       type="text" 
                       placeholder="FILTER LEADS..."
                       className="bg-white/5 border border-white/10 px-10 py-2 font-mono text-[9px] tracking-widest text-white placeholder:text-white/20 focus:outline-none focus:border-accent/40"
                     />
                  </div>
               </div>
            </div>

            <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-white/5 bg-white/[0.02]">
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Lead Name / Company</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Intent Indicators</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Strategic Fit</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Final Score</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Routing</th>
                     </tr>
                  </thead>
                  <tbody>
                     {MOCK_LEADS.map((lead) => (
                       <tr key={lead.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                          <td className="p-6">
                             <div className="font-display text-base text-white tracking-widest uppercase mb-1">{lead.company}</div>
                             <div className="font-ui text-[9px] text-white/40 uppercase tracking-widest">{lead.name}</div>
                          </td>
                          <td className="p-6">
                             <div className="space-y-2">
                                <div className="flex justify-between items-center max-w-[120px]">
                                   <span className="font-mono text-[8px] text-white/30 uppercase">Urgency</span>
                                   <span className="font-mono text-[9px] text-accent">90</span>
                                </div>
                                <div className="h-[2px] w-full max-w-[120px] bg-white/5">
                                   <div className="h-full bg-accent" style={{ width: '90%' }} />
                                </div>
                             </div>
                          </td>
                          <td className="p-6">
                             <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-white/5 border border-white/10 font-mono text-[8px] text-white/40 uppercase tracking-widest">H-VALUE</span>
                                <span className="px-2 py-1 bg-accent/10 border border-accent/20 font-mono text-[8px] text-accent uppercase tracking-widest">SECTOR FIT</span>
                             </div>
                          </td>
                          <td className="p-6">
                             <div className={`font-display text-2xl ${lead.leadScore >= 80 ? 'text-orange-400' : 'text-accent'}`}>{lead.leadScore}</div>
                          </td>
                          <td className="p-6 text-right">
                             <button className="px-6 py-2 border border-white/5 font-ui text-[9px] tracking-widest uppercase text-white/40 hover:bg-white hover:text-dark transition-all">
                                Route Lead
                             </button>
                          </td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         {/* Scoring Logic & Weights */}
         <div className="xl:col-span-4 space-y-8">
            <section className="bg-white/[0.02] border border-white/5 p-10">
               <div className="flex items-center gap-4 mb-8">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  <h2 className="font-display text-xl text-white uppercase tracking-widest">Scoring Weights</h2>
               </div>
               
               <div className="space-y-8">
                  {[
                    { label: 'Commercial Intent', weight: 35, desc: 'Cost estimator completion, pricing page views.' },
                    { label: 'Project Clarity', weight: 25, desc: 'Detailed brief submission, site constraints defined.' },
                    { label: 'Strategic Fit', weight: 20, desc: 'Key sectors (Construction, FM, Infra).' },
                    { label: 'Urgency', weight: 20, desc: 'Timeline selection, high-priority flag.' },
                  ].map((w, i) => (
                    <div key={i} className="group">
                       <div className="flex justify-between items-end mb-3">
                          <span className="font-ui text-[10px] text-white uppercase tracking-widest group-hover:text-accent transition-colors">{w.label}</span>
                          <span className="font-mono text-sm text-white/40">{w.weight}%</span>
                       </div>
                       <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                          <div className="h-full bg-accent absolute top-0 left-0 transition-all duration-1000" style={{ width: `${w.weight}%` }} />
                       </div>
                       <p className="mt-2 font-mono text-[8px] text-white/20 uppercase tracking-tighter leading-relaxed">{w.desc}</p>
                    </div>
                  ))}
               </div>

               <div className="mt-12 pt-10 border-t border-white/5">
                  <button className="w-full py-4 border border-accent/20 bg-accent/5 text-accent font-ui text-[10px] tracking-[0.4em] uppercase hover:bg-accent hover:text-dark transition-all">
                     Adjust Scoring Logic
                  </button>
               </div>
            </section>

            <section className="bg-accent/5 border border-accent/10 p-10">
               <div className="flex items-start gap-6">
                  <Zap className="w-6 h-6 text-accent shrink-0" />
                  <div>
                     <h3 className="font-display text-lg text-white uppercase tracking-widest mb-2">Automated Routing</h3>
                     <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed mb-6">
                        Hot leads (80+) are automatically prioritized for manual contact within 15 minutes of submission.
                     </p>
                     <div className="flex items-center gap-3 font-mono text-[9px] text-accent uppercase tracking-widest">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Automation Active
                     </div>
                  </div>
               </div>
            </section>
         </div>

      </div>
    </div>
  )
}

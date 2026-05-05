'use client'

import React from 'react'
import Link from 'next/link'
import { 
  AlertCircle, ShieldAlert, AlertTriangle, 
  Search, Filter, CheckCircle2, MoreVertical,
  ExternalLink, BarChart3, Target, LayoutGrid,
  Zap, ArrowRight
} from 'lucide-react'
import { MOCK_WARNINGS } from '@/lib/admin/mock-data'

export default function ContentQualityPage() {
  const categories = [
    { label: 'Critical Risks', count: MOCK_WARNINGS.filter(w => w.severity === 'High' || w.severity === 'Critical').length, color: 'text-red-500', icon: ShieldAlert },
    { label: 'SEO Warnings', count: 14, color: 'text-accent', icon: Target },
    { label: 'Asset Issues', count: 8, color: 'text-blue-400', icon: LayoutGrid },
    { label: 'Compliance', count: 5, color: 'text-orange-400', icon: ShieldAlert },
  ]

  const riskyTerms = [
     'PFCO', 'CAA Approved', 'Fly anywhere', 'Guaranteed permissions', 
     'Millimetre accurate', 'Survey-grade', 'Accepted by insurers', 
     'RICS report', 'Chartered surveyor', '£10M insurance', 
     'Article 16', 'Crowd operations'
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Compliance & Quality</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Content Quality</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Site-wide audit of SEO integrity, asset health and commercial compliance.</p>
        </div>
        
        <div className="flex gap-4">
           <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-3 font-ui text-[10px] tracking-widest uppercase text-white/60 hover:bg-white/10 transition-all">
              Re-Scan Site
           </button>
           <button className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-500 px-8 py-3 font-ui text-[10px] tracking-widest uppercase font-bold hover:bg-red-500 hover:text-white transition-all">
              Force Quality Check
           </button>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/5 p-8 group hover:border-accent/40 transition-all">
            <div className="flex justify-between items-start mb-6">
               <div className={`p-3 bg-white/5 border border-white/10 ${cat.color}`}>
                  <cat.icon className="w-5 h-5" />
               </div>
               <BarChart3 className="w-3 h-3 text-white/10 group-hover:text-accent transition-colors" />
            </div>
            <div className="font-display text-4xl text-white mb-2 tracking-widest">{cat.count}</div>
            <div className="font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">{cat.label} Detected</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
         
         {/* Warning List */}
         <div className="xl:col-span-8 space-y-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-6">
               <h2 className="font-display text-2xl text-white uppercase tracking-widest">Incident Log</h2>
               <div className="flex gap-4">
                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Filter: Severity (High)</span>
               </div>
            </div>

            <div className="space-y-4">
               {MOCK_WARNINGS.map((warning, i) => (
                 <div key={i} className="bg-white/[0.01] border border-white/5 p-8 flex items-start justify-between group hover:border-red-500/20 transition-all">
                    <div className="flex gap-8">
                       <div className={`mt-1 p-2 bg-white/5 border ${warning.severity === 'High' ? 'border-red-500/50 text-red-500' : 'border-accent/50 text-accent'}`}>
                          <AlertTriangle className="w-4 h-4" />
                       </div>
                       <div>
                          <div className="font-display text-lg text-white uppercase tracking-widest mb-2">{warning.message}</div>
                          <div className="flex items-center gap-6">
                             <div className="flex items-center gap-2">
                                <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Page:</span>
                                <span className="font-mono text-[10px] text-white/60">{warning.pageTitle}</span>
                             </div>
                             <div className="flex items-center gap-2">
                                <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Type:</span>
                                <span className="font-mono text-[10px] text-accent">{warning.type}</span>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                       <Link href={warning.pageUrl} className="p-3 bg-white/5 border border-white/10 hover:bg-white hover:text-dark transition-all">
                          <ExternalLink className="w-4 h-4" />
                       </Link>
                    </div>
                 </div>
               ))}
               
               {/* Additional Mock Warnings */}
               <div className="bg-white/[0.01] border border-white/5 p-8 flex items-start justify-between group hover:border-accent/20 transition-all opacity-60">
                  <div className="flex gap-8">
                     <div className="mt-1 p-2 bg-white/5 border border-accent/50 text-accent">
                        <AlertTriangle className="w-4 h-4" />
                     </div>
                     <div>
                        <div className="font-display text-lg text-white uppercase tracking-widest mb-2">Missing Meta Description</div>
                        <div className="flex items-center gap-6">
                           <div className="flex items-center gap-2">
                              <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Page:</span>
                              <span className="font-mono text-[10px] text-white/60">Construction Monitoring</span>
                           </div>
                           <div className="flex items-center gap-2">
                              <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Type:</span>
                              <span className="font-mono text-[10px] text-accent">SEO</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                     <button className="p-3 bg-white/5 border border-white/10 hover:bg-white hover:text-dark transition-all">
                        <ArrowRight className="w-4 h-4" />
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Compliance / Risky Claims */}
         <div className="xl:col-span-4 space-y-8">
            <section className="bg-red-500/[0.02] border border-red-500/10 p-10">
               <div className="flex items-center gap-4 mb-8">
                  <ShieldAlert className="w-5 h-5 text-red-500" />
                  <h2 className="font-display text-xl text-white uppercase tracking-widest">Risky Claim Detection</h2>
               </div>
               <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed mb-8">
                  The following terms are flagged for review due to regulatory risk or commercial accuracy requirements.
               </p>
               <div className="flex flex-wrap gap-2">
                  {riskyTerms.map((term, i) => (
                    <span key={i} className="px-3 py-1.5 bg-black border border-white/10 font-mono text-[9px] text-white/40 uppercase tracking-widest hover:border-red-500/40 hover:text-red-500 transition-all cursor-default">
                       {term}
                    </span>
                  ))}
               </div>
               <div className="mt-10 pt-10 border-t border-white/10">
                  <div className="flex items-center gap-3 text-red-500/60 font-mono text-[9px] uppercase tracking-widest">
                     <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                     Scanner Active
                  </div>
               </div>
            </section>

            <section className="bg-white/[0.02] border border-white/5 p-10">
               <div className="flex items-center gap-4 mb-8">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h2 className="font-display text-xl text-white uppercase tracking-widest">Clean Pages</h2>
               </div>
               <div className="space-y-4">
                  {[
                    { title: 'Home - Global Hero', score: 100 },
                    { title: 'Project Brief Assistant', score: 98 },
                    { title: 'Commercial Bundles Hub', score: 95 },
                  ].map((page, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-black border border-white/5">
                       <span className="font-ui text-[10px] text-white/60 tracking-widest uppercase">{page.title}</span>
                       <span className="font-mono text-[10px] text-green-500">{page.score}%</span>
                    </div>
                  ))}
               </div>
            </section>
         </div>

      </div>
    </div>
  )
}

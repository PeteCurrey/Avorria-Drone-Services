'use client'

import React from 'react'
import { Activity, TrendingUp, BarChart3, Globe, Search, ArrowRight, Zap } from 'lucide-react'

export default function AnalyticsAttributionPage() {
  return (
    <div className="space-y-16 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Intelligence</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Analytics & Attribution</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Track every project brief back to its origin with multi-touch attribution intelligence.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
         {/* Attribution Source Performance */}
         <div className="xl:col-span-2 space-y-8">
            <h2 className="font-display text-2xl text-white uppercase tracking-widest border-b border-white/5 pb-6">Source Performance</h2>
            <div className="bg-white/[0.01] border border-white/5">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-white/5 bg-white/[0.02]">
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Source / Medium</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Leads</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Conv Rate</th>
                        <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Avg Value</th>
                     </tr>
                  </thead>
                  <tbody className="font-mono text-[10px] text-white/60">
                     <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="p-6 uppercase">Google / Organic</td>
                        <td className="p-6 text-accent">42</td>
                        <td className="p-6">3.2%</td>
                        <td className="p-6">£4,250</td>
                     </tr>
                     <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="p-6 uppercase">Direct / (None)</td>
                        <td className="p-6 text-accent">28</td>
                        <td className="p-6">1.8%</td>
                        <td className="p-6">£2,800</td>
                     </tr>
                     <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="p-6 uppercase">LinkedIn / Social</td>
                        <td className="p-6 text-accent">15</td>
                        <td className="p-6">0.9%</td>
                        <td className="p-6">£8,400</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         {/* Conversion Journey Sidebar */}
         <div className="space-y-8">
            <h2 className="font-display text-2xl text-white uppercase tracking-widest border-b border-white/5 pb-6">Engagement Funnel</h2>
            <div className="space-y-4">
               {[
                 { label: 'Site Entry', value: '45.2k', percent: 100 },
                 { label: 'Service Review', value: '12.4k', percent: 27 },
                 { label: 'Tool Interaction', value: '1.2k', percent: 2.6 },
                 { label: 'Brief Submission', value: '145', percent: 0.3 },
               ].map((step, i) => (
                 <div key={i} className="bg-white/[0.02] border border-white/5 p-6">
                    <div className="flex justify-between items-end mb-3">
                       <span className="font-ui text-[10px] text-white/40 uppercase tracking-widest">{step.label}</span>
                       <span className="font-mono text-[10px] text-white">{step.value}</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 overflow-hidden">
                       <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${step.percent}%` }} />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  )
}

'use client'

import React from 'react'
import { BarChart3, Search, Filter, MoreVertical, Plus, Clock, FileText, ArrowUpRight } from 'lucide-react'
import { MOCK_QUOTES } from '@/lib/admin/mock-data'

export default function QuotePipelinePage() {
  const totalValue = MOCK_QUOTES.reduce((acc, q) => acc + q.value, 0)
  
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Commercial</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Quote Pipeline</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Track project value and conversion velocity from brief to project won.</p>
        </div>
        
        <div className="bg-accent/5 border border-accent/20 p-6 flex flex-col items-end">
           <span className="font-mono text-[9px] text-accent/60 uppercase tracking-widest mb-1">Pipeline Value</span>
           <span className="font-display text-3xl text-accent tracking-widest">£{totalValue.toLocaleString()}</span>
        </div>
      </div>

      {/* Pipeline Stages View */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
         {[
           { stage: 'Draft', count: 2, value: '£8,400' },
           { stage: 'Sent', count: 15, value: '£156,000' },
           { stage: 'Follow-up', count: 6, value: '£34,200' },
           { stage: 'Won', count: 22, value: '£214,000' },
           { stage: 'Lost', count: 4, value: '£12,500' },
         ].map((s, i) => (
           <div key={i} className="bg-white/[0.02] border border-white/5 p-6 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent/20 group-hover:bg-accent transition-colors" />
              <div className="font-ui text-[9px] text-white/20 uppercase tracking-widest mb-4">{s.stage}</div>
              <div className="font-display text-2xl text-white mb-1">{s.count}</div>
              <div className="font-mono text-[10px] text-white/40">{s.value}</div>
           </div>
         ))}
      </div>

      {/* Table Section */}
      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Quote ID / Client</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Service / Bundle</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Value</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Timeline</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Status</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="font-mono text-[10px]">
               {MOCK_QUOTES.map((quote) => (
                 <tr key={quote.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group text-white/60">
                    <td className="p-6">
                       <div className="font-display text-sm text-white uppercase tracking-widest mb-1">{quote.company}</div>
                       <div className="text-[9px] text-accent/50 uppercase tracking-tighter">{quote.id} / {quote.clientName}</div>
                    </td>
                    <td className="p-6">
                       <div className="text-white/80 uppercase mb-1">{quote.service}</div>
                       <div className="text-[8px] text-white/20 uppercase">{quote.bundle || 'Custom Scope'}</div>
                    </td>
                    <td className="p-6 text-white text-base font-display">£{quote.value.toLocaleString()}</td>
                    <td className="p-6">
                       <div className="flex items-center gap-3">
                          <Clock className="w-3 h-3 text-white/20" />
                          <span className="uppercase">{quote.followUpDate ? `Next: ${new Date(quote.followUpDate).toLocaleDateString()}` : 'No Follow-up'}</span>
                       </div>
                    </td>
                    <td className="p-6">
                       <span className={`
                         px-3 py-1 text-[8px] tracking-[0.2em] uppercase border
                         ${quote.status === 'Sent' ? 'bg-accent/10 border-accent/30 text-accent' : 'bg-white/5 border-white/10 text-white/40'}
                       `}>
                          {quote.status}
                       </span>
                    </td>
                    <td className="p-6 text-right">
                       <button className="p-3 hover:bg-white/5 text-white/20 hover:text-white transition-all"><MoreVertical className="w-4 h-4" /></button>
                    </td>
                 </tr>
               ))}
            </tbody>
         </table>
      </div>

      {/* Internal Note */}
      <div className="bg-red-500/5 border border-red-500/10 p-8 flex items-start gap-6">
         <FileText className="w-6 h-6 text-red-500 shrink-0" />
         <div>
            <h3 className="font-display text-lg text-white uppercase tracking-widest mb-2">Quote Generation Pending</h3>
            <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
               Dynamic PDF quote generation is currently in development. Please continue using existing templates and update values manually in the Command Centre for tracking.
            </p>
         </div>
      </div>
    </div>
  )
}

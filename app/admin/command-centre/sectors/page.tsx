'use client'

import React from 'react'
import { Building2, Search, MoreVertical, ExternalLink, Activity } from 'lucide-react'

export default function SectorsAdminPage() {
  const sectors = [
    { name: 'Construction', services: 18, leads: 45, score: 92, status: 'Active' },
    { name: 'Facilities Management', services: 12, leads: 32, score: 88, status: 'Active' },
    { name: 'Commercial Property', services: 8, leads: 22, score: 95, status: 'Active' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Verticals</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Sectors</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Manage industry hubs and monitor vertical-specific lead intelligence.</p>
        </div>
      </div>

      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Sector Name</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Linked Capability</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Lead Flow</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Health Score</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="font-mono text-[10px]">
               {sectors.map((s, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group text-white/60">
                    <td className="p-6 text-white uppercase tracking-widest">{s.name}</td>
                    <td className="p-6 text-white/40">{s.services} Modules</td>
                    <td className="p-6 text-accent">{s.leads}</td>
                    <td className="p-6 text-white">{s.score}%</td>
                    <td className="p-6 text-right">
                       <button className="p-3 hover:bg-white/5 text-white/20 hover:text-white transition-all"><MoreVertical className="w-4 h-4" /></button>
                    </td>
                 </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  )
}

'use client'

import React from 'react'
import { Globe, Search, MoreVertical, ShieldCheck, Clock } from 'lucide-react'

export default function MissionProfilesAdminPage() {
  const profiles = [
    { title: 'High-Level Facade Inspection', type: 'Verified Case Study', sector: 'FM', proof: 'Verified' },
    { title: 'Quarry Volumetric Survey', type: 'Mission Profile', sector: 'Construction', proof: 'Anonymised' },
    { title: 'Solar Farm Thermal Audit', type: 'Example Workflow', sector: 'Energy', proof: 'Example' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Proof of Capability</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Mission Profiles</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Manage verified case studies, project profiles and example workflows.</p>
        </div>
      </div>

      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Profile Title</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Classification</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Sector</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Proof Status</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="font-mono text-[10px]">
               {profiles.map((p, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group text-white/60">
                    <td className="p-6 text-white uppercase tracking-widest">{p.title}</td>
                    <td className="p-6 text-white/40">{p.type}</td>
                    <td className="p-6 text-accent">{p.sector}</td>
                    <td className="p-6">
                       <span className={`px-3 py-1 border text-[8px] uppercase tracking-widest ${p.proof === 'Verified' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-white/5 border-white/10 text-white/40'}`}>
                          {p.proof}
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
    </div>
  )
}

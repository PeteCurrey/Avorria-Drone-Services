'use client'

import React from 'react'
import { Layers, Search, MoreVertical, ExternalLink, Activity } from 'lucide-react'

export default function BundlesAdminPage() {
  const bundles = [
    { name: 'Roof Intelligence Pack', recommendations: 142, selections: 18, roi: '12.6x', status: 'Live' },
    { name: 'Survey Data Pack', recommendations: 85, selections: 12, roi: '14.2x', status: 'Live' },
    { name: 'Visual Sales Pack', recommendations: 42, selections: 6, roi: '8.4x', status: 'Live' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Commercial</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Bundles</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Manage commercial service packages and monitor recommendation-to-conversion flow.</p>
        </div>
      </div>

      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Bundle Name</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Recommended</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Selections</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Est. ROI</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="font-mono text-[10px]">
               {bundles.map((b, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group text-white/60">
                    <td className="p-6 text-white uppercase tracking-widest">{b.name}</td>
                    <td className="p-6 text-white/40">{b.recommendations} Times</td>
                    <td className="p-6 text-accent">{b.selections} Conversions</td>
                    <td className="p-6 text-green-500">{b.roi}</td>
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

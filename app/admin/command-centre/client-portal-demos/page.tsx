'use client'

import React from 'react'
import { LayoutDashboard, Search, MoreVertical, ExternalLink, Activity } from 'lucide-react'

export default function ClientPortalDemosAdminPage() {
  const demos = [
    { name: 'Roof Inspection Demo', type: 'Inspection', views: 342, conversions: 12, status: 'Live' },
    { name: 'Construction Monitoring Hub', type: 'Monitoring', views: 185, conversions: 8, status: 'Live' },
    { name: 'Survey Data Viewer', type: 'Surveying', views: 92, conversions: 5, status: 'Live' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Sales enablement</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Client Portal Demos</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Manage interactive portal demonstrations and monitor stakeholder engagement metrics.</p>
        </div>
      </div>

      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Portal Name</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Portal Type</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Views</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Conversions</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="font-mono text-[10px]">
               {demos.map((d, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group text-white/60">
                    <td className="p-6 text-white uppercase tracking-widest">{d.name}</td>
                    <td className="p-6 text-white/40">{d.type}</td>
                    <td className="p-6 text-accent">{d.views}</td>
                    <td className="p-6 text-white">{d.conversions}</td>
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

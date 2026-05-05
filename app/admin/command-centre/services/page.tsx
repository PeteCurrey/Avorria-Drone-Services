'use client'

import React from 'react'
import { Box, Search, Filter, MoreVertical, ExternalLink, Activity, Target, Zap } from 'lucide-react'

export default function ServicesAdminPage() {
  const services = [
    { name: 'Roof Inspections', url: '/services/roof-inspections', views: '4.2k', leads: 42, quality: 94, status: 'Live' },
    { name: 'Surveying & Mapping', url: '/services/surveying-mapping', views: '2.8k', leads: 38, quality: 88, status: 'Live' },
    { name: 'Thermal Imaging', url: '/services/thermal-imaging', views: '1.5k', leads: 15, quality: 92, status: 'Live' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Portfolio</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Services</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Monitor and manage the performance of all capability-led service pages.</p>
        </div>
      </div>

      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Service Name / URL</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Views (30D)</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Leads</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Quality</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Status</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="font-mono text-[10px]">
               {services.map((s, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group text-white/60">
                    <td className="p-6">
                       <div className="font-display text-base text-white tracking-widest uppercase mb-1">{s.name}</div>
                       <div className="text-[9px] text-white/20 uppercase tracking-tighter truncate max-w-[200px]">{s.url}</div>
                    </td>
                    <td className="p-6 text-white">{s.views}</td>
                    <td className="p-6 text-accent">{s.leads}</td>
                    <td className="p-6">
                       <div className="flex items-center gap-2">
                          <div className="h-1 w-12 bg-white/5"><div className="h-full bg-accent" style={{ width: `${s.quality}%` }} /></div>
                          <span>{s.quality}%</span>
                       </div>
                    </td>
                    <td className="p-6">
                       <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-[8px] uppercase tracking-widest">{s.status}</span>
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

'use client'

import React from 'react'
import { MapPin, Search, MoreVertical, ExternalLink, Globe } from 'lucide-react'

export default function LocationsAdminPage() {
  const locations = [
    { name: 'London', services: 12, leads: 24, quality: 95, status: 'Live' },
    { name: 'Manchester', services: 8, leads: 14, quality: 88, status: 'Live' },
    { name: 'Bristol', services: 6, leads: 8, quality: 92, status: 'Live' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Geo-SEO</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Locations</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Manage and monitor the performance of location-specific SEO pages.</p>
        </div>
      </div>

      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Location</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Services Linked</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Leads</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Quality Score</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="font-mono text-[10px]">
               {locations.map((loc, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group text-white/60">
                    <td className="p-6 text-white uppercase tracking-widest">{loc.name}</td>
                    <td className="p-6 text-white/40">{loc.services} Services</td>
                    <td className="p-6 text-accent">{loc.leads}</td>
                    <td className="p-6">
                       <span className="text-white">{loc.quality}%</span>
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

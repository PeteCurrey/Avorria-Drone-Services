'use client'

import React from 'react'
import { Plane, Search, MoreVertical, Clock, MapPin, CheckCircle2 } from 'lucide-react'

export default function FlightDeskAdminPage() {
  const projects = [
    { id: 'P-9021', client: 'Skyline Construction', service: 'Roof Inspection', status: 'Captured', location: 'London' },
    { id: 'P-9018', client: 'Global Asset Management', service: 'Facade Audit', status: 'Processing', location: 'Manchester' },
    { id: 'P-9015', client: 'Heritage Trust', service: 'Site Survey', status: 'Scheduled', location: 'Bristol' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Execution</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Flight Desk</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Connect project briefs to operational workflows and track capture-to-delivery lifecycle.</p>
        </div>
      </div>

      <div className="bg-accent/5 border border-accent/10 p-8 flex items-start gap-6 mb-12">
         <Clock className="w-6 h-6 text-accent shrink-0" />
         <div>
            <h3 className="font-display text-lg text-white uppercase tracking-widest mb-2">Operational Integration Pending</h3>
            <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
               Full integration with pilot scheduling and capture telemetry is in development. Current records are managed manually within the Command Centre.
            </p>
         </div>
      </div>

      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Project ID / Client</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Service / Location</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Status</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="font-mono text-[10px]">
               {projects.map((p, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group text-white/60">
                    <td className="p-6">
                       <div className="font-display text-sm text-white uppercase tracking-widest mb-1">{p.client}</div>
                       <div className="text-[9px] text-accent/50 uppercase tracking-tighter">{p.id}</div>
                    </td>
                    <td className="p-6">
                       <div className="text-white/80 uppercase mb-1">{p.service}</div>
                       <div className="flex items-center gap-2 text-[8px] text-white/20 uppercase">
                          <MapPin className="w-2 h-2" /> {p.location}
                       </div>
                    </td>
                    <td className="p-6">
                       <span className={`
                         px-3 py-1 text-[8px] tracking-[0.2em] uppercase border
                         ${p.status === 'Captured' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-accent/10 border-accent/30 text-accent'}
                       `}>
                          {p.status}
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

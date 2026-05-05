'use client'

import React, { useState } from 'react'
import { 
  Search, Filter, Download, MoreVertical, 
  ArrowRight, Mail, Phone, MapPin, 
  Clock, Briefcase, Zap, ShieldCheck,
  ChevronRight, Calendar, User, Building2,
  FileText, ExternalLink
} from 'lucide-react'
import { MOCK_LEADS } from '@/lib/admin/mock-data'
import { Lead, LeadStatus } from '@/lib/admin/types'

export default function EnquiriesPage() {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'All'>('All')

  const filteredLeads = filterStatus === 'All' 
    ? MOCK_LEADS 
    : MOCK_LEADS.filter(l => l.status === filterStatus)

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Operations</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Project Briefs</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Manage and monitor all incoming project intelligence.</p>
        </div>
        
        <div className="flex gap-4">
           <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 font-ui text-[10px] tracking-widest uppercase text-white/60 hover:bg-white/10 transition-all">
              <Download className="w-4 h-4" /> Export CSV
           </button>
           <button className="flex items-center gap-3 bg-accent text-dark px-8 py-3 font-ui text-[10px] tracking-widest uppercase font-bold hover:bg-white transition-all">
              Manual Entry
           </button>
        </div>
      </div>

      {/* Control Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 border border-white/5">
         <div className="lg:col-span-6 bg-black p-4 flex items-center gap-4">
            <Search className="w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="SEARCH BY NAME, COMPANY OR LOCATION..."
              className="w-full bg-transparent border-none font-mono text-[10px] tracking-widest text-white focus:outline-none"
            />
         </div>
         <div className="lg:col-span-3 bg-black p-4 border-l border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <Filter className="w-4 h-4 text-white/20" />
               <select 
                 className="bg-transparent border-none font-mono text-[10px] tracking-widest text-white/60 focus:outline-none uppercase"
                 value={filterStatus}
                 onChange={(e) => setFilterStatus(e.target.value as LeadStatus | 'All')}
               >
                  <option value="All">All Statuses</option>
                  <option value="New">New Only</option>
                  <option value="Reviewed">Reviewed</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Won">Won</option>
               </select>
            </div>
         </div>
         <div className="lg:col-span-3 bg-black p-4 border-l border-white/5 flex items-center justify-between">
            <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Active Results</span>
            <span className="font-mono text-[10px] text-accent uppercase">{filteredLeads.length}</span>
         </div>
      </div>

      {/* Table Section */}
      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Lead Details</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Project / Urgency</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Location / Sector</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Score</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Status</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody>
               {filteredLeads.map((lead) => (
                 <tr 
                   key={lead.id} 
                   className="border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group"
                   onClick={() => setSelectedLead(lead)}
                 >
                    <td className="p-6">
                       <div className="font-display text-base text-white tracking-widest uppercase mb-1">{lead.company}</div>
                       <div className="font-ui text-[10px] text-white/40 uppercase tracking-widest">{lead.name}</div>
                    </td>
                    <td className="p-6">
                       <div className="flex items-center gap-3 mb-2">
                          <span className={`w-2 h-2 rounded-full ${lead.urgency === 'High' ? 'bg-red-500' : 'bg-accent'}`} />
                          <div className="font-ui text-[11px] text-white/80 uppercase tracking-widest">{lead.projectType}</div>
                       </div>
                       <div className="font-mono text-[9px] text-white/20 uppercase">{lead.urgency} Priority</div>
                    </td>
                    <td className="p-6">
                       <div className="font-ui text-[10px] text-white/60 uppercase tracking-widest mb-1">{lead.location}</div>
                       <div className="font-mono text-[9px] text-white/20 uppercase">{lead.sector}</div>
                    </td>
                    <td className="p-6">
                       <div className={`font-display text-xl ${lead.leadScore >= 80 ? 'text-orange-400' : 'text-accent'}`}>{lead.leadScore}</div>
                    </td>
                    <td className="p-6">
                       <span className={`
                         px-4 py-1.5 font-ui text-[9px] tracking-widest uppercase border
                         ${lead.status === 'New' ? 'bg-accent/10 border-accent/30 text-accent' : 'bg-white/5 border-white/10 text-white/40'}
                       `}>
                          {lead.status}
                       </span>
                    </td>
                    <td className="p-6 text-right">
                       <button className="p-3 hover:bg-white/5 text-white/20 hover:text-white transition-all">
                          <MoreVertical className="w-4 h-4" />
                       </button>
                    </td>
                 </tr>
               ))}
            </tbody>
         </table>
      </div>

      {/* Detail Drawer Overlay */}
      {selectedLead && (
        <div className="fixed inset-0 z-[100] flex justify-end">
           <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedLead(null)} />
           <div className="relative w-full max-w-2xl bg-black border-l border-white/10 h-full overflow-y-auto custom-scrollbar shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              {/* Drawer Header */}
              <div className="p-10 border-b border-white/5 flex justify-between items-start">
                 <div>
                    <div className="flex items-center gap-4 mb-4">
                       <span className="font-mono text-[9px] text-accent uppercase tracking-widest">Lead Detail / {selectedLead.id}</span>
                       <span className="w-1 h-1 bg-white/20 rounded-full" />
                       <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">{new Date(selectedLead.createdAt).toLocaleDateString()}</span>
                    </div>
                    <h2 className="font-display text-4xl text-white uppercase tracking-widest mb-2">{selectedLead.company}</h2>
                    <p className="font-ui text-xs text-white/40 uppercase tracking-widest">{selectedLead.name} — {selectedLead.projectType}</p>
                 </div>
                 <button 
                   onClick={() => setSelectedLead(null)}
                   className="p-4 hover:bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all"
                 >
                    <X className="w-5 h-5" />
                 </button>
              </div>

              {/* Drawer Content */}
              <div className="p-10 space-y-12">
                 {/* Lead Score & Status */}
                 <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                    <div className="bg-white/[0.02] p-8 text-center">
                       <div className="font-ui text-[9px] text-white/20 uppercase tracking-widest mb-4">Lead Quality Score</div>
                       <div className="font-display text-5xl text-accent">{selectedLead.leadScore}</div>
                       <div className="font-mono text-[8px] text-accent/50 uppercase mt-4 tracking-tighter">High Commercial Intent</div>
                    </div>
                    <div className="bg-white/[0.02] p-8 text-center">
                       <div className="font-ui text-[9px] text-white/20 uppercase tracking-widest mb-4">Uplink Status</div>
                       <div className="font-ui text-xl text-white uppercase tracking-widest mb-4">{selectedLead.status}</div>
                       <button className="font-mono text-[9px] text-accent uppercase tracking-widest hover:underline">Update Status</button>
                    </div>
                 </div>

                 {/* Contact Details */}
                 <section className="space-y-6">
                    <h3 className="font-display text-xl text-white uppercase tracking-widest border-b border-white/5 pb-4">Contact Intelligence</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="flex items-center gap-4 text-white/60">
                          <Mail className="w-4 h-4 text-accent/40" />
                          <span className="font-mono text-xs">{selectedLead.email}</span>
                       </div>
                       <div className="flex items-center gap-4 text-white/60">
                          <Phone className="w-4 h-4 text-accent/40" />
                          <span className="font-mono text-xs">{selectedLead.phone}</span>
                       </div>
                       <div className="flex items-center gap-4 text-white/60">
                          <MapPin className="w-4 h-4 text-accent/40" />
                          <span className="font-ui text-[10px] tracking-widest uppercase">{selectedLead.location}</span>
                       </div>
                       <div className="flex items-center gap-4 text-white/60">
                          <Building2 className="w-4 h-4 text-accent/40" />
                          <span className="font-ui text-[10px] tracking-widest uppercase">{selectedLead.sector}</span>
                       </div>
                    </div>
                 </section>

                 {/* Project Scope */}
                 <section className="space-y-6">
                    <h3 className="font-display text-xl text-white uppercase tracking-widest border-b border-white/5 pb-4">Project Architecture</h3>
                    <div className="space-y-4 bg-white/[0.02] border border-white/5 p-8">
                       <div>
                          <div className="font-ui text-[9px] text-white/20 uppercase tracking-widest mb-2">Requirement</div>
                          <p className="font-body text-sm text-white/80 leading-relaxed uppercase tracking-widest">
                             {selectedLead.details || "Full building envelope inspection required for a 12-storey commercial office block. Focus on facade condition, glazing seals and roof plant."}
                          </p>
                       </div>
                       <div className="grid grid-cols-2 gap-8 pt-8">
                          <div>
                             <div className="font-ui text-[9px] text-white/20 uppercase tracking-widest mb-2">Budget Range</div>
                             <div className="font-display text-lg text-white">{selectedLead.budget || "TBC"}</div>
                          </div>
                          <div>
                             <div className="font-ui text-[9px] text-white/20 uppercase tracking-widest mb-2">Urgency</div>
                             <div className={`font-ui text-lg uppercase tracking-widest ${selectedLead.urgency === 'High' ? 'text-red-500' : 'text-accent'}`}>{selectedLead.urgency}</div>
                          </div>
                       </div>
                    </div>
                 </section>

                 {/* Actions */}
                 <div className="pt-10 flex gap-4">
                    <button className="flex-1 bg-accent text-dark px-8 py-5 font-display text-xl tracking-widest uppercase font-bold hover:bg-white transition-all">
                       Initialize Quote
                    </button>
                    <button className="bg-white/5 border border-white/10 text-white/40 px-8 py-5 font-display text-xl tracking-widest uppercase hover:bg-white hover:text-dark transition-all">
                       Contact
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  )
}

function X({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

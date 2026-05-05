'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronLeft, 
  Search, 
  Filter, 
  Download, 
  Globe, 
  MousePointer2, 
  Mail, 
  Share2, 
  ArrowUpRight,
  Target
} from 'lucide-react'
import Link from 'next/link'

const SOURCE_DATA = [
  { source: 'google', medium: 'organic', sessions: 2450, briefs: 42, conversions: 12, rate: '2.20%', score: 78, quality: 'High' },
  { source: 'direct', medium: 'none', sessions: 1120, briefs: 28, conversions: 8, rate: '3.21%', score: 65, quality: 'Medium' },
  { source: 'google', medium: 'cpc', sessions: 840, briefs: 18, conversions: 4, rate: '2.62%', score: 82, quality: 'High' },
  { source: 'linkedin', medium: 'social', sessions: 620, briefs: 6, conversions: 2, rate: '1.29%', score: 54, quality: 'Medium' },
  { source: 'bing', medium: 'organic', sessions: 210, briefs: 4, conversions: 1, rate: '2.38%', score: 68, quality: 'Medium' },
  { source: 'newsletter', medium: 'email', sessions: 180, briefs: 12, conversions: 6, rate: '10.00%', score: 85, quality: 'High' },
]

export default function SourcePerformancePage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-12">
      {/* Breadcrumbs */}
      <Link href="/admin/analytics" className="flex items-center gap-2 font-ui text-[9px] tracking-widest uppercase text-white/30 hover:text-white mb-8">
         <ChevronLeft className="w-3 h-3" /> Back to Intelligence Overview
      </Link>

      <header className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Commercial Traffic</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none">
            Source <span className="text-accent">Performance</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20" />
             <input 
               type="text"
               placeholder="FILTER SOURCES..."
               className="bg-white/5 border border-white/10 pl-10 pr-4 py-3 font-ui text-[10px] tracking-widest text-white uppercase focus:outline-none focus:border-accent/50 w-full"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 font-ui text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors text-white/40">
            <Filter className="w-3 h-3" /> Filter
          </button>
        </div>
      </header>

      {/* Source Table */}
      <div className="bg-mid border border-white/5 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Source / Medium</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Sessions</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Brief Starts</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Submissions</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Conv. Rate</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Avg Lead Score</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Quality</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {SOURCE_DATA.map((item, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                     {item.medium === 'organic' && <Globe className="w-4 h-4 text-accent/30" />}
                     {item.medium === 'cpc' && <MousePointer2 className="w-4 h-4 text-blue-400/30" />}
                     {item.medium === 'social' && <Share2 className="w-4 h-4 text-purple-400/30" />}
                     {item.medium === 'email' && <Mail className="w-4 h-4 text-green-400/30" />}
                     {item.medium === 'none' && <Target className="w-4 h-4 text-white/20" />}
                     <div>
                        <div className="font-display text-lg text-white uppercase tracking-widest">{item.source}</div>
                        <div className="font-ui text-[9px] text-white/20 uppercase tracking-widest">{item.medium}</div>
                     </div>
                  </div>
                </td>
                <td className="p-6 text-center font-display text-xl text-white/60">{item.sessions}</td>
                <td className="p-6 text-center font-display text-xl text-white/60">{item.briefs}</td>
                <td className="p-6 text-center font-display text-xl text-white">{item.conversions}</td>
                <td className="p-6 text-center">
                  <div className="font-display text-xl text-accent">{item.rate}</div>
                </td>
                <td className="p-6 text-center font-display text-xl text-white/60">{item.score}</td>
                <td className="p-6 text-center">
                  <span className={`px-4 py-1 border font-ui text-[9px] tracking-widest uppercase rounded-full ${item.quality === 'High' ? 'text-accent border-accent/20 bg-accent/5' : 'text-white/30 border-white/10 bg-white/5'}`}>
                    {item.quality}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Attribution Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="bg-mid border border-white/5 p-10 space-y-6">
            <h4 className="font-display text-xl text-white uppercase tracking-widest">UTM Campaign Analysis</h4>
            <div className="space-y-4">
               {[
                 { name: 'spring_outreach_2026', leads: 18, hot: 6 },
                 { name: 'construction_q2_promo', leads: 12, hot: 5 },
                 { name: 'fm_roof_audit_checklist', leads: 9, hot: 2 }
               ].map(c => (
                 <div key={c.name} className="p-4 bg-dark/40 border border-white/5 flex justify-between items-center">
                    <span className="font-ui text-[9px] tracking-widest uppercase text-white/60">{c.name}</span>
                    <div className="text-right">
                       <span className="font-display text-lg text-white">{c.leads} Leads</span>
                       <div className="font-ui text-[8px] text-accent/50 uppercase tracking-widest">{c.hot} Hot</div>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="lg:col-span-2 bg-accent/5 border border-accent/10 p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
               <ArrowUpRight className="w-24 h-24" />
            </div>
            <h4 className="font-display text-2xl text-white uppercase tracking-widest mb-6">Traffic Quality Index</h4>
            <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed mb-8 max-w-2xl">
               Direct traffic and Email outreach currently produce the highest quality leads with an average score of 72. Organic search is driving volume (42 leads) but requires better qualification on the landing pages to improve the average score of 58.
            </p>
            <div className="flex gap-8">
               <div>
                  <div className="font-ui text-[9px] tracking-widest text-white/20 uppercase mb-2">Top Value Source</div>
                  <div className="font-display text-3xl text-accent">EMAIL / OUTREACH</div>
               </div>
               <div>
                  <div className="font-ui text-[9px] tracking-widest text-white/20 uppercase mb-2">Top Volume Source</div>
                  <div className="font-display text-3xl text-white">GOOGLE / ORGANIC</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

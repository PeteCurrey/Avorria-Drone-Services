'use client'

import React from 'react'
import { 
  Target, TrendingUp, Search, Filter, 
  Download, Plus, MoreVertical, ExternalLink,
  Zap, AlertCircle, BarChart3, Globe,
  ArrowUpRight, LayoutGrid, List
} from 'lucide-react'
import { MOCK_SEO_PAGES } from '@/lib/admin/mock-data'

export default function SeoLandingPagesPage() {
  const stats = [
    { label: 'Published Pages', value: MOCK_SEO_PAGES.filter(p => p.status === 'Published').length, icon: Globe, color: 'text-green-500' },
    { label: 'Avg Quality Score', value: '88%', icon: Zap, color: 'text-accent' },
    { label: 'Pending Review', value: MOCK_SEO_PAGES.filter(p => p.status === 'Review').length + 4, icon: Clock, color: 'text-orange-400' },
    { label: 'Noindex Pages', value: MOCK_SEO_PAGES.filter(p => p.status === 'Noindex').length, icon: AlertCircle, color: 'text-white/20' },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Content Engine</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">SEO Landing Pages</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Manage and scale the programmatic landing page engine with surgical precision.</p>
        </div>
        
        <div className="flex gap-4">
           <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 font-ui text-[10px] tracking-widest uppercase text-white/60 hover:bg-white/10 transition-all">
              Audit All Pages
           </button>
           <button className="flex items-center gap-3 bg-accent text-dark px-8 py-3 font-ui text-[10px] tracking-widest uppercase font-bold hover:bg-white transition-all">
              <Plus className="w-4 h-4" /> Generate Pages
           </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/5 p-8 group hover:border-accent/40 transition-all">
            <div className="flex justify-between items-start mb-6">
               <div className={`p-3 bg-white/5 border border-white/10 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
               </div>
               <ArrowUpRight className="w-3 h-3 text-white/10 group-hover:text-accent transition-colors" />
            </div>
            <div className="font-display text-4xl text-white mb-2 tracking-widest">{stat.value}</div>
            <div className="font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Control Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 border border-white/5">
         <div className="lg:col-span-6 bg-black p-4 flex items-center gap-4">
            <Search className="w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="FILTER BY KEYWORD, LOCATION OR SECTOR..."
              className="w-full bg-transparent border-none font-mono text-[10px] tracking-widest text-white focus:outline-none"
            />
         </div>
         <div className="lg:col-span-3 bg-black p-4 border-l border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white/40">
               <Filter className="w-4 h-4" />
               <span className="font-mono text-[10px] tracking-widest uppercase">Filter: Published</span>
            </div>
         </div>
         <div className="lg:col-span-3 bg-black p-4 border-l border-white/5 flex items-center justify-between text-white/40">
            <div className="flex items-center gap-4">
               <button className="p-2 bg-accent/10 text-accent"><List className="w-4 h-4" /></button>
               <button className="p-2 hover:bg-white/5"><LayoutGrid className="w-4 h-4" /></button>
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase">Total: {MOCK_SEO_PAGES.length}</span>
         </div>
      </div>

      {/* Table Section */}
      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Target Keyword / Title</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">URL Structure</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Performance</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Quality Score</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Status</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="font-mono text-[10px]">
               {MOCK_SEO_PAGES.map((page) => (
                 <tr key={page.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group text-white/60">
                    <td className="p-6">
                       <div className="font-display text-sm text-white uppercase tracking-widest mb-1">{page.title}</div>
                       <div className="text-[9px] text-white/20 uppercase tracking-tighter">Updated: {new Date(page.lastUpdated).toLocaleDateString()}</div>
                    </td>
                    <td className="p-6">
                       <div className="flex items-center gap-2">
                          <span className="text-white/30 truncate max-w-[200px]">{page.url}</span>
                          <ExternalLink className="w-3 h-3 text-accent/40" />
                       </div>
                    </td>
                    <td className="p-6">
                       <div className="grid grid-cols-2 gap-x-4 gap-y-2 max-w-[150px]">
                          <span className="text-white/20 uppercase">IMPS</span>
                          <span className="text-white text-right">{page.impressions.toLocaleString()}</span>
                          <span className="text-white/20 uppercase">LEADS</span>
                          <span className="text-accent text-right">{page.leadsGenerated}</span>
                       </div>
                    </td>
                    <td className="p-6">
                       <div className="flex items-center gap-4">
                          <div className="h-1.5 w-16 bg-white/5 overflow-hidden">
                             <div 
                               className={`h-full ${page.qualityScore > 80 ? 'bg-green-500' : page.qualityScore > 60 ? 'bg-accent' : 'bg-orange-500'} transition-all`} 
                               style={{ width: `${page.qualityScore}%` }} 
                             />
                          </div>
                          <span className={page.qualityScore > 80 ? 'text-green-500' : page.qualityScore > 60 ? 'text-accent' : 'text-orange-500'}>
                             {page.qualityScore}%
                          </span>
                       </div>
                    </td>
                    <td className="p-6">
                       <span className={`
                         px-3 py-1 text-[8px] tracking-[0.2em] uppercase border
                         ${page.status === 'Published' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-orange-500/10 border-orange-500/20 text-orange-500'}
                       `}>
                          {page.status}
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

      {/* SEO Rollsout & Gen Section */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-12 pt-12 border-t border-white/5">
         <div className="bg-white/[0.02] border border-white/5 p-10 space-y-8">
            <div className="flex items-center gap-4">
               <Zap className="w-5 h-5 text-accent" />
               <h2 className="font-display text-xl text-white uppercase tracking-widest">Rollout Control</h2>
            </div>
            <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
               The programmatic engine is configured to generate drafts for review. One-click publishing is disabled by default for quality assurance.
            </p>
            <div className="space-y-4">
               {[
                 { label: 'London Construction Suite', count: 12, status: 'Drafting' },
                 { label: 'Manchester FM Pack', count: 8, status: 'Reviewing' },
                 { label: 'UK Infrastructure Hubs', count: 45, status: 'Queued' },
               ].map((rollout, i) => (
                 <div key={i} className="flex items-center justify-between p-6 bg-black border border-white/5">
                    <div>
                       <div className="font-ui text-[11px] text-white tracking-widest uppercase mb-1">{rollout.label}</div>
                       <div className="font-mono text-[9px] text-white/20 uppercase">{rollout.count} Landing Pages</div>
                    </div>
                    <span className="font-mono text-[9px] text-accent uppercase tracking-widest">{rollout.status}</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-blue-500/[0.02] border border-blue-500/10 p-10 space-y-8 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mb-4">
               <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="font-display text-2xl text-white uppercase tracking-widest">Growth Opportunity</h2>
            <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed max-w-sm">
               Detected 14 high-volume keywords in the North West with zero landing page coverage.
            </p>
            <button className="bg-blue-500 text-white px-10 py-4 font-ui text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-white hover:text-dark transition-all">
               Generate Coverage Plan
            </button>
         </div>
      </section>
    </div>
  )
}

function Clock({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

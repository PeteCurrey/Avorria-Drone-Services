'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Activity, BarChart3, Database, FileText, Filter, 
  Search, Settings, Target, Layers, PlusCircle, AlertCircle
} from 'lucide-react'
import { mockSeoPages } from '@/lib/seo-registry-mock'

export default function SeoAdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('')

  const publishedPages = mockSeoPages.filter(p => p.status === 'Published')
  const draftPages = mockSeoPages.filter(p => p.status === 'Draft')
  const totalImpressions = mockSeoPages.reduce((acc, p) => acc + p.analytics.impressions, 0)
  const totalClicks = mockSeoPages.reduce((acc, p) => acc + p.analytics.clicks, 0)
  const totalConversions = mockSeoPages.reduce((acc, p) => acc + p.analytics.conversions, 0)
  const avgCtr = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0
  const avgConvRate = totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0

  const filteredPages = mockSeoPages.filter(p => 
    p.seoTitle.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.fullUrl.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-4xl text-white uppercase tracking-widest mb-2">SEO Engine</h1>
          <p className="font-ui text-[11px] text-white/40 tracking-[0.2em] uppercase">Programmatic Landing Page Infrastructure</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin/seo/opportunities" className="px-6 py-3 border border-white/10 font-ui text-[10px] tracking-widest text-white/60 uppercase hover:bg-white/5 hover:text-white transition-all flex items-center gap-2">
            <AlertCircle className="w-3 h-3" /> Opportunities
          </Link>
          <Link href="/admin/seo/generator" className="px-6 py-3 bg-accent text-dark font-ui text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all flex items-center gap-2">
            <PlusCircle className="w-3 h-3" /> Page Generator
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {[
          { title: 'Total Pages', value: mockSeoPages.length, sub: `${publishedPages.length} Published`, icon: Layers },
          { title: 'Draft / Noindex', value: draftPages.length, sub: 'Awaiting review', icon: FileText },
          { title: 'Impressions', value: totalImpressions.toLocaleString(), sub: 'Last 28 days', icon: BarChart3 },
          { title: 'Avg. CTR', value: `${avgCtr.toFixed(1)}%`, sub: 'Search performance', icon: Activity },
          { title: 'Conversions', value: totalConversions, sub: `${avgConvRate.toFixed(1)}% Rate`, icon: Target }
        ].map((stat, i) => (
          <div key={i} className="p-6 border border-white/5 bg-white/[0.01]">
            <div className="flex items-center justify-between mb-4">
               <stat.icon className="w-5 h-5 text-accent/50" />
            </div>
            <div className="font-display text-4xl text-white mb-2">{stat.value}</div>
            <div className="font-ui text-[9px] tracking-widest uppercase text-white/30 flex justify-between">
               {stat.title} <span className="text-accent/50">{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="border border-white/5 bg-black">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
           <div className="flex items-center gap-4">
             <Database className="w-4 h-4 text-accent/50" />
             <h2 className="font-display text-xl text-white uppercase tracking-widest">Page Registry</h2>
           </div>
           <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 text-white/20 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="SEARCH PAGES..." 
                  className="bg-white/5 border border-white/10 pl-10 pr-4 py-2 font-ui text-[10px] tracking-widest text-white uppercase w-64 focus:outline-none focus:border-accent/50"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="p-2 border border-white/10 hover:bg-white/5 transition-all text-white/40">
                <Filter className="w-4 h-4" />
              </button>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 font-ui text-[9px] tracking-[0.2em] uppercase text-white/30">
                <th className="p-6 font-normal">Page & Route</th>
                <th className="p-6 font-normal">Type</th>
                <th className="p-6 font-normal">Status</th>
                <th className="p-6 font-normal">Quality</th>
                <th className="p-6 font-normal text-right">Impressions</th>
                <th className="p-6 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredPages.map(page => (
                <tr key={page.pageId} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6">
                    <div className="font-display text-sm text-white mb-1 uppercase tracking-wider">{page.seoTitle}</div>
                    <div className="font-mono text-[9px] text-white/30 truncate max-w-sm">{page.fullUrl}</div>
                  </td>
                  <td className="p-6 font-mono text-[10px] text-white/40 uppercase">{page.pageType.replace(/_/g, ' ')}</td>
                  <td className="p-6">
                    <span className={`px-2 py-1 font-ui text-[9px] tracking-widest uppercase border ${
                      page.status === 'Published' ? 'border-green-500/30 text-green-500' :
                      page.status === 'Draft' ? 'border-yellow-500/30 text-yellow-500' :
                      'border-white/20 text-white/40'
                    }`}>
                      {page.status}
                    </span>
                  </td>
                  <td className="p-6">
                     <div className="flex items-center gap-2">
                       <div className="flex-1 h-1 bg-white/10 w-16">
                         <div 
                           className={`h-full ${page.quality.qualityScore >= 80 ? 'bg-green-500' : page.quality.qualityScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                           style={{ width: `${page.quality.qualityScore}%` }}
                         />
                       </div>
                       <span className="font-mono text-[9px] text-white/50">{page.quality.qualityScore}</span>
                     </div>
                  </td>
                  <td className="p-6 text-right font-mono text-[10px] text-white/60">
                    {page.analytics.impressions.toLocaleString()}
                  </td>
                  <td className="p-6 text-right space-x-4">
                     <button className="font-ui text-[9px] tracking-widest text-accent hover:text-white uppercase transition-colors">Edit</button>
                     <Link href={page.fullUrl} target="_blank" className="font-ui text-[9px] tracking-widest text-white/30 hover:text-white uppercase transition-colors">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredPages.length === 0 && (
            <div className="p-12 text-center text-white/30 font-ui text-[11px] tracking-widest uppercase">
              No pages match the search criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronLeft, 
  Search, 
  Filter, 
  Download, 
  ExternalLink,
  Eye,
  MousePointer2,
  Target,
  Clock,
  FileText
} from 'lucide-react'
import Link from 'next/link'

const PAGE_DATA = [
  { url: '/drone-roof-inspections-london', type: 'SEO', service: 'Roof Inspections', views: 1240, clicks: 145, briefs: 12, rate: '8.27%', score: 82 },
  { url: '/services/drone-inspection', type: 'Service', service: 'Drone Inspection', views: 2850, clicks: 210, briefs: 18, rate: '8.57%', score: 64 },
  { url: '/drone-roof-inspections-sheffield', type: 'SEO', service: 'Roof Inspections', views: 840, clicks: 92, briefs: 24, rate: '26.08%', score: 88 },
  { url: '/locations/manchester', type: 'Location', service: 'All', views: 920, clicks: 84, briefs: 9, rate: '10.71%', score: 72 },
  { url: '/sectors/facilities-management', type: 'Sector', service: 'All', views: 1150, clicks: 124, briefs: 14, rate: '11.29%', score: 76 },
  { url: '/resources/downloads/roof-inspection-checklist', type: 'Lead Magnet', service: 'Roof Inspections', views: 620, clicks: 310, briefs: 8, rate: '2.58%', score: 68 },
]

export default function PagePerformancePage() {
  const [activeType, setActiveType] = useState('All')

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
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Conversion Points</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none">
            Page <span className="text-accent">Performance</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 border border-white/10 p-1 bg-white/5">
             {['All', 'SEO', 'Service', 'Location', 'Lead Magnet'].map(t => (
               <button
                 key={t}
                 onClick={() => setActiveType(t)}
                 className={`px-4 py-2 font-ui text-[9px] tracking-widest uppercase transition-all ${activeType === t ? 'bg-accent text-dark' : 'text-white/40 hover:text-white'}`}
               >
                 {t}
               </button>
             ))}
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 font-ui text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors text-white/40">
            <Download className="w-3 h-3" /> CSV
          </button>
        </div>
      </header>

      {/* Page Table */}
      <div className="bg-mid border border-white/5 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Page URL</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Type / Service</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Views</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">CTA Clicks</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Briefs</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">CTR %</th>
              <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Avg Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {PAGE_DATA.filter(p => activeType === 'All' || p.type === activeType).map((item, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                     <div className="p-2 bg-white/5 border border-white/10 group-hover:border-accent/40 transition-colors">
                        <FileText className="w-4 h-4 text-white/40 group-hover:text-accent" />
                     </div>
                     <div>
                        <div className="font-ui text-[11px] tracking-widest text-white uppercase group-hover:text-accent transition-colors truncate max-w-[320px]">{item.url}</div>
                        <div className="flex items-center gap-2 mt-1">
                           <Link href={item.url} target="_blank" className="font-ui text-[8px] text-white/20 uppercase tracking-widest hover:text-white flex items-center gap-1">
                              View Page <ExternalLink className="w-2 h-2" />
                           </Link>
                        </div>
                     </div>
                  </div>
                </td>
                <td className="p-6">
                   <div className="font-ui text-[10px] tracking-widest text-white/60 uppercase">{item.type}</div>
                   <div className="font-ui text-[9px] text-white/20 uppercase tracking-widest">{item.service}</div>
                </td>
                <td className="p-6 text-center font-display text-xl text-white/40">{item.views}</td>
                <td className="p-6 text-center font-display text-xl text-white/40">{item.clicks}</td>
                <td className="p-6 text-center font-display text-xl text-white">{item.briefs}</td>
                <td className="p-6 text-center">
                   <div className="font-display text-xl text-accent">{item.rate}</div>
                </td>
                <td className="p-6 text-center font-display text-xl text-white/60">{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Assisted Conversions Insight */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-mid border border-white/5 p-12">
            <h4 className="font-display text-xl text-white uppercase tracking-widest mb-8">Assisted Conversions</h4>
            <div className="space-y-8">
               {[
                 { page: '/sample-deliverables', assist: 56, type: 'Library' },
                 { page: '/cost-estimator', assist: 42, type: 'Tool' },
                 { page: '/project-brief-assistant', assist: 38, type: 'Tool' },
                 { page: '/resources/downloads/buying-guide', assist: 24, type: 'Lead Magnet' }
               ].map(a => (
                 <div key={a.page} className="flex items-center justify-between">
                    <div>
                       <div className="font-ui text-[10px] tracking-widest uppercase text-white/60 mb-1">{a.page}</div>
                       <div className="font-ui text-[8px] text-white/20 tracking-widest uppercase">{a.type}</div>
                    </div>
                    <div className="text-right">
                       <div className="font-display text-2xl text-white">{a.assist}</div>
                       <div className="font-ui text-[8px] text-accent/50 tracking-widest uppercase">Assists</div>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-accent/5 border border-accent/10 p-12 flex flex-col justify-center">
            <h4 className="font-display text-2xl text-white uppercase tracking-widest mb-6 leading-tight">THE SHEFFIELD ANOMALY</h4>
            <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-relaxed mb-8">
               The Sheffield SEO landing page is converting at 26%, more than triple the site average. This page has a custom CTA linking directly to the &quot;Roof Intelligence Pack&quot; sample report before the brief form.
            </p>
            <div className="p-6 bg-dark/40 border border-white/10">
               <div className="font-ui text-[9px] tracking-widest text-accent uppercase mb-2">Recommended Action</div>
               <p className="font-ui text-[10px] tracking-widest uppercase text-white/60">Apply the &quot;Sample Report First&quot; journey pattern to the London and Manchester SEO landing pages.</p>
            </div>
         </div>
      </div>
    </div>
  )
}
